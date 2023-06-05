const app = require("./app");
const mongoose = require("mongoose");

// mongoose pass VTOxqEdpBjeWTUP5 delivery-app-user
const DB_HOST =
  "mongodb+srv://delivery-app-user:VTOxqEdpBjeWTUP5@atlascluster.exs8a4x.mongodb.net/delivery?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(5000, () => {
      console.log("Backend server is running");
    });
  })
  .catch((e) => {
    console.log("Database error:", e.message);
    process.exit(1);
  });
