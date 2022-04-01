const mongoose = require("mongoose");

mongoose
    .connect("mongodb://127.0.0.1:27017/Incidents")
    .catch((error) =>
    console.error("Error connecting: ", error.message)
  );

mongoose.connection.on("disconnected", () =>
  console.log("Disconnected from MongoDB!")
);

mongoose.connection.on("error", (error) =>
  console.error(`MongoDB connection error: ${error}`)
);

module.exports = mongoose.connection;
