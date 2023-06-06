const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");

dotenv.config();
const { DB_HOST, PORT } = process.env;

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT || 5000, () => {
      console.log("Backend server is running");
    });
  })
  .catch((e) => {
    console.log("Database error:", e.message);
    process.exit(1);
  });
