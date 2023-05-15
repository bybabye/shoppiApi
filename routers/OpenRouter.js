import express from "express";

import { getListCategory } from "../controllers/CategoryController.js";
import { getDetailProduct, getLimitProduct, getListProduct, getProductWithCategory } from "../controllers/ProductController.js";
import { addUser } from "../controllers/UserController.js";



const OpenRouter = express.Router();

OpenRouter.get('/category/list',getListCategory)
OpenRouter.get('/product/list',getListProduct)
OpenRouter.get('/product/detail/:id',getDetailProduct)
OpenRouter.get('/product/category/:id',getProductWithCategory)
OpenRouter.get('/product',getLimitProduct)
OpenRouter.post('/Account/add',addUser)
export default OpenRouter;    