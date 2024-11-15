const { execSync } = require('child_process');
const alasql = require('alasql');

// executeFile 함수 정의
alasql.fn.executeFile = function(filename) {
  try {
    // filename을 실행하여 결과를 반환
    return execSync('/flag').toString().trim(); // /flag 파일 내용을 읽음
  } catch (error) {
    return error.message;
  }
};
