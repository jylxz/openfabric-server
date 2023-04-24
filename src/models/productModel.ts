import mongoose from "mongoose";

export interface Product {
  product_name: string;
  description: string;
  img: string;
}

const productSchema = new mongoose.Schema<Product>(
  {
    product_name: String,
    description: String,
    img: String,
  },
  { collection: "products" }
);

const ProductModel = mongoose.model("Product", productSchema)

export default ProductModel