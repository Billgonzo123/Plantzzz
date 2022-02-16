const Users = require('./Users');
const UserPlants = require('./UserPlants');
const Plants = require('./Plants');
const Comments = require('./Comments');

//create User Plant associations

UserPlants.belongsTo(Users, {
    foreignKey: 'user_id'
});

Users.hasMany(UserPlants, {
    foreignKey: 'user_id'
});
UserPlants.belongsTo(Plants, {
    foreignKey: 'plant_id'
});

Plants.hasMany(UserPlants, {
    foreignKey: 'plant_id'
});

//create comment associations
Comments.belongsTo(Users, {
    foreignKey: 'posters_id'
});

Comments.belongsTo(Plants, {
    foreignKey: 'plant_id'
});

Plants.hasMany(Comments, {
    foreignKey: 'plant_id'
});

Users.hasMany(Comments,{
    foreignKey: 'posters_id'
});

module.exports = {Users, Plants, UserPlants, Comments};