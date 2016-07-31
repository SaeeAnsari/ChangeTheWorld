define(['App', 'backbone', 'marionette', 'underscore', 'handlebars', 'hbs!templates/Actions/Communities/CommunitiesLayout', 'hbs!templates/Actions/Communities/ComunitiesHeader', 'views/Actions/MyCommunitiesView'], 
       function(App, Backbone, Marionette, Underscore, Handlebars, CommunitiesLayout, CommunitiesHeader, MyCommunitiesView) {
	
	return Backbone.Marionette.ItemView.extend({
       
		// View Event Handlers
		events : {
			
		},
		render : function() {
			
			var template = CommunitiesLayout;
            if(this.$el.parent().find('.bbm-modal__title') != undefined){
                this.$el.parent().find('.bbm-modal__title').html(CommunitiesHeader)
            }
                
         
            this.$el.append(template);
            
            MyCommunitiesView = new MyCommunitiesView({el: '#dvCommunityList'})
            MyCommunitiesView.render();
         
            
            
		}
	});
});
