// DEPENDENCIES
const app = require("./app.js");

// CONFIGURATION
require("dotenv").config();

const PORT = process.env.PORT || 8080;
console.log(process.env);

// LISTEN
app.listen(PORT, () => {
  console.log(`🥤 🍿 Snackin' on port ${PORT} 🥨 🌰 `);
});
