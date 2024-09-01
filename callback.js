'use strict';

// function loadScript(src) {
//     // <script> 태그를 만들고 페이지에 태그를 추가합니다.
//     // 태그가 페이지에 추가되면 src에 있는 스크립트를 로딩하고 실행합니다.
//     let script = document.createElement('script');
//     script.src = src;
//     document.head.append(script);
// }

// loadScript('/my/script.js'); // script.js엔 "function newFunction() {…}"이 있습니다.
// 비동기 호출 방식이다.

// newFunction();   // 함수가 존재하지 않는다는 에러가 발생합니다!
// loadScript('/my/script.js'); 함수가 로딩되기전에 불러와져서 그렇다.


function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`${src}를 불러오는 도중에 에러가 발생했습니다.`));

    document.head.append(script);
}


// /**
//  * ‘콜백 기반(callback-based)’ 비동기 프로그래밍이라고 하는데
//  * loadScript 함수가 끝나는 순서대로 동작 하게 된다.
//  */
// loadScript('/my/script.js', function () {
//     // 콜백 함수는 스크립트 로드가 끝나면 실행됩니다.
//     newFunction(); // 이제 함수 호출이 제대로 동작합니다.
// });

// loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
//     alert(`${script.src}가 로드되었습니다.`);
//     alert(_); // 스크립트에 정의된 함수
// });

// loadScript('/my/script.js', function (script) {
//     alert(`${script.src}을 로딩했습니다. 이젠, 다음 스크립트를 로딩합시다.`);
//     loadScript('/my/script2.js', function (script) {
//         alert(`두 번째 스크립트를 성공적으로 로딩했습니다.`);
//     });
// });



// // 순차적으로 종료
// loadScript('/my/script.js', function (script) {
//     newFunction();
//     loadScript('/my/script2.js', function (script) {
//         newFunction();
//         loadScript('/my/script3.js', function (script) {
//             newFunction();
//             // 세 스크립트 로딩이 끝난 후 실행됨
//         });
//     })
// });



// 에러 핸들링
// 이렇게 깊은 중첩 코드가 만들어내는 패턴은 소위 ‘콜백 지옥(callback hell)’ 혹은 '멸망의 피라미드(pyramid of doom)'라고 불립니다.
function handleError(e) {
    alert(`Error : ${e}`);
}
loadScript('/my/script.js', function (error, script) {
    if (error) {
        handleError(error);
    } else {
        newFunction();
        loadScript('/my/script2.js', function (error, script) {
            if (error) {
                handleError(error);
            } else {
                newFunction();
                loadScript('/my/script33333333333.js', function (error, script) {
                    if (error) {
                        handleError(error);
                    } else {
                        newFunction();
                        // 모든 스크립트가 로딩된 후, 실행 흐름이 이어집니다. (*)
                    }
                });
            }
        })
    }
});





loadScript('/my/script.js', step1);

function step1(error, script) {
    if (error) {
        handleError(error);
    } else {
        newFunction();
        loadScript('/my/script2.js', step2);
    }
}

function step2(error, script) {
    if (error) {
        handleError(error);
    } else {
        newFunction();
        loadScript('/my/script3.js', step3);
    }
}

function step3(error, script) {
    if (error) {
        handleError(error);
    } else {
        newFunction();
        // 모든 스크립트가 로딩되면 다른 동작을 수행합니다. (*)
        alert("종료");
    }
};

















