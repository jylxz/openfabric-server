"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    product_name: String,
    description: String,
    img: String,
}, { collection: "products" });
const ProductModel = mongoose_1.default.model("Product", productSchema);
exports.default = ProductModel;
