const router = require('express').Router();
const sequelize = require('../../config/connection');
const {Users, UserPlants, Plants  } = require('../../models');
const withAuth = require('../../utils/auth') //this is middleware to check if user is loggin

//-----api route /api/users-----//

//GET all user info
router.get('/', (req,res) => {
    Users.findAll()
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//GET one user by include api/user/id
router.get('/:id', (req, res) => {
    Users.findOne({
        where: {
            id: req.params.id
        }
    }).then(dbUserData => {
    if (!dbUserData) {
        res.status(404).json({ message: 'user not found under that id'});
    }
        res.json(dbUserData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json;
    })
});

//POST new user api/user
router.post('/', (req, res) => {
    //expects {"username": "Name", "email": "Useremail@mail.com", "password": "userpassword" }
    Users.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(dbUserData => {
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json(dbUserData);
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

// PUT /api/users/1
router.put('/:id',withAuth, (req, res) => {
    // expects in the body any combonation of {username: 'newusername', email: 'new@gmail.com', password: 'newpassword1234'}

    // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
    Users.update(req.body, {
        individualHooks: true, //this makes sue the password is encrypted bia the Users hook beforeUpdate
        where: {
            id: req.params.id
        }

    })
        .then(dbUserData => {
            if (!dbUserData[0]) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE /api/users/1
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//login request
router.post('/login', (req, res) => {
    // expects {email: 'user@gmail.com', password: 'password1234'}

    Users.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'No user with that email address!' });
            return;
        };
        // //verify user password with the method we attached to the User model "checkPassword"
        const validPassword = dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json({ user: dbUserData, message: 'You are now logged in!' });

        });

    });
});

//post request to logout. destoys the session
router.post('/logout', withAuth, (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
          res.status(204).end();
        });
      }
      else {
        res.status(404).end();
      }
})


module.exports = router;