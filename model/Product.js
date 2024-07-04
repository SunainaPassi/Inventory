const mongoose = require("mongoose");

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
    required: true,
  },
  type: {
    type: String,
    required: false,
  },
});

// create Product model

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
