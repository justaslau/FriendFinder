var friends = require("../data/friends");
var bestMatchIndex;
// Default value is 0% match. (highest difference) 10 questions * 5.
var bestMatchScore = 50;
module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		return res.json(friends);
	});
	app.post("/api/friends", function(req, res) {
		var newUserInfo = req.body;
		for (var i = 0; i < friends.length; i++) {
			var tempDifference = 0;
			for (var j = 0; j < 10; j++) {
				result = Math.abs(friends[i].scores[j] - newUserInfo.scores[j]);
				tempDifference = tempDifference + result;
			}
			if (tempDifference < bestMatchScore) {
				bestMatchScore = tempDifference;
				bestMatchIndex = i;
			}
		}
		dataToSend = friends[bestMatchIndex];
		dataToSend.matchPercent = 100 - (bestMatchScore * 2);
		friends.push(newUserInfo);
		return (res.json(dataToSend));
	});
};