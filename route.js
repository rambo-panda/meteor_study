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
	this.render('Home', {data: {title: 'This is My Title'}});
});

Router.route('/one');

Router.route('/two');
