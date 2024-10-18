# APP_Practice_codes

Section 소개
![alt text](image.png)

========================================================================================================

섹션 11: 파일 업로드 추가하기

  + NodeJS -- Express -- React
  + MVC 패턴 (model–view–controller, MVC)

========================================================================================================

---------------------------------
=============BackEnd=============
---------------------------------
Lib 설치 Script
$ npm init
$ npm install --save express body-parser
$ npm install --save-dev nodemon
$ npm install --save uuid
$ npm install --save express-validator
$ npm install --save axios
$ npm install --save mongoose
$ npm install --save mongoose-unique-validation
$ npm install --save console-log-level

실행 Script
1-1. 
$ npm run start
하거나 

1-2.
package.json 에 해당 스크립트를 추가
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon app.js"
  },

2.
$ npx nodemon app.js


========================================================================================================

----------------------------------
=============FrontEnd=============
----------------------------------

초기 프로젝트 생성 과정
Project는 "create-react-app" 를 통해서 만들어짐
https://github.com/facebook/create-react-app
$ npm init react-app my-app
$ cd my-app
$ npm start


실행 Script
1.
npm install

2.
Lib 설치 Script
$ npm init
$ npm install --save react-router-dom@5 --save-exact
$ npm install --save react-transition-group
$ npm install --save axios

3.( 옵션 )
Node 버전 에러시, pacakge.json 에
  "scripts": {
    "start_origin": "react-scripts start",
    "start": "react-scripts --openssl-legacy-provider start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
추가 및 수정

4.
$ npm start

