import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import ProductModel from "../models/productModel";

function productGet(req: Request, res: Response, next: NextFunction) {
  try {
    const query = req.params.id
      ? { _id: new mongoose.Types.ObjectId(req.params.id) }
      : {};

    ProductModel.find(query).then((products) => {
      res.status(200).json(products);
    });
  } catch (e) {
    res.status(400).json({ error: "Cannot find product" });
  }
}

function productGetOne(req: Request, res: Response, next: NextFunction) {
  try {
    const query = req.params.id
      ? { _id: new mongoose.Types.ObjectId(req.params.id) }
      : {};

    ProductModel.findOne(query).then((products) => {
      res.status(200).json(products);
    });
  } catch (e) {
    res.status(400).json({ error: "Cannot find product" });
  }
}

function productCreate(req: Request, res: Response, next: NextFunction) {
  const newProduct = new ProductModel({
    ...req.body,
  });

  newProduct.save().then((product) => {
    res.status(200).json(product);
  });
}
function productUpdate(req: Request, res: Response, next: NextFunction) {
  try {
    const id = new mongoose.Types.ObjectId(req.params.id);

    ProductModel.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    ).then((product) => {
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(400).json({ error: "Cannot find product" });
      }
    });
  } catch (e) {
    res.status(400).json({ error: "Cannot find product" });
  }
}
function productDelete(req: Request, res: Response, next: NextFunction) {
  try {
    const id = new mongoose.Types.ObjectId(req.params.id);

    ProductModel.findOneAndDelete({ _id: id }).then((doc) => {
      if (doc) {
        res
          .status(200)
          .json({ message: `Successfully deleted product ${req.params.id}` });
      } else {
        res.status(400).json({ error: "Cannot find product" });
      }
    });
  } catch (e) {
    res.status(400).json({ error: "Cannot find product" });
  }
}

export { productCreate, productDelete, productGet, productGetOne, productUpdate };
