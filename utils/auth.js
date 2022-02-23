const withAuth = (req, res, next) => {
  
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};

const isAdmin = (req, res, next) => {
  
    if (!req.session.admin) {
        res.json({message: 'Must be an admin to make these changes'});
    } else {
        next();
    }
};

const userIdMatch = (req, res, next) => {
  
    (req.session.user_id == req.params.id) ? next() : res.json({message: 'You do not own this user id'});
}


const testSession =  (req, res, next) => { // <------This is a test session. delete this code and where they appear in the routes when login functionality is available

 req.session.save(() => {
    req.session.user_id = 1; //<--- change this to change the id of the test user
    req.session.username = 'User 1'; 
    req.session.loggedIn = true;
 
    console.log( 'message: You are now logged in as a test user!' );
 next();
 });
}
 ////------end test session login-----//

module.exports = {withAuth, isAdmin, testSession, userIdMatch};