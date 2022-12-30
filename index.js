const express = require("express");
const app = express();
const dbConnection = require("./dbConnection/dbConnection");

app.use(express.json());

app.use(require("./routes/index.routes"));
app.use(require("./routes/users.routes"));

dbConnection();

const PORT = 3500;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
