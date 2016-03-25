define(['App', 'backbone', 'marionette', 'underscore', 'handlebars', 'hbs!templates/TopBar'], 
function(App, Backbone, Marionette, Underscore, Handlebars, TopBarTemplate) {
	//ItemView provides some default rendering logic
	return Backbone.Marionette.ItemView.extend({
		render : function() {
			
			var template = TopBarTemplate;
			$("#navigation").append(template);

		}
	});
});
