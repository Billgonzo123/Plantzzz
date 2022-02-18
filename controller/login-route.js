const router = require('express').Router();

// '/login'
router.get('/', (req, res) => {
    console.log('LOGIN route');
    res.json({message: 'This will be the login page.'});
})

module.exports = router;