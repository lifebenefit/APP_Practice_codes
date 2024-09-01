'use strict';

// let user = {     // 객체
//     name: "John",  // 키: "name",  값: "John"
//     age: 30,        // 키: "age", 값: 30
//     test: "test_k",
//     "99": true
// };

// let clone_user1 = {};
// let clone_user2 = Object();
// let clone_user3 = Object();
// // let clone_user = 
// clone_user1 = user;                     // 얕은 복사
// alert(clone_user1 === user);        // 얕은 복사이므로 true

// Object.assign(clone_user2, user);   // 깊은 복사
// alert(clone_user2 === user);        // 깊은 복사이므로 false

// clone_user3 = Object.assign({}, user)   // 깊은 복사
// alert(clone_user3 === user);            // 깊은 복사이므로 false


// user = {     // 객체
//     name: "John",  // 키: "name",  값: "John"
//     age: 30        // 키: "age", 값: 30
// };

// // 프로퍼티 값 얻기
// alert(user.name); // John
// alert(user.age); // 30
// alert(typeof (user.age));
// delete user.age;

// user.isAdmin = true;
// user['addattr'] = "Liam";
// alert(user.isAdmin);
// alert(user.addattr);

// alert("-------------------")
// alert(Object.keys(user));
// alert(Object.values(user));
// alert(Object.entries(user));
// alert("-------------------")

// /**
//  * Dictionary -to-> JSON =====================================================================================
//  */
// alert(JSON.stringify(clone_user1));
// alert(JSON.stringify(clone_user1, null, 4)); // 보기 좋게 줄바뀜 + 들여쓰기(4공백)
// alert(JSON.stringify(clone_user1, ['name', 'age']));
// alert("-------------------")
// /**
//  * JSON -to-> Dictionary
//  */
// let strUserData = '{ "name": "John", \
//                     "age": 35, "isAdmin": false, \
//                     "date":"2017-11-30T12:00:00.000Z", \
//                     "friends": [0,1,2,3] }';
// let objUserData = JSON.parse(strUserData);
// alert(objUserData["name"]);
// alert(objUserData.friends[1]);
// let dataObject = new Date(objUserData.date);
// alert(dataObject.getTime());
// alert(dataObject.getFullYear());
// alert(JSON.stringify(objUserData, null, 4)); // 보기 좋게 줄바뀜 + 들여쓰기(4공백)
// alert("-------------------")
// /**
//  * ============================================================================================================
//  */

// alert(show_all_dict(clone_user2));
// alert("-------------------")
// alert("name" in user);
// alert("John" in user);
// delete user['99'];

// function show_all_dict(dict_data) {
//     let output = "";
//     for (let k in dict_data) {
//         output += `${k} : ${user[k]}\n`;
//     }
//     return output
// }



// let user = {
//     name: "user",
//     age: 30,

//     call_member_val() {
//         return this.name;
//     }

// };


// let admin = {
//     name: "admin",
//     age: 30,

//     call_member_val() {
//         return this.name;
//     }

// };

// alert(user.call_member_val());
// user["name"] = "changed_value1"
// alert(user["name"]);

// alert(admin.call_member_val());
// admin["name"] = "changed_value2"
// alert(admin["name"]);



// // var firstName = "Global보라";    // 전역변수 선언 방법
// window.firstName = "Global보라";    // 전역변수 선언 방법
// let test = {
//     firstName: "Local보라",
//     sayGlobalVar: () => {       // 함수 표현식
//         alert(this.firstName)   // ( )
//     },

//     sayProperty() {             // 함수 선언문
//         alert(this.firstName)   // ( 런타임에서 로딩되므로 여기서 this 는 test Obj
//     }
// };

// test.sayProperty();     // Local보라
// test.sayGlobalVar();    // Global보라

// let num = 10;
// num.toString(num);
// String(num);

// let str_data = "10";
// Number(str_data);

