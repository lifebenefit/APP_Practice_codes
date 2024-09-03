'use strict';

// /**
//  * Promise(프라미스) 정리
//  * executor는 resolve나 reject 중 하나를 반드시 호출해야 합니다. 이때 변경된 상태는 더 이상 변하지 않습니다.
//  */
// let promiseSuccess = new Promise(function (resolve, reject) {
//     // 프라미스가 만들어지면 executor 함수는 자동으로 실행됩니다.

//     // 1초 뒤에 일이 성공적으로 끝났다는 신호가 전달되면서 result는 '완료'가 됩니다.
//     setTimeout(() => resolve("완료"), 1000);
// });


// let promiseFail = new Promise(function (resolve, reject) {
//     // 1초 뒤에 에러와 함께 실행이 종료되었다는 신호를 보냅니다.
//     setTimeout(() => reject(new Error("에러 발생!")), 1000);
// });


// promiseSuccess.then(
//     result => alert(result), // 1초 후 "완료!"를 출력
//     error => alert(error) // 실행되지 않음
// );

// promiseFail.then(
//     result => alert(result), // 실행되지 않음
//     error => alert(error)    // 1초 후 "Error: 에러 발생!"를 출력
// );

// promiseSuccess.then(alert); // 1초 뒤 "완료!" 출력

// // .catch(f)는 promise.then(null, f)과 동일하게 작동합니다
// promiseFail.catch(alert); // 1초 뒤 "Error: 에러 발생!" 출력

// new Promise((resolve, reject) => {
//     setTimeout(() => resolve("결과"), 2000)
// })
//     .finally(() => alert("프라미스가 준비되었습니다."))
//     .then(result => alert(result)); // <-- .then에서 result를 다룰 수 있음


// new Promise((resolve, reject) => {
//     throw new Error("에러 발생!");
// })
//     .then((result) => console.log("Promise Task Code ..."))
//     .catch(err => alert(err)) // <-- .catch에서 에러 객체를 다룰 수 있음
//     .finally(() => alert("프라미스가 준비되었습니다."));



// /**
//  * 콜백 기반 프로그래밍 vs 프라미스 프로그래밍
//  */
// function loadScriptByCallbackBase(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;

//     script.onload = () => callback(null, script);
//     script.onerror = () => callback(new Error(`${src}를 불러오는 도중에 에러가 발생함`));

//     document.head.append(script);
// }



function loadScript(src) {
    return new Promise(function (resolve, reject) {
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`${src}를 불러오는 도중에 에러가 발생함`));

        document.head.append(script);
    });
}



// let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

// promise.then(
//     script => alert(`${script.src}을 불러왔습니다!`),
//     error => alert(`Error: ${error.message}`)
// );

// promise.then(script => alert('또다른 핸들러...'));



// /**
//  * 프라미스 체이닝
//  * .then .catch .finally 를 연속적으로 쓰며
//  * 여러 동작을 하나의 체인처럼 엮어주는 방법
//  * return 하거나 Promise 객체를 하나 더 만들어서 resolve 로 줘도 된다.
//  */
// new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(1), 1000); // (*)
// }).then(function (a) { // (**)

//     alert(a); // 1
//     let b = a * 2;
//     return b;

// }).then(function (result) { // (***)
//     alert(result); // 2
//     return new Promise((resolve, reject) => { // (*)
//         setTimeout(() => resolve(result * 2), 1000);
//     });

// }).then(function (result) {
//     alert(result); // 4
//     return result * 2;
// });


// // 화살표 함수 활용
// new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(1), 1000);
// }) // (*)
//     .then((a) => {
//         alert(a); // 1
//         let b = a * 2;
//         return b;
//     }).then((result) => {
//         alert(result); // 2
//         return new Promise((resolve, reject) => setTimeout(() => resolve(result * 2), 1000));
//     }).then(function (result) {
//         alert(result); // 4
//         return result * 2;
//     }).then((result) => result * 2  // 8 alert 생략
//     ).then(alert) // 16


// // JS 파일 한번에 불러오기
// // let checkPromiseStatus = loadScript("my/script.js")
// loadScript("my/script.js")
//     .then(function (script) {
//         // 불러온 스크립트 안에 정의된 함수를 호출해
//         // 실제로 스크립트들이 정상적으로 로드되었는지 확인합니다.
//         newFunction();
//         return loadScript("my/script2.js");
//     })
//     .then(function (script) {
//         newFunction();
//         // 불러온 스크립트 안에 정의된 함수를 호출해
//         // 실제로 스크립트들이 정상적으로 로드되었는지 확인합니다.
//         return loadScript("my/script3.js");
//     })
//     .then(function (script) {
//         // 불러온 스크립트 안에 정의된 함수를 호출해
//         // 실제로 스크립트들이 정상적으로 로드되었는지 확인합니다.
//         newFunction();
//     });
// console.log(checkPromiseStatus)


