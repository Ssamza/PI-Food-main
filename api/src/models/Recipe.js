const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Recipe",
    {
      ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      Nombre: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      Imagen: {
        type: DataTypes.BLOB,
        allowNull: false,
      },
      Resumen_del_plato: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      HealthScore: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Pasos: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
