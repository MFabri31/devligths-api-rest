const express = require("express");
const router = express.Router();
const roleModel = require("../models/role.model");

router.get("/api/roles", (req, res) => {
  roleModel.find({}, (error, data) => {
    if (error) res.json({ status: 500, error });
    res.json({ status: 200, data });
  });
});

router.get("/api/roles/:id", (req, res) => {
  roleModel.find({ id: req.params.id }, (error, data) => {
    if (error) res.json({ status: 500, error });
    res.json({ status: 200, data });
  });
});

router.post("/api/roles", (req, res) => {
  const user = new roleModel(req.body);

  user
    .save()
    .then((document) => {
      res.json({ status: 201, data: document });
    })
    .catch((error) => {
      res.json({ status: 500, data: error });
    });
});

router.delete("/api/roles/:id", (req, res) => {
  roleModel.findOneAndDelete({ id: req.params.id }, {}, (error, data) => {
    if (error) res.json({ status: 500, error });
    res.json({ status: 200, data });
  });
});

router.put("/api/roles/:id", (req, res) => {
  roleModel.findOneAndUpdate(
    { id: req.params.id },
    req.body,
    {},
    (error, data) => {
      if (error) res.json({ status: 500, error });
      res.json({ status: 200, data });
    }
  );
});

module.exports = router;
