const router = require('express').Router();

const usersRoutes = require('./users-routes.js');
// const plantsRoutes = require('./plants-routes.js');
// const userPlantsRoutes = require('./userPlants-routes.js');

router.use('/users', usersRoutes);
// router.use('/plants', plantsRoutes);
// router.use('/userPlants', userPlantsRoutes);

module.exports = router;