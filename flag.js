const { exec } = require('child_process');

// /flag 파일을 실행하고 플래그를 가져오는 함수 정의
alasql.fn.getFlag = function () {
    exec('/flag', (error, stdout, stderr) => {
        return stdout.trim
    });
}
