// 'use strict';

// let user = {     // 객체
//     name: "John",  // 키: "name",  값: "John"
//     age: 30,        // 키: "age", 값: 30
//     "99": true
// };

// let clone_user1 = {};
// let clone_user2 = Object();
// let clone_user3 = Object();
// // let clone_user = 
// clone_user1 = user;                 // 얕은 복사
// alert(clone_user1 === user);        // 얕은 복사이므로 true

// Object.assign(clone_user2, user);   // 깊은 복사
// alert(clone_user2 === user);        // 깊은 복사이므로 false

// clone_user3 = Object.assign({}, user)   // 깊은 복사
// alert(clone_user3 === user);            // 깊은 복사이므로 false


// const user = {     // 객체
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


// alert(Object.values(user));
// alert(JSON.stringify(clone_user1, 2));
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



// var firstName = "Global보라";    // 전역변수 선언 방법
window.firstName = "Global보라";    // 전역변수 선언 방법
let test = {
    firstName: "Local보라",
    sayGlobalVar: () => {       // 함수 표현식
        alert(this.firstName)   // ( )
    },

    sayProperty() {             // 함수 선언문
        alert(this.firstName)   // ( 런타임에서 로딩되므로 여기서 this 는 test Obj
    }
};

test.sayProperty();     // Local보라
test.sayGlobalVar();    // Global보라



/* 
함수 선언(Function Declaration)
*/
function func_test_1(argu) {  // 함수 선언 : 런타임 전에 메모리에 로딩 됨
    alert(`argu : ${argu}`);
    return true;
}
func_test_1("func_test_1");

/*
함수 표현식(Function Expression)
*/
let func_test_2 = function (argu) {  // 함수 표현식 : 런타임 시점에서 실행되므로 할당 이후에 함수사용이 가능하다
    alert(`argu : ${argu}`);
    return true;
};
func_test_2("func_test_2");

/*
함수 선언 + 화살표 함수
// (argu) => { alert(`argu : ${argu}`); }  <<이건<< 인라인 함수 개념
*/
call_func((argu) => { alert(`argu : ${argu}`); })  // argu : call_func
// 보통 이렇게 응용함
function call_func(callbackfn) {
    callbackfn("call_func");
}


/*
함수 표현식 + 화살표 함수
*/
let func_test_3 = (argu) => { alert(`argu : ${argu}`); return true; };
func_test_3("func_test_3");
call_func(func_test_3)  // argu : call_func