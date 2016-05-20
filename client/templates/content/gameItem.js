Template.gameItem.helpers({

	pic: function() {
		var a = document.createElement('a');
		a = this.thumbnail;
		return a;
	},

	slug: function() {
		var a = document.createElement('a');
		a = this.slug;
		return a;
	},

	name: function() {
		return this.name;
	},

	vendor: function() {
		return this.vendor;
	},

	description: function() {
		if (this.description.length > 100)
		{
			 return this.description.substring(0,100) + "..."; 
		}
		else
		{
			return this.description;
		}
	},

	popularity: function() {
		return this.popularity;
	},

	license: function() {
		return this.license;
	},

	logo: function() {
		return this.logo;
	},

	categories: function() {
		return this.categories;
	},

	tags: function() {
		return this.tags;
	}
});