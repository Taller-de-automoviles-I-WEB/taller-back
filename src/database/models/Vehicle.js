module.exports = (sequelize, dataTypes) => {
    const alias = 'Vehicle';
    const cols = {
        vehicleID: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        model: {
            type: dataTypes.STRING,
            allowNull: false
        },
        year: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        plate: {
            type: dataTypes.STRING,
            allowNull: false
        },
        VIN: {
            type: dataTypes.STRING,
            allowNull: false
        },
        color: {
            type: dataTypes.STRING,
            allowNull: false
        },
        make: {
            type: dataTypes.STRING,
            allowNull: false
        },
        mileage: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        fuelType: {
            type: dataTypes.STRING,
            allowNull: false
        },
        engineSize: {
            type: dataTypes.STRING,
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
        tableName: 'vehicles',
    };

    const Vehicle = sequelize.define(alias, cols, config);

    Vehicle.associate = (models) => {
        Vehicle.hasMany(models.Order, {
            foreignKey: 'vehicleID',
        });
        Vehicle.belongsTo(models.User, {
            foreignKey: 'userID',
            targetKey: 'userID'
        });
    };

    return Vehicle;
}