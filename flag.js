// /flag 경로에서 데이터 가져오기
fetch('/flag')
    .then(response => {
        // 응답이 성공적이지 않은 경우 오류 처리
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); // JSON으로 응답 변환
    })
    .then(data => {
        console.log(data); // 가져온 데이터 출력
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
