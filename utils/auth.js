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


const checkReferer = (req, res, next) => { 
    next(); //<----enable this when testing in localhost
    // if (req.get('referer') && req.get('referer').includes('plantzzz.herokuapp.com/')) {
    //     next();
    // } else {
    //     console.log('UNKNOWN REFERER: ', req.get('referer'));
    //     console.log('Attempt to call user data form unknown source')
    //     res.json({message: 'Access Denied'})
    // }
}


module.exports = {withAuth, isAdmin, userIdMatch, checkReferer};