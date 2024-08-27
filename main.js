'use strict';

// let tt = 1;

// let a = 10,
//     b = 20,
//     c = 30;
// // alert(a+b-2+c);

// let d = 5
// // alert(d);


// const COLOR_RED = "#F00";
// const COLOR_GREEN = "#0F0";
// const COLOR_BLUE = "#00F";
// const COLOR_ORANGE = "#FF7F00";

// // 색상을 고르고 싶을 때 별칭을 사용할 수 있게 되었습니다.
// let color = COLOR_ORANGE;
// // alert(color); // #FF7F00

// let str = "Hello";
// let str2 = 'Single quotes are ok too';
// let phrase = `can embed another ${str}`;
// let phrase_test = 'can embed another ${str}';
// // alert(phrase); 

// let notWork = "can embed another ${str}";
// alert(notWork); 

// alert(typeof notWork);  // string 자료형 반환
// alert(typeof tt);  // number 자료형 반환


// let age = prompt('나이를 입력해주세요.', 100);

// alert(`당신의 나이는 ${age}살 입니다.`); // 당신의 나이는 100살입니다.


// let isBoss = confirm("당신이 주인인가요?");

// alert( isBoss ); // 확인 버튼을 눌렀다면 true가 출력됩니다.



// alert( Number("   123   ") ); // 123
// alert( Number("123z") );      // NaN ("z"를 숫자로 변환하는 데 실패함)
// alert( Number(true) );        // 1
// alert( Number(false) );       // 0


// alert( Boolean(1) ); // 숫자 1(true)
// alert( Boolean(0) ); // 숫자 0(false)

// alert( Boolean("hello") ); // 문자열(true)
// alert( Boolean("") ); // 빈 문자열(false)


// alert( 0 === false ); // false, 피연산자의 형이 다르기 때문입니다.
// alert( 0 == false ); // True


// let accessAllowed;
// let age = prompt('나이를 입력해 주세요.', '');

// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }
// alert(accessAllowed);

/* 3항 연산자
let result = condition ? value1 : value2;
 */

// let age = 20;
// let accessAllowed = (age > 18) ? true : false;
// alert(accessAllowed);

// (age > 30) ? alert(30) : alert(0);


// /*
// ||는 첫 번째 truthy 값을 반환합니다.
// ??는 첫 번째 정의된(defined) 값을 반환합니다.
//  */
// let firstName = null;
// let lastName = null;
// let nickName = "바이올렛";



// /*
// nullish 병합 연산자 ??를 사용하면 피연산자 중 ‘값이 할당된’ 변수를 빠르게 찾을 수 있습니다.
// ??는 변수에 기본값을 할당하는 용도로 사용할 수 있습니다.
// */

// // null이나 undefined가 아닌 첫 번째 피연산자
// alert(firstName ?? lastName ?? nickName ?? "익명의 사용자"); // 바이올렛

// alert("익명의 사용자" ?? firstName ?? lastName ?? nickName ); // "익명의 사용자"

// let height;
// height = height ?? 100;   // height가 null도 아니고 undefined도 아니면 height
// alert(height);

// let i = 6;
// while (i) { // i가 0이 되면 조건이 falsy가 되므로 반복문이 멈춥니다.
//     if (i % 2 == 0){
//         alert(`짝수 이므로 호출취소 ${i}`);
//     }
//     else{
//         alert( i );
//     }
//     i--;

//     if (i === 1) break;
// }

// i = 3;
// while (i) alert(i--);

// for (let i = 0; i < 3; i++) { // 0, 1, 2가 출력됩니다.
//     alert(i);
// }

// i=0;
// for (; i < 3; i++) { // 'begin'이 필요하지 않기 때문에 생략하였습니다.
//     alert( i )
// }

// alert("--------------");

// for (let i = 0; i < 10; i++) {

//     // 조건이 참이라면 남아있는 본문은 실행되지 않습니다.
//     if (i % 2 == 0) continue;

//     alert(i); // 1, 3, 5, 7, 9가 차례대로 출력됨
// }


// outer: for (let i = 0; i < 3; i++) {

//     for (let j = 0; j < 3; j++) {

//         let input = prompt(`(${i},${j})의 값`, '');

//         // 사용자가 아무것도 입력하지 않거나 Cancel 버튼을 누르면 두 반복문 모두를 빠져나옵니다.
//         if (!input) break outer; // (*)

