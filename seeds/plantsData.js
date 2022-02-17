const { Plants } = require('../models');

const plantsdata = [
    {
        common_name: 'Test Plant 1',
        botanical_name: 'Botanical Name 1',
        light: 'Bright/Indirect',
        watering_interval: 5,
        difficulty: 'Easy',
        soil: 'Soil Description',
        temp: '65F'
    }
    ,    {
        common_name: 'Test Plant 2',
        botanical_name: 'Botanical Name 2',
        light: 'Bright/Indirect',
        watering_interval: 5,
        difficulty: 'Hard',
        soil: 'Soil Description',
        temp: '74F'
    },
    {
        common_name: 'Test Plant 3',
        botanical_name: 'Botanical Name 3',
        light: 'Bright/Direct',
        watering_interval: 7,
        difficulty: 'Easy',
        soil: 'Soil Description',
        temp: '70F'
        
    }
]
const seedPlantsData = () => Plants.bulkCreate(plantsdata);

module.exports = seedPlantsData;