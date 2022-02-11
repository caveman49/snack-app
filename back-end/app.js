const express = require("express");
const app = express();
const cors = require("cors");
const snacksController = require("./controllers/songsController");

app.use(cors());
app.use(express.json());

app.get("/", (_, response) => {
  console.log("GET REQUEST TO /");
  response.send("Snacks backend...");
});

app.use("/snacks", snacksController);

app.get("*", (_, response) => {
  response.status(404).json({ error: "Page not found" });
});

module.exports = app;