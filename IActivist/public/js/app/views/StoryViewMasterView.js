define(['App', 'backbone', 'marionette', 'underscore', 'handlebars', 'hbs!templates/StoryModalActionView', 'models/StoryModel'], 
function(App, Backbone, Marionette, Underscore, Handlebars, StoryViewMasterTemplate, StoryModel) {
	//ItemView provides some default rendering logic
	return Backbone.Marionette.ItemView.extend({
		storyID: 0,
        initialize: function(){
            this.storyID = this.options.storyID;  
        },        
        render : function() {
            var that =this;
            var model = new StoryModel({ ID: this.storyID});
            
            model.fetch({
                 success : function(data) {		
                     var template = StoryViewMasterTemplate;
			         that.$el.append(template(data.toJSON()));
                 },
                error: function(){
                    
                    alert('Ooops!');
                    
                }                
            });
            
			
			
		}
	});
});
