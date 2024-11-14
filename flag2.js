const alasql = require('alasql');
alasql("CREATE TABLE example1 (a INT, b INT)");

// alasql's data store for a table can be assigned directly
alasql.tables.example1.data = [
    {a:1,b:2},
    {a:3,b:4}
];

// ... or manipulated with normal SQL
alasql("INSERT INTO example1 VALUES (1,5)");
