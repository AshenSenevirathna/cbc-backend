import express from 'express';
import { createProduct, deleteProduct, getProductByName, getProducts } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.get("/",getProducts);
productRouter.get("/filter",(req,res)=>{
    res.json({
        message : "This is product filtering area"
    })
})
productRouter.post("/",createProduct);
//productRouter.delete("/",deleteProduct);
productRouter.delete("/:name",deleteProduct);
productRouter.get("/:name",getProductByName)

export default productRouter;