const mongoose = require("mongoose");

const DBNAME = "first-api-rest";
const URI = `mongodb://127.0.0.1:27017/${DBNAME}`;

module.exports = () =>
  mongoose.connect(URI, (error) => {
    if (error) {
      console.log(
        "there's an error with the connection to the database",
        error
      );
    }

    console.log("Connection success");
  });
