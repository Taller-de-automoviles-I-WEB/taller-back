module.exports = (sequelize, dataTypes) => {
    const alias = 'Service';
    const cols = {
        serviceID: {
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
        category: {
            type: dataTypes.STRING,
            allowNull: false
        },
        duration: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(10, 2),
            allowNull: false
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
        tableName: 'services',
    };

    const Service = sequelize.define(alias, cols, config);

    Service.associate = (models) => {
        Service.hasMany(models.OrderService, {
            foreignKey: 'serviceID',
        });
    };

    return Service;
}