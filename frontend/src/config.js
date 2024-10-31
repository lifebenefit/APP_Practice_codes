const API_BASE = Object.freeze({
  home: "http://localhost:5000",
  placesRoutes: "/api/places",
  usersRoutes: "/api/users"
});

const API_PLACES = Object.freeze({
  root : `/`,
  pid : `/:pid`,
  userUid : `/user/:uid`,
});

const API_USERS = Object.freeze({
  root : `/`,
  signup : `/signup`,
  login : `/login`,
});

const HTTP_STATUS_CODE = Object.freeze({
  // 400번대: 클라이언트 오류
  badRequest: 400, // 잘못된 요청 형식이나 누락된 데이터
  unauthorized: 401, // 인증 실패 또는 잘못된 API 키
  forbidden: 403, // 권한 문제로 인한 접근 거부
  notFound: 404, // 리소스를 찾을 수 없음
  methodNotAllowed: 405, // 지원되지 않는 HTTP 메서드
  unprocessableEntity: 422, // 처리할 수 없는 엔티티 (예: 중복된 이메일)

  // 500번대: 서버 오류
  internalServerError: 500, // 서버 내부 오류
  notImplemented: 501, // 지원되지 않는 기능
  badGateway: 502, // 잘못된 게이트웨이 응답
  serviceUnavailable: 503, // 서비스 이용 불가 (과부하 또는 유지보수)
  gatewayTimeout: 504, // 게이트웨이 응답 시간 초과
});

/*
== 400번대: 클라이언트 오류 == // 400이랑 401,403이 조금 헷갈림
400 Bad Request: 클라이언트의 요청이 잘못되어 서버가 이해할 수 없을 때 사용됩니다.
예시: 잘못된 JSON 형식으로 요청 한 경우 ( API 요청이나 토큰인나 권한 다 OK )
예시: RequestData중 프로퍼티를 빼먹거나 잘못된 값을 넣은 경우 ( API 요청이나 토큰인나 권한 다 OK )

401 Unauthorized: 인증이 필요한 리소스에 대해 인증이 실패했을 때 사용됩니다.
예시: 로그인하지 않은 사용자가 보호된 페이지에 접근하려고 할 때. ( 토큰이 아예 없거나 올바르지 않음 )
예시: 로그인후, 만료된 토큰을 가지고 접근하려는 경우 ( 만료된 토큰 )
예시: 올바르지 않은 API 키(json파일이라도)로 요청한 경우 ( API 요청 시 잘못된 API 키 )
예시: DB에 값이 있으나 정보가 틀릴 때

403 Forbidden: 서버가 요청을 이해했지만, 권한 문제로 인해 요청을 거부할 때 사용됩니다.
예시: A사용자가 B사용자의 정보를 수정 하려고 할 때 ( 토큰자체는 올바르나 접근 권한이 없음 )
예시: 일반 사용자가 관리자권한으로 접근 하려 할 때 ( 토큰자체는 올바르나 접근 권한이 없음 )

404 Not Found: 클라이언트가 요청한 리소스를 서버에서 찾을 수 없을 때 사용됩니다.
예시: 존재하지 않는 페이지 URL을 입력했을 때.
예시: DB상에 아예 값이 존재 하지 않을 때

405 Method Not Allowed: 요청한 HTTP 메서드가 서버에서 지원되지 않을 때 사용됩니다.
예시: GET 요청만 허용하는 API에 POST 요청을 보냈을 때.

422 Unprocessable Entity: 서버가 요청을 이해하고 요청의 문법도 올바르지만, 요청된 지시를 따를 수 없을 때
예시: 회원 가입을 하려는데 이미 있는 Email 일때
예시: Validation 검사에 실패 할 때 

== 500번대: 서버 오류 ==
500 Internal Server Error: 서버에서 요청을 처리하는 도중에 예기치 않은 오류가 발생했을 때 사용됩니다.
예시: 서버 코드에 버그가 있어 요청을 처리할 수 없을 때.

501 Not Implemented: 서버가 요청한 기능을 지원하지 않을 때 사용됩니다.
예시: 서버가 지원하지 않는 HTTP 메서드를 사용했을 때.

502 Bad Gateway: 서버가 게이트웨이 또는 프록시 역할을 할 때, 상위 서버로부터 잘못된 응답을 받았을 때 사용됩니다.
예시: 프록시 서버가 잘못된 응답을 상위 서버로부터 받았을 때.

503 Service Unavailable: 서버가 일시적으로 과부하 상태이거나 유지보수 중일 때 사용됩니다.
예시: 서버가 과부하로 인해 요청을 처리할 수 없을 때.

504 Gateway Timeout: 서버가 게이트웨이 또는 프록시 역할을 할 때, 상위 서버로부터 응답을 받는 데 시간이 초과되었을 때 사용됩니다.
예시: 프록시 서버가 상위 서버로부터 응답을 받지 못해 시간이 초과되었을 때.
 */


module.exports = { API_BASE, API_PLACES, API_USERS, HTTP_STATUS_CODE };