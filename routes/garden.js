const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get("/", ctrl.garden.index); //READ (Index-Get)
router.post("/", ctrl.garden.createAnimal);
router.post("/new", ctrl.garden.renderAnimal);

router.get("/:index", ctrl.garden.show) //READ (Show-Get)


module.exports = router;