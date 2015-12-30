define(['App', 'backbone', 'marionette', 'underscore', 'handlebars', 'models/StoryModel', 'hbs!templates/NewStory', 'dropzonejs'], function(App, Backbone, Marionette, Underscore, Handlebars, StoryModel, NewStoryTemplate) {
	//ItemView provides some default rendering logic
	return Backbone.Marionette.ItemView.extend({
		template : NewStoryTemplate,
		model : new StoryModel(),

		// View Event Handlers
		events : {
			"click #txtNewStory" : "NewStoryOnblur",
			"blur #txtNewStory" : "NewStoryOnblurOut"
		},
		render : function() {
			var that = this;
			var template = NewStoryTemplate;
			this.$el.append(template);
		},
		NewStoryOnblur : function() {

			$("#txtNewStory").animate({
				height : '200px'
			}, "slow");		
		},
		NewStoryOnblurOut : function() {
			$("#txtNewStory").animate({
				height : '50px'
			}, "slow");	
		}
	});
});
