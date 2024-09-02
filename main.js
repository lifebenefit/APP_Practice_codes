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


// /**
//  * This 함수와 Object, Class 
//  * 함수 표현식, 함수 선언식, 화살표 함수
//  * 이해하기

//  * 화살표 함수는 정적 바인딩으로 this의 참조를 고정적으로 가져가며, this 가 선언된 스코프( { } )의 상위객체를 참조 하게 된다.
//  * 이를 렉시컬 환경(스코프)라고 부른다.
//  * 렉시컬 환경 정의 : "코드가 작성된 위치에 따라 변수와 상위 스코프를 결정하는 JS의 스코프 체계이다."
//  * ex) 예를 들면
//        \ 전역 스코프에서 정의된 경우: 전역 스코프에서 화살표 함수를 정의하면, 그 this는 전역 객체(window 또는 global)를 참조합니다.
//        \ 객체의 메서드로 정의된 경우: 객체의 메서드로 화살표 함수를 정의하면, 그 this는 해당 객체가 아닌, 그 객체가 정의된 상위 스코프의 this를 참조합니다.
//        \ 클래스 내부에서 정의된 경우: 클래스 내부에서 화살표 함수를 정의하면, 그 this는 클래스 인스턴스를 참조합니다. 
//        \                             이는 클래스의 메서드가 인스턴스의 컨텍스트에서 호출되기 때문입니다.
//  */

// let buttonFuncObj = {
//     value1 : "buttonFuncObj !",

//     // 함수 선언 : 코드가 실행되기 전에 메모리에 로드
//     clickDeclare() {
//         alert(this.value1);  // buttonFuncObj !
//     },

//     // 함수표현식 : 런타임 중에 로딩
//     clickExpress : function () {
//         alert(this.value1);  // buttonFuncObj !
//     },

//     // 화살표 함수 : 런타임 중에 로딩 + 렉시컬 스코프 적용
//     // 렉시컬 환경 : 현재 {} 스코프 상위의 this 를 정적 바인딩한다. -> 어느 상황이든 동일한 this를 지칭 하게 해줌
//     clickArrow : () => {
//         alert(this.value1);  // undefined
//     }
// }

// // 함수 선언식: 정의된 지점의 this (동적 바인딩)
// buttonFuncObj.clickDeclare();  // buttonFuncObj !
// // 함수 표현식: 정의된 지점의 this (동적 바인딩 )
// buttonFuncObj.clickExpress();  // buttonFuncObj !

// // 화살표 함수: 작성된 위치의 상위객체를 고정적으로 참조 this  (정적 바인딩 )
// buttonFuncObj.clickArrow();    // undefined
// // 아래의 코드랑 동일한거임
// alert(this.value1);            // undefined
// /**
//  * 화살표 함수만 제대로 안나오는 이유 :
//  * 함수에서 사용되는 중괄호"{ }"는 독립적인 스코프를 제공하지만, 
//  * 객체 리터럴의 중괄호"{ }"는 단순히 키-값 쌍의 집합이기 때문에 "buttonFuncObj.clickArrow()"함수의 상위 함수는 전역객체가 된다.
//  * 따라서 전역객체에 value1은 없으므로 "undefined"가 출력된다.
//  * 
//  * 객체 리터럴 정의 : 중괄호 {}를 사용하여 키-값 쌍의 집합을 정의하는 자바스크립트의 문법
//  */


// // --------------------------------------------------------------------------------------------------------------------

// class Button {
//     constructor(value) {
//         this.value = value;
//     }

//     // 함수 선언식
//     clickDeclare() {
//         alert(this.value);
//     }

//     // 함수표현식
//     clickExpress = function () {
//         alert(this.value);
//     }

//     // 화살표 함수
//     clickArrow = () => {
//         alert(this.value);
//     }
// }

// let button = new Button("안녕하세요.");

// // 함수 선언식: 정의된 지점의 this (동적 바인딩)
// button.clickDeclare();  // "안녕하세요."
// // 함수 선언식: 정의된 지점의 this (동적 바인딩)
// button.clickExpress();  // "안녕하세요."
// // 화살표 함수: 작성된 위치의 상위객체를 고정적으로 참조 this  (정적 바인딩 )
// button.clickArrow();    // "안녕하세요."

