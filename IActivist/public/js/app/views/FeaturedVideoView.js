define(['App', 'backbone', 'marionette', 'underscore', 'handlebars', 'hbs!templates/FeaturedVideo'], 
function(App, Backbone, Marionette, Underscore, Handlebars, FeaturedTemplate) {
	//ItemView provides some default rendering logic
	return Backbone.Marionette.ItemView.extend({
		render : function() {
			
			var template = FeaturedTemplate;
			this.$el.append(template);

		}
	});
});
