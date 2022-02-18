const router = require('express').Router();

// '/signup'
router.get('/', (req, res) => {
    console.log('SignUp route');
    res.json({message: 'This will be the SINGNUP page.'});
})

module.exports = router;