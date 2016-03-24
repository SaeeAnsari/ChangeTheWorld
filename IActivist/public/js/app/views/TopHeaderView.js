define(['App', 'backbone', 'marionette', 'underscore', 'handlebars', 'hbs!templates/TopHeader'], 
function(App, Backbone, Marionette, Underscore, Handlebars, TopHeaderTemplate) {
	//ItemView provides some default rendering logic
	return Backbone.Marionette.ItemView.extend({
		render : function() {
			
			var template = TopHeaderTemplate;
			$(".topHeaderSection").append(template);

		}
	});
});
