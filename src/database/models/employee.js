module.exports = (sequelize, DataTypes) => {

    let alias = 'Employee';

    let cols = {

        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING(50),
        },
        area: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        workstation: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        user: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(20),
            allowNull: false,
        }
    };

    let config = {
        tableName: 'employee',
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at'
    };

    const Employee = sequelize.define(alias, cols, config);
    return Employee;
}


