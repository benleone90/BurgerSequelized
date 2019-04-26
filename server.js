var express = require("express");
var app = express();
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");

var PORT = process.env.PORT || 8080;

var model = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.use(express.static(__dirname + "/public"));

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// bring in routes
var routes = require("./controllers/burgers_controller");

// connect to the routes through the controller
app.use("/", routes);
app.use("/api/burgers", routes);
app.use("/api/update", routes);

model.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    model.sequelize.sync();
    console.log(
      "Connection successful! Server listening on http://localhost:" + PORT
    );
  });
});
