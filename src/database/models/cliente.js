module.exports = (sequelize, DataTypes) => {

  let alias = 'Cliente';

  let cols = {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    domicilio: {
      type: DataTypes.STRING,
    },
    tipo: {
      type: DataTypes.STRING
    },
    usuario: {
      type: DataTypes.STRING
    },
    clave: {
      type: DataTypes.STRING
    }
  }

  const config = {
    tableName: 'clientes',
    timestamps: false,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at'
};

  const Clientes = sequelize.define(alias, cols, config)
  return Clientes;
}


