const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`<h1 style="text-align:center;">Bootcamp React+Node Devlights</h1>`);
});

module.exports = router;
