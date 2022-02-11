const express = require("express");
const songs = express.Router();

const { getAllSongs } = require("../queries/songs");

// All Songs
songs.get("/", async (_, response) => {
  console.log("GET request to /songs");
  const allSongs = await getAllSongs();
  if (allSongs.length === 0) {
    response.status(500).json({ error: "server error" });

    return;
  }

  response.status(200).json(allSongs);
});

module.exports = songs;
