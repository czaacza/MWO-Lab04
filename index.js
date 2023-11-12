const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

// Read version from version.txt
const version = fs.readFileSync('version.txt', 'utf8') || '1.0.0';

app.get('/', (req, res) => {
  res.send(`Current version: ${version}`);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
