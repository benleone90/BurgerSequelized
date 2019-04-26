"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Burgers",
      [
        {
          burger_name: "hamburger",
          devoured: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          burger_name: "cheeseburger",
          devoured: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Burgers", null, {});
  }
};
