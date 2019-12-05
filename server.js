var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 10500;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes.js").main(app);
require("./app/routing/htmlRoutes.js").main(app);

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});