const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    heightMin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    heightMax: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weightMin: {
       type: DataTypes.STRING,
       allowNull: false,
     },
    weightMax: {
       type: DataTypes.STRING,
       allowNull: false,
     },
    image: {
       type: DataTypes.STRING,
       allowNull: false,
       defaultValue: "https://album.mediaset.es/eimg/10000/2021/02/17/clipping_VT0sLP_bd15.jpg?w=1200&h=900"
     },
     life_span: {
       type: DataTypes.STRING,
       allowNull: false,
     },
     intheDB : {
      type:  DataTypes.BOOLEAN,
      allowNull : false,
      defaultValue : true
     }
  },
  { timestamps: false });
};
