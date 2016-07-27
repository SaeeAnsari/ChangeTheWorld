define(['App', 'backbone', 'marionette', 'underscore', 'handlebars', 'hbs!templates/Leadership/Layout','views/Leadership/CategoryLayoutView'], 
function(App, Backbone, Marionette, Underscore, Handlebars, LeadershipMainTemplate, CategoryLayoutView) {
        
	//ItemView provides some default rendering logic
	return Backbone.Marionette.ItemView.extend({
	
		render : function() {
            var template = LeadershipMainTemplate;            
            this.$el.append(template);
            
            CategoryLayoutView = new CategoryLayoutView({el: this.$el.find('.accordion')});
            CategoryLayoutView.render();
            
            
            
             
		}
        
	});
});
