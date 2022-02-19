const router = require('express').Router();

// '/login'
router.get('/', (req, res) => {
    console.log('LOGIN route');
    res.json({message: 'This will be the login page.'});
    res.render('login');
})

module.exports = router;