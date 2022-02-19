const router = require('express').Router();
const getDB = require('../utils/getDB')
const { withAuth, testSession } = require('../utils/auth');

router.get('/',testSession, withAuth,  async (req, res) => {
//get all the plants and session user data
   const { plants, user, userPlants, firstLetter } = await getDB(req);
console.log(firstLetter);
   //this will render the specified view INSIDE main.handlebars at {{{body}}}
   res.render('homepage', { plants, user, userPlants, firstLetter } );
});

module.exports = router;