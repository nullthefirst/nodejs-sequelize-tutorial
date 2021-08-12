const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello from server.js');
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
