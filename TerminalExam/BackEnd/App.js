const express = require("express");
const app = express();
const teacher = require("./Routes/Teacher");
const cors = require("cors");
require("./Connection/Connection");
app.use(cors())
app.use(express.json());

app.use("/api/", teacher);

app.listen(1000, (req, res) => {
  console.log("Server listening");
});

