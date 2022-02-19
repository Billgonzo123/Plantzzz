const router = require('express').Router();

// '/login'
router.get('/', (req, res) => {
    console.log('LOGIN route');
    res.json({message: 'This will be the login page.'});// <------ REMOVE THIS LINE WHEN HANDLEBARS PAGE IS READY
    res.render('login');
})

module.exports = router;