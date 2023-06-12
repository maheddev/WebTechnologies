const express = require("express");
const app = express();
const furniture = require("./Routes/furnitureRoute");
const cors = require("cors");
require("./Connections/connection");
app.use(cors())
app.use(express.json());

app.use("/api", furniture);

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(1000, (req, res) => {
  console.log("Server listening");
});
