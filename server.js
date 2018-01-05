
const express = require("express");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const app = express();


var route = require("./controllers/routing_controllers.js");


app.use(express.static("public"));
app.use(bodyParser.urlencoded({
     extended:false
})); // end bodyp arser
app.use(methodOverride('_method'));



app.engine("handlebars",exphbs({defaultLayout : "main"}));
app.set("view engine","handlebars");


app.use("/",route);



app.listen(PORT,function()
{
  console.log('The Wish List Organizer application is running on : '+PORT);
});



/* This Code written by Sangeetha
Uses Mysql, express handlebars, mysql */
/* works with index.handlebars , main.handlebars */
