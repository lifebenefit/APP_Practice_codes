'use strict';

let user = {     // 객체
    name: "John",  // 키: "name",  값: "John"
    age: 30        // 키: "age", 값: 30
};

// const user = {     // 객체
//     name: "John",  // 키: "name",  값: "John"
//     age: 30        // 키: "age", 값: 30
// };

// 프로퍼티 값 얻기
alert(user.name); // John
alert(user.age); // 30
alert(typeof (user.age));
delete user.age;

user.isAdmin = true;
user['addattr'] = "Liam";
alert(user.isAdmin);
alert(user.addattr);


alert("-----------")
alert(Object.values(user));
alert("-----------")
alert(JSON.stringify(user, 2));
alert("-----------")
alert(show_all_dict(user));
alert("-----------")
delete user['addattr'];

function show_all_dict(dict_data) {
    let output
    for (let k in user) {
        output += `${k} : ${user[k]}\n`;
    }
    return output
}
