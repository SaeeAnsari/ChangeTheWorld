define(['App', 'backbone', 'marionette', 'underscore', 'handlebars',  'hbs!templates/Leadership/StoryFilter', ], 
       function(App, Backbone, Marionette, Underscore, Handlebars, StoryFilter) {
	//ItemView provides some default rendering logic
	return Backbone.Marionette.ItemView.extend({
		
		
		render : function() {
			var that = this;
			var template = StoryFilter;
            
			this.$el.append(template);          
           
            
		}
	});
});
