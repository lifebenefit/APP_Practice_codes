const HttpError = require('../models/http-error');

const { validationResult } = require('express-validator');
const { v4: uuidV4 } = require('uuid');

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

const signup = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()){
    console.log(errors);
    res.status(422);
    throw new HttpError('Invalid Input ..., signup Fail');
  }

  const { name, email, password } = req.body

  const hasUser = DUMMY_USERS.find(u => u.email === email);
  if (hasUser){
    throw new HttpError('User create Fail, already exists', 422);
    // 입력값이 Invalid 할 때 422
  }

  const createdUser = {
    id: uuidV4(),
    name,  // name === name : name
    email,
    password
  };

  DUMMY_USERS.push(createdUser);

  res.status(201).json({ user: createdUser });
};

const login = (req, res, next) => {
  const { email, password } = req.body;
  const identifiedUser = DUMMY_USERS.find(u => u.email === email);
  if (!identifiedUser || identifiedUser.password !== password) {
    throw new HttpError('User ID or PW 틀림', 401)
  }

  res.json({ message: 'Logged in' });
};

// module.exports ??여러개는 어떻게?
exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;