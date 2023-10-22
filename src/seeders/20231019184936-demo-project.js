'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Projects', [{
         title: 'Hello World',
         start_date : '2023-10-11',
         end_date: '2023-11-10',
         description: 'Haiiii Gays Pinjem Seratus Dong',
         technologies: ['node-js', 'golang', 'react', 'java'],
         image: 'img png',
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
        title: 'Hello World',
        start_date : '2023-10-11',
        end_date: '2023-11-10',
        description: 'Haiiii Gays Pinjem Seratus Dong',
        technologies: ['node-js', 'golang', 'react', 'java'],
        image: 'img png',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Projects', null, {});
  }
};
