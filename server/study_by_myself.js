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

});
