module.exports = (sequelize, dataTypes) => {
    const alias = 'MaintenanceHistory';
    const cols = {
        maintenanceHistoryID: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        description: {
            type: dataTypes.STRING,
            allowNull: false
        },
        vehicleInfo: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        technicians: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        partsUsed: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        serviceDate: {
            type: dataTypes.DATE,
            allowNull: false
        },
        totalCost: {
            type: dataTypes.DECIMAL(10, 2),
            allowNull: false
        }
        
    };
    const config = {
        timestamp: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'maintenance_history',
    };

    const MaintenanceHistory = sequelize.define(alias, cols, config);

    MaintenanceHistory.associate = (models) => {
        MaintenanceHistory.belongsTo(models.Order, {
            foreignKey: 'orderID',
            targetKey: 'orderID'

        });
    };

    return MaintenanceHistory;
}