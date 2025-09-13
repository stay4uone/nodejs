const express = require('express');
const app = express();
const PORT = 80;

var os = require('os');

app.get('/', (req, res) => {
  res.send(os.networkInterfaces());
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
