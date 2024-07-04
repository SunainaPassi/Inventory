const express = require("express");
const router = express.Router();

const Product = require("../model/Product");

router.post("/productDetail", async (req, res) => {
  try {
    const data = req.body;
    const newProduct = new Product(data);
    const result = await newProduct.save();
    res.status(200).json(result);
  } catch {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/productList", async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json("List Not Found");
  }
});

router.get("/productbyBrandName", async (req, res) => {
  try {
    const brand = req.query.brandname;
    const product = await Product.find({ brandName: brand });
    console.log(product);
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json("Product Not Found");
  }
});

router.put("/productDetail/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const updatedData = req.body;

    const response = await Product.findByIdAndUpdate(productId, updatedData, {
      new: true,
      runValidators: true,
    });
    if (!response) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json("Internal Server Error");
  }
});

router.delete("/productDetail/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
