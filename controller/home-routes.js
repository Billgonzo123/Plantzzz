const router = require('express').Router();
const { withAuth } = require('../utils/auth');
const { Plants, Users, UserPlants } = require('../models');

router.get('/', withAuth, async (req, res) => {

   //load all plant data 
   const dbPlants = await Plants.findAll();
   const plants = dbPlants.map(plant => plant.get({ plain: true }));

   //get single user data
   const dbUsers = await Users.findOne({
      where: {
         id: req.session.user_id
      }
   });

   const users = dbUsers.map(data => data.get({ plain: true }));

   const dbUserPlants = await UserPlants.findAll({
      where: {
         user_id: req.session.user_id
      },
      include: [
         {
            model: Plants,
            attributes: ['common_name']
         },
         {
            model: Users,
            attributes: ['username']
         }
      ]
   });

   const userPlants = dbUserPlants.map(data => data.get({ plain: true }));

   // simply render the handlebars file homePage
   //this will render homepage INSIDE main.handlebars at {{{body}}}

   //res.render('homepage', { plants, users, userPlants });
   res.render('test', { plants, users, userPlants });

});

module.exports = router;