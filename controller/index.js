//link routes here
const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoute = require('./home-route');
const addRoute = require('./add-route');
const editRoute = require('./edit-route');
const loginRoute = require('./login-route');
const signupRoute = require('./signup-route');
const profileRoutes = require('./profile-route');

router.use('/api', apiRoutes);
router.use('/', homeRoute)
router.use('/add', addRoute)
router.use('/edit', editRoute)
router.use('/login', loginRoute)
router.use('/signup', signupRoute)
router.use('/plant-profile', profileRoutes)

//this is the fallback when none of the above routes are found
router.use((req, res) => {
    res.status(404).end();
  });
  
  module.exports = router;