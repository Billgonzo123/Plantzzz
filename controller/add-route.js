const router = require('express').Router();
const getDB = require('../utils/getDB')
const { withAuth, testSession } = require('../utils/auth');

// /add/
//get plant add page 
router.get('/', testSession, withAuth, async (req, res) => {
    const { plants, user, firstLetter } = await getDB(req);
    res.json({ message: 'This will be the plant ADD USER PLANT page.' })// <------ REMOVE THIS LINE WHEN HANDLEBARS PAGE IS READY
    res.render('add-edit-page', { plants, user, firstLetter });
})

module.exports = router;