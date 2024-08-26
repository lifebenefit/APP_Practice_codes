'use strict';

let tt = 1;

let a = 10,
    b = 20,
    c = 30;
// alert(a+b-2+c);

let d = 5
// alert(d);


const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// 색상을 고르고 싶을 때 별칭을 사용할 수 있게 되었습니다.
let color = COLOR_ORANGE;
// alert(color); // #FF7F00

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
let phrase_test = 'can embed another ${str}';
// alert(phrase); 

let notWork = "can embed another ${str}";
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

// let arr_test = [10,5,77];
// for (let _ of arr_test){
//     alert(_);
// }
