// // setTimeout() 함수 설명 : 
// // setTimeout(callback, 1000)의 콜백 함수는 기본적으로 전역 컨텍스트에서 호출

// // 함수 선언식: 정의된 지점의 this (동적 바인딩)
// setTimeout(button.clickDeclare, 500);  // undefined
// // 함수 선언식: 정의된 지점의 this (동적 바인딩)
// setTimeout(button.clickExpress, 1000); // undefined

// // 화살표 함수: 작성된 위치의 상위객체를 고정적으로 참조 this  (정적 바인딩 )
// setTimeout(button.clickArrow, 1500);   // "안녕하세요."
// /**
//  * 화살표 함수만 제대로 나오는 이유 : 
//  * callback 등록시 해당 함수부분만 전달되므로 전역 컨텍스트에서 호출하게 된다. 그래서 함수 선언식,표현식 둘다 button을 this로 가리키지 못함
//  * 그러나 화살표 함수의 경우 정적 바인딩이므로 고정적으로 this 의 타겟을 참조 할 수 있음
//  * 또한 렉시컬 환경이 적용되므로 상위 객체를 this로 참조 하게 된다. [ 상위 객체를 this로 참조란 >> { }스코프 상위의 존재를 의미함 ]
//  * 따라서 화살표 함수에서의 this 는 상위객체인 button 인스턴스를 가리키게 되므로 어디서든 button인스턴스를 this로 가리킬 수 있다.
//  */


// class Animal {

//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }

//     run(speed) {
//         this.speed = speed;
//         alert(`${this.name}가 속도 ${this.speed}로 달립니다.`);
//     }

//     stop() {
//         this.speed = 0;
//         alert(`${this.name}가 멈췄습니다.`);
//     }

// }

// class Rabbit extends Animal {
//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }
//     hide() {
//         alert(`${this.name}가 숨었습니다!`);
//     }

//     stop() {
//         super.stop(); // 부모 클래스의 stop을 호출해 멈추고,
//         this.hide(); // 숨습니다.
//     }
// }

// let rabbit = new Rabbit("흰 토끼");

// rabbit.run(5); // 흰 토끼가 속도 5로 달립니다.
// rabbit.stop(); // 흰 토끼가 멈췄습니다. 흰 토끼가 숨었습니다!



// class Animal {

//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }
//     yesMother(){
//         alert("I am your mother");
//     }

//     // ...
// }

// class Rabbit extends Animal {

//     constructor(name, earLength) {
//         super(name);
//         this.earLength = earLength;
//     }
//     showMother(){
//         this.__proto__.yesMother();
//     }

//     // ...
// }

// // 이제 에러 없이 동작합니다.
// let rabbit = new Rabbit("흰 토끼", 10);
// alert(rabbit.name); // 흰 토끼
// alert(rabbit.earLength); // 10
// rabbit.showMother();



// let animal = {
//     name: "동물",
//     eat() {
//         alert(`${this.name} 이/가 먹이를 먹습니다.`);
//     }
// };

// let rabbit = {
//     __proto__: animal,
//     name: "토끼",
//     eat() {
//         // 예상대로라면 super.eat()이 동작해야 합니다.
//         this.__proto__.eat.call(this); // (*)
//         this.__proto__.eat();
//     }
// };

// rabbit.eat(); // 토끼 이/가 먹이를 먹습니다.



// class Article {
//     static varStatic = "클래스 변수";
//     constructor(title, date) {
//         this.title = title;
//         this.date = date;
//     }

//     static createTodays() {
//         // this는 Article입니다.
//         return new this("Today's digest", new Date());
//     }
//     static testStatic(){
//         return 1;
//     }
// }

// let article = Article.createTodays();

// alert(article.title); // Today's digest
// alert(Article.testStatic()); // 1
// alert(Article.varStatic);   // 클래스 변수
// alert(article.varStatic);   // undefined
// Article.varStatic = "클래스 변수 변경";
// alert(Article.varStatic);   // 클래스 변경

// // hasOwnProperty : 해당 클래스가 ( ) 안에 들어가 있는 프로퍼티가 있는지 확인
// alert(article.hasOwnProperty("title"));  // true



// class Animal {}
// class Rabbit extends Animal {}

