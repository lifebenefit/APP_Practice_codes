// --3
const log = require("console-log-level")({ level: "debug" });

function getLogDetails() {
  const stack = new Error().stack.split("\n")[3];
  const match = stack.match(/\((.*):(\d+):\d+\)/);
  if (match) {
    const filePath = match[1].split("\\");
    const directoryName = filePath[filePath.length - 2]; // 파일명만 추출
    const fileName = filePath[filePath.length - 1]; // 파일명만 추출
    return { file: directoryName+'/'+fileName, line: match[2] };
  }
  return { file: "unknown", line: "unknown" };
}

const colors = {
  reset: "\x1b[0m",
  gray: "\x1b[90m",
  white: "\x1b[37m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
};

const debugOff = true;
function createCustomLogger(level, color) {
  if (debugOff){
    return function (message) {
      const { file, line } = getLogDetails();
      const formattedMessage = `[${file}][${line}][${level}]> ${message}`;
      // console.log(color + formattedMessage + colors.reset);
      console.log(color + formattedMessage + colors.reset);
    };
  } else{
    return function (message) {
      ;
    }
  }
}

// 각 로그 레벨에 맞는 색상 적용
log.debug = createCustomLogger ("debug ", colors.gray);
log.info = createCustomLogger  ("info  ", colors.white);
log.notice = createCustomLogger("notice", colors.green);
log.warn = createCustomLogger  ("warn  ", colors.yellow);
log.error = createCustomLogger ("error ", colors.red);

// 사용 예시
const a = 1;
log.debug("디버그 메시지");
log.info("정보 메시지");
log.notice("공지 메시지");
log.warn("경고 메시지");
log.error("에러 메시지");
log.error(`로그테스트 : ${a}`);

module.exports = log;

// --2
// const log = require('console-log-level')({ level: 'info' });

// function getLogDetails() {
//   const stack = new Error().stack.split('\n')[3];
//   console.log(stack);
//   const match = stack.match(/\((.*):(\d+):\d+\)/);
//   console.log(match);
//   if (match) {
//     const filePath = match[1].split('\\');
//     const fileName = filePath[filePath.length - 1]; // 파일명만 추출
//     return { file: fileName, line: match[2] };
//   }
//   return { file: 'unknown', line: 'unknown' };
// }

// function customLog(level, message) {
//   const { file, line } = getLogDetails();
//   const formattedMessage = `[${file}] [${line}] [${level}] : ${message}`;

//   const colors = {
//     reset: "\x1b[0m",
//     gray: "\x1b[90m",
//     white: "\x1b[37m",
//     green: "\x1b[32m",
//     yellow: "\x1b[33m",
//     red: "\x1b[31m"
//   };

//   let color;
//   switch (level) {
//     case 'debug':
//       color = colors.gray;
//       break;
//     case 'info':
//       color = colors.white;
//       break;
//     case 'notice':
//       color = colors.green;
//       break;
//     case 'warn':
//       color = colors.yellow;
//       break;
//     case 'error':
//       color = colors.red;
//       break;
//     default:
//       color = colors.reset;
//   }

//   console.log(color + formattedMessage + colors.reset);
// }

// // 사용 예시
// customLog('debug', '디버그 메시지');
// customLog('info', '정보 메시지');
// customLog('notice', '공지 메시지');
// customLog('warn', '경고 메시지');
// customLog('error', '에러 메시지');

// --1
// const log = require('console-log-level')({ level: 'info' });

// function getLogDetails() {
//   const stack = new Error().stack.split('\n')[3];
//   const match = stack.match(/\((.*):(\d+):\d+\)/);
//   if (match) {
//     const filePath = match[1].split('\\');
//     const fileName = filePath[filePath.length - 1]; // 파일명만 추출
//     return { file: fileName, line: match[2] };
//   }
//   return { file: 'unknown', line: 'unknown' };
// }

// function customLog(level, message) {
//   const { file, line } = getLogDetails();
//   const formattedMessage = `[${file}] [${line}] [${level}] : ${message}`;
//   log[level](formattedMessage);
// }

// // 사용 예시
// customLog('info', '정보 메시지');
// customLog('warn', '경고 메시지');
