const express = require("express");
const router = express.Router();
const userModel = require("../models/user.model");

router.get("/api/users", (req, res) => {
  userModel.find({}, (error, data) => {
    if (error) res.json({ status: 500, error });
    res.json({ status: 200, data });
  });
});

router.get("/api/users/:id", (req, res) => {
  userModel.find({ id: req.params.id }, (error, data) => {
    if (error) res.json({ status: 500, error });
    res.json({ status: 200, data });
  });
});

module.exports = router;
