'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Users', [
      {
       fullName: 'Darus',
       email: "febriandaru23@gmail.com",
       phone: "081532551051",
       password: "727272",
       accountType: "admin"
    },
      {
       fullName: 'NhaZul',
       email: "febriandaru72@gmail.com",
       phone: "081532551052",
       password: "232323",
       accountType: "customer"
    },
      
  ], {});
  },


   
    


  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users',null,{});
  }
};
