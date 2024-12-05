import express from 'express';

const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello from the API!');
});

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
