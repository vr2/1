const alasql = require('alasql');

// getFlag 함수 정의
alasql.fn.getFlag = function() {
    // CREATE TABLE 쿼리 실행
    alasql('CREATE TABLE woo (a INT, b INT);');

    // INSERT INTO 쿼리 실행
    alasql('INSERT INTO woo VALUES (1, 2);');

    // SELECT 쿼리로 결과 반환
    const result = alasql('SELECT * FROM woo');
    
    // 반환할 결과
    return `This is a flag string. Query result: ${JSON.stringify(result)}`;
};

// 예시로 함수 호출
const flag = alasql.fn.getFlag();
console.log(flag);  // "This is a flag string. Query result: [{a: 1, b: 2}]"
