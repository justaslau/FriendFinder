var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({
	extended: true
}));
app.use(express.json());
// Public Directory
app.use(express.static('./app/public'));
// Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
app.listen(PORT, function() {
	console.log("Application running on PORT " + PORT);
});