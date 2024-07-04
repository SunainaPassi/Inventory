//This file is resposible to estabish a connection between the nodejs and mongodb database using Mongoose lib
const mongoose = require("mongoose");

//Define the Mongodb connection URL

// const mongoURL = "mongodb://127.0.0.1:27017/inteventoryManagament";
const mongoURL =
  "mongodb+srv://sunainapassi4:Yt1TJHYuKVF4121C@fireworkinventory.gc6o1qy.mongodb.net/";

//estabish the Mongodb connection

mongoose.connect(mongoURL);

// mongoose maintain a default connection object representing the Mongodb connection. It is use to handle events and interact with the db
const db = mongoose.connection;

//define event listner for database collection

db.on("connected", () => {
  console.log("connected to Mongodb server ");
});

db.on("error", (err) => {
  console.log("Mongodb connection error", err);
});

db.on("disconnected", () => {
  console.log("Mongodb disconnected");
});

// export the db connection

module.exports = db;
