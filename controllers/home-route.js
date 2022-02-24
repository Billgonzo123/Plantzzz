const router = require('express').Router();
const getDB = require('../utils/getDB');
const { withAuth } = require('../utils/auth');

router.get('/', withAuth,  async (req, res) => {
//get all the plants and session user data
   const { plants, user, userPlants, firstLetter, loggedIn } = await getDB(req);
   //this will render the specified view INSIDE main.handlebars at {{{body}}}
   res.render('homepage', { plants, user, userPlants, firstLetter, loggedIn } );
});

module.exports = router;