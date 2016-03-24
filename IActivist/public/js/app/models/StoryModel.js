define(["jquery", "backbone",'underscore'], function($, Backbone, Underscore) {
	// Creates a new Backbone Model class object
	var Model = Backbone.Model.extend({

		
		// Model Constructor
		initialize : function() {
			this.BoxColor = Underscore.sample(this.colorChoices);
		}
	});
	// Returns the Model class
	return Model;

});
