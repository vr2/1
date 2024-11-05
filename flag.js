const { exec } = require('child_process');

// alasql의 fn 객체 정의
const alasql = {
    fn: {
        getFlag: function() {
            // 초기 값 설정
            return this.flagValue || "No flag available"; // 기본 값 설정
        },
        setFlag: function(value) {
            // 플래그 값을 설정
            this.flagValue = value;
        }
    }
};

// /flag 파일을 실행하고 플래그를 가져오는 함수 정의
function executeFlagFile() {
    exec('/flag', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing /flag file: ${error.message}`);
            return;
        }
        
        if (stderr) {
            console.error(`Error: ${stderr}`);
            return;
        }

        // /flag 파일에서 반환된 결과를 콘솔에 출력
        console.log("Output from /flag file: ", stdout.trim());
        
        // stdout 결과를 플래그 값으로 설정
        alasql.fn.setFlag(stdout.trim()); // 가져온 결과를 flag로 설정

        // 설정된 플래그 출력
        const flag = alasql.fn.getFlag();
        console.log("Flag: ", flag);
    });
}

// executeFlagFile 함수 호출
executeFlagFile();
