module.exports = (sequelize, dataTypes) => {
    const alias = 'Order';
    const cols = {
        orderID: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        description: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        status: {
            type: dataTypes.STRING,
            allowNull: false
        },
        totalCost: {
            type: dataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        paymentStatus: {
            type: dataTypes.STRING,
            allowNull: false
        },
        paymentMethod: {
            type: dataTypes.STRING,
            allowNull: false
        },
        completionDate: {
            type: dataTypes.DATE,
            allowNull: true
        },
        orderDate: {
            type: dataTypes.DATE,
            allowNull: true
        },
        notes: {
            type: dataTypes.TEXT,
            allowNull: true
        }
        
    };
    const config = {
        timestamp: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'orders',
    };

    const Order = sequelize.define(alias, cols, config);

    Order.associate = (models) => {
        Order.hasMany(models.OrderProduct, {
            foreignKey: 'orderID',
        });
        Order.hasMany(models.OrderService, {
            foreignKey: 'orderID',
        });
        Order.hasMany(models.MaintenanceHistory, {
            foreignKey: 'orderID',
        });
        Order.hasMany(models.Appointment, {
            foreignKey: 'orderID',
        });
        Order.belongsTo(models.Vehicle, {
            foreignKey: 'vehicleID',
            targetKey: 'vehicleID'
        });
        Order.belongsTo(models.User, {
            foreignKey: 'userID',
            targetKey: 'userID'
        });
    };

    return Order;
}