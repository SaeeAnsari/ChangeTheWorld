define(['App', 'backbone', 'marionette', 'underscore', 'handlebars', 'hbs!templates/StoryActionView'], 
function(App, Backbone, Marionette, Underscore, Handlebars, StoryActionView) {
	//ItemView provides some default rendering logic
	return Backbone.Marionette.ItemView.extend({				
		DataSource: null,
        initialize: function(){
            
                this.DataSource = this.options.DataSource;    
            
            
        },
        render : function() {		
            
            
            var template = StoryActionView;	
            if(this.DataSource == null)
                this.$el.find("#StoryFooter").append(template());
            else
                this.$el.find("#StoryFooter").append(template(this.DataSource));            
		}		
	});
});
