const Garden = require("../models").Garden;
const User = require ("../models").User;

//READ (Index-Get)
const index = (req, res) => {
    Garden.findAll().then(creatures => {
        res.render("gardens/index.ejs", {
            allCreatures: creatures,
        });
    });
}; 

//READ (Show-Get)
const show = (req, res) => {
    //console.log(req.params.index)
    Garden.findByPk(req.params.index, {
        
    }).then(garden => {
        console.log(garden),
        res.render("gardens/show.ejs", { 
            oneCreature: garden,
        });
    });
}

const createAnimal = (req, res) => {
    console.log(req.body)
    Garden.create(req.body)
    .then(newCreature => {
        console.log(newCreature)
    })
}

module.exports = {
    index,
    show,
    createAnimal
};