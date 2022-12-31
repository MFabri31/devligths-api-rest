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

router.post("/api/users", (req, res) => {
  const user = new userModel(req.body);

  user
    .save()
    .then((document) => {
      res.json({ status: 201, data: document });
    })
    .catch((error) => {
      res.json({ status: 500, data: error });
    });
});

router.delete("/api/users/:id", (req, res) => {
  userModel.findOneAndDelete({ id: req.params.id }, {}, (error, data) => {
    if (error) res.json({ status: 500, error });
    res.json({ status: 200, data });
  });
});

module.exports = router;
