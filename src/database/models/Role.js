module.exports = (sequelize, dataTypes) => {
    const alias = 'Role';
    const cols = {
        roleID: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: dataTypes.STRING(40),
            allowNull: false,
        },
    };
    const config = {
        timestamp: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'roles',
    };

    const Role = sequelize.define(alias, cols, config);

    Role.associate = (models) => {
        Role.hasMany(models.User, {
            foreignKey: 'roleID',
        });
    };

    return Role;
}