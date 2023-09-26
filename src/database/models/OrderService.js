module.exports = (sequelize, dataTypes) => {
    const alias = 'OrderService';
    const cols = {
        orderServiceID: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        price: {
            type: dataTypes.DECIMAL(10, 2),
            allowNull: false
        }
        
    };
    const config = {
        timestamp: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'order_services',
    };

    const OrderService = sequelize.define(alias, cols, config);

    OrderService.associate = (models) => {
        OrderService.belongsTo(models.User, {
            foreignKey: 'technicianID',
            targetKey: 'userID'
        });
        OrderService.belongsTo(models.Service, {
            foreignKey: 'serviceID',
            targetKey: 'serviceID'

        })
        OrderService.belongsTo(models.Order, {
            foreignKey: 'orderID',
            targetKey: 'orderID'
        })
    };

    return OrderService;
}