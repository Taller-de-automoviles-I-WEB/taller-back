module.exports = (sequelize, dataTypes) => {
    const alias = 'OrderProduct';
    const cols = {
        orderProductID: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        quantity: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        unitPrice: {
            type: dataTypes.DECIMAL(10, 2),
            allowNull: false
        }
        
    };
    const config = {
        timestamp: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'order_products',
    };

    const OrderProduct = sequelize.define(alias, cols, config);

    OrderProduct.associate = (models) => {
        OrderProduct.belongsTo(models.Product, {
            foreignKey: 'productID',
            targetKey: 'productID'
        });
        OrderProduct.belongsTo(models.Order, {
            foreignKey: 'orderID',
            targetKey: 'orderID'
        });
    };

    return OrderProduct;
}