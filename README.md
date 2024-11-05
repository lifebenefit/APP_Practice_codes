# APP_Practice_codes

## Section 소개
![Section 소개 이미지](image.png)

## 앱 배포 과정
![앱 배포 과정 이미지](image-1.png)

## Deployment Preparation Steps
![Deployment Preparation Steps 이미지](image-2.png)

## MERN 앱 배포 방법

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


### 섹션

  + NodeJS -- Express -- React
  + MVC 패턴 (model–view–controller, MVC)
  + mongoose (mongoDB) , (cloud Server DB : Atlas)
    + https://cloud.mongodb.com/v2#/org/66fcba7d069a4d43c73cf7af/projects
  + 구글 MAP_API 사용
    + https://console.cloud.google.com/apis/credentials?hl=ko&project=effective-brook-437306-h0

___

#### 
# 프로젝트 배포 방법
#### 

### 배포판 빌드
```bash
npm run build
```
 
### 환경변수 설명
###### .env <- 개발전용
###### .env.production <- 배포전용

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
# FrontEnd
#### 

###  초기 프로젝트 생성 과정
Project는 "create-react-app" 를 통해서 만들어짐
https://github.com/facebook/create-react-app
```bash
$ npm init react-app my-app
$ cd my-app
$ npm start
```

### 실행 Script
#### 1.
```bash
$ npm install
```

#### 2.
Lib 설치 Script
```bash

```

#### 3.( 옵션 )
Node 버전 에러시, pacakge.json 에
```json

```
추가 및 수정

#### 4.
```bash

```


___


# 1
## 2
### 3
#### 4 
##### 5
###### 6

```bash
echo "aa"
```
*** 찐하게 ***
___
+ 1
  + 2
  + 3

- 1
  - 2
  - 3
