const handleHttp = require('../utils/handle.logs');
const productService = require('../services/product.services');

module.exports = {
    createProduct: async (req, res) => {
        try {
            const brand = await productService.brandExist(req.body);
            const group = await productService.groupExist(req.body);
            const supplier = await productService.supplierExist(req.body);
            if(!brand) return res.status(400).json({ message: 'Brand does not exist' });
            if(!group) return res.status(400).json({ message: 'Group does not exist' });
            if(!supplier) return res.status(400).json({ message: 'Supplier does not exist' });
            const { product, isCreated} = await productService.insertProduct(req.body);
            if(!product) return res.status(500).json({ message: 'Internal server error' });

            isCreated ?
                res.status(200).json(product) :
                res.status(400).json({ message: 'Product already exist' });
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    updateProduct: async (req, res) => {
        try {
            const brand = await productService.brandExist(req.body);
            const group = await productService.groupExist(req.body);
            const supplier = await productService.supplierExist(req.body);
            if(!brand) return res.status(400).json({ message: 'Brand does not exist' });
            if(!group) return res.status(400).json({ message: 'Group does not exist' });
            if(!supplier) return res.status(400).json({ message: 'Supplier does not exist' });
            const {product, productExist } = await productService.updateProduct(req.body);

            if(!product) return res.status(500).json({ message: 'Internal server error' });

            !productExist ? 
                res.status(200).json(product) :
                res.status(400).json({ message: 'Product already exist' })
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    getProducts: async (req, res) => {
        try {
            const products = await productService.getProducts();
            res.status(200).json(products);
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    getProductById: async (req, res) => {
        try {
            const product = await productService.getProductById(req.params);
            product ? 
                res.status(200).json(product) :
                res.status(404).json({ message: 'Product not found' });
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    getProductByCode: async (req, res) => {
        try {
            const products = await productService.getProductByCode(req.params);
            res.status(200).json(products);
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    getProductsByName: async (req, res) => {
        try {
            const products = await productService.getProductsByName(req.params);
            res.status(200).json(products);
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    getProductsByBrand: async (req, res) => {
        try {
            const products = await productService.getProductsByBrand(req.params);
            res.status(200).json(products);
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    getProductsByGroups: async (req, res) => {
        try {
            const products = await productService.getProductsByGroups(req.params);
            res.status(200).json(products);
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    getProductsBySupplier: async (req, res) => {
        try {
            const products = await productService.getProductsBySupplier(req.params);
            res.status(200).json(products);
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
};