const router = require('express').Router();
const getDB = require('../utils/getDB')
const { withAuth } = require('../utils/auth');

// /add/
//get plant add page 
router.get('/', withAuth, async (req, res) => {
    const { plants, user, firstLetter, loggedIn } = await getDB(req);
    res.render('add-edit', { plants, user, firstLetter, loggedIn });
})

module.exports = router;