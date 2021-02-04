const Building = require("../models").Building;
const BodyPart = require("../models").BodyPart;
const Garden = require("../models").Garden;
const User = require("../models").User;

//READ (Index-Get)
const index = (req, res) => {
    console.log("anacé")
    console.log(req.body)
    BodyPart.findAll({
        include: [{
            model: User
        }]
    })
    .then(bodyparts => {
        res.render("index.ejs", {
            bodyparts: bodyparts,
            id: req.query.id
        });
    });   
}; 

module.exports = {
    index,
};