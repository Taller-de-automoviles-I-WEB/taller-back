module.exports = (sequelize, dataTypes) => {
    const alias = 'Supplier';
    const cols = {
        supplierID: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        NIT: {
            type: dataTypes.STRING,
            allowNull: false
        },
        city: {
            type: dataTypes.STRING,
            allowNull: false
        },
        department: {
            type: dataTypes.STRING,
            allowNull: false
        },
        address: {
            type: dataTypes.STRING,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: dataTypes.STRING,
            allowNull: false
        },
        
    };
    const config = {
        timestamp: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'suppliers',
    };

    const Supplier = sequelize.define(alias, cols, config);

    Supplier.associate = (models) => {
        Supplier.hasMany(models.Product, {
            foreignKey: 'supplierID',
        })
    };

    return Supplier;
}