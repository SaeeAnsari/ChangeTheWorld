define(["jquery", "backbone",'underscore'], function($, Backbone, Underscore) {
	// Creates a new Backbone Model class object
	var Model = Backbone.Model.extend({
        
		// Model Constructor
		initialize : function() {
			
		},
        url: function()
        {
            return 'http://saeedansari-001-site1.ctempurl.com/api/StoryCategory';
        }
	});
	// Returns the Model class
	return Model;

});
