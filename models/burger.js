module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define(
    "Burger",
    {
      burger_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      }
    },
    {
      classMethods: {
        associate: function(models) {
          Burgers.hasOne(models.Customer);
        }
      }
    }
  );
  return Burger;
};
