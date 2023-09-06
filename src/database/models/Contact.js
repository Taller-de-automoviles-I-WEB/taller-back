module.exports = (sequelize, dataTypes) => {
    let alias = "Contact";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        firstName: {
            type: dataTypes.STRING(25),
            allowNull: false,
            field:"first_name"
        },
        lastName: {
            type: dataTypes.STRING(25),
            allowNull: false,
            field:"last_name"
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        question: {
            type: dataTypes.STRING(250),
            allowNull: false
        },
    }
    let config = {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        tableName: "contact_requests"
    }
    const Contact = sequelize.define(alias, cols, config);
    return Contact;
}