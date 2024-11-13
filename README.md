# APP_Practice_codes

## Section 소개
![Section 소개 이미지](image.png)

## 앱 배포 과정
![앱 배포 과정 이미지](image-1.png)

## Deployment Preparation Steps
![Deployment Preparation Steps 이미지](image-2.png)

## MERN 앱 배포 방법
![MERN 앱 배포 방법 이미지](image-3.png)

### 1. 두 개의 분리된 앱 배포
- **필요 서버**: 2개
  - **FrontEnd**: AWS S3, Firebase Hosting 등
  - **BackEnd**: AWS EC2/EB, Heroku 등
- **특징**: FrontEnd와 BackEnd 간의 통신을 위해 CORS 헤더가 필요

### 2. 하나의 통합된 앱 배포
- **필요 서버**: 1개
  - **사용 서버 예시**: AWS EC2/EB, Heroku 등
- **특징**: 동일한 도메인에서 동작하므로 CORS 헤더가 필요하지 않음

___

### 구성

- NodeJS -- Express -- React
- MVC 패턴 (model–view–controller, MVC)
- mongoose (mongoDB), (cloud Server DB : Atlas)
  - [MongoDB Atlas](https://cloud.mongodb.com/v2#/org/66fcba7d069a4d43c73cf7af/projects)
- 구글 MAP_API 사용
  - [Google Cloud Console](https://console.cloud.google.com/apis/credentials?hl=ko&project=effective-brook-437306-h0)
- FrontEnd 서버
  - ***AWS s3***
    - [awsS3] https://eu-north-1.console.aws.amazon.com/console/home?region=eu-north-1#
- BackEnd 서버
  - ***heroku***
    - [heroku] https://dashboard.heroku.com/
___

#### 
# FrontEnd( JavaScript, React ) 배포
#### 

### 환경변수 설명
  - `.env` <- Local 전용
  - `.env.production` <- 배포 전용

### Library 설치
```bash
$ npm i
```
package.json 참조
```json
  "dependencies": {
    "axios": "^1.7.7",
    "chalk": "^5.3.0",
    "jwt-decode": "^4.0.0",
    "react": "^16.11.0",
    "react-dom": "^16.11.0",
    "react-router-dom": "5.3.4",
    "react-scripts": "3.2.0",
    "react-transition-group": "^4.4.5"
  }
```

### FrontEnd code 배포판 빌드
```bash
# npm run build 시, .env.production 환경변수를 참조해 빌드한다.
$ npm run build
```

### Local Test ( with hosted backend )
```bash
$ npm install -g serve
$ serve -s build  # localhost:3000 으로 서버구성해서 build 디렉토리에 있는 코드 로컬실행
```

### Local Test ( with local backend )
```bash
$ npm start  # localhost:3000 으로 서버구성해서 app.js 실행 (build 디렉토리 X)
```

### 실행 에러 정리
```bash
# node -v 버전이 12 이하인 경우 최신버전 설치
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
$ source ~/.bashrc
$ nvm --version
$ nvm install --lts
$ nvm use --lts
$ node -v

# 구버전으로 인한 실행 실패시, package.json에 해당 Json Script 추가
  "scripts": {
    "start_origin": "react-scripts start",
    "build_origin": "react-scripts build",
    "start": "react-scripts --openssl-legacy-provider start",
    "build": "react-scripts --openssl-legacy-provider build",
    ....기존의 Script 이어서...
```

___


#### 
# FrontEnd server( AWS S3 ) 업로드
#### 

### AWS S3 업로드
  - `https://eu-north-1.console.aws.amazon.com/s3/home?region=eu-north-1#` 
  - 해당링크에서 APP 전용 도메인 버킷에 업로드