const fs = require('fs');
const alasql = require('alasql');

// getFlagContent 함수를 fs 모듈을 통해 직접 정의
function getFlagContent() {
    try {
        const data = fs.readFileSync('/flag', 'utf-8');
        return data;  // 파일 내용을 반환
    } catch (err) {
        console.error("Error reading the /flag file:", err);
        return null;  // 오류 발생 시 null 반환
    }
}

// getFlagContent를 alasql.fn에 등록
alasql.fn.getFlagContent = getFlagContent;

// alasql에서 함수 호출 테스트
const result = alasql('SELECT VALUE getFlagContent()');
console.log("Flag Content:", result);
