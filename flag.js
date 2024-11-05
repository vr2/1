// flag.js

// 플래그를 반환하는 함수 정의
alasql.fn.getFlag = function() {
    return "This is a flag string."; // 예시로 문자열 반환
};

// /flag 파일을 요청하는 함수 정의
function runFlagFile() {
    // 플래그 문자열을 가져옴
    const flag = alasql.fn.getFlag();
    
    // 가져온 플래그를 콘솔에 출력
    console.log("Flag: ", flag);
}

// runFlagFile 함수를 호출하여 /flag 파일을 실행
runFlagFile();
