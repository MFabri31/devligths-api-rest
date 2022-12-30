const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bootcamp React+Node Devlights");
});

const PORT = 3500;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
