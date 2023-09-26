module.exports = (sequelize, dataTypes) => {
    const alias = 'User';
    const cols = {
        userID: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        fullName: {
            type: dataTypes.STRING(40),
            allowNull: false,
        },
        address: {
            type: dataTypes.STRING(50),
            allowNull: false,
        },
        username: {
            type: dataTypes.STRING,
            allowNull: false
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }

        },
        industry: {
            type: dataTypes.STRING(25),
            allowNull: false,
        },
        state: {
            type: dataTypes.BOOLEAN,
            defaultValue: true,
        },
        phone: {
            type: dataTypes.STRING,
            allowNull: true
        },
    };
    const config = {
        timestamp: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'users',
    };

    const User = sequelize.define(alias, cols, {
        ...config,
        defaultScope: {
            attributes: {
                exclude: ['password']
            }
        }
    });

    User.associate = (models) => {
        User.belongsTo(models.Role, {
            foreignKey: 'roleID',
            targetKey: 'roleID'
        });
        User.hasMany(models.OrderService, {
            foreignKey: 'technicianID',
        });
        User.hasMany(models.Vehicle, {
            foreignKey: 'userID',
        })
        User.hasMany(models.Order, {
            foreignKey: 'userID',
        })
    };

    return User;
}