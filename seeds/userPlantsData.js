const { UserPlants } = require('../models');

const usersdata = [
    {
        user_id: 1,
        plant_id: 1,
        nickname: 'Billy',
        initial_water_date: new Date('October 13, 2014'),
        watering_interval: 6
    },
    {
        user_id: 1,
        plant_id: 2,
        nickname: 'Jimbo',
        initial_water_date: new Date('October 13, 1998'),
        watering_interval: 3
    }
]
const seedUserPlantsData = () => UserPlants.bulkCreate(usersdata);

module.exports = seedUserPlantsData;