//link routes here
const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');


router.use('/api', apiRoutes);
router.use('/', homeRoutes)

//this is the fallback when none of the above routes are found
router.use((req, res) => {
    res.status(404).end();
  });
  
  module.exports = router;