const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.users.index);
router.get('/signup', ctrl.users.renderSign);
// router.post('/signup', ctrl.users.signUp);
// router.get('/profile/:index', ctrl.users.renderProfile);
router.get('/login', ctrl.users.renderLogin);
router.post('/login', ctrl.users.login);

module.exports = router;