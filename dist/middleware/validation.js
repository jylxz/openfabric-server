"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdate = exports.validateCreate = void 0;
function validateCreate(req, res, next) {
    const body = req.body;
    if (!body) {
        res.status(400).json({
            error: "Body missing from request",
        });
    }
    else {
        let error;
        switch (true) {
            case !body.product_name:
                error = "Product name is missing";
                break;
            case !body.description:
                error = "Product description is missing";
                break;
            case !body.img:
                error = "Product image is missing";
                break;
            default:
                error = undefined;
        }
        if (error) {
            res.status(400).json({ error });
        }
        else {
            next();
        }
    }
}
exports.validateCreate = validateCreate;
function validateUpdate(req, res, next) {
    const body = req.body;
    if (!body) {
        res.status(400).json({ error: "Request body cannot be empty" });
    }
    else {
        if (body.product_name || body.description || body.img) {
            next();
        }
        else {
            res.status(400).json({ error: "Invalid update field" });
        }
    }
}
exports.validateUpdate = validateUpdate;
