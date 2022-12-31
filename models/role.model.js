const mongoose = require("mongoose");
const { Schema } = mongoose;

const roleSchema = new Schema({
  id: String,
  name: String,
  description: String,
});

const roleModel = mongoose.model("role", roleSchema);

module.exports = roleModel;
