const express = require('express');
const routes = require('./controller');
const sequelize = require('./config/connection');
const path = require('path');

//set up handlebars
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
//this allows helpers to be used in handlebars
const hbs = exphbs.create({helpers});

const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    //set the secret in your .env
  secret: 'Super secret secret',
  cookie: [],
  resave: false,
  saveUninitialized: true,
  stroe: new SequelizeStore({
    db: sequelize
  })
}


const app = express();
//sets port for heroku if that is where app is being served
const PORT = process.env.PORT || 3001;

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//sets the public folder to static
app.use(express.static(path.join(__dirname, 'public')));
//config handle bars for use in express
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});