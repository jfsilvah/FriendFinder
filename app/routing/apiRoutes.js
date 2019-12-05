function routes(app) {
    app.get("/api/friends", function (req, res) {
        var friends = require("../data/friends.js");
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        var matchIndex = 0;
        var matchDiff = 1000;
        var total = 0;
        var difference = 0;
        var friends = require("../data/friends.js");
        for (var i = 0; i < newFriend.scores.length; i++) {
            newFriend.scores[i] = parseInt(newFriend.scores[i]);
        }
        for (var i = 0; i < friends.length; i++) {
            total = 0;
            for (var j = 0; j < friends[i].scores.length; j++) {
                difference = Math.abs(newFriend.scores[j] - friends[i].scores[j]);
                total += difference;
            }
            if (total < matchDiff) {
                matchIndex = i;
                matchDiff = total;
            }
        }
        friends.push(newFriend);
        res.json(friends[matchIndex]);
    });
}

module.exports = {
    main: function (app) {
        routes(app);
    }
};