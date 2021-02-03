const Garden = require("../models").Garden;
const User = require ("../models").User;

//READ (Index-Get)
const index = (req, res) => {
        res.render("gardens/index.ejs"
    );
}; 

//READ (Show-Get)
const show = (req, res) => {
    Garden.findByPk(req.params.index, {
        include: [{
            model: User,
        }],
    }).then(garden => {
        console.log(garden),
        res.render("gardens/show.ejs", { 
            oneCreature: garden,
        });
    })
}

module.exports = {
    index,
    show
};