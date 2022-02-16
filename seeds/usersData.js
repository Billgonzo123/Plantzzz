const { Users } = require('../models');

const usersdata = [
    {
        username: 'User 1',
        email: 'user1@email.com',
        password: '1234'
    }
    ,    {
        username: 'User 2',
        email: 'user2@email.com',
        password: '1234'
    }
]
const seedUsersData = () => Users.bulkCreate(usersdata);

module.exports = seedUsersData;