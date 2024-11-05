const { exec } = require('child_process');

// alasql 객체 정의
const alasql = {
    fn: {
        flagValue: null, // 플래그 값을 저장할 변수

        // getFlag 함수 정의
        getFlag: function() {
            return this.flagValue || "No flag available"; // 저장된 플래그 반환
        },

        // /flag 파일을 실행하고 플래그를 가져오는 함수 정의
        executeFlagFile: function() {
            return new Promise((resolve, reject) => {
                exec('/flag', (error, stdout, stderr) => {
                    if (error) {
                        console.error(`Error executing /flag file: ${error.message}`);
                        return reject(error);
                    }
                    
                    if (stderr) {
                        console.error(`Error: ${stderr}`);
                        return reject(new Error(stderr));
                    }

                    // stdout 결과를 플래그 값으로 설정
                    this.flagValue = stdout.trim(); // 가져온 결과를 flag로 설정
                    resolve(this.flagValue); // 플래그 값을 resolve로 반환
                });
            });
        }
    }
};

// /flag 파일을 실행하고 플래그를 가져오는 함수 호출
alasql.fn.executeFlagFile()
    .then(flag => {
        console.log("Flag: ", flag); // 실행 결과를 출력
    })
    .catch(err => {
        console.error("Failed to execute /flag file: ", err);
    });
