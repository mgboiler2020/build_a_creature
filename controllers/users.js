const User = require('../models').User;
const Garden = require('../models').Garden;
const BodyPart = require("../models").BodyPart;


//Display index "Welcome to Create a Creature" page
const index = (req, res) => {  ///done
    res.render('users/index.ejs') //done
}

//Display Signup
const renderSign = (req, res) => { //done
    res.render('users/signup.ejs')
}

//Login and verify username and password
const login = (req, res) => {
    console.log(req.body);
    User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password //done
        }
    })
    .then(foundUser => {
        res.redirect(`/users/profile/${foundUser.id}`); ///done
    })
}

//Allow a person to enter information and create a user account
const signUp = (req, res) => {
    User.create(req.body)
    .then(newUser => {
        res.redirect(`/users/profile/${newUser.id}`);
    })
  
}
//Display Login 
const renderLogin = (req, res) => { //done
    res.render('users/login.ejs');
}
//Display Profile
const renderProfile = (req, res) => {
    console.log(req.params.index);
    User.findByPk(req.params.index)
    .then(userProfile => {
        console.log(userProfile);
        res.render('users/profile.ejs', {
            user: userProfile
        })
    })
}
//Allow user to edit their profile
const editProfile = (req, res) => { //done
    console.log(req.body);
    User.update(req.body, {
        where: {
            id: req.params.index
        },
        returning: true
    })
    .then(editUser => {
        res.redirect(`/users/profile/${req.params.index}`);
    })
}

//Allow a user to delete their account
const deleteUser = (req, res) => {
    User.destroy({
        where: {id: req.params.index}
    })
    .then(() => {
        res.redirect('/users');
    })
}
const renderBuild = (req, res) => { //done
    Build.FindAll({
        include: [
            {
                model: User, 
                attributes: [user.id]
            }
        ]
    })
    .then(newBuild => {
        //default is GET in redirect
        console.log(newBuild);
        res.redirect('/build');
    })
}
// req.body.userId = req.user.id;
    
//     Fruit.create(req.body)
//     .then(newFruit => {
//         //default is GET in redirect
//         res.redirect('/fruits');
//     })
// }
  


module.exports = {
    index,
    renderSign,
    renderProfile,
    signUp,
    renderLogin,
    login,
    editProfile,
    deleteUser,
    renderBuild
   
}