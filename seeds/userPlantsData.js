const { UserPlants } = require('../models');

const usersdata = [

]
const seedUserPlantsData = () => UserPlants.bulkCreate(usersdata);

module.exports = seedUserPlantsData;