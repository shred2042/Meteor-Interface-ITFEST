Meteor.publish('games', function(limit) {
	var lim = lim || 8;
	return Games.find({}, {limit: lim});
});
