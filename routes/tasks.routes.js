const express = require("express");
const router = express.Router();
const taskModel = require("../models/task.model");

router.get("/api/tasks", (req, res) => {
  taskModel.find({}, (error, data) => {
    if (error) res.json({ status: 500, error });
    res.json({ status: 200, data });
  });
});

router.get("/api/tasks/:id", (req, res) => {
  taskModel.find({ id: req.params.id }, (error, data) => {
    if (error) res.json({ status: 500, error });
    res.json({ status: 200, data });
  });
});

router.post("/api/tasks", (req, res) => {
  const task = new taskModel(req.body);

  task
    .save()
    .then((document) => {
      res.json({ status: 201, data: document });
    })
    .catch((error) => {
      res.json({ status: 500, data: error });
    });
});

router.delete("/api/tasks/:id", (req, res) => {
  taskModel.findOneAndDelete({ id: req.params.id }, {}, (error, data) => {
    if (error) res.json({ status: 500, error });
    res.json({ status: 200, data });
  });
});

router.put("/api/tasks/:id", (req, res) => {
  taskModel.findOneAndUpdate(
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
