alasql("CREATE TABLE example1 (a INT, b STRING)");

// alasql's data store for a table can be assigned directly
alasql.tables.example1.data = [
    {a:2,b:TEXT}
];

// ... or manipulated with normal SQL
alasql("INSERT INTO example1 VALUES (1,'TEXT')");
