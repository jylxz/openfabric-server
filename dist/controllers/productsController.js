"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productUpdate = exports.productGetOne = exports.productGet = exports.productDelete = exports.productCreate = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const productModel_1 = __importDefault(require("../models/productModel"));
function productGet(req, res, next) {
    try {
        const query = req.params.id
            ? { _id: new mongoose_1.default.Types.ObjectId(req.params.id) }
            : {};
        productModel_1.default.find(query).then((products) => {
            res.status(200).json(products);
        });
    }
    catch (e) {
        res.status(400).json({ error: "Cannot find product" });
    }
}
exports.productGet = productGet;
function productGetOne(req, res, next) {
    try {
        const query = req.params.id
            ? { _id: new mongoose_1.default.Types.ObjectId(req.params.id) }
            : {};
        productModel_1.default.findOne(query).then((products) => {
            res.status(200).json(products);
        });
    }
    catch (e) {
        res.status(400).json({ error: "Cannot find product" });
    }
}
exports.productGetOne = productGetOne;
function productCreate(req, res, next) {
    const newProduct = new productModel_1.default(Object.assign({}, req.body));
    newProduct.save().then((product) => {
        res.status(200).json(product);
    });
}
exports.productCreate = productCreate;
function productUpdate(req, res, next) {
    try {
        const id = new mongoose_1.default.Types.ObjectId(req.params.id);
        productModel_1.default.findOneAndUpdate({ _id: id }, Object.assign({}, req.body), { new: true }).then((product) => {
            if (product) {
                res.status(200).json(product);
            }
            else {
                res.status(400).json({ error: "Cannot find product" });
            }
        });
    }
    catch (e) {
        res.status(400).json({ error: "Cannot find product" });
    }
}
exports.productUpdate = productUpdate;
function productDelete(req, res, next) {
    try {
        const id = new mongoose_1.default.Types.ObjectId(req.params.id);
        productModel_1.default.findOneAndDelete({ _id: id }).then((doc) => {
            if (doc) {
                res
                    .status(200)
                    .json({ message: `Successfully deleted product ${req.params.id}` });
            }
            else {
                res.status(400).json({ error: "Cannot find product" });
            }
        });
    }
    catch (e) {
        res.status(400).json({ error: "Cannot find product" });
    }
}
exports.productDelete = productDelete;
