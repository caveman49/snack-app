const express = require("express");
const snacks = express.Router();

const { getAllsnacks } = require("../queries/snacks");

// All snacks
snacks.get("/", async (_, response) => {
  console.log("GET request to /snacks");
  const allSnacks = await getAllsnacks();
  if (allSnacks.length === 0) {
    response.status(500).json({ error: "server error" });

    return;
  }

  response.status(200).json(allSnacks);
});

module.exports = snacks;
