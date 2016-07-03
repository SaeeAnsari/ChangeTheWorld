define(['App', 'backbone', 'marionette', 'underscore', 'handlebars', 'hbs!templates/StoryCommentView', 'collections/StoryCommentCollection', 'hbs!templates/StoryCommentSocialize'], 
function(App, Backbone, Marionette, Underscore, Handlebars,StoryCommentCollectionView, CommentCollection, StoryCommentSocialize) {
    
	//ItemView provides some default rendering logic
	return Backbone.Marionette.ItemView.extend({
		render : function() {
		
            this.collection = new CommentCollection(31);
            
            this.collection.fetch({
                success:function(data){
                    
                    data.forEach(function(item){
                       $("#dvCommentView").append(StoryCommentCollectionView(item.toJSON()));                        
                    });                   
                    
                }
            })
            
			/*var template = StoryCommentViewTemplate;
			$("#dvCommentView").append(template);
		      */
        }
	});
});
