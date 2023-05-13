import express from "express";

import { getListCategory } from "../controllers/CategoryController.js";
import { getDetailProduct, getListProduct } from "../controllers/ProductController.js";



const OpenRouter = express.Router();

OpenRouter.get('/Category/list',getListCategory)
OpenRouter.get('/Product/list',getListProduct)
OpenRouter.get('/Product/detail/:id',getDetailProduct)
// OpenRouter.post('/Account/add',addUser)
export default OpenRouter;