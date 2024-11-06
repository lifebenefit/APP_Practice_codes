// function checkProps(obj, props) {
//   props.forEach(prop => {
//     if (obj?.[prop] === undefined) {
//       console.log(
//         `Props Error : %c${prop}%c is missing in `,
//         'color: red; font-weight: bold;', // 첫 번째 스타일: 빨간색
//         'color: white; font-weight: normal;', // 두 번째 스타일: 기본 색상
//         obj
//       );
//     }
//   });
// }
// module.exports = { checkProps };


// // import { checkProps } from "../../shared/util/codeHelperUtils";
// // checkProps(responseData, [ 'userId', 'token' ]);


const log = require("./logger");

function checkProps (obj, props) {
  let value = undefined;
  props.forEach(prop => {
    value = obj?.[prop]
    if (value === undefined || value === null || value === "") {
      log.warn(`빠진 프로퍼티 값 : ${prop} `);
      console.dir(obj);
      console.log("");
    }
  });
  if (value === undefined || value === null || value === ""){ return false; }
  
  return true;
}

// 기본 내보내기
module.exports = { checkProps, log };


/**
사용 예시
1. checkProps 만 이용
const { checkProps } = require("../util/codeHelperUtils");
checkProps(obj, props);

2. checkProps, log 둘다 이용
const { checkProps, log } = require("../util/codeHelperUtils");
checkProps(obj, props);
log.warn("경고 메시지");
 */