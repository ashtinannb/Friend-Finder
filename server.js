var express = require("express");


// creating express server
var app = express();

// establishes port
var PORT = process.env.PORT || 8080;
console.log('Dirname in server', __dirname);
app.use(express.static(__dirname + '/app/public' ))
app.use(express.static(__dirname + '/app/data' ))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// shows server routes
require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

// this starts code 
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});