function executeFile(filename) {
  const { execSync } = require('child_process');
  try {
    return execSync(filename).toString();
  } catch (error) {
    return error.message;
  }
}

alasql('CREATE TABLE genie (content TEXT)');
alasql.tables.genie.data = [
    {content:"test"}
];

alasql('INSERT INTO genie VALUES (executeFile("/FLAG"))');
