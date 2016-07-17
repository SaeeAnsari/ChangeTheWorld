define(['App', 'backbone', 'marionette', 'views/WelcomeView', 'views/DesktopHeaderView', 'models/StoryModel', 'views/NewStoryView', 'views/HeaderBelowView','views/TopHeaderView', 'views/TopBarView', 'views/FeaturedVideoView','views/StoryViewMasterView',  'views/StoryEnterComments',
       'views/StoryCommentsView'],
    function (App, Backbone, Marionette, WelcomeView, DesktopHeaderView, StoryModel, NewStoryView, HeaderBelowView, TopHeaderView, TopBarView, FeaturedVideoView ,StoryMasterView, StoryEnterComments, StoryCommentsView) {
    
	//ItemView provides some default rendering logic
	return Backbone.Marionette.ItemView.extend({
		storyID: 0,
        initialize: function() {
            this.storyID = this.options.storyID;
        },
        render : function() {	
           
            
             var storyMasterContainer = new StoryMasterView({el: this.$el, storyID : this.storyID});
             storyMasterContainer.render();
             
           
            var storyEnterCommentContainer = new StoryEnterComments({el: this.$el, storyID: this.storyID});
            storyEnterCommentContainer.render();
           
            var storyCommentsViewContainer = new StoryCommentsView({el: this.$el, storyID: this.storyID});
            storyCommentsViewContainer.render();
           
        }
	});
});
