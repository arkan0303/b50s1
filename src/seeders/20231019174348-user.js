'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
         name: 'arkan',
         email: 'arkan@gmail.com',
         password:'sayang',
         createdAt:"2023-10-13",
         updatedAt:"2023-11-10",
       }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
