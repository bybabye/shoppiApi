import express from "express";
import { getListProduct } from "../controllers/ProductController.js";
import { getListCategory } from "../controllers/CategoryController.js";
import { addUser } from "../controllers/UserController.js";



const OpenRouter = express.Router();

OpenRouter.get('/Category/list',getListCategory)
OpenRouter.get('/Product/list',getListProduct)
OpenRouter.post('/Account/add',addUser)
export default OpenRouter;