const fs = require('fs');

// /flag 파일의 내용을 문자열로 반환하는 함수
function getFlagContent() {
    try {
        const data = fs.readFileSync('/flag', 'utf-8');
        return data;  // 파일 내용을 반환
    } catch (err) {
        console.error("Error reading the /flag file:", err);
        return null;  // 오류 발생 시 null 반환
    }
}

// 함수 실행 예제
const flagContent = getFlagContent();
if (flagContent) {
    console.log("Flag Content:", flagContent);
} else {
    console.log("Failed to retrieve flag content.");
}
