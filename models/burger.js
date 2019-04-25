// Used npx sequelize model:create --name Burger --attributes burger_name:string,devoured:boolean --force
// to create burger model and migration file
// Added defaultValue: false

"use strict";
module.exports = (sequelize, DataTypes) => {
  const Burger = sequelize.define(
    "Burger",
    {
      burger_name: DataTypes.STRING,
      devoured: { type: DataTypes.BOOLEAN, defaultValue: false }
    },
    {}
  );
  Burger.associate = function(models) {
    // associations can be defined here
  };
  return Burger;
};
