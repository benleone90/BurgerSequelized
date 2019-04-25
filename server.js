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
