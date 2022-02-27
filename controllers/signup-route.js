const router = require('express').Router();

// '/signup'
router.get('/', (req, res) => {
    const signup = true;
    res.render('login', {signup});
})

module.exports = router;