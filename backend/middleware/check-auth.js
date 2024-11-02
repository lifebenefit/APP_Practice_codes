const jwt = require('jsonwebtoken')
const HttpError = require("../models/http-error");
const { checkProps, log } = require("../util/codeHelperUtils");


module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS'){
    return next();
  }
  try{
    checkProps(req.headers, [ 'authorization' ])
    const token = req.headers.authorization.split(' ')[1]; 
    // Authorization: 'Bearer TOKEN' <- [0] = Bearer , [1] = TOKEN
    // headers 는 대소문자 구분 X , Author === author

    if(!token){
      return next( new HttpError(
        "Authentication filed! [ TOKEN 정보 없음 ]", 400)
      );
    }

    const decodedToken =  jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    req.userData = {userId: decodedToken.userId};
    next();

  } catch (err){
    return next( new HttpError(
      "Authentication filed! [ jwt TOKEN 생성 실패 ]", 403)
    );
  }
}