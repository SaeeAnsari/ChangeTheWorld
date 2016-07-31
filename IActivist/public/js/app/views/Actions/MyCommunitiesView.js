define(['App', 'backbone', 'marionette', 'underscore', 'handlebars', 'hbs!templates/Actions/Communities/CommunityBox'], 
       function(App, Backbone, Marionette, Underscore, Handlebars, CommunityBox) {
	
	return Backbone.Marionette.ItemView.extend({
       
		// View Event Handlers
		events : {
			
		},
		render : function() {
            var that = this;
			
            var myCommunities = [   {ID: 1, CommunityName: 'My Location Community', Type: 'Location', Description: 'My Neighbourhood'}, 
                                    {ID: 2, CommunityName: 'Ryerson University', Type: 'Personal', Description: 'Ryerson Univrsity campus mississauga'},
                                    {ID: 3, CommunityName: 'Microsoft', Type: 'Personal', Description: 'Professional Location'}
                                ];
            
            myCommunities.forEach(function(item){
						that.$el.append(CommunityBox(item));	
					});
					

            
            
            /*
            
			var template = CommunitiesLayout;
            if(this.$el.parent().find('.bbm-modal__title') != undefined){
                this.$el.parent().find('.bbm-modal__title').html(CommunitiesHeader)
            }
                
         
            this.$el.append(template);
            
            */
            
            
		}
	});
});
