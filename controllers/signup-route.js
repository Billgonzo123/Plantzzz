const router = require('express').Router();

// '/signup'
router.get('/', (req, res) => {
    console.log('SignUp route');
    const signup = true;
    res.render('login', {signup});
})

module.exports = router;