Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notfoundTemplate: 'notFound',
	waitOn: function() { 
		Session.set('gamesNumber', 8);
		return Meteor.subscribe('games', Session.get("gamesNumber"))}
});


Router.route('/', {
	name: 'gamesList'
});

/*Router.route('posts/:_id', {
	name: 'postPage',
	data: function() {return Posts.findOne(this.params._id);}
});

Router.route('posts/:_id/edit', {
	name: 'postEdit',
	data: function() {
		return Posts.findOne(this.params._id);
	}
});



Router.route('/submit', {name: 'postSubmit'});

var requireLogin = function() {
	if (! Meteor.user()) {
		if (Meteor.loggingIn()) {
			this.render(this.loadingTemplate);
		} else {			
			this.render('accessDenied');
		}
	} else
	{
		this.next();
	}
}

Router.onBeforeAction('dataNotFound', {only:'postPage'});
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});*/
