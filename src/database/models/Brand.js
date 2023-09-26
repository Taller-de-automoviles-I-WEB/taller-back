module.exports = (sequelize, dataTypes) => {
    const alias = 'Brand';
    const cols = {
        brandID: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        
    };
    const config = {
        timestamp: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'brands',
    };

    const Brand = sequelize.define(alias, cols, config);

    Brand.associate = (models) => {
       Brand.hasMany(models.Product, {
        foreignKey: 'brandID',
       })
    };

    return Brand;
}