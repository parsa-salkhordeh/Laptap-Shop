import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  category: String,
  processor: String,
  ram: Number,
  storage: String,
  screen: String,
  image: String,
});

const Product =
  mongoose.models.Product ||
  mongoose.model("Product", productSchema);

export default Product;