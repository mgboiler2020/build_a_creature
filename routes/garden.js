const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get("/", ctrl.garden.index); //READ (Index-Get)
router.get("/:index", ctrl.garden.show) //READ (Show-Get)
router.post("/new", ctrl.garden.createAnimal);

module.exports = router;