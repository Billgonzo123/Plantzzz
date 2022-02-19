const router = require('express').Router();

// '/signup'
router.get('/', (req, res) => {
    console.log('SignUp route');
    const signup = true;
    res.json({message: 'This will be the SINGNUP page.'}); // <------ REMOVE THIS LINE WHEN HANDLEBARS PAGE IS READY
    res.render('login', signup);
})

module.exports = router;