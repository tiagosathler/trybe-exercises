'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Surgeries',
      [
        {
          specialty: 'Apendicectomia',
          doctor: 'Rey Dos Santos',
          updated: new Date(),
          published: new Date(),
        },
        {
          specialty: 'Cistectomia',
          doctor: 'Marcos Afonso',
          updated: new Date(),
          published: new Date(),
        },

        {
          specialty: 'Colecistectomia',
          doctor: 'Iuri Solto',
          updated: new Date(),
          published: new Date(),
        },
        {
          specialty: 'Craniectomia',
          doctor: 'Marilene Tobias',
          updated: new Date(),
          published: new Date(),
        },
        {
          specialty: 'Gastrorrafia',
          doctor: 'Joana Machado',
          updated: new Date(),
          published: new Date(),
        },
        {
          specialty: 'Herniorrafia',
          doctor: 'Lincoln Mathias',
          updated: new Date(),
          published: new Date(),
        },
        {
          specialty: 'Hisperopexia',
          doctor: 'Alessandra Martins',
          updated: new Date(),
          published: new Date(),
        },
        {
          specialty: 'Cistoscopia',
          doctor: 'Adailton Rodrigues',
          updated: new Date(),
          published: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Surgeries', null, {});
  },
};