// let s_data = "ABcdAB"
// alert(`${s_data.toLowerCase()}  ,  ${s_data.toLowerCase}`);
// alert(`${s_data.indexOf("A")}`);        // 2 find  
// alert(`${s_data.lastIndexOf("A")}`);    // 4 rfind 
// alert(`${s_data.includes("cd")}`);      // true
// alert(`${s_data.slice(2, 4)}`);         // cd
// alert(`${s_data.length}`);              // 6

// let emptyNum;
// alert(isNaN(NaN)); // true
// alert(isNaN("str")); // true
// alert(isNaN("3")); // false
// alert(isNaN(3)); // false
// alert(isNaN(emptyNum)); // true
// alert("---------------");
// alert(emptyNum === undefined); // true


// alert(Math.random());
// alert(Math.max(3, 5, -10, 0, 1)); // 5
// alert(Math.min(1, 2)); // 1
// alert(Math.pow(2, 10)); // 2의 10제곱 = 1024


// const enumerableObj = { a: 1, b: 2, c: 3 };     // 열거 가능한 옵젝
// const iterableObj = ['a', 'b', 'c'];    // 반복 가능한 옵젝

// for (let k in enumerableObj) {
//     console.log(k); // "a", "b", "c"
// }

// for (let k in iterableObj) {
//     console.log(k); // "0", "1", "2"  // ? 안쓰일듯
//     // console.log(typeof(k)); // string
//     // console.log(iterableObj.length);  // 3
// }

// console.log("---------------------------");
// for (let k of Object.keys(enumerableObj)){
//     console.log(k);
// }

// for (let k of Object.values(enumerableObj)){
//     console.log(k);
// }

// for (let [k, v] of Object.entries(enumerableObj)){
//     console.log(`${k} : ${v} \n`);
// }

// console.log("---------------------------");

// for (let k of iterableObj) {
//     console.log(k); // "a", "b", "c"
// }


// let fruits = ["사과"];

// fruits.push("오렌지", "배");
// alert(fruits);
// fruits.unshift("파인애플", "레몬");
// alert(fruits);
// // ["파인애플", "레몬", "사과", "오렌지", "배"]

// alert(fruits.pop()); // 배열에서 "배"를 제거하고 제거된 요소를 얼럿창에 띄웁니다.
// alert(fruits);
// alert(fruits.shift()); // 배열에서 "사과"를 제거하고 제거된 요소를 얼럿창에 띄웁니다.
// alert(fruits);              // ["레몬", "사과", "오렌지"]

// for (let tmp of fruits) {
//     alert(tmp);             // "레몬" > "사과" > "오렌지"
// }

// for (let key in fruits) {
//     alert(fruits[key]);     // "레몬" > "사과" > "오렌지"
// }

// let arr = [1, 2, 3];

// alert( arr ); // 1,2,3
// alert( String(arr) === '1,2,3' ); // true

// let arr = [1, 2, 3, 4, 5];

// delete arr[2];  // 1,2,,4,5
// alert(arr);
// arr[2] = 3;
// alert(arr);

// arr.splice(2,);  // 1,2
// alert(arr);

// arr = [1, 2, 3, 4, 5];
// arr.splice(-2,);  // 1,2,3
// alert(arr);

// arr = [1, 2, 3, 4, 5];
// arr.splice(0, 3, 99, 99, 99, 99);  // 99,99,99,99,4,5
// alert(arr);

// arr = [1, 2, 3, 4, 5];
// alert(arr.slice(0, 0))   // ""
// alert(arr.slice(0, 2))   // 1,2
// alert(arr);             // 1,2,3,4,5

// ["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//     alert(`${item} is at index ${index} in ${array}`);
// });


// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }

// let arr = [1, 2, 15];
// alert( arr.sort() );   // 1, 15, 2
// alert( arr.reverse()); // 2,15,1
// arr.sort(compareNumeric);
// alert(arr);  // 1, 2, 15

