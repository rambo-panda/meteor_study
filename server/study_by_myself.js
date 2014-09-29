/*global Players:true, Random:true */
Players = new Mongo.Collection("players");

Meteor.startup(function () {
	if (Players.find().count() === 0) {
		var names = [
			"Ada Lovelace",
			"Nikola Tesla",
			"Claude Shannon"
		];
		for (var i = 0; i < names.length; i++){
			Players.insert({name: names[i], score: Math.floor(Random.fraction()*10)*5});
		}
	}



	/*
		*  It is used in version 0.9.3
	Router.map(function() {
		this.route('Home', {path:'/'}, function () {
		// render the Home template with a custom data context
		this.render('Home', {data: {title: 'My Title'}});
		});

		// when you navigate to "/one" automatically render the template named "One".
		this.route('One', {path : '/one'});

		// when you navigate to "/two" automatically render the template named "Two".
		this.route('Two', {path : '/two'});
	});
	*/

	Router.route('/', function () {
		console.log('---');
		this.render('./../client/Home', {data: {title: 'My Title'}});
	});

	Router.route('/one');

	Router.route('/two');
});
