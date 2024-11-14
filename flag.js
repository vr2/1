const fs = require('fs');
const alasql = require('alasql');

// /flag 파일 읽기
fs.readFile('/flag', 'utf8', (err, data) => {
  if (err) {
    console.error("파일을 읽는 중 오류 발생:", err);
    return;
  }
  
  // 읽어온 파일 내용을 출력
  console.log("파일 내용:", data);

  // 테이블 생성 및 데이터 삽입
  alasql('CREATE TABLE woo (a STRING)'); // woo 테이블 생성
  alasql('INSERT INTO woo VALUES (?)', [data]); // /flag 파일 내용 삽입
  
  // 데이터 확인을 위해 woo 테이블의 모든 데이터 조회
  const result = alasql('SELECT * FROM woo');
  console.log("woo 테이블 내용:", result);
});
