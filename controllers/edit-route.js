const router = require('express').Router();
const getDB = require('../utils/getDB');
const { withAuth, testSession } = require('../utils/auth');

// GET plant edit page'/edit/id'
router.get('/:userPlantId', withAuth, async (req, res) => {
    const { plants, user, userPlants, firstLetter, loggedIn } = await getDB(req);
    //send this variable to the view
    const userPlant = userPlants.find(e => e.id == req.params.userPlantId);

    if (!userPlant) {
        console.log('---------No plant found under this ID for the currently logged in user---------');
        res.redirect('/');
    } else {
        res.render('add-edit', { plants, user, userPlant, firstLetter, loggedIn });
    }
})

module.exports = router;