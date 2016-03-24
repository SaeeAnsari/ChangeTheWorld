define(["jquery", "backbone",'underscore'], function($, Backbone, Underscore) {
	// Creates a new Backbone Model class object
	var Model = Backbone.Model.extend({
		urlRoot : 'http://localhost:61449/api/BaseText',		
	});
	// Returns the Model class
	return Model;

});
