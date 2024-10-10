const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const placesRoutes = require('./routes/places-routes');
const usersRoutes = require('./routes/users-routes');
const HttpError = require('./models/http-error');

const app = express();

// app.use(bodyParser.urlencoded());  // Form Data 전용 : HTML 폼 ( ex) name=John&age=30 )
// app.use(bodyParser.json());        // Json Data 전용 : JSON 형식 ( ex) {"name": "John", "age": 30} )
app.use(bodyParser.json());

app.use('/api/places', placesRoutes);  // /api/places/...   인 경우만 Routing 하도록 지정
app.use('/api/users', usersRoutes);

app.use((req, res, next) => {
  /**
   * 브라우저에서 404 에러시, 해당 상태 가져오고
   * throw 나 next(error) 로 에러 미들웨어에 던져준다.
   */
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error, req, res, next) => {
  console.log(` APP JS ERROR Occurred`)
  if (res.headerSent) {  //응답과 연결된 헤더가 이미 전송된 상태인지 확인하는 프러파티 이다.
    return next(error);
  }
  res.status(error.code || 500) // if(error.code) { return error.code} else { return 500 }
  // 500 : 서버 측 에러 (코드의 버그, 서버 설정 문제, 데이터베이스 연결 오류 등 다양한 이유로 발생)
  res.json({ message: error.message || 'An unknown error occurred!' });
});




const userId = "liam";
const password = '24hkH6ZRESDkhNnM';
const clusterName = "cluster0";
const dbName = "UserInfo";

const url =
  `mongodb+srv://${userId}:${password}@${clusterName}.m0cno.mongodb.net/${dbName}?retryWrites=true&w=majority`;
  console.log(url);

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to DB");
    app.listen(5000);
  })
  .catch(error => {
    console.log("Connection Error")
    console.log(err);
  });