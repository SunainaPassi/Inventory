const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const db = require("./db");
const productRoutes = require("./routes/ProductRoutes");

//bodyparser is a middleware lib for express.js. It parse and extract the body of http request
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Yogarj Fireworks!!");
});

app.use("/", productRoutes);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
