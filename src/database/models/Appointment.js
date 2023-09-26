module.exports = (sequelize, dataTypes) => {
    const alias = 'Appointment';
    const cols = {
        appointmentID: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        dateAndTime: {
            type: dataTypes.DATE,
            allowNull: false
        },
        estimatedCompletion: {
            type: dataTypes.DATE,
            allowNull: false
        },
        status: {
            type: dataTypes.STRING,
            allowNull: false
        }
        
    };
    const config = {
        timestamp: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'appointments',
    };

    const Appointment = sequelize.define(alias, cols, config);

    Appointment.associate = (models) => {
        Appointment.belongsTo(models.Order, {
            foreignKey: 'orderID',
            targetKey: 'orderID'
        });
    };

    return Appointment;
}