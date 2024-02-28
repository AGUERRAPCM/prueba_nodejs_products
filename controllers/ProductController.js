import { ProductModel } from "../models/ProductModel.js";

export const getProducts = async (req,res)=>{    
    try{
        const productos = await ProductModel.find();
        res.status(200).json(productos);
    }catch(error){
        res.status(500).json({message: error.message});
    }   
}

export const getProduct = async (req,res)=>{   
    try {
        const product = await ProductModel.findById(req.params.id);
        if(!product){
            return res.status(404).json({message:'No se encontro ningun oproducto' });
        }
        res.status(200).json({message:'Get One Product', productoEncontrado: product });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const createProduct = async (req,res)=>{   
    try {
        const product = await ProductModel.create(req.body);
        res.status(200).json({msg:'Create One Product', productoCreado: product });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const updateProduct = async (req,res)=>{
    try {
        const product = await ProductModel.findOneAndUpdate({_id: req.params.id}, req.body, {new:true});
        res.status(200).json({message:'Producto actualizado correctamente', productoActualiazdo: product});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const deleteProduct = async (req,res)=>{
    try {
        const product = await ProductModel.findByIdAndDelete(req.params.id);
        if(!product){
            return res.status(404).json({message:'No se encontro ningun producto' });
        }
        res.status(200).json({message:'Producto eliminado correctamente'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

