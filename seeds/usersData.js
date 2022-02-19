const { Users } = require('../models');

const usersdata1 =
{
    username: 'User 1',
    first_name: 'Firstname',
    last_name: 'lastname',
    email: 'user1@email.com',
    password: '654321'
};
const usersdata2 =
{
    username: 'User 2',
    first_name: 'Joe',
    last_name: 'Buttz',
    email: 'user2@email.com',
    password: '123456'
};

//i dont use bulkCreate here so that passwords can be hashed without any extra code in the Users model
 const seedUsersData = async () => {
    // Create aUsers.bulkCreate([usersdata1, usersdata2])
    await Users.create(usersdata1);
    await Users.create(usersdata2);
}

module.exports = seedUsersData;