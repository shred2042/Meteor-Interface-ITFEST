Meteor.autorun( function() {
	Meteor.subscribe('games', Session.get('gamesNumber'));
});

Template.gamesList.helpers({
	gamesList: function(){
		return Games.find({}, {sort: {popularity: -1}}, {limit: Session.get('gamesNumber')});
	}
});

Template.gamesList.events({
	'click #moreButton': function(e)	{
		console.log("click");
		console.log(Session.get('gamesNumber') + 8);
		var x = Session.get('gamesNumber') + 8;
		Session.set('gamesNumber', x);
		return Games.find({}, {sort: {popularity: -1}}, {limit: Session.get('gamesNumber')});
		Router.go('gamesList');
		/*Meteor.call('moreGames', Session.get('gamesNumber'), function(error, result) {
			//display the error to the user and abort
			if (error) 
				return alert(error.reason);
			else {
				for (var k in result) {
					if (Games.find(result[k]) === false)
					{
						Games.insert(result[k]);
					}
				}
			}
			Router.go('gamesList');*/
		//});
	}

	//'submit #searchInput': function(e) {

	//}
});