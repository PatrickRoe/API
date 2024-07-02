const express = require('express');
const app = express();
const port = 3000;

app.get('/api/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1; 
  res.json({ random: randomNumber });
});

app.listen( () => {
  console.log("Server läuft");
});
