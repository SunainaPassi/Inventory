const mongoose = require("mongoose");

const DefaultBrandList = [
  "Cock (Sri Kaliswari Fireworks)",
  "Sri Ram Fireworks",
  "Lovely Fireworks",
  "Sony Fireworks",
  "Coronation Fireworks",
];

// define the prdouct schema

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  manufacturedYear: {
    type: Number,
    required: false,
  },
  brandName: {
    type: String,
    enum: DefaultBrandList,
    required: true,
  },
  type: {
    type: String,
    required: false,
  },
  video: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
});

// create Product model

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
module.exports = DefaultBrandList;
