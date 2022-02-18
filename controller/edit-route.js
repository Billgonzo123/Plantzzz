const router = require('express').Router();
const getDB = require('../utils/getDB')
const { withAuth, testSession } = require('../utils/auth');


// GET plant edit page'/add-edit/id'
router.get('/:userPlantId', testSession, withAuth, async (req, res) => {
    const { plants, user, userPlants } = await getDB(req);
    //send this variable to the view
    const userPlant = userPlants.find(e => e.id == req.params.userPlantId)

        if (!userPlant) {
            console.log('---------No plant found under this ID for the currently logged in user---------')
            res.redirect('/');
        } else {
            res.json({message: 'User plant found! This will be the plant EDIT USER PLANT page.'})
        }
})

module.exports = router;