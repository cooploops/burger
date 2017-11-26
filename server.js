const express = require("express");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3005;

const app = express();

// middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

// handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// basic routing
const routes = require("./controllers/burgers_controller")

app.use("/", routes);
// turn server on
app.listen(port, function(){
    console.log("app being served on port " + port);
});