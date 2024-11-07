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
  - heroku
    - [heroku] https://dashboard.heroku.com/apps/backend-server-wonhyuk1994
- BackEnd 서버
  - firebase
    - [firebase] 
___

#### 
# 프로젝트 배포 방법
#### 

### 배포판 빌드
```bash
npm run build
```
 
### 환경변수 설명
###### heroku site 에서 settings -> config Vars

___

#### 
# BackEnd
#### 
### Lib 설치 Script
```bash

```

###  실행 Script
#### 1-1.
```bash

```

#### 1-2.
package.json 에 해당 스크립트를 추가
```json

```

#### 2.
```bash

```


___
####
# heroku install
####
```bash
$ curl https://cli-assets.heroku.com/install-ubuntu.sh | sh
```

####
# heroku 사용 Command
####

- **Github Connect 하고 Automatic Deploys 이용 한다는 가정**
```bash
$ heroku login
$ heroku restart --app backend-server-wonhyuk1994
$ heroku ps:scale web=0 --app backend-server-wonhyuk1994
$ heroku logs --tail --app backend-server-wonhyuk1994
$ heroku info -a backend-server-wonhyuk1994
```

```bash
# 뭐든 로그인 후 CLI 이용
$ heroku login
# Dyno 끄기
$ heroku ps:scale web=0 --app backend-server-wonhyuk1994
# Dyno 켜기
$ heroku ps:scale web=1 --app backend-server-wonhyuk1994
# 재시작
$ heroku restart --app backend-server-wonhyuk1994
# 애플리케이션 상태 확인
$ heroku ps --app backend-server-wonhyuk1994
# 각종 정보 확인
$ heroku info -a backend-server-wonhyuk1994
# 서버 로그 확인
$ heroku logs --tail --app backend-server-wonhyuk1994
# 환경 변수 설정
$ heroku config:set KEY=VALUE --app backend-server-wonhyuk1994
```
