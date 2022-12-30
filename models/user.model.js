const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  id: String,
  name: String,
  lastName: String,
  age: String,
  address: String,
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
