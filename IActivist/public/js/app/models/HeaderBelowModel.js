define(["jquery", "backbone",'underscore'], function($, Backbone, Underscore) {
	// Creates a new Backbone Model class object
	var Model = Backbone.Model.extend({
		urlRoot : 'http://saeedansari-001-site1.ctempurl.com/api/BaseText',		
	});
	// Returns the Model class
	return Model;

});
