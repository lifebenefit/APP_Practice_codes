const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('첫 번째 미들웨어');
  next(); // 다음 미들웨어로 넘어감
});

app.use((req, res, next) => {
  console.log('두 번째 미들웨어');
  next(); // 다음 미들웨어로 넘어감
});

// app.use((req, res) => {
//   console.log('세 번째 미들웨어');
//   res.send('응답 완료');
// });

app.use((req, res, next) => {
  console.log('MIDDLEWARE');
  next();
});

app.use((req, res, next) => {
  res.send(
    '<form method="POST"><input type="text" name="username"><button type="submit"> Create User </button></form>'
  );
  console.log('SEND !');
  next();
});

/** ------------------------------------------- GET ZONE ------------------------------------------- */
app.get('/', (req, res) => {
  console.log('get url : /')
});

app.get('/aa', (req, res) => {
  console.log('get url : /aa')
});
/** ------------------------------------------- GET ZONE ------------------------------------------- */

app.listen(5000, () => console.log('Server is running on port 5000'));