// // 화살표 함수 활용
// loadScript("my/script.js")
//     .then(srcPath => {
//         newFunction(); // "my/script.js" 파일에만 있는 함수
//         return loadScript("my/script2.js")
//     }).then(srcPath => loadScript("my/script3.js"))
//     .then(srcPath => {
//         // 스크립트를 정상적으로 불러왔기 때문에 스크립트 내의 함수를 호출할 수 있습니다.
//         one();
//         two();
//         three();
//     });


// // fetch 함수 활용
// // '/article/user.json' 이 경로로 fetch 를 실행 시키면 해당 경로에 있는 json 파일을 Text로 불러옴
// fetch('/article/user.json')
//     // 응답받은 내용을 json으로 불러옵니다.
//     .then(response => {
//         typeof (response);
//         console.log(response);
//         console.log('-------------------');
//         // console.log(Object.getOwnPropertyNames(response));
//         console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(response)));
//         // -- python 에서 print(response.__dir__()) 이랑 비슷한데 잘 안되네 ㅅㅂ
//         // console.log(response.status())
//         return response.json();
//     })
//     // GitHub에 요청을 보냅니다.
//     .then(user => fetch(`https://api.github.com/users/${user.name}`))
//     // 응답받은 내용을 json 형태로 불러옵니다.
//     .then(response => response.json())
//     // 3초간 아바타 이미지(githubUser.avatar_url)를 보여줍니다.
//     .then(githubUser => {
//         let img = document.createElement('img');
//         img.src = githubUser.avatar_url;
//         img.className = "promise-avatar-example";
//         document.body.append(img);

//         setTimeout(() => img.remove(), 3000); // (*)
//     });


// // 화살표 함수 활용 + 코드클린
// function loadJson(url) {
//     return fetch(url) // 해당 URL 경로로 fetch 를 실행 시키면 해당 경로에 있는 json 파일을 Text로 불러옴
//         .then(response => response.json());
// }

// function loadGithubUser(name) {
//     return fetch(`https://api.github.com/users/${name}`)
//         .then(response => response.json());
// }

// function showAvatar(githubUser) {
//     return new Promise(function (resolve, reject) {
//         let img = document.createElement('img');
//         img.src = githubUser.avatar_url;
//         img.className = "promise-avatar-example";
//         document.body.append(img);

//         setTimeout(() => {
//             img.remove();
//             resolve(githubUser);
//         }, 3000);
//     });
// }

// // 함수를 이용하여 다시 동일 작업 수행
// loadJson('/article/user.json')
//     .then(user => loadGithubUser(user.name))
//     .then(showAvatar)
//     .then(githubUser => alert(`Finished showing ${githubUser.name}`));



// // Promise 의 에러핸들링
// fetch('https://no-such-server.blabla') // 거부
//     .then(response => response.json())
//     .catch(err => alert(err)) // TypeError: failed to fetch (출력되는 내용은 다를 수 있음)



// fetch('/article/user.json')
//     .then(response => response.json())
//     .then(user => fetch(`https://api.github.com/users/${user.name}`))
//     .then(response => response.json())
//     .then(githubUser => new Promise((resolve, reject) => {
//         let img = document.createElement('img');
//         img.src = githubUser.avatar_url;
//         img.className = "promise-avatar-example";
//         document.body.append(img);

//         setTimeout(() => {
//             img.remove();
//             resolve(githubUser);
//         }, 3000);
//     }))
//     .catch(error => alert(error.message));


// // 실행 순서: catch -> catch
// new Promise((resolve, reject) => {

//     throw new Error("에러 발생!");

// }).catch(function (error) { // (*)

//     if (error instanceof URIError) {
//         /* 여기는 실행되지 않습니다. */
//         alert("URI Error 발생 : ");// 에러 처리
//     } else {
//         alert("처리할 수 없는 에러");

//         throw error; // 에러 다시 던지기
//     }
// }).then(function () {
//     /* 여기는 실행되지 않습니다. */
//     rightUri = prompt("URI가 틀렸습니다. 다시 입력해주세요");
//     // rightUri 로 다시 시도 하는 코드 입력!
// }).catch(error => { // (**)
//     alert(`알 수 없는 에러가 발생함: ${error}`);
//     // 반환값이 없음 => 실행이 계속됨
// });



// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         alert(1111111111111111111);
//         throw new Error("에러 발생!");
//     }, 1000);
// }).then(() => alert(22222222222)
// ).catch(alert);



// /**
//  * Promise.all( [] ) 
//  * [] 배열안에 있는 Promise 객체들을 병렬 실행 합니다.
//  * 여러 개의 프라미스를 동시에 실행시키고 모든 프라미스가 준비될 때까지 기다린다고 해봅시다.
//  * 복수의 URL에 동시에 요청을 보내고, 다운로드가 모두 완료된 후에 콘텐츠를 처리할 때 이런 상황이 발생합니다.
//  * 
//  */
// Promise.all([
//     new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
//     new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
//     new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
// ]).then(alert); // 프라미스 전체가 처리되면 1, 2, 3이 반환됩니다. 각 프라미스는 배열을 구성하는 요소가 됩니다.


