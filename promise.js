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

new Promise((resolve, reject) => {
    setTimeout(() => resolve("결과"), 2000)
})
    .finally(() => alert("프라미스가 준비되었습니다."))
    .then(result => alert(result)); // <-- .then에서 result를 다룰 수 있음


new Promise((resolve, reject) => {
    throw new Error("에러 발생!");
})
    .finally(() => alert("프라미스가 준비되었습니다."))
    .catch(err => alert(err)); // <-- .catch에서 에러 객체를 다룰 수 있음



/**
 * 콜백 기반 프로그래밍 vs 프라미스 프로그래밍
 */
function loadScriptByCallbackBase(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`${src}를 불러오는 도중에 에러가 발생함`));

    document.head.append(script);
}



function loadScript(src) {
    return new Promise(function (resolve, reject) {
        alert("Promise 실행");
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`${src}를 불러오는 도중에 에러가 발생함`));

        document.head.append(script);
    });
}



let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(
    script => alert(`${script.src}을 불러왔습니다!`),
    error => alert(`Error: ${error.message}`)
);

promise.then(script => alert('또다른 핸들러...'));
