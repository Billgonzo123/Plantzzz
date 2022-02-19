const { Plants, Users, UserPlants } = require('../models');
//This is used to send general data to each view. Every page except login will need all this data
 const getDB = async (req) =>  {
    //find all the plants
        const dbPlants = await Plants.findAll();
        const plants = dbPlants.map(plant => plant.get({ plain: true }));
     
        //find the user who is logged in
        const dbUser = await Users.findOne({ 
            where: {
                id: req.session.user_id
            }
        });
        const user = dbUser.get({ plain: true });
     
        //find all the user plants that belong to the logged in user
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
        //return all the data
    
        const firstLetter = user.username.split('')[0];


        const loggedIn = req.session.loggedIn;

        
     return { plants, user, userPlants, firstLetter, loggedIn };
    };
    
module.exports = getDB;