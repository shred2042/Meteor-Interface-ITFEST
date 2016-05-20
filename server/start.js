Meteor.startup(function() {
	if (Games.find().count() === 0)
	{
		gamesObj = HTTP.get("http://everymatrix.com/presentations/internship-front-end-2014/games.json").data;
		console.log(gamesObj.games);
		var k;
		for (k in gamesObj.games) {
			Games.insert((gamesObj.games)[k]);
			console.log((gamesObj.games)[k]);
		}
	}
});
