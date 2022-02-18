const router = require('express').Router();
const getDB = require('../utils/getDB')
const { withAuth, testSession } = require('../utils/auth');

// '/plant-profile'
router.get('/:userPlantId',testSession, withAuth, async (req, res) => {
const { plants, user, userPlants } = await getDB(req);
//send this variable to the view. Gets the requested user plant from the array of user plants
const userPlant = userPlants.find(e => e.id == req.params.userPlantId)
    if (!userPlant) {
        console.log('The current logged in user does not have a plant by this id');
        res.redirect('/');
    } else {
        res.json({message: 'User plant found! This will be the plant profile page.'});
    }
});

module.exports = router;