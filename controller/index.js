//link routes here
const router = require('express').Router();
const homeRoutes = require('./home-routes');


router.use('/', homeRoutes)

//this is the fallback when none of the above routes are found
router.use((req, res) => {
    res.status(404).end();
  });
  
  module.exports = router;