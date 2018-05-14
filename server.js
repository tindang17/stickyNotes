const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

const server = app.listen(8080, () => {
  console.log(server.address());
  const host = server.address().address;
  const port = server.address().port;
  console.log(`App is running at http://${host}:${port}`);
});