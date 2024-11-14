alasql("CREATE TABLE example2 (a INT, b INT)");

// alasql's data store for a table can be assigned directly
alasql.tables.example2.data = [
    {a:1,b:2},
    {a:3,b:4}
];

// ... or manipulated with normal SQL
alasql("INSERT INTO example2 VALUES (1,5)");
