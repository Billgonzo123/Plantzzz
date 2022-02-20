const router = require('express').Router();

// '/login'
router.get('/', async (req, res) => {
    console.log('LOGIN route');
    const loggedIn = req.session.loggedIn;
    console.log(req.session.username);

    let firstLetter = false;

    if (req.session.username) {
        firstLetter = req.session.username.split('')[0];
    }
    res.render('login', { firstLetter, loggedIn });
})

// if signup is a success '/login/#'
router.get('/signedup', async (req, res) => {
    const loggedIn = req.session.loggedIn;

    let firstLetter = false;

    if (req.session.username) {
        firstLetter = req.session.username.split('')[0];
    };
    //test if a page sent rather than the user entering the url the user to this url
    let signedUp = false;
    if (req.get('referer')) signedUp = true;

    res.render('login', { firstLetter, loggedIn, signedUp });
})



module.exports = router;