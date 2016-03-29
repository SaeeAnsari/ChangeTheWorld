define(['App', 'backbone', 'marionette', 'underscore', 'handlebars', 'models/HeaderBelowModel', 'hbs!templates/HeaderBelow'], 
function(App, Backbone, Marionette, Underscore, Handlebars, HeaderBelowModel, HeaderBelowTemplate) {
	//ItemView provides some default rendering logic
	return Backbone.Marionette.ItemView.extend({				
		render : function() {		
			var model = new HeaderBelowModel();				
			
			model.fetch({
				success: function(data)
				{
						var template = HeaderBelowTemplate;	
						$("#banner-text").append(template(data.toJSON()));			
				}				
			});
		}		
	});
});