//         // 입력받은 값을 가지고 무언가를 함
//     }
// }
// alert('완료!');

// alert("---------for-------------")
// // python 에서 fon _ in arr_test: alert(_)
// let arr_test = [1,2,3,4,5,6];
// for (let _ of arr_test){
//     alert(_);
// }

// // forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
// let call_arr = function ( value, index, array ) { alert(`${value}  , ${index}  , ${array}`) }
// arr_test.forEach(call_arr)

// alert("---------for-------------")



// let a = 3;
// a=5;

// switch (a) {
//   case 4:
//     alert('계산이 맞습니다!');
//     break;

//   case 3: // (*) 두 case문을 묶음
//   case 5:
//     alert('계산이 틀립니다!');
//     alert("수학 수업을 다시 들어보는걸 권유 드립니다.");
//     break;

//   default:
//     alert('계산 결과가 이상하네요.');
// }

// let browser = "Edge";

// if(browser == 'Edge') {
//     alert("Edge를 사용하고 계시네요!");
//   } else if (browser == 'Chrome'
//    || browser == 'Firefox'
//    || browser == 'Safari'
//    || browser == 'Opera') {
//     alert( '저희 서비스가 지원하는 브라우저를 사용하고 계시네요.' );
//   } else {
//     alert( '현재 페이지가 괜찮아 보이길 바랍니다!' );
//   }

// function checkAge(age) {
//     return (age > 18) ? true : confirm('보호자의 동의를 받으셨나요?');
// }

// function checkAge_2(age) {
//     return (age > 18) || confirm('보호자의 동의를 받으셨나요?');
// }
// alert(checkAge(3))

// alert('-------------');
// alert(true && confirm('보호자의 동의를 받으셨나요?'));
// alert('-------------');



// function showMessage(from, text = "no text given") {
//     alert( from + ": " + text );
// }

// showMessage("Ann"); // Ann: no text given
// showMessage("Ann", '123'); // Ann: no text given



// function showMessage_2(from, text = noTextCond()) {
//     alert( from + ": " + text );
// }
// showMessage_2("Aby");

// function noTextCond() {
//     return "no text given <<== from function return";
// }




// function say_test(){  // 함수 선언문 : 런타임 전에 메모리에 로딩 됨
//     alert("testttttttttttt");
//     return true;
// }

// // say_test = function(){  // 함수 표현식 : 런타임 시점에서 실행되므로 할당 이후에 함수사용이 가능하다
// //     alert("testttttttttttt");
// //     return true;
// // }


// say_test();

// let var_func = say_test;

// alert(var_func);

// alert(say_test);

// alert(var_func());

// // let say_test = 3;

// // alert(say_test);


// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }

//   function showOk() {
//     alert( "동의하셨습니다." );
//   }

//   function showCancel() {
//     alert( "취소 버튼을 누르셨습니다." );
//   }

//   // 사용법: 함수 showOk와 showCancel가 ask 함수의 인수로 전달됨
//   ask("동의하십니까?", showOk, showCancel);





/*
func_1 과 func_2 는 같은 식
*/
let func_1 = (arg1, arg2, ...argN) => true

let func_2 = function (arg1, arg2, ...argN) {
    return true;
};

alert(func_2());


let double = n => n * 2;
// let double = function(n) { return n * 2 }과 거의 동일합니다.

alert(double(3)); // 6


let sayHi = () => alert("hiiiiiiiiiiiii!");

sayHi();

let saytrue = () => true;
alert(saytrue())



let age = prompt("나이를 알려주세요.", 18);

let welcome = (age < 18) ?
    () => alert('안녕') :
    () => alert("안녕하세요!");

alert(welcome())


let ask = (q,yes,no) => (confirm(q)) ? yes() : no()

// ask("동의?", 
//     function() {alert("동의함")}, 
//     function() {alert("취소")})
ask("동의?", 
    () => {alert("동의함")}, 
    () => {alert("취소")})




// 화살표(=>) 우측엔 표현식이 있음
let sum1 = (a, b) => a + b;

// 중괄호{ ... }를 사용하면 본문에 여러 줄의 코드를 작성할 수 있음. return문이 꼭 있어야 함.
let sum2 = (a, b) => {
  // ...
  return a + b;
}

// 인수가 없는 경우
let sayHi3 = () => alert("Hello");

// 인수가 하나인 경우
let double4 = n => n * 2;





























