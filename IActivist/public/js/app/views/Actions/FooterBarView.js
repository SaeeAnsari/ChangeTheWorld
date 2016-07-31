define(['App', 'backbone', 'marionette', 'underscore', 'handlebars', 'hbs!templates/Actions/FooterBar', 'views/Actions/ActionsModalView'], 
function(App, Backbone, Marionette, Underscore, Handlebars, FooterBar, ActionsModalViews) {
	
	return Backbone.Marionette.ItemView.extend({
        events : {
			"click #btnCommunities" : "btnCommunities"
		},    
        btnCommunities : function(){
            
            var ActionsModal = new ActionsModalViews({ el: '#StoryContentModal', modalType : 'Communities'});
            ActionsModal.render();        
        },
		render : function() {
			
			var template = FooterBar;
			this.$el.append(template);
            
            //$("#btnCommunities").trigger("click");

		}
	});
});
