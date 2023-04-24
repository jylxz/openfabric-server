"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const productsRouter_1 = __importDefault(require("./routes/productsRouter"));
const app = (0, express_1.default)();
app.listen(3000);
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/products", productsRouter_1.default);
process.env.DB && mongoose_1.default.connect(process.env.DB);
