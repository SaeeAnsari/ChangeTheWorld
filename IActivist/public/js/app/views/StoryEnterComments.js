define(['App', 'backbone', 'marionette', 'underscore', 'handlebars', 'hbs!templates/EnterCommentSection'], 
function(App, Backbone, Marionette, Underscore, Handlebars, StoryEnterCommentTemplate) {
	//ItemView provides some default rendering logic
	return Backbone.Marionette.ItemView.extend({
		render : function() {
			
			var template = StoryEnterCommentTemplate;
			$("#dvEnterComment").append(template);
		}
	});
});
