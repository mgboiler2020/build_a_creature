//REQUIRES
const { request } = require('express');
const express = require("express");
const app = express();
// const methodOverride = require("method-override");
const routes = require("./routes");

/*
//Data
 const pokemon = require("./models/pokemon.js");
 
 const teams = require("./models/team.js");
 */
const users = require("./models/user.js");

//MIDDLEWARE
//To confirm route
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});
//To convert data submitted into a format the server can read
app.use(express.urlencoded({ extended: true }));
//To delete/exit existing data
// app.use(methodOverride("_method"));
//To serve static file (CSS)
app.use(express.static(__dirname + "/public"));

// app.use("/build", routes.build);
app.use('/users', routes.users);
// app.use('/garden', routes.garden);
/*
app.use("/players", routes.players);
app.use("/teams", routes.teams);
*/
//LISTEN
app.listen(3000, () => {
    console.log("My build-a-creature app is set up and running");
});