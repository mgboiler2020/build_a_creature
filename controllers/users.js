const User = require('../models').User;

const index = (req, res) => {  ///done
    res.render('users/index.ejs') //done
}

const renderSign = (req, res) => { //done
    res.render('users/signup.ejs')
}

///had to use solution code for the login function.  Need to research this.  
const login = (req, res) => {
    console.log(req.body);
    User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password //done
        }
    })
}
const signUp = (req, res) => {
    User.create(req.body)
    .then(newUser => {
        res.redirect(`/users/profile/${newUser.id}`);
    })
  
}

const renderLogin = (req, res) => { //done
    res.render('users/login.ejs');
}

    // .then(foundUser => {
    //     res.redirect(`/player/profile/${foundUser.id}`); ///done
//     })

// }
const renderProfile = (req, res) => {
    User.findByPk(req.params.index, {
        include: [{
            model: User,
            attributes: ['id','name']
        }] 
    })
    .then(userProfile => {
        res.render('users/profile.ejs', {
            user: userProfile
        })
    })
}

module.exports = {
    index,
    renderSign,
    renderProfile,
    signUp,
    renderLogin,
    login,
    // editPlayer,
    // playerDelete
}