const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());

let categories;
fs.readFile("./categories.json", "utf8", (err, data) => {
  if (err) throw err;
  categories = JSON.parse(data);
});

app.get("/api/guess10", (req, res) => {
  const category = categories[Math.floor(Math.random() * categories.length)];
  res.json({
    category: category.name,
    items: category.items,
  });
});
app.get("/api/answer", (req, res) => {
  const category = req.query.category;
  const userAnswers = req.query.answers.split(",");
  const correctAnswers = categories.find((c) => c.name === category).items;
  let score = 0;
  userAnswers.forEach((answer) => {
    if (correctAnswers.includes(answer)) score++;
  });
  res.json({
    score: score,
    total: correctAnswers.length,
  });
});

app.listen(port, () => {
  console.log(`Guess10 API listening at http://localhost:${port}`);
});
