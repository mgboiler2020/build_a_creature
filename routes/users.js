const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.users.index);
router.get('/signup', ctrl.users.renderSign);
router.get('/build', ctrl.users.renderIndex);
router.post('/signup', ctrl.users.signUp);
router.get('/profile/:index', ctrl.users.renderProfile);
router.get('/login', ctrl.users.renderLogin);
router.put('/profile/:index', ctrl.users.editProfile);
router.post('/login', ctrl.users.login);
router.delete('/:index', ctrl.users.deleteUser);

module.exports = router;