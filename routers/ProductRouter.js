import express from "express";
import { addProduct } from "../controllers/ProductController.js";




const ProductRouter = express.Router();


ProductRouter.post('/Product/add',addProduct)

export default ProductRouter;