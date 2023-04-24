import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import "dotenv/config";
import productsRouter from "./routes/productsRouter";

const app = express();
app.listen(3000)

app.use(cors())
app.use(express.json());
app.use("/products", productsRouter)

process.env.DB && mongoose.connect(process.env.DB);
