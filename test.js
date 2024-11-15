const { execSync } = require('child_process');

try {
  // /flag 파일을 직접 실행하여 결과 가져오기
  const flagContent = execSync('/flag').toString().trim();

  // AlaSQL에서 사용할 테이블 생성
  alasql('CREATE TABLE woo (a STRING)');  

  // /flag 파일 내용을 테이블에 삽입
  alasql('INSERT INTO woo VALUES (?)', [flagContent]);

  // 테이블 내용을 출력하여 확인
  const tableContent = alasql('SELECT * FROM woo');
  console.log("woo 테이블 내용:", tableContent);
} catch (error) {
  console.error("파일을 실행하는 중 오류 발생:", error.message);
}