// alert(Array.isArray(arr)); // true



/*
요소를 더하거나 지우기

push(...items) – 맨 끝에 요소 추가하기
pop() – 맨 끝 요소 추출하기
shift() – 첫 요소 추출하기
unshift(...items) – 맨 앞에 요소 추가하기
splice(pos, deleteCount, ...items) – pos부터 deleteCount개의 요소를 지우고, items 추가하기
slice(start, end) – start부터 end 바로 앞까지의 요소를 복사해 새로운 배열을 만듦
concat(...items) – 배열의 모든 요소를 복사하고 items를 추가해 새로운 배열을 만든 후 이를 반환함. items가 배열이면 이 배열의 인수를 기존 배열에 더해줌
원하는 요소 찾기

indexOf/lastIndexOf(item, pos) – pos부터 원하는 item을 찾음. 찾게 되면 해당 요소의 인덱스를, 아니면 -1을 반환함
includes(value) – 배열에 value가 있으면 true를, 그렇지 않으면 false를 반환함
find/filter(func) – func의 반환 값을 true로 만드는 첫 번째/전체 요소를 반환함
findIndex는 find와 유사함. 다만 요소 대신 인덱스를 반환함
배열 전체 순회하기

forEach(func) – 모든 요소에 func을 호출함. 결과는 반환되지 않음
배열 변형하기

map(func) – 모든 요소에 func을 호출하고, 반환된 결과를 가지고 새로운 배열을 만듦
sort(func) – 배열을 정렬하고 정렬된 배열을 반환함
reverse() – 배열을 뒤집어 반환함
split/join – 문자열을 배열로, 배열을 문자열로 변환함
reduce(func, initial) – 요소를 차례로 돌면서 func을 호출함. 반환값은 다음 함수 호출에 전달함. 최종적으로 하나의 값이 도출됨
기타

Array.isArray(arr) – arr이 배열인지 여부를 판단함
sort, reverse, splice는 기존 배열을 변형시킨다는 점에 주의하시기 바랍니다.
*/

// /**
//  * 할당 연산자 우측엔 모든 이터러블이 올 수 있습니다.
//  */
// // 이름과 성을 요소로 가진 배열
// let arr = ["Bora", "Lee"]

// // 구조 분해 할당을 이용해
// // firstName엔 arr[0]을
// // surname엔 arr[1]을 할당하였습니다.
// let [firstName, surname] = arr;

// alert(firstName); // Bora
// alert(surname);  // Lee

// let [a, b] = "Bora Lee".split(' ');

// // 두 번째 요소는 필요하지 않음
// let [c, , d] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// alert( c );
// alert( d ); // Consul


// let old_date = new Date("2017-01-26");
// alert(old_date);

// // 현재 일시
// let now = new Date();
// alert(now); // 현재 날짜 및 시간이 출력됨
// alert(+now);
// alert(now.getTime());

// // 현지 시간 기준 시
// alert(now.getFullYear());
// alert(now.getMonth());
// alert(now.getDay());
// alert(now.getHours());
// alert(now.getMinutes());
// alert(now.getSeconds());

// let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

// alert(ms); // 1327611110417  (타임스탬프)


// /**
//  * 자료 구조
//  */
// // 링크드 리스트 // 연결 리스트
// let linked_list_1 = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };

// let linked_list_2 = { value: 1 };
// linked_list_2.next = { value: 2 };
// linked_list_2.next.next = { value: 3 };
// linked_list_2.next.next.next = { value: 4 };
// linked_list_2.next.next.next.next = null;

// let i = 0;
// let current = linked_list_1;
// while (current !== null) {
//     console.log(`${i + 1} : ${current.value}`);
//     current = current.next;
//     i++;
// }