// // 정적 메서드
// alert(Rabbit.__proto__ === Animal); // true

// // 일반 메서드
// alert(Rabbit.prototype.__proto__ === Animal.prototype); // true




// // private, protected 프로퍼티와 메서드 , 읽기 전용
// class CoffeeMachine {
//     _waterProtected = 0;    // '_' 가 붙으면 protected  // 상속시 사용가능      // 인스턴스 직접 접근 허용
//     #deviceSize = 0;        // '#' 가 붙으면 private    // 상속해도 사용 불가능 // 인스턴스 직접 접근 불가
//     _test = 0;

//     set waterAmount(value) {
//         if (value < 0) throw new Error("물의 양은 음수가 될 수 없습니다.");
//         this._waterAmount = value;
//     }

//     get waterAmount() {
//         return this._waterAmount;
//     }

//     constructor(power) {
//         this._power = power;
//     }
//     set setDeviceSize(ds) {
//         this.#deviceSize = ds;
//     }
//     get getDeviceSize(){
//         return this.#deviceSize
//     }
// }

// let coffeeMachine = new CoffeeMachine(220);
// coffeeMachine._waterAmount = 100;

// // 인스턴스 직접 접근 허용
// coffeeMachine._test = 999;
// alert(coffeeMachine._test);

// // // private -> 인스턴스 직접 접근 불가
// // coffeeMachine.#deviceSize = 10001;

// // private -> get set 접근은 허용
// coffeeMachine.setDeviceSize = 1000;
// alert(coffeeMachine.getDeviceSize);



// // 메서드 하나를 추가합니다(더 많이 추가하는 것도 가능).
// class CustomArray extends Array {
//     isLengthTwoOrFive() {
//         return (this.length === 5) || (this.length === 2);
//     }
// }

// let arr = new CustomArray(1, 2, 5, 10, 50);
// alert(arr.isLengthTwoOrFive()); // true

// let filteredArr = arr.filter(item => item >= 10);
// alert(filteredArr); // 10, 50
// alert(filteredArr.isLengthTwoOrFive()); // true
// alert("----------------------------------");
// // obj instanceof Class << 의미 : obj가 Class에 속하거나 Class를 상속받는 클래스에 속하면 true가 반환됩니다.
// // 따라서 객체(obj)가 특정 클래스(Class)의 인스턴스인지 확인하는 데 사용된다.
// alert( Array instanceof Object);        // true
// alert( CustomArray instanceof Array);   // false  // CustomArray는 클래스 자체이지, 인스턴스가 아니므로 instanceof 를 사용 할 수 없다.
// alert( Array instanceof CustomArray);   // false  // CustomArray는 클래스 자체이지, 인스턴스가 아니므로 instanceof 를 사용 할 수 없다.
// alert( CustomArray.__proto__ === Array);  // true  // CustomArray 의 부모인지 확인하려면
// alert("----------------------------------");
// alert( arr.__proto__ === CustomArray.prototype )  // true
// alert( arr.__proto__.__proto__ === Array.prototype ) // true
// alert(Object.getPrototypeOf(arr) === CustomArray.prototype); // true
// alert(Object.getPrototypeOf(CustomArray.prototype) === Array.prototype); // true
// alert( arr instanceof CustomArray);     // true
// alert( arr instanceof Array);           // true
// alert( arr instanceof Object);          // true


// /**
//  * 
// |               | 동작 대상                          | 반환값                                           |
// |---------------|-----------------------------------|--------------------------------------------------|
// | typeof        | 원시형                            | 문자열                                           |
// | {}.toString   | 원시형, 내장 객체,                 | Symbol.toStringTag가 있는 객체 문자열             |
// | instanceof    | 객체                              | true나 false                                     |

// 숫자형 – [object Number]
// 불린형 – [object Boolean]
// null – [object Null]
// undefined – [object Undefined]
// 배열 – [object Array]
// 그외 – 커스터마이징 가능
//  */
// class Test { }
// let s = Object.prototype.toString;

// alert(s.call(123));   // [object Number]
// alert(s.call(null));  // [object Null]
// alert(s.call(alert)); // [object Function]
// alert(Object.prototype.toString.call([]))   // [object Array]
// alert(Object.prototype.toString.call({}))   // [object Object]
// alert(Object.prototype.toString.call(Test)) // [object Function]


