const { validationResult } = require('express-validator');
// const { v4: uuidV4 } = require('uuid');
// const { v1: uuidv1 } = require('uuid');
// const { v4: uuidv4 } = require('uuid');

const HttpError = require('../models/http-error');
const User = require('../models/user');
const log = require('../util/logger');

const getUsers = async (req, res, next) => {
  // const users = User.find({}, 'email name')
  let users;
  try {
    users = await User.find({}, "-password");
    log.debug(users);
  } catch (err) {
    return next(new HttpError(
      'DB 조회 실패 [ find({}, "-password") ]', 500
    ));
  }
  res.json({ users: users.map(user => user.toObject({ getters: true })) });
};

const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    log.error(errors);
    res.status(422);
    return next(
      new HttpError('사용자 입력값 유효하지 않음\n 비밀번호 6글자 이상', 422)
    );
  }

  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email })
  } catch (err) {
    return next(new HttpError(
      'DB 조회 실패 [ findOne({ email: email }) ]', 500
    ));
  }

  if (existingUser) {
    log.error(existingUser);
    return next(new HttpError(
      "이미 있는 ID 에 중복가입 에러", 421
    ));
  }

  const createdUser = new User({
    name: name,
    email: email,
    password: password,
    image: "https://nstatic.dcinside.com/ad/2024/banner/240926_WutheringWaves_main_800700.jpg",
    places: [],
  });

  try {
    await createdUser.save();
    log.debug(`signup 회원가입 완료 >>\n ${createdUser}`)
  } catch (err) {
    return next(new HttpError(
      'Sighing Up failed, please try again', 500
    ))
  }

  res.status(201).json({ user: createdUser.toObject({ getters: true }) });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email })
    //# DB 상에 해당 Email 이 없으면 existingUser 이 null 값
  } catch (err) {
    return next(new HttpError(
      'Logging up failed, please try again later.', 500
    ));
  }

  if (!existingUser) {
    return next(new HttpError(
      "Email 이 등록되어 있지 않음", 401
    ));
  } else if (existingUser.password !== password) {
    return next(new HttpError(
      "password 가 틀림", 401
    ));
  }
  // if (!existingUser || existingUser.password !== password){
  //   return next(new HttpError(
  //     "Invalid credential, could not log you in", 401
  //   ));
  // }

  res.json({ 
    message: 'Logged in' ,
    user: existingUser.toObject({getters:true})
  });
};

// module.exports ??여러개는 어떻게?
exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;