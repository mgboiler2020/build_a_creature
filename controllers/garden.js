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

//READ (Show-Get)
const show = (req, res) => {
    Garden.findByPk(req.params.index, {

    }).then(garden => {
        console.log(garden.userId),
        User.findByPk(garden.userId)
        res.render("gardens/show.ejs", { 
            oneCreature: garden,
        });
    })
};


const deleteCreature = (req, res) => {
    Garden.destroy({
        where: {id: req.params.index}
    })
    .then(() => {
        res.redirect('/gardens');
    })
}

module.exports = {
    index,
    show,
    createAnimal,
    deleteCreature
};