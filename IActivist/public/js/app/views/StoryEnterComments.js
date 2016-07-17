define(['App', 'backbone', 'marionette', 'underscore', 'handlebars', 'hbs!templates/EnterCommentSection'], 
function(App, Backbone, Marionette, Underscore, Handlebars, StoryEnterCommentTemplate) {
	//ItemView provides some default rendering logic
	return Backbone.Marionette.ItemView.extend({
        storyID: 0,
        initialize: function(){
          this.storyID = this.options.storyID;  
        },
		render : function() {
			
			var template = StoryEnterCommentTemplate;
            this.$el.append(template);
			//$("#dvEnterComment").append(template);
		}
	});
});
