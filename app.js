const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('MIDDLEWARE');
  next();
});

app.use((req, res, next) => {
  res.send(
    '<form method="POST"><input type="text" name="username"><button type="submit"> Create User </button></form>'
  );
  // next();
  // 안되겠다 시발 이거 다시 듣자
});

app.listen(5000);