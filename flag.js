const fs = require('fs');
const alasql = require('alasql');

// getFlagContent 함수를 alasql.fn에 등록
alasql.fn.getFlagContent = function() {
    try {
        const data = fs.readFileSync('/flag', 'utf-8');
        return data;  // 파일 내용을 반환
    } catch (err) {
        console.error("Error reading the /flag file:", err);
        return null;  // 오류 발생 시 null 반환
    }
};

// alasql을 사용하여 함수 호출 예제
const result = alasql('SELECT VALUE getFlagContent()');
console.log("Flag Content:", result);