// // 기변 인자
// function sumAll(x, y = null, ...rest) { // ...이 가변인자 rest가 배열의 이름
//     if (rest != "") {
//         console.log(`추가로 온 인 수들 ${typeof (rest)} > ${rest}`)
//         console.log(`추가로 온 인 수들 ${Object.prototype.toString.call(rest)} > ${rest}`)
//         console.log(rest[3])
//     }
//     if (y === null) {
//         return x
//     } else {
//         return x + y
//     }
//     // return x+y
//     // let sum = 0;

//     // for (let arg of args) sum += arg;

//     // return sum;
// }

// alert(sumAll(1)); // 1
// alert(sumAll(1, 2)); // 3
// alert(sumAll(1, 2, 3)); // 6
// alert(sumAll(1, 2, 3, 4, 5, 6)); // 


// function declarationSayHi(a, b, c, ...rest) {
//     let name = "memberValue";
//     name: "name";
//     alert("Hi");
// }

// alert(declarationSayHi.name); // declarationSayHi
// alert(declarationSayHi.length);


// let expressionSayHi = function (...rest) {
//     let name = "memberValue";
//     name: "name";
//     alert("Hi");
//     expressionSayHi.classValueCount++;
// };

// alert(expressionSayHi.name); // expressionSayHi (익명 함수이지만 이름이 있네요!)
// alert(expressionSayHi.length);

// expressionSayHi.classValueCount = 0;
// alert( `호출 횟수: ${expressionSayHi.classValueCount}회` ); // 호출 횟수: 2회
// expressionSayHi();
// expressionSayHi();
// alert( `호출 횟수: ${expressionSayHi.classValueCount}회` ); // 호출 횟수: 2회


// /**
//  * let func = new Function ([arg1, arg2, ...argN], functionBody);
//  * 함수를 인자로 넘겨 동적으로 생성하는 함수
//  * 런타임중 함수를 생성해 써야 하는 경우 [ 원격지의 코드를 건들지 않고 통신으로 함수 생성 가능 ]
//  * 서버 --"함수1"(FastAPI)--> 앱 [ 함수1() ]
//  */
// let sum = new Function('a', 'b', 'return a + b');

// alert(sum(1, 2)); // 3

// let sayHi = new Function('alert("Hello")');

// sayHi(); // Hello


// // 예약 호출
// function sayHi1() {
//     alert('안녕하세요.');
// }

// setTimeout(sayHi1, 1000);
// alert('------------.');
// function sayHi2(who, phrase) {
//     alert(who + ' 님, ' + phrase);
// }

// setTimeout(sayHi2, 1000, "홍길동", "안녕하세요."); // 홍길동 님, 안녕하세요.

// setTimeout(() => alert('안녕하세요.'), 1000);

// // 2초 간격으로 메시지를 보여줌
// let timerId = setInterval(() => alert('째깍'), 2000);

// // 5초 후에 정지
// setTimeout(() => { clearInterval(timerId); alert('정지'); }, 5000);
// alert('------------.');


// setTimeout(() => alert("World"));

// alert("Hello");

// let user = {
//     firstName: "John"
// };

// function func(phrase) {
//     alert(phrase + ', ' + this.firstName);
// }

// // this를 user로 바인딩합니다.
// let funcUser = func.bind(user);

// funcUser("Hello"); // Hello, John (인수 "Hello"가 넘겨지고 this는 user로 고정됩니다.)

// /**
//  * getter
//  * setter
//  * 이용 << JS 의 경우 Object의 프로퍼티들의 컨텍스트가 의도치 않게 동작 할 수 있다.
//  * getter setter 함수를 이용해서 this문법의 환경컨텍스트를 고정시키자
//  */
// let userGet = {
//     name: "John",
//     surname: "Smith",

//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     }
// };

// alert(userGet.fullName);  // John Smith
// let contextTest = userGet;
// alert(contextTest.fullName);  // John Smith

// let userGetSet = {
//     name: "John",
//     surname: "Smith",

//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     },

