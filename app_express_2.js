const express = require('express');

const app = express();

app.use((req, res, next) => {
  let body = '';

  req.on('data', chunk => {
    body += chunk;
    console.log(`chunk : ${chunk}`);
  });
  req.on('end', () => {
    const userName = body.split('=')[1];
    if (userName){
      req.body = { name: userName };
    }
    next();
    console.log(`body : ${body} , userName : ${userName}`);
  });
  req.on('error', (err) => {
    console.error(`Error: ${err.message}`);
  });
});

app.use((req, res, next) => {
  if (req.body){
    return res.send('<h1> User : ' + req.body.name + '</h1>')
  }
  res.send(
    '<form method="POST"><input type="text" name="username"><button type="submit"> Create User </button></form>'
  );
  console.log('SEND !');
  next();
});

app.listen(5000, () => console.log('Server is running on port 5000'));
