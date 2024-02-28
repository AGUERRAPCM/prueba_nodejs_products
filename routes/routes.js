import express from "express";

import { getProduct } from "../controllers/ProductController.js";
import { getProducts } from "../controllers/ProductController.js";
import { createProduct } from "../controllers/ProductController.js";
import { updateProduct } from "../controllers/ProductController.js";
import { deleteProduct } from "../controllers/ProductController.js";


const router = express.Router();

// Forma 1
router.get("/", getProducts);
router.get("/:id", getProduct);
router.put("/:id", updateProduct);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);

// Forma 2
// router.route("/").get(getProducts).post(createProduct);
// router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);


export default router;