"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', 
    [
      {
        fullName: "Leonardo",
        email: "leo@test.com",
        phone_num: "11-99823-1421",
        // usamos a função CURRENT_TIMESTAMP do SQL para salvar a data e hora atual nos campos `createdAt` e `updatedAt`
        createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      {
        fullName: "JEduardo",
        email: "edu@test.com",
        phone_num: "11-88991-1241",
        createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    ],
    {}),
  down: async (queryInterface, _Sequelize) =>
    queryInterface.bulkDelete("Users", null, {}),
  // async up (queryInterface, Sequelize) {
  //   /**
  //    * Add seed commands here.
  //    *
  //    * Example:
  //    * await queryInterface.bulkInsert('People', [{
  //    *   name: 'John Doe',
  //    *   isBetaMember: false
  //    * }], {});
  //   */
  // },

  // async down (queryInterface, Sequelize) {
  //   /**
  //    * Add commands to revert seed here.
  //    *
  //    * Example:
  //    * await queryInterface.bulkDelete('People', null, {});
  //    */
  // }
};
