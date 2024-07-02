import express from 'express';

const app = express();
const port = 3000;

app.get('/api/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  res.json({ random: randomNumber });
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}/api/random`);
});

// import express, { json } from "express";

// const app = express();

// app.get("/random", (req, res) => {
//   Logik;
//   let number = Math.floor(Math.random() * 100);

//   res.status(200).json({
//     code: 200,
//     answer: number,
//   });
// });

// app.listen(3000, () => {
//   console.log("Server ist auf PORT 3000 gestartet!");
// });
