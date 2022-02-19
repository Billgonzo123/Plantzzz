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

module.exports = router;