const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.post('/signup', ctrl.users.signUp);
router.get('/', ctrl.users.index);
router.get('/signup', ctrl.users.renderSign);
router.post('/login', ctrl.users.login);
router.get('/login', ctrl.users.renderLogin);

router.get("/profile/:index", ctrl.users.renderProfile)
router.put('/profile/:index', ctrl.users.editProfile);

//router.get('/profile/:index/build', ctrl.users.renderBuild); NOT DOING ANYTHING AT THIS MOMENT

router.delete('/:index', ctrl.users.deleteUser);

module.exports = router;