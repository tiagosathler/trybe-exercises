"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const PlansTable = queryInterface.createTable("Plans", {
      plan_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      coverage: {
        allowNull: false,
        type: Sequelize.STRING(45),
      },
      price: {
        allowNull: false,
        type: Sequelize.DOUBLE,
      },
      published: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    return PlansTable;
  },

  down: async (queryInterface) => queryInterface.dropTable("Plans"),
};
