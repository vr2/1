alasql("CREATE TABLE example1 (a INT, b INT)");
alasql.tables.example1.data = [
    {a:2,b:6},
    {a:3,b:4}
];
alasql("INSERT INTO example1 VALUES (1,5)");
