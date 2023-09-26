module.exports = (sequelize, dataTypes) => {
    const alias = 'Group';
    const cols = {
        groupID: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        }
        
    };
    const config = {
        timestamp: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'groups',
    };

    const Group = sequelize.define(alias, cols, config);

    Group.associate = (models) => {
        Group.hasMany(models.Product, {
            foreignKey: 'groupID',
        })
    };

    return Group;
}