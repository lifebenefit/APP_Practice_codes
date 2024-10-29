const jwt = require('jsonwebtoken')
const HttpError = require("../models/http-error");
const { TOKEN_PRIVATE_KEY } = require("../config");

module.exports = (req, res, next) => {
  log.notice(req);
  if (req.method === 'OPTIONS'){
    return next();
  }
  try{
    log.debug(req.headers);
    const token = req.headers.authorization.split(' ')[1]; 
    // Authorization: 'Bearer TOKEN' <- [0] = Bearer , [1] = TOKEN
    // headers 는 대소문자 구분 X , Author === author

    if(!token){
      return ( new HttpError(
        "Authentication filed! [ TOKEN 정보 없음 ]", 401)
      );
    }

    const decodedToken =  jwt.verify(token, TOKEN_PRIVATE_KEY);
    req.userData = {userId: decodedToken.userId};
    next();

  } catch (err){
    return ( new HttpError(
      "Authentication filed! [ authorization 프로퍼티 없음 ]", 401)
    );
  }
}