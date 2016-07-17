define(['App', 'backbone', 'marionette', 'underscore', 'handlebars', 'hbs!templates/StoryCommentView', 'collections/StoryCommentCollection', 'hbs!templates/StoryCommentSocialize'], 
function(App, Backbone, Marionette, Underscore, Handlebars,StoryCommentCollectionView, CommentCollection, StoryCommentSocialize) {
    
	//ItemView provides some default rendering logic
	return Backbone.Marionette.ItemView.extend({
        storyID: 0,
        initialize: function(){
          this.storyID = this.options.storyID;  
        },
		render : function() {
		    var that = this;
            this.collection = new CommentCollection(this.storyID);
            
            this.collection.fetch({
                success:function(data){
                    
                    data.forEach(function(item){
                       that.$el.append(StoryCommentCollectionView(item.toJSON()));                        
                    });                   
                    
                }
            })
            
			
        }
	});
});
