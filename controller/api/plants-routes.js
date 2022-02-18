const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Users, UserPlants, Plants } = require('../../models');
const { isAdmin } = require('../../utils/auth') //this is middleware to check if user is an admin

//-----api requests for plants table /api/plants-----//

//GET all plants api/plants/users
router.get('/', (req, res) => {
    Plants.findAll()
        .then(dbPlantsData => res.json(dbPlantsData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//GET plant by id /api/plants/id
router.get('/:id', (req, res) => {
    Plants.findOne({
        where: {
            id: req.params.id
        }
    }).then(dbPlantsData => {
        if (!dbPlantsData) {
            res.status(404).json({ message: 'plant not found under that id' });
        }
        res.json(dbPlantsData)
    })
        .catch(err => {
            console.log(err);
            res.status(500).json;
        })
});

//GET plant by common_name /api/plants/common-name
router.get('/common-name/:name', (req, res) => {
    console.log(req.params.name);
    const convertedName = req.params.name.replace(/-/g, ' ');

    Plants.findOne({
        where: {
            common_name: convertedName
        }
    }).then(dbPlantsData => {
        if (!dbPlantsData) {
            console.log(convertedName);
            res.status(404).json({ message: 'Plant not found. Please check naming' });
        }
        res.json(dbPlantsData)
    })
        .catch(err => {
            console.log(err);
            res.status(500).json;
        })
});

//POST new Plant api/plants
router.post('/', isAdmin, (req, res) => {

    Plants.create({
        common_name: req.body.common_name,
        botanical_name: req.body.botanical_name,
        light: req.body.light,
        watering_interval: req.body.watering_interval,
        difficulty: req.body.difficulty,
        soil: req.body.soil,
        temp: req.body.temp
    })
        .then(dbPlantData => res.json(dbPlantData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


//UPDATE plant in Plnats table
router.put('/:id', isAdmin, (req, res) => {
//expects the same data from above create
    Plants.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbPlantData => {
            if(!dbPlantData[0]) {
                res.status(404).json({message: 'Nothing to update'});
                return;
            }
            res.json(dbPlantData)
    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//DELETE Plant for Plants table
router.delete('/:id', isAdmin, (req, res) => {
    Plants.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No plant found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;