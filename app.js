const express = require('express');
const bodyParser = require('body-parser');

const placesRoutes = require('./routes/places-routes');
const HttpError = require('./models/http-error')

const app = express();

// app.use(bodyParser.urlencoded());  // Form Data 전용 : HTML 폼 ( ex) name=John&age=30 )
// app.use(bodyParser.json());        // Json Data 전용 : JSON 형식 ( ex) {"name": "John", "age": 30} )
app.use(bodyParser.json());

app.use('/api/places', placesRoutes);  // /api/places/...   인 경우만 Routing 하도록 지정

app.use((req,res,next) => {
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

app.listen(5000);












// 1. Node.js 기본 개념
//  - 여기는 이벤트 루프나 비동기 프로그램에 대해 무슨 함수나 기능들이 있는지 내용을 추가해주고
//  - 아주 간단한 예시도 들어줘

// 2. Express.js 개요
//  - 여기는 이정도면 됬어

// 3. Express의 주요 구성 요소
//  - 어플리케이션 객체가 가진 함수들이랑
//  - 그 함수들의 인자에 들어가는 오브젝트들이 가진 기능들 예시 및 설명

// 4. HTTP 요청 및 응답 객체
//  - 설명은 좋은데 req, res 인자가 기진 함수들에 대한 설명이 부족해

// 5. REST API 설계
//  - 다른 아키텍쳐 스타일은 뭐가 있고 비교해서 설명해줬으면해 

// 6. 고급 주제



// 카테고리별 간단한 설명

// 1. Node.js 기본 개념
// 이벤트 루프: Node.js의 비동기 처리를 가능하게 하는 메커니즘으로, 이벤트와 콜백을 처리합니다.
//   - 이벤트 루프는 setTimeout, setInterval, setImmediate, process.nextTick 같은 함수들을 통해 비동기 작업을 스케줄링합니다.
// 비동기 프로그래밍: 동기식 코드와 달리, 작업이 완료될 때까지 기다리지 않고 다음 작업을 수행하는 방식입니다.
// 내장 모듈: Node.js에서 기본적으로 제공하는 모듈로, 파일 시스템(fs), 경로(path), HTTP 서버(http) 등을 포함합니다.

// 2. Express.js 개요
// 설치: Node.js 환경에서 npm을 사용하여 Express를 설치합니다.
// 설정: Express 애플리케이션을 초기화하고 설정하는 방법을 다룹니다.
// 주요 기능: 라우팅, 미들웨어, 템플릿 엔진 등 Express가 제공하는 주요 기능을 설명합니다.

// 3. Express의 주요 구성 요소
// 애플리케이션 객체 (app): Express 애플리케이션의 핵심 객체로, 라우팅 및 미들웨어 설정에 사용됩니다.
// app.use(): 미들웨어를 애플리케이션에 추가합니다.
// app.get(), app.post(): 특정 경로에 대한 HTTP 요청을 처리합니다.
// 라우팅: URL 경로에 따라 요청을 처리하는 방법을 정의합니다.
// 미들웨어: 요청과 응답 객체를 조작하거나 요청-응답 주기를 종료할 수 있는 함수입니다.

// 4. HTTP 요청 및 응답 객체
// req 객체: 클라이언트의 요청 정보를 담고 있으며, 쿼리, 파라미터, 본문 등을 포함합니다.
// req.query: URL 쿼리 문자열을 파싱한 객체입니다.
// req.params: URL 경로의 매개변수를 담고 있습니다.
// req.body: 요청 본문을 파싱한 객체로, 주로 POST 요청에서 사용됩니다.
// res 객체: 서버가 클라이언트에게 응답을 보낼 때 사용하는 객체입니다.
// res.send(): 응답 본문을 클라이언트에게 보냅니다.
// res.json(): JSON 형식으로 응답을 보냅니다.
// res.status(): HTTP 상태 코드를 설정합니다.

// 5. REST API 설계
// REST API 개념: 자원을 HTTP를 통해 조작하는 아키텍처 스타일입니다.
// RESTful 설계 원칙: 자원의 표현, 상태 전이, 무상태성 등을 포함한 설계 원칙입니다.
// CRUD 작업: 생성(Create), 읽기(Read), 갱신(Update), 삭제(Delete) 작업을 HTTP 메서드로 구현합니다.
// HTTP 메서드: GET, POST, PUT, DELETE 등으로, 각각의 메서드는 특정 작업을 수행합니다.

// 6. 고급 주제
// 인증: 사용자의 신원을 확인하는 과정입니다.
// 권한 부여: 인증된 사용자가 특정 자원에 접근할 수 있는 권한을 부여하는 과정입니다.
// 에러 처리: 애플리케이션에서 발생하는 오류를 처리하는 방법입니다.
// 성능 최적화: 애플리케이션의 성능을 향상시키기 위한 다양한 기법입니다.
// 보안: 애플리케이션을 외부 공격으로부터 보호하기 위한 방법입니다.