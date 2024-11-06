const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const placesRoutes = require('./routes/places-routes');
const usersRoutes = require('./routes/users-routes');
const HttpError = require('./models/http-error');
const log = require("./util/logger");

const app = express();

// app.use(bodyParser.urlencoded());  // Form Data 전용 : HTML 폼 ( ex) name=John&age=30 )
// app.use(bodyParser.json());        // Json Data 전용 : JSON 형식 ( ex) {"name": "John", "age": 30} )
app.use(bodyParser.json());

app.use(process.env.API_UPLOAD_IMAGES, express.static(path.join('uploads', 'images')));
// uploads/images 라는 경로에 있는 파일들을 반환가능하게 함

app.use((req, res, next) => {
  // 모든 도메인에서 이 서버에 접근할 수 있도록 허용합니다.
  res.setHeader('Access-Control-Allow-Origin', '*');

  // 요청 헤더에 포함될 수 있는 헤더의 종류를 지정합니다.
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );

  // 클라이언트가 서버에 요청할 수 있는 HTTP 메서드의 종류를 지정합니다.
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  // 다음 미들웨어 함수로 제어를 전달합니다.
  next();
});

app.use(process.env.API_PLACES_ROUTER, placesRoutes);  // /api/places/...   인 경우만 Routing 하도록 지정
app.use(process.env.API_USERS_ROUTER, usersRoutes);

app.use((req, res, next) => {
  /**
   * 브라우저에서 404 에러시, 해당 상태 가져오고
   * throw 나 next(error) 로 에러 미들웨어에 던져준다.
   */
  log.warn(`router에 없는 링크로의 접속 시도 : ${req.url}`);
  const error = new HttpError('# Could not find this Link !! #', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (req.file) {
    log.notice(`삭제할 Image info : `);
    console.dir(req.file.originalname);
    console.dir(req.file.destination);
    console.dir(req.file.path);
    fs.unlink(req.file.path, err => {
      // err && log.error(`unlink error ${err}`); // err이 null이 아니면 출력
      err ? log.error(`파일 삭제 error ${err}`) : log.info("파일 삭제 완료");
    })
  }
  if (res.headerSent) {  //응답과 연결된 헤더가 이미 전송된 상태인지 확인하는 프러파티 이다.
    return next(error);
  }
  res.status(error.code || 500) // if(error.code) { return error.code} else { return 500 }
  // 500 : 서버 측 에러 (코드의 버그, 서버 설정 문제, 데이터베이스 연결 오류 등 다양한 이유로 발생)
  res.json({ message: error.message || '예상하지 못한 에러 발생' });
});


const url =
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.m0cno.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
log.debug(url);

mongoose
  .connect(url)
  .then(() => {
    log.info(`Connected to DB, port : ${process.env.PORT || process.env.DB_PORT_NUMBER}`);
    app.listen(Number(process.env.PORT || process.env.DB_PORT_NUMBER));
  })
  .catch(error => {
    log.error("Connection Error");
    log.error(error);
  });