// Promise.all([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("에러 발생!")), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]).catch(alert); // Error: 에러 발생!


// Promise.all([
//     new Promise((resolve, reject) => {
//         setTimeout(() => resolve(1), 1000)
//     }),
//     2,
//     3
// ]).then(alert); // 1, 2, 3


// // Callback to Promise (( 프라미스가 아닌 코드를 프라미스처럼 ))
// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;

//     script.onload = () => callback(null, script);
//     script.onerror = () => callback(new Error(`${src}를 불러오는 도중에 에러가 발생함`));

//     document.head.append(script);
// }

// // 사용법:
// // loadScript('path/script.js', (err, script) => {...})

// let loadScriptPromise = function (src) {
//     return new Promise((resolve, reject) => {
//         loadScript(src, (err, script) => {  // <- 콜백함수
//             if (err) reject(err)
//             else resolve(script);
//         });
//     })
// }

// // 사용법:
// // loadScriptPromise('path/script.js').then(...)


// /**
//  * async와 await
//  */
// async function f1() {
//     return 1;
// }
// f1().then(alert); // 1
// f1().then((result) => alert(result)); // 1  동일한거. JS 문법상 (result) 생략 가능한것.


// async function f() {
//     return Promise.resolve(1);
// }
// f().then(alert); // 1
// f().then((result) => alert(result)); // 1  동일한거. JS 문법상 (result) 생략 가능한것.
// alert(promiseResolve);


// async function f() {

//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("완료!"), 1000)
//     });

//     let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)

//     alert(result); // "완료!"
// }

// f();




// async function showAvatar() {

//     // JSON 읽기
//     let response = await fetch('/article/user.json');
//     let user = await response.json();

//     // github 사용자 정보 읽기
//     let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
//     let githubUser = await githubResponse.json();

//     // 아바타 보여주기
//     let img = document.createElement('img');
//     console.log(githubUser.avatar_url);
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);

//     // 3초 대기
//     await new Promise((resolve, reject) => setTimeout(resolve, 3000));

//     img.remove();

//     return githubUser;
// }

// showAvatar();

// class Waiter {
//     async wait() {
//         return await Promise.resolve(1);
//     }
// }

// new Waiter()
//     .wait()
//     .then(alert); // 1

// // 동일
// let waiter = new Waiter();
// waiter.wait()
//     .then((result) => alert(result));



// //  async와 await : 에러 핸들링 try - catch 쓰든가, .catch 써도된다
// async function f() {

//     try {
//         let response = await fetch('http://유효하지-않은-주소');
//     } catch (err) {
//         alert(err); // TypeError: failed to fetch
//     }
// }

// f();


// async function f() {

//     try {
//         let response = await fetch('http://유효하지-않은-주소');
//         let user = await response.json();
//     } catch (err) {
//         // fetch와 response.json에서 발행한 에러 모두를 여기서 잡습니다.
//         alert(err);
//     }
// }

// f();



// /**
//  * Promise.all( [] ) 
//  * [] 배열안에 있는 Promise 객체들을 병렬 실행 합니다.
//  * 여러 개의 프라미스를 동시에 실행시키고 모든 프라미스가 준비될 때까지 기다린다고 해봅시다.
//  * 복수의 URL에 동시에 요청을 보내고, 다운로드가 모두 완료된 후에 콘텐츠를 처리할 때 이런 상황이 발생합니다.
//  * 
//  * promise.race( [] )
//  * [] 배열 안에 있는 Task 중 먼저 끝난 것만 반환하고 넘어간다.
//  * 다른 Task 가 멈추진 않음, 할일 마저하고 쓸쓸히 혼자 퇴장한다.
//  * 
//  * async와 await : 병렬 실행하기
//  */
function delay(msg) {
    console.log(msg);
    return new Promise(resolve => setTimeout(resolve, 1000));
}
async function getApple(params) {
    await delay("APPLE WAITING");
    await delay("APPLE WAITING");
    await delay("APPLE WAITING");
    return "APPLE"
}
async function getBanana(params) {
    await delay("BANANA WAITING");
    return "Banana"
}

//1. 병렬실행 async - await
async function getAllFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`
}
getAllFruits()
    .then((result) => alert(result));
// .then(console.log);

//2. 병렬실행 promise.all
function getAllFruitsByPromiseApi() {
    return Promise.all(
        [getApple(), getBanana()])
        .then((result) => { return result });
}
getAllFruitsByPromiseApi()
    .then((result) => {
        alert(result);
        alert(Object.prototype.toString.call(result));
        alert(result[0] + " and " + result[result.length - 1])
    })

//3. 먼저 완료된 Task 만 반환
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne()
    .then(alert)







