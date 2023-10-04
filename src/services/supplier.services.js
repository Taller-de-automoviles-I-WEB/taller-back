const { Op } = require('sequelize');
const handleHttp = require('../utils/handle.logs');
const db = require('../database/models');

module.exports = {
    insertSupplier: async ({ name, NIT, city, department, address, email, phone }) => {
        try {

            const [supplier, isCreated] = await db.Supplier.findOrCreate({
                where: {
                    NIT
                },
                defaults: {
                    name,
                    NIT,
                    city,
                    department,
                    address,
                    email,
                    phone,
                }
            });

            return {
                supplier,
                isCreated
            };
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    updateSupplier: async ({ supplierID, name, NIT, city, department, address, email, phone }) => {
        try {
            const supplier = await db.Supplier.findOne({
                where: {
                    NIT,
                    supplierID: {
                        [Op.ne]: supplierID,
                    }
                }
            });
            console.log('Aqui es el error')
            if (supplier) return {
                supplierExist: true,
                supplier
            };
            await db.Supplier.update({
                name,
                NIT,
                city,
                department,
                address,
                email,
                phone,
            }, {
                where: {
                    supplierID
                }
            });
            const updatedSupplier = await db.Supplier.findOne({
                where: {
                    supplierID
                }
            });
            return {
                supplierExist: false,
                supplier: updatedSupplier
            };
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    getSuppliers: async () => {
        try {
            const suppliers = await db.Supplier.findAll();
            return suppliers;
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    getByNit: async ({ NIT }) => {
        try {
            const supplier = await db.Supplier.findOne({
                where: {
                    NIT
                }
            });
            return supplier;
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    getByName: async ({ name }) => {
        try {
            const suppliers = await db.Supplier.findAll({
                where: {
                    name: {
                        [Op.like]: `%${name}%`
                    }
                }
            });
            return suppliers;
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    getByLocation: async ({ location }) => {
        try {
            const suppliers = await db.Supplier.findAll({
                where: {
                    [Op.or]: [
                        {
                            city: {
                                [Op.like]: `%${location}%`
                            }
                        },
                        {
                            department: {
                                [Op.like]: `%${location}%`
                            }
                        }
                    ]
                }
            });
            return suppliers;
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
}