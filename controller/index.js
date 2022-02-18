//link routes here
const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoute = require('./home-route');
const addEditRoute = require('./add-edit-route');
const loginRoute = require('./login-route');
const profileRoutes = require('./profile-route');


router.use('/api', apiRoutes);
router.use('/', homeRoute)
router.use('/add-edit', addEditRoute)
router.use('/login', loginRoute)
router.use('/plant-profile', profileRoutes)

//this is the fallback when none of the above routes are found
router.use((req, res) => {
  console.log('Fallback 404')
    res.status(404).end();
  });
  
  module.exports = router;