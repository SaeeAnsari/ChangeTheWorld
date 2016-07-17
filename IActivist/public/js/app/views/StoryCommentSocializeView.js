define(['App', 'backbone', 'marionette', 'underscore', 'handlebars', 'hbs!templates/StoryCommentSocialize'], 
function(App, Backbone, Marionette, Underscore, Handlebars,StoryCommentSocializeTemplate) {
	//ItemView provides some default rendering logic
	return Backbone.Marionette.ItemView.extend({
		render : function() {			
			var template = StoryCommentViewTemplate;
			$("#dvStorySocializeSection").append(template);
		}
	});
});
