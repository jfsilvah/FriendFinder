var path = require("path");

function routes(app){
    app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});
    app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    app.get("/favicon.ico", function(req, res) {
        console.log("Icon");
        res.end();
	});
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});
}

module.exports = {
    main: function (app) {
        routes(app);
    }
};