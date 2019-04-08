module.exports = function (sequelize, DataTypes) {
  const dating = sequelize.define("Dating", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT,
    allowNull: false,
    validate: {
      len [1, 50]
    }
  });
  return dating;
};
