const router = require('express').Router();
const getDB = require('../utils/getDB');
const { withAuth, testSession } = require('../utils/auth');

// '/plant-profile'
router.get('/:userPlantId', withAuth, async (req, res) => {
const { plants, user, userPlants, firstLetter, loggedIn } = await getDB(req);
//send this variable to the view. Gets the requested user plant from the array of user plants
const userPlant = userPlants.find(e => e.id == req.params.userPlantId);
    // if (!userPlant) {
    //     console.log('The current logged in user does not have a plant by this id');
    //     res.redirect('/');
    // } else {
        res.render('plant-profile',{ plants, user, userPlant, firstLetter, loggedIn});
    // }
});

module.exports = router;