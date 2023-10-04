const handleHttp = require('../utils/handle.logs');
const db = require('../database/models');
const { Op } = require('sequelize');

module.exports = {
    insertBrand: async ({ name }) => {
        try {
            const [brand, isCreated] = await db.Brand.findOrCreate({
                where: {
                    name
                },
                defaults: {
                    name
                }
            });
            return {
                brand,
                isCreated
            };
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    updateBrand: async ({ brandID, name }) => {
        try {
            const brand = await db.Brand.findOne({
                where: {
                    name,
                    brandID: {
                        [Op.ne]: brandID
                    }
                }
            });
            if(brand) return {
                brandExist: true,
                brand
            };
            await db.Brand.update({name}, {
                where: {
                    brandID
                }
            });
            const updateBrand = await db.Brand.findOne({
                where: {
                    brandID
                }
            });
            return {
                brandExist: false,
                brand: updateBrand
            };
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    getBrands: async () => {
        try {
            const brands = await db.Brand.findAll();
            return brands;
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    getByName: async ({ name }) => {
        try {
            const brands = await db.Brand.findAll({
                where: {
                    name: {
                        [Op.like]: `%${name}%`
                    }
                }
            });
            return brands;
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    getById: async ({ brandID }) => {
        try {
            const brand = await db.Brand.findOne({
                where: {
                    brandID
                }
            });
            return brand;
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
};