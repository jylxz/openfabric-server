import { Router } from "express";
import * as productController from "../controllers/productsController"
import { authenticate } from "../middleware/authentication";
import { validateCreate, validateUpdate } from "../middleware/validation";

const productsRouter = Router();

productsRouter.get("/", productController.productGet);

productsRouter.get("/:id", productController.productGetOne);

productsRouter.post("/",  authenticate, validateCreate, productController.productCreate);

productsRouter.delete("/:id", authenticate, productController.productDelete);

productsRouter.put("/:id", authenticate, validateUpdate, productController.productUpdate);

export default productsRouter