//     set fullName(value) {
//         [this.name, this.surname] = value.split(",");
//     }
// };

// alert(userGetSet.fullName);  // John Smith
// // 주어진 값을 사용해 set fullName이 실행됩니다.
// userGetSet.fullName = "Alice,Cooper";

// alert(userGetSet.fullName);  // Alice,Cooper

// alert(userGetSet.name); // Alice
// alert(userGetSet.surname); // Cooper


// let user = {
//     get name() {
//         return this._name;
//     },

//     set name(value) {
//         if (value.length < 4) {
//             alert("입력하신 값이 너무 짧습니다. 네 글자 이상으로 구성된 이름을 입력하세요.");
//             return;
//         }
//         this._name = value;
//     }
// };

// user.name = "Pete";
// alert(user.name);   // Pete
// let tmp = user;
// alert(tmp.name);    // Pete

// user.name = ""; // 입력하신 값이 너무 짧습니다. 네 글자 이상으로 구성된 이름을 입력하세요.


// // __proto__ 와 prototype 
// /**
//  * 1. __proto__ 는 클래스, 함수, Object 전부 가지고 있는 프로퍼티이다.
//  * 2. __proto__ 는 상속받는 부모를 가리킨다.
//  * 3. prototype 은 함수(생성자함수든 일반 함수든)와 클래스 만 가지고 있는 프로퍼티이다.
//  * 4. prototype 은 함수와 클래스로 생성된 객체들이 공유하는 공간이며 고유한 공간이다.
//  *     ex) [ a = new Animal() ... b = new Animal() << a 와 b 는 같은 prototype 프로퍼티를 가리킨다 ]
//  * 5. class Dog extend Animal {~~}; let myDog = new Dog("jully"); 의 경우,
//  *     -> myDog의 __proto__는 Dog의 prototype, Dog(myDog.__proto__)의 __proto__는 Animal의 prototype 이다.
//  */
// let animal = {
//     eats: true,
//     walk() {
//         alert("동물이 걷습니다.");
//     }
// };

// let tmp_type = "check this type"
// alert(Object.prototype.toString.call(tmp_type));
// alert(animal.__proto__);

// let rabbit = {
//     jumps: true,
//     __proto__: animal
// };

// alert(rabbit.__proto__);

// // 메서드 walk는 rabbit의 프로토타입인 animal에서 상속받았습니다.
// rabbit.walk(); // 동물이 걷습니다.

// let animal2 = {
//     eats: true
// };


// /**
//  * 생성자 함수
//  * 생성자 함수(constructor function)와 일반 함수에 기술적인 차이는 없습니다. 다만 생성자 함수는 아래 두 관례를 따릅니다.
//  * 1. 함수 이름의 첫 글자는 대문자로 시작합니다.
//  * 2. 반드시 'new' 연산자를 붙여 실행합니다.
//  */
// function Rabbit2(name) {
//     this.name = name;
// }
// alert(Rabbit2.__proto__);
// alert(Rabbit2.prototype);
// Rabbit2.prototype = animal2;

// let rabbit2 = new Rabbit2("흰 토끼"); //  rabbit2.__proto__ == animal
// alert(rabbit2.__proto__);
// alert(rabbit2.prototype);

// alert(rabbit2.eats); // true



// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name);
//         this.breed = breed;
//     }
// }

// const myDog = new Dog('Buddy', 'Golden Retriever');
// console.log(myDog.__proto__ === Dog.prototype); // true
// console.log(myDog.__proto__.__proto__ === Animal.prototype); // true


let arr = [1, 2, 3];

// arr은 Array.prototype을 상속받았나요?
alert( arr.__proto__ === Array.prototype ); // true

// arr은 Object.prototype을 상속받았나요?
alert( arr.__proto__.__proto__ === Object.prototype ); // true

// 체인 맨 위엔 null이 있습니다.
alert( arr.__proto__.__proto__.__proto__ ); // null
