const sequelize = require('../config/connection');
const plantsData = require('./plantsData');
const usersData = require('./usersData');
const userPlantsData = require('./userPlantsData');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await plantsData();
  await usersData();
  await userPlantsData();


  process.exit(0);
};

seedAll();