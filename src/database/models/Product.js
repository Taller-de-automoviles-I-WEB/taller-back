module.exports = (sequelize, dataTypes) => {
    const alias = 'Product';
    const cols = {
        productID: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        description: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        stockQuantity: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        code: {
            type: dataTypes.STRING,
            allowNull: false
        },
        isActive: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
        
    };
    const config = {
        timestamp: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'products',
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = (models) => {
        Product.belongsTo(models.Brand, {
            foreignKey: 'brandID',
            targetKey: 'brandID'
        });
        Product.belongsTo(models.Group, {
            foreignKey: 'groupID',
            targetKey: 'groupID'
        });
        Product.belongsTo(models.Supplier, {
            foreignKey: 'supplierID',
            targetKey: 'supplierID'
        });
        Product.hasMany(models.OrderProduct, {
            foreignKey: 'productID',
        });
    };

    return Product;
}