const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flags: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    continents: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.DOUBLE,
    },
    population: {
      type: DataTypes.INTEGER
    },
  });
};


















// const { DataTypes } = require('sequelize');
// // Exportamos una funcion que define el modelo
// // Luego le injectamos la conexion a sequelize.
// module.exports = (sequelize) => {
//   // defino el modelo
//   sequelize.define('pais', {
//     id: {
//       type: DataTypes.STRING,
//       primaryKey: true,
//       allowNull: false,
//       unique: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     flags: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     region: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     capital: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     subregion: {
//       type: DataTypes.STRING,
     
//     },
//     area: {
//       type: DataTypes.DOUBLE,
     
//     },
//     population: {
//       type: DataTypes.INTEGER,
      
//     },
//   },
//   // {timestamps: true}
//   );
// };
