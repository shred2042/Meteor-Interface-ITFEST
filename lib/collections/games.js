Games = new Mongo.Collection('games');

Meteor.methods({
	moreGames: function(gamesNumber) {
		return Games.find({}, {limit:gamesNumber});
	}
})