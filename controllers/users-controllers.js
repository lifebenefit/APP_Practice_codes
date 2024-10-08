const { validationResult } = require('express-validator');
const { v4: uuidV4 } = require('uuid');

const HttpError = require('../models/http-error');
const User = require('../models/user');

let DUMMY_USERS = [
  {
    id: 'p1',
    name: "kang",
    email: "kang1994@naver.com",
    password: 'kangkang'
  }
];

const getUsers = (req, res, next) => {
  // res.status(200);
  // res.json({ users: DUMMY_USERS })
  res.status(200).json({ users: DUMMY_USERS });
};

const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    res.status(422);
    return next(
      new HttpError('Invalid Input ..., signup Fail', 422)
    );
  }

  const { name, email, password, places } = req.body;


  let existingUser;
  try {
    existingUser = await User.findOne({ email: email })
  } catch (err) {
    return next(new HttpError(
      'Signing up failed, please try again later.', 500
    ));
  }

  if (existingUser) {
    return next(new HttpError(
      "User exit already, lease login instead.", 422
    ));
  }

  const createdUser = new User({
    name: name,
    email: email,
    password: password,
    image: "https://nstatic.dcinside.com/ad/2024/banner/240926_WutheringWaves_main_800700.jpg",
    places: places,
  });

  try {
    await createdUser.save();
    console.log(`ID 생성 성공 >>\n ${createdUser}`)
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

  if (!existingUser){
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

  res.json({ message: 'Logged in' });
};

// module.exports ??여러개는 어떻게?
exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;