const mongoose = require("mongoose");

const mongoURL = "mongodb://localhost:27017:/Mongone";

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to MongoDB server");
});

db.on("error", (err) => {
  console.log("Connected to MongoDB server is Error", err);
});

db.on("disconnected", () => {
  console.log("Disconnected to MongoDB server");
});

module.module = db;
