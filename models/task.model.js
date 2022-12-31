const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
  id: String,
  name: String,
  description: String,
});

const taskModel = mongoose.model("task", taskSchema);

module.exports = taskModel;
