const Building = require("../models").Building;
const BodyPart = require("../models").BodyPart;
const Garden = require("../models").Garden;
const User = require("../models").User;

//READ (Index-Get)
const index = (req, res) => {
    BodyPart.findAll()
    .then(bodyparts => {
        res.render("index.ejs", {
            bodyparts: bodyparts
        });
    });   
}; 

module.exports = {
    index,
};