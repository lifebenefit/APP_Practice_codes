const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const HttpError = require('../models/http-error');
const User = require('../models/user');
const log = require('../util/logger');

const getUsers = async (req, res, next) => {
  // const users = User.find({}, 'email name')
  let users;
  try {
    users = await User.find({}, "-password");
    // log.debug(users);
  } catch (err) {
    return next(new HttpError(
      'DB 조회 실패 [ find({}, "-password") ]', 500
    ));
  }
  res.json({ users: users.map(user => user.toObject({ getters: true })) });
};

const signup = async (req, res, next) => {

  /** users-routes.js 에서 검사한 Name email password 의 밸리데이션 체크*/
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    log.error(errors);
    res.status(422);
    return next(
      new HttpError('사용자 입력값 유효하지 않음\n 비밀번호 6글자 이상', 422)
    );
  }

  const { name, email, password } = req.body;

  /** 이미 존재 하는 Email 인지 체크 */
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email })
    //# DB 상에 해당 Email 이 없으면 existingUser 이 null 값

    /** 일치하는 Email이 없는 경우 */
    if (existingUser) {
      log.error(existingUser);
      return next(new HttpError(
        "이미 있는 ID 에 중복가입 에러", 409
      ));
    }
  } catch (err) {
    return next(new HttpError(
      'DB 조회 실패 [ 서버 에러 : DB query ]', 500
    ));
  }

  /** 가입하려는 password 암호화 */
  let hashedPassword
  try {
    log.notice(`password : ${password}`);
    hashedPassword = await bcrypt.hash(password, 12);
    log.notice(hashedPassword);
  } catch (err) {
    return next(new HttpError(
      '비밀번호 생성 에러 [ 서버 에러 : 암호화 에러 ]', 500
    ));
  }

  const createdUser = new User({
    name: name,
    email: email,
    password: hashedPassword,
    image: req.file.path,
    places: [],
  });

  /** 회원 정보 DB Create*/
  try {
    await createdUser.save();
    log.debug(`signup 회원가입 완료 >>\n ${createdUser}`)
  } catch (err) {
    return next(new HttpError(
      'Sighing Up failed, please try again', 500
    ))
  }

  /** JWT 토큰 발행 */
  let token;
  try {
    const oneHour = 1000 * 60 * 60;
    token = jwt.sign(
      {
        userId: createdUser.id,
        email: createdUser.email,
        expireTime: oneHour
      },
      process.env.JWT_PRIVATE_KEY,
      { expiresIn: oneHour }
    );
  } catch (err) {
    return next(new HttpError(
      '토큰 생성 에러 [ 서버 에러 : 토큰 에러 ]', 500
    ));
  }

  /** Client Response */
  // res.status(201).json({ user: createdUser.toObject({ getters: true }) });
  res
    .status(201)
    .json({
      userId: createdUser.id,
      email: createdUser.email,
      token: token
    });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  /** DB 찾기 에러 */
  try {
    existingUser = await User.findOne({ email: email })
    //# DB 상에 해당 Email 이 없으면 existingUser 이 null 값

    /** 일치하는 Email이 없는 경우 */
    if (!existingUser) {
      return next(new HttpError(
        "Email 이 존재하지 않습니다.", 404
      ));
    }
  } catch (err) {
    return next(new HttpError(
      '로그인 할 수 없습니다. [ 서버 에러 : DB query ] ', 500
    ));
  }

  /** DB에 있는 암호화된 Password를 복호화 하지 못함 */
  let isValidPassword
  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password)
    // 비밀번호가 다르면 false, 같으면 true

    /** 일치하는 비밀번호가 없는 경우 */
    if (!isValidPassword) {
      return next(new HttpError(
        "password 가 틀립니다.", 403
      ));
    }
  } catch (err) {
    return next(new HttpError(
      "로그인 할 수 없습니다. [ 서버 에러 : 복호화 ] ", 500
    ));
  }

  /** JWT 토큰 발행 */
  let token;
  try {
    const oneHour = 1000 * 60 * 60;
    token = jwt.sign(
      {
        userId: existingUser.id,
        email: existingUser.email,
        expireTime: oneHour
      },
      process.env.JWT_PRIVATE_KEY,
      { expiresIn: oneHour }
    );
  } catch (err) {
    log.error(err);
    return next(new HttpError(
      '토큰 생성 에러 [ 서버 에러 : 토큰 에러 ]', 500
    ));
  }

  /** Client Response */
  // res.json({
  //   message: 'Logged in',
  //   user: existingUser.toObject({ getters: true })
  // });
  res.json({
    userId: existingUser.id,
    email: existingUser.email,
    token: token
  });
};

// module.exports ??여러개는 어떻게?
exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;