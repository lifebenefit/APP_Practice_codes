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

/**
 * 자료 구조
 */
// 링크드 리스트 // 연결 리스트
let linked_list_1 = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

let linked_list_2 = { value: 1 };
linked_list_2.next = { value: 2 };
linked_list_2.next.next = { value: 3 };
linked_list_2.next.next.next = { value: 4 };
linked_list_2.next.next.next.next = null;

let i = 0;
let current = linked_list_1;
while (current !== null) {
    console.log(`${i + 1} : ${current.value}`);
    current = current.next;
    i++;
}


// 기변 인자
function sumAll(x, y = null, ...rest) { // ...이 가변인자 rest가 배열의 이름
    if (args != "") {
        console.log(`추가로 온 인 수들 ${typeof (args)} > ${args}`)
        console.log(`추가로 온 인 수들 ${Object.prototype.toString.call(args)} > ${args}`)
        console.log(args[3])
    }
    if (y === null) {
        return x
    } else {
        return x + y
    }
    // return x+y
    // let sum = 0;

    // for (let arg of args) sum += arg;

    // return sum;
}

alert(sumAll(1)); // 1
alert(sumAll(1, 2)); // 3
alert(sumAll(1, 2, 3)); // 6
alert(sumAll(1, 2, 3, 4, 5, 6)); // 
























