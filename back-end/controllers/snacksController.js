const express = require("express");
const snacks = express.Router();

const {
  getAllSnacks,
  getSnack,
  addNewSnacks,
  deleteSnack,
  updateSnack,
} = require("../queries/snacks");

// All snacks
snacks.get("/", async (_, response) => {
  console.log("GET request to /snacks");
  const allSnacks = await getAllSnacks();
  if (allSnacks.length === 0) {
    response.status(500).json({ error: "server error" });

    return;
  }

  response.status(200).json(allSnacks);
});

// Show Song
snacks.get("/:id", async (request, response) => {
  console.log("GET request to /snacks/:id");
  const snack = await getSnack(request.params.id);
  if (snacks.id) {
    response.status(200).json(snack);
  } else {
    response.status(404).json("Snack does not exist");
  }
});

// Create Song
snacks.post("/", async (request, response) => {
  try {
    console.log("POST request to /snacks");
    const newSnack = await addNewSnacks(request.body);
    response.json(newSnack);
  } catch (error) {
    response.status(400).json({ error: error });
  }
});

// Delete Song
snacks.delete("/:id", async (request, response) => {
  console.log("DELETE request to /snacks/:id");
  const deletedSnack = await deleteSnack(request.params.body);
  if (deleteSnack.id) {
    response.status(200).json(deletedSnack);
  } else {
    response.status(404).json("Snack does not exist...");
  }
});

// Update Song
snacks.put("/:id", async (request, response) => {
  console.log("UPDATE request to /songs/:id");
  const updatedSnack = await updateSnack(request.params.id, request.body);
  if (updatedSnack.id) {
    response.status(200).json(updatedSnack);
  } else {
    response.status(404).json("Snack does not exist...");
  }
});

module.exports = snacks;
