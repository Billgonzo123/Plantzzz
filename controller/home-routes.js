const router = require('express').Router();

router.get('/', (req, res) => {
   console.log('SUCCESS!!"');
   // simply render the handlebars file homePage
   //this will render homepage INSIDE main.handlebars at {{{body}}}
   res.render('homepage');
});

module.exports = router;