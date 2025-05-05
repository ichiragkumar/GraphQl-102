import { Product } from "../models/product.model.js";



export const getAllProducts = async () => {
    const allProducts = await Product.find();
    return allProducts;
};

export const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id);
    return product
};

export const createProduct = async (req, res) => {
    const product = await Product.create(req.body);
    return product;
};

export const updateProduct = async (req, res) => {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    return updatedProduct;
};

export const deleteProduct = async (req, res) => {

    // HARD DELETE
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    return deletedProduct;
};