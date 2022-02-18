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

       //This is a test session. delete this code when login functionality is available
const testSession =  (req, res, next) => {

 req.session.save(() => {
    req.session.user_id = 1;
    req.session.username = 'User 1';
    req.session.loggedIn = true;
 
    console.log( 'message: You are now logged in as a test user!' );
 next();
 });


}
 ////------end test session login-----//

module.exports = {withAuth, isAdmin, testSession};