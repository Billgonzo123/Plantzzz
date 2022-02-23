const { Users } = require('../models');

const usersdata1 =
{

};

//i dont use bulkCreate here so that passwords can be hashed without any extra code in the Users model
 const seedUsersData = async () => {
    // Create aUsers.bulkCreate([usersdata1, usersdata2])
    await Users.create(usersdata1);
    await Users.create(usersdata2);
}

module.exports = seedUsersData;