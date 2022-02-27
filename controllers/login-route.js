const router = require('express').Router();

// '/login'
router.get('/', async (req, res) => {
    const loggedIn = req.session.loggedIn;
    let firstLetter = false;

    if (req.session.username) {
        firstLetter = req.session.username.split('')[0];
    }
    res.render('login', { firstLetter, loggedIn });
})

// if signup is a success '/login/'
router.get('/signedup', async (req, res) => {
    const loggedIn = req.session.loggedIn;

    let firstLetter = false;

    if (req.session.username) {
        firstLetter = req.session.username.split('')[0];
    };
    //test if another page requested rather than the user entering the url 
    let signedUp = false;
    if (req.get('referer')) signedUp = true;

    res.render('login', { firstLetter, loggedIn, signedUp });
})

module.exports = router;