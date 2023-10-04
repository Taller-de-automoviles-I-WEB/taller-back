const handleHttp = require('../utils/handle.logs');
const db = require('../database/models');
const { Op } = require('sequelize');

module.exports = {
    brandExist: async ({ brandID }) => {
        try {
            const brand = await db.Brand.findByPk(brandID);
            return brand;
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    groupExist: async ({ groupID }) => {
        try {
            const group = await db.Group.findByPk(groupID);
            return group;
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    supplierExist: async ({ supplierID }) => {
        try {
            const supplier = await db.Supplier.findByPk(supplierID);
            return supplier;
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    insertProduct: async ({ brandID, groupID, supplierID, name, description, price, stockQuantity, code }) => {
        try {
            const [product, isCreated] = await db.Product.findOrCreate({
                where: {
                    code
                },
                defaults: {
                    brandID,
                    groupID,
                    supplierID,
                    name,
                    description,
                    price,
                    stockQuantity,
                    code,
                },
                include: [
                    {
                        model: db.Brand
                    },
                    {
                        model: db.Group
                    },
                    {
                        model: db.Supplier
                    }
                ],
                attributes: {
                    exclude: ['brandID', 'groupID', 'supplierID'],
                }
            });
            return {
                product,
                isCreated
            };
        } catch (error) {
            console.log(error)
            handleHttp.errorHandler(error);
        }
    },
    updateProduct: async ({ productID, brandID, groupID, supplierID, name, description, price, stockQuantity, code }) => {
        try {
            const product = await db.Product.findOne({
                where: {
                    code,
                    productID: {
                        [Op.ne]: productID
                    }
                }
            });
            if (product) return {
                productExist: true,
                product
            };
            await db.Product.update({
                brandID,
                groupID,
                supplierID,
                name,
                description,
                price,
                stockQuantity,
                code
            }, {
                where: {
                    productID
                }
            });
            const updatedProduct = await db.Product.findOne({
                where: {
                    productID
                },
                include: [
                    {
                        model: db.Brand
                    },
                    {
                        model: db.Group
                    },
                    {
                        model: db.Supplier
                    }
                ],
                attributes: {
                    exclude: ['brandID', 'groupID', 'supplierID'],
                }
            });
            return {
                productExist: false,
                product: updatedProduct
            };
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    getProducts: async () => {
        try {
            const products = await db.Product.findAll({
                include: [
                    {
                        model: db.Brand
                    },
                    {
                        model: db.Group
                    },
                    {
                        model: db.Supplier
                    }
                ],
                attributes: {
                    exclude: ['brandID', 'groupID', 'supplierID'],
                }
            });
            return products;
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    getProductById: async ({ productID }) => {
        try {
            const product = await db.Product.findOne({
                where: {
                    productID
                },
                include: [
                    {
                        model: db.Brand
                    },
                    {
                        model: db.Group
                    },
                    {
                        model: db.Supplier
                    }
                ],
                attributes: {
                    exclude: ['brandID', 'groupID', 'supplierID'],
                }
            });
            return product;
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    getProductByCode: async ({ code }) => {
        try {
            const products = await db.Product.findAll({
                where: {
                    code: {
                        [Op.like]: `%${code}%`
                    }
                },
                include: [
                    {
                        model: db.Brand
                    },
                    {
                        model: db.Group
                    },
                    {
                        model: db.Supplier
                    }
                ],
                attributes: {
                    exclude: ['brandID', 'groupID', 'supplierID'],
                }
            });
            return products;
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    getProductsByName: async ({ name }) => {
        try {
            const products = await db.Product.findAll({
                where: {
                    name: {
                        [Op.like]: `%${name}%`
                    }
                },
                include: [
                    {
                        model: db.Brand
                    },
                    {
                        model: db.Group
                    },
                    {
                        model: db.Supplier
                    }
                ],
                attributes: {
                    exclude: ['brandID', 'groupID', 'supplierID'],
                }
            });
            return products;
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    getProductsByBrand: async ({ brandID }) => {
        try {
            const products = await db.Product.findAll({
                where: {
                    brandID
                },
                include: [
                    {
                        model: db.Brand
                    },
                    {
                        model: db.Group
                    },
                    {
                        model: db.Supplier
                    }
                ],
                attributes: {
                    exclude: ['brandID', 'groupID', 'supplierID'],
                }
            });
            return products;
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    getProductsByGroups: async ({ groupID }) => {
        try {
            const products = await db.Product.findAll({
                where: {
                    groupID
                },
                include: [
                    {
                        model: db.Brand
                    },
                    {
                        model: db.Group
                    },
                    {
                        model: db.Supplier
                    }
                ],
                attributes: {
                    exclude: ['brandID', 'groupID', 'supplierID'],
                }
            });
            return products;
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
    getProductsBySupplier: async ({ supplierID }) => {
        try {
            const products = await db.Product.findAll({
                where: {
                    supplierID
                },
                include: [
                    {
                        model: db.Brand
                    },
                    {
                        model: db.Group
                    },
                    {
                        model: db.Supplier
                    }
                ],
                attributes: {
                    exclude: ['brandID', 'groupID', 'supplierID'],
                }
            });
            return products;
        } catch (error) {
            handleHttp.errorHandler(error);
        }
    },
};