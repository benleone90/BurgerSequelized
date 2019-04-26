// Used npx sequelize model:create --name Burger --attributes burger_name:string,devoured:boolean --force
// to create burger model and migration file
// Added defaultValue: false

"use strict";
module.exports = (sequelize, DataTypes) => {
  const Burgers = sequelize.define(
    "Burgers",
    {
      burger_name: { type: DataTypes.STRING },
      devoured: { type: DataTypes.BOOLEAN, defaultValue: false },
      createdAt: {
        type: DataTypes.DATE(3),
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(3)"),
        field: "created_at"
      },
      updatedAt: {
        type: DataTypes.DATE(3),
        defaultValue: sequelize.literal(
          "CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)"
        ),
        field: "updated_at"
      }
    },
    {}
  );
  Burgers.associate = function(models) {
    // associations can be defined here
  };
  return Burgers;
};
