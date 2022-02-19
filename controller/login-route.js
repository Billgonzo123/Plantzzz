const router = require('express').Router();

// '/login'
router.get('/', (req, res) => {
    console.log('LOGIN route');
    res.render('login');
})

module.exports = router;