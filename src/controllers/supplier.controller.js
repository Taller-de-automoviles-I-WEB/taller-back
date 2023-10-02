const supplierService = require('../services/supplier.services');
const handleHttp = require('../utils/handle.logs')

module.exports = {
    createSupplier: async (req, res) => {
        try {

            const { supplier, isCreated } = await supplierService.insertSupplier(req.body);

            isCreated ?
                res.status(200).json(supplier) :
                res.status(400).json({ message: 'NIT already exist' });

        } catch (error) {
            handleHttp.errorHandler(error, req, res)

        }
    },
    updateSupplier: async (req, res) => {
        try {
            const { supplier, supplierExist } = await supplierService.updateSupplier(req.body);
            
            if (!supplier) return res.status(500).json({ message: 'Internal server error' });
            
            !supplierExist ?
            res.status(200).json(supplier) :
            res.status(400).json({ message: 'The nit is already in use by another supplier' });
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    getSuppliers: async (req, res) => {
        try {
            const suppliers = await supplierService.getSuppliers();
            res.status(200).json(suppliers)
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    getByNit: async (req, res) => {
        try {
            const supplier = await supplierService.getByNit(req.params);

            supplier ?
            res.status(200).json(supplier) :
            res.status(404).json({ message: 'Supplier not found by NIT' });
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    getByName: async (req, res) => {
        try {
            const suppliers = await supplierService.getByName(req.params);

            res.status(200).json(suppliers);
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    getByLocation: async (req, res) => {
        try {
            const suppliers = await supplierService.getByLocation(req.params);

            res.status(200).json(suppliers);
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },

}