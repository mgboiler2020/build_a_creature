const Building = require("../models").Building;

//READ (Index-Get)
const index = (req, res) => {
        res.render("index.ejs")
}; 

module.exports = {
    index,
};