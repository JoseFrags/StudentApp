const mongoose = require("mongoose");

const ConnectDB = () => {
  mongoose.connect(
    "mongodb+srv://doctoplanet:admin@doctocluster.qvz4o.mongodb.net/Database_DP?retryWrites=true&w=majority"
  );

  
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.once("open", () => {
    console.log("Connected to MongoDB");
  });
};
module.exports = ConnectDB;
