const Building = require("../models").Building;
const BodyPart = require("../models").BodyPart;

//READ (Index-Get)
const index = (req, res) => {
    BodyPart.findAll()
    .then(bodyparts => {
        res.render("index.ejs", {
            bodyparts: bodyparts
        }); console.log(bodyparts)
    });   
}; 

module.exports = {
    index,
};