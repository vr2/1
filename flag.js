const { exec } = require('child_process');

// /flag 파일을 실행하는 함수 정의
function runFlagFile() {
    exec('/flag', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing /flag file: ${error.message}`);
            return;
        }
        
        if (stderr) {
            console.error(`Error: ${stderr}`);
            return;
        }

        // /flag 파일에서 반환된 결과 출력
        console.log("Output from /flag file:", stdout.trim());
    });
}

// 함수 호출
runFlagFile();
