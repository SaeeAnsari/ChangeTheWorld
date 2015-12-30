define(["jquery", "backbone",'underscore'], function($, Backbone, Underscore) {
	// Creates a new Backbone Model class object
	var Model = Backbone.Model.extend({
		urlRoot : 'http://localhost:3000/Stories/1',

		// Model Constructor
		initialize : function() {
			this.BoxColor = Underscore.sample(this.colorChoices);
		}
	});
	// Returns the Model class
	return Model;

});
