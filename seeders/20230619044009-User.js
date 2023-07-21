const argon2 = require('argon2');

async function hashPassword(password) {
  try {
    const hashedPassword = await argon2.hash(password);
    return hashedPassword;
  } catch (error) {
    console.error('Error hashing password:', error);
    throw error;
  }
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Hash the password before inserting into the database
    const adminPassword = '111111';
    const hashedAdminPassword = await hashPassword(adminPassword);

    await queryInterface.bulkInsert('Users', [
      {
        fullName: 'Darus',
        email: 'febriandaru23@gmail.com',
        phone: '081532551051',
        password: hashedAdminPassword,
        accountType: 'admin'
      },
      {
        fullName: 'NhaZul',
        email: 'febriandaru72@gmail.com',
        phone: '081532551052',
        password: '232323',
        accountType: 'customer'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
