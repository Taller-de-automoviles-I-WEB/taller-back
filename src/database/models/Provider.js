module.exports = (sequelize, dataTypes) => {
    const alias = 'Provider';
    const cols = {
        id: {
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
    };
    const config = {
        timestamp: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'providers',
    };

    const Provider = sequelize.define(alias, cols, {
        ...config,
        defaultScope: {
            attributes: {
                exclude: ['password']
            }
        }
    });
    return Provider;
}