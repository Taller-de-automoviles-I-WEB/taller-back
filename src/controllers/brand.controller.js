const handleHttp = require('../utils/handle.logs');
const brandService = require('../services/brand.services');

module.exports = {
    createBrand: async (req, res) => {
        try {
            const { brand, isCreated } = await brandService.insertBrand(req.body);

            if (!brand) return res.status(500).json({ message: 'Internal server error' });

            isCreated ?
                res.status(200).json(brand) :
                res.status(400).json({ message: 'Brand already exist' });
        } catch (error) {
            handleHttp.errorHandler(error)
        }
    },
    updateBrand: async (req, res) => {
        try {
            const { brand, brandExist } = await brandService.updateBrand(req.body);

            if (!brand) return res.status(500).json({ message: 'Internal server error' });

            !brandExist ?
                res.status(200).json(brand) :
                res.status(400).json({ message: 'Brand already exist' });
        } catch (error) {
            handleHttp.errorHandler(error)
        }
    },
    getBrands: async (req, res) => {
        try {
            const brands = await brandService.getBrands();
            res.status(200).json(brands);
        } catch (error) {
            handleHttp.errorHandler(error)
        }
    },
    getByName: async (req, res) => {
        try {
            const brands = await brandService.getByName(req.params);
            res.status(200).json(brands);
        } catch (error) {
            handleHttp.errorHandler(error)
        }
    },
    getById: async (req, res) => {
        try {
            const brand = await brandService.getById(req.params);
            brand ?
                res.status(200).json(brand) :
                res.status(404).json({ message: 'Brand not found' });
        } catch (error) {
            handleHttp.errorHandler(error)
        }
    },
};