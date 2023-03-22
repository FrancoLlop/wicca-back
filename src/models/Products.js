const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Products', {
  id:{
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  amount: {
    type: DataTypes.INTEGER
  },
  price:{
    type: DataTypes.INTEGER
  },
  images:{
    type: DataTypes.JSON
  },
  type:{
    type: DataTypes.STRING
  },
  description:{
    type: DataTypes.TEXT
  }
}, {
})
}
