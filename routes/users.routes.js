const express = require("express");
const router = express.Router();
const userModel = require("../models/user.model");

router.get("/api/users", (req, res) => {
  userModel.find({}, (error, data) => {
    if (error) res.json({ status: 500, error });
    return res.json({ status: 200, data });
  });
});

module.exports = router;
