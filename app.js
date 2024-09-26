const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use((req, res, next) => { bodyParser.urlencoded({ extended: false }) });

app.post('/user', (req, res, next) => {
  res.send('<h1> User : ' + req.body.username + '</h1>')
});

app.use('/use_test', (req,res,next) => {
    console.log('/use_test 뿐만아니라 /use_test/XXX 와 같은 URL에 요청을 처리함');
})

app.get('/', (req, res, next) => {
  res.send(
    '<form action="/user" method="POST"><input type="text" name="username"><button type="submit"> Create User </button></form>'
  );
  console.log('SEND !');
});

app.listen(5000, () => console.log('Server is running on port 5000'));
