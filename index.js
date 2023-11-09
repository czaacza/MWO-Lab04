const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Version will be set by GitHub Actions
const version = process.env.VERSION || '1.0.0';

app.get('/', (req, res) => {
  res.send(`Current version: ${version}`);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
