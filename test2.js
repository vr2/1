alasql('CREATE TABLE genie (content TEXT)');
alasql.tables.genie.data = [
    {content:"test"}
];
alasql('INSERT INTO genie VALUES ("aaaa")');
