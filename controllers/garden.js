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

/*
const createAnimal = (req, res) => {
    console.log(req.body),
    res.render("gardens/new.ejs")
    }
    */

const renderAnimal = (req, res) => {
    console.log(req.body),
    BodyPart.findAll()
    .then(newAnimal => {
        console.log(newAnimal)
        res.render("gardens/new.ejs", {
            newAnimal: newAnimal});
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
    //createAnimal,
    renderAnimal
};