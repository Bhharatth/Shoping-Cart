const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: { type: String, unique: true, required: true },
  desc: { type: String, required: true },
  img: { type: String, required: true },
  categories: { type: Array },
  size: { type: Array },
  color: { type: Array },
  price: { type: Number, required: false },
  inStock: {type: Boolean, default: true},

  // size: { type: Array },
  // color: { type: Array },
  // categories: { type: Array },
  // desc: { type: String, required: true },
  // img: { type: String, required: true },
  // inStock: {type: Boolean, default: true},
  // price: { type: Number, required: true },
  // title: { type: String, unique: true, required: true },
});

module.exports = mongoose.model("Product", ProductSchema);
