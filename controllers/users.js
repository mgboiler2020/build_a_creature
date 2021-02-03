const User = require('../models').User;
const Garden = require('../models').Garden;

const index = (req, res) => {  ///done
    res.render('users/index.ejs') //done
}

const renderSign = (req, res) => { //done
    res.render('users/signup.ejs')
}
  
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
const signUp = (req, res) => {
    User.create(req.body)
    .then(newUser => {
        res.redirect(`/users/profile/${newUser.id}`);
    })
  
}

const renderLogin = (req, res) => { //done
    res.render('users/login.ejs');
}

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
const deleteUser = (req, res) => {
    User.destroy({
        where: {id: req.params.index}
        // where: {id: req.user.id}
    })
    .then(() => {
        res.redirect('/users');
    })
}

module.exports = {
    index,
    renderSign,
    renderProfile,
    signUp,
    renderLogin,
    login,
    editProfile,
    deleteUser
}