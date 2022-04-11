const mongoose = require("mongoose");

let connectionString = process.env.MONGODB_URI
let MONGODB_URI = connectionString || "mongodb://127.0.0.1:27017/Incidents";

let mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};


mongoose
  .connect(MONGODB_URI, mongooseConfig)
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
