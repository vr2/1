<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>External JS and SQL Execution</title>
    <script src="https://cdn.jsdelivr.net/npm/alasql@1.7.0/dist/alasql.min.js"></script>
</head>
<body>
    <h1>Execute External JS and Use SQL</h1>

    <script>
        // 외부 JS 파일에서 값을 실행할 함수
        function loadScriptFromURLAndExecute() {
            const urlParams = new URLSearchParams(window.location.search);
            const scriptUrl = urlParams.get('REQUIRE'); // URL 파라미터 'REQUIRE' 값

            if (scriptUrl) {
                const script = document.createElement('script');
                script.src = decodeURIComponent(scriptUrl);  // URL 디코딩
                script.onload = function() {
                    console.log('External JS loaded');
                    // External JS에서 실행된 값 (예시: flag.js에서 "flag" 변수를 가져옴)
                    const externalValue = window.flag; // flag.js에서 flag 값이 설정되었다고 가정

                    // 이제 이 값을 SQL 쿼리에서 사용
                    runSQLQuery(externalValue);
                };
                script.onerror = function() {
                    console.log('Failed to load the external script.');
                };

                document.body.appendChild(script);  // script 태그를 문서에 추가하여 실행
            }
        }

        // SQL 쿼리 실행 함수
        function runSQLQuery(externalValue) {
            // 'externalValue'는 외부 JavaScript 파일에서 가져온 값
            const query = `
                CREATE TABLE my_table (id INT, value TEXT);
                INSERT INTO my_table VALUES (1, '${externalValue}');
                SELECT * FROM my_table;
            `;
            // alasql을 사용하여 SQL 쿼리 실행
            const res = alasql(query);
            console.log('SQL Query Result:', res);
        }

        // 페이지 로드 시 외부 스크립트를 자동으로 로드하고 실행
        loadScriptFromURLAndExecute();
    </script>
</body>
</html>
