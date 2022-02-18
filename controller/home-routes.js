const router = require('express').Router();
const { Plants, Users, UserPlants } = require('../models');

router.get('/', async (req, res) => {
   console.log('SUCCESS!!"');
   //load all plant data
   const dbPlants = await Plants.findAll();
   const plants = dbPlants.map(plant => plant.get({ plain: true }));


   const dbUsers = await Users.findAll();
   const users = dbUsers.map(data => data.get({ plain: true }));



   const dbUserPlants = await UserPlants.findAll({
      include: [
         {
            model: Plants,
            attributes: ['common_name']
         }
      ]
   });
   const userPlants = dbUserPlants.map(data => data.get({ plain: true }));

   // simply render the handlebars file homePage
   //this will render homepage INSIDE main.handlebars at {{{body}}}

   // res.render('homepage', { plants, users, userPlants });
   res.render('test', { plants, users, userPlants });

});

module.exports = router;