'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert(
      'Plans',
      [
        {
          coverage: 'Total',
          price: 549.99,
          updated: new Date(),
          published: new Date(),
        },
        {
          coverage: 'Partial',
          price: 349.99,
          updated: new Date(),
          published: new Date(),
        },
        {
          coverage: 'Emergencies only',
          price: 109.99,
          updated: new Date(),
          published: new Date(),
        },
        {
          coverage: 'Family',
          price: 949.99,
          updated: new Date(),
          published: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Plans', null, {});
  },
};
