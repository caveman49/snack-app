// const db = require("../database/dbConfig");
const database = require("../db/dbConfig.js");

const getAllSnacks = async () => {
  try {
    const allSnacks = await database.any("SELECT * FROM snacks");
    return allSnacks;
  } catch (error) {
    return error;
  }
};

const getSnack = async (id) => {
  try {
    const theSnack = await database.one("SELECT * FROM snacks WHERE id=$1", id);

    return theSnack;
  } catch (error) {
    return error;
  }
};

const addNewSnacks = async (snack) => {
  const { name, image, fiber, protein, added_sugar, is_healthy } = snack;
  const newSnack = await database.any(
    "INSERT INTO snacks (name, image, fiber, protein, added_sugar, is_healthy) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
    [name, image, fiber, protein, added_sugar, is_healthy]
  );
  return newSnack;
};

const deleteSnack = async (id) => {
  try {
    const deletedSnack = await database.one(
      "DELETE FROM snacks WHERE id=$1 RETURNING *",
      id
    );

    return deletedSnack;
  } catch (error) {
    return error;
  }
};

const updateSnack = async (id, snack) => {
  try {
    const { name, image, fiber, protein, added_sugar, is_healthy } = snack;
    const updatedSnack = await database.one(
      "UPDATE snacks SET name=$2, image=$3, fiber=$4, protein=$5, added_sugar=$6, is_healthy=$7 WHERE id=$1 RETURNING *",
      [name, image, fiber, protein, added_sugar, is_healthy, id]
    );
    return updatedSnack;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSnacks,
  getSnack,
  addNewSnacks,
  deleteSnack,
  updateSnack,
};
