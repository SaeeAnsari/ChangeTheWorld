define(['App', 'backbone', 'marionette', 'underscore', 'handlebars', 'hbs!templates/StoryViewMaster', 'models/StoryModel'], 
function(App, Backbone, Marionette, Underscore, Handlebars, StoryViewMasterTemplate, StoryModel) {
	//ItemView provides some default rendering logic
	return Backbone.Marionette.ItemView.extend({
		render : function() {
            
            var model = new StoryModel({ ID: 31});
            
            model.fetch({
                 success : function(data) {		
                     var template = StoryViewMasterTemplate;
			         $("#StoryView").append(template(data.toJSON()));
                 },
                error: function(){
                    
                    alert('Ooops!');
                    
                }                
            });
            
			
			
		}
	});
});
