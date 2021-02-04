const Garden = require("../models").Garden;
const User = require ("../models").User;
const BodyPart = require("../models").BodyPart;

//READ (Index-Get)
const index = (req, res) => {
    Garden.findAll().then(creatures => {
        res.render("gardens/index.ejs", {
            allCreatures: creatures,
        });
    });
}; 

const createAnimal = (req, res) => {
    Garden.create(req.body)
    .then(newCreature => {
        console.log(newCreature),
        res.redirect("/gardens")
    })
}

const renderAnimal = (req, res) => {
    BodyPart.findAll({
        where: {
          id: req.body.bodypart  
        }
    }).then(selectedPart => {
        res.render("gardens/new.ejs",{
            selectedPart: selectedPart
        })
    })
}

//READ (Show-Get)
const show = (req, res) => {
    Garden.findByPk(req.params.index, {
        
    }).then(garden => {
        console.log(garden),
        res.render("gardens/show.ejs", { 
            oneCreature: garden,
        });
    });
}

module.exports = {
    index,
    show,
    createAnimal,
    renderAnimal
};