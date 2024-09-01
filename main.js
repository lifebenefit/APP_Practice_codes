'use strict';

// class SimpleDeclareClass {
//     constructor(name) { this.name = name; }
//     sayHi() { alert(this.name); }
// }

// let SimpleExpressClass = class {
//     sayHi() {
//         alert("안녕하세요.");
//     }
// };


// function makeClass(phrase) {
//     // 클래스를 선언하고 이를 반환함
//     return class {
//         sayHi() {
//             alert(phrase);
//         };
//     };
// }

// // 새로운 클래스를 만듦
// let User1 = makeClass("안녕하세요.");

// new User1().sayHi(); // 안녕하세요.



// class User {

//     constructor(name) {
//         // setter를 활성화합니다.
//         this.name = name;
//     }
//     /**
//      * 참고로 getter와 setter는 User.prototype에 정의됩니다.
//      */
//     get name() {
//         return this._name;
//     }

//     set name(value) {
//         if (value.length < 1) {
//             alert("이름이 너무 짧습니다.");
//             return;
//         }
//         this._name = value;
//     }
// }

// let user = new User("보라");
// alert(user.name); // 보라
// user.name = "디노";
// alert(user.name);

// let testConst = new User(""); // 이름이 너무 짧습니다.


/**
 * This 함수와 Object, Class 
 * 함수 표현식, 함수 선언식, 화살표 함수
 * 이해하기

화살표 함수 This < 상위 객체를 지칭함.
전역 스코프에서 정의된 경우: 전역 스코프에서 화살표 함수를 정의하면, 그 this는 전역 객체(window 또는 global)를 참조합니다.
객체의 메서드로 정의된 경우: 객체의 메서드로 화살표 함수를 정의하면, 그 this는 해당 객체가 아닌, 그 객체가 정의된 상위 스코프의 this를 참조합니다.
클래스 내부에서 정의된 경우: 클래스 내부에서 화살표 함수를 정의하면, 그 this는 클래스 인스턴스를 참조합니다. 
                            이는 클래스의 메서드가 인스턴스의 컨텍스트에서 호출되기 때문입니다.
 */

let buttonFuncObj = {
    value1 : "buttonFuncObj !",

    // 함수 선언 : 코드가 실행되기 전에 메모리에 로드
    clickDeclare() {
        alert(this.value1);  // buttonFuncObj !
    },

    // 함수표현식 : 런타임 중에 로딩
    clickExpress : function () {
        alert(this.value1);  // buttonFuncObj !
    },

    // 화살표 함수 : 런타임 중에 로딩 + 렉시컬 스코프 적용
    // 렉시컬 환경 : 현재 {} 스코프 상위의 this 를 정적 바인딩한다. -> 어느 상황이든 동일한 this를 지칭 하게 해줌
    clickArrow : () => {
        alert(this.value1);  // undefined
    }
}

// 함수 선언식: 정의된 지점의 this (동적 바인딩)
buttonFuncObj.clickDeclare();  // buttonFuncObj !
// 함수 표현식: 정의된 지점의 this (동적 바인딩 )
buttonFuncObj.clickExpress();  // buttonFuncObj !

// 화살표 함수: 호출 시점의 this  (정적 바인딩 )
buttonFuncObj.clickArrow();    // undefined
// 아래의 코드랑 동일한거임
alert(this.value1);            // undefined
/**
 * 화살표 함수만 제대로 안나오는 이유 :
 * 화살표 함수에서의 this 스코프는 렉시컬 환경이 적용 되는데
 * 렉시컬 환경의 this 는 상위 객체를 참조함.
 * buttonFuncObj의 상위 객체는 전역 스코프(main.js) 이므로 undefined 가 출력됨
 */



// --------------------------------------------------------------------------------------------------------------------

class Button {
    constructor(value) {
        this.value = value;
    }

    // 함수 선언식
    clickDeclare() {
        alert(this.value);
    }

    // 함수표현식
    clickExpress = function () {
        alert(this.value);
    }

    // 화살표 함수
    clickArrow = () => {
        alert(this.value);
    }
}

let button = new Button("안녕하세요.");

// 함수 선언식: 정의된 지점의 this (동적 바인딩)
button.clickDeclare();  // "안녕하세요."
// 함수 선언식: 정의된 지점의 this (동적 바인딩)
button.clickExpress();  // "안녕하세요."
// 화살표 함수: 호출 시점의 this  (정적 바인딩 )
button.clickArrow();  // "안녕하세요."

// setTimeout() 함수 설명 : 
// setTimeout(callback, 1000)의 콜백 함수는 기본적으로 전역 컨텍스트에서 호출

// 함수 선언식: 정의된 지점의 this (동적 바인딩)
setTimeout(button.clickDeclare, 500);  // undefined
// 함수 선언식: 정의된 지점의 this (동적 바인딩)
setTimeout(button.clickExpress, 1000); // undefined

// 화살표 함수: 호출 시점의 this  (정적 바인딩 )
setTimeout(button.clickArrow, 1500);   // "안녕하세요."
/**
 * 화살표 함수만 제대로 나오는 이유 : 
 * callback 등록시 해당 함수부분만 전달되므로 함수 선언식,표현식 둘다 button을 this로 가리키지 못함
 * 그러나 화살표 함수의 경우 정적 바인딩이므로 고정적으로 타겟을 참조 할 수 있음
 * 또한 렉시컬 환경이 적용되므로 상위 객체를 this로 참조 하게 된다.
 * 따라서 화살표 함수에서의 this 는 상위객체인 button 인스턴스를 가리키게 되므로 어디서든 button인스턴스를 this로 가리킬 수 있다.
 */