// alert("----------------------------------");
// // 특정 호스트 환경의 객체와 클래스에 구현된 toStringTag
// alert(window[Symbol.toStringTag]); // Window
// alert(XMLHttpRequest.prototype[Symbol.toStringTag]); // XMLHttpRequest

// alert(Object.prototype.toString.call(window)); // [object Window]
// alert(Object.prototype.toString.call(new XMLHttpRequest())); // [object XMLHttpRequest]
// // alert({}.toString.call(window)); // [object Window] 이렇게도 됨
// // alert({}.toString.call(new XMLHttpRequest())); // [object XMLHttpRequest] 이렇게도 됨

// alert("----------------------------------");
// let user = {
//     [Symbol.toStringTag]: "User"
// };
// alert(Object.prototype.toString.call(user)); // [object User]

// class MyClass {
//     get [Symbol.toStringTag]() {
//         return "MyClass <<<-- 유지보수 용이하게 가능";
//     }
// }
// let instance = new MyClass();
// alert(Object.prototype.toString.call(instance)); // [object MyClass]


// /**
//  * 에러 핸들링 try - catch - finally
//  */
// let json = "{ bad json }";

// try {

//     let user = JSON.parse(json); // <-- 여기서 에러가 발생하므로
//     alert(user.name); // 이 코드는 동작하지 않습니다.

// } catch (e) {
//     // 에러가 발생하면 제어 흐름이 catch 문으로 넘어옵니다.
//     alert("데이터에 에러가 있어 재요청을 시도합니다.");
//     alert(e.name);
//     alert(e.message);
//     alert(e.stack); // ReferenceError: lalala is not defined at ... (호출 스택)

//     // 에러 전체를 보여줄 수도 있습니다.
//     // 이때, 에러 객체는 "name: message" 형태의 문자열로 변환됩니다.
//     alert(e); // ReferenceError: lalala is not defined
// }


// let json2 = '{ "age": 30 }'; // 불완전한 데이터

// try {
//     let user = JSON.parse(json2); // <-- 에러 없음
//     if (!user.name) {
//         throw new SyntaxError("불완전한 데이터: name 키 없음"); // (*)
//     }
//     alert(user.name);
// } catch (e) {
//     alert("JSON Error: " + e.message); // JSON Error: 불완전한 데이터: name 키 없음
// } finally {
//     let tmp = JSON.parse(json2);
//     tmp["name"] = null;
//     json2 = JSON.stringify(tmp);
// }
// alert(json2)


// class ReadError extends Error {
//     constructor(message, cause) {
//         super(message);
//         this.cause = cause;
//         this.name = 'ReadError';
//     }
// }

// class ValidationError extends Error { /*...*/ }
// class PropertyRequiredError extends ValidationError { /* ... */ }

// function validateUser(user) {
//     if (!user.age) {
//         throw new PropertyRequiredError("age");
//     }

//     if (!user.name) {
//         throw new PropertyRequiredError("name");
//     }
// }

// function readUser(json) {
//     let user;

//     try {
//         user = JSON.parse(json);
//     } catch (err) {
//         if (err instanceof SyntaxError) {
//             throw new ReadError("Syntax Error", err);
//         } else {
//             throw err;
//         }
//     }

//     try {
//         validateUser(user);
//     } catch (err) {
//         if (err instanceof ValidationError) {
//             throw new ReadError("Validation Error", err);
//         } else {
//             throw err;
//         }
//     }

// }

// try {
//     // let jsonMsg = '{"age": 18, "name" : "john"}'  // 오케이
//     // let jsonMsg = '{"age": 18, "name" : ""}'  // Original error: Error: name
//     let jsonMsg = '{"age": 18}'  // Original error: Error: name
//     // let jsonMsg = '{형식이 아예 틀리면}'  // Original error: SyntaxError: Expected property name or '}' in JSON at position 1 (line 1 column 2)
//     readUser(jsonMsg);
// } catch (e) {
//     if (e instanceof ReadError) {
//         alert(e);
//         // Original error: SyntaxError: Unexpected token b in JSON at position 1
//         alert("Original error: " + e.cause);
//     } else {
//         throw e;
//     }
// }




















