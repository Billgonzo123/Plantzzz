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
}

module.exports = {withAuth, isAdmin};