define(['App', 'backbone', 'marionette', 'views/Leadership/LeadershipMainView', 'views/TopBarView', 'views/TopHeaderView', 'views/HeaderBelowView','views/NewStoryView',
       'views/Leadership/StoryFilterView'],
    function (App, Backbone, Marionette, LeadershipMainView, TopBarView, TopHeaderView, HeaderBelowView, NewStoryView, StoryFilterView) {
    return Backbone.Marionette.Controller.extend({
        initialize:function (options) {
            //App.headerRegion.show(new DesktopHeaderView());
        },
        //gets mapped to in AppRouter's appRoutes
        index:function () {
        	//var view = new WelcomeView({el:'#main'});
        	//var viewNew = new NewStoryView({el: '.newStorySection'});
        	
            
            App.headerRegion.show(new TopBarView());
            App.headerRegion.show(new TopHeaderView({el: '.topHeaderSection'}));  
            App.headerRegion.show(new HeaderBelowView({el: '#banner-text'}));
            
            App.mainRegion.show(new StoryFilterView({el: '#p3-body'}));
            
            //App.mainRegion.show(new NewStoryView({el: '#p3-body'})); 
            
            
            App.mainRegion.show(new LeadershipMainView({el: '#Content'}));
            
            
        	/*
        	//view.render();
        	
            //-- MAIN PAGE --//
            App.headerRegion.show(new TopBarView());
            App.headerRegion.show(new TopHeaderView({el: '.topHeaderSection'}));            
            App.headerRegion.show(new HeaderBelowView({el: '#banner-text'}));    
            
            App.mainRegion.show(new NewStoryView({el: '#p3-body'}));            
           
            App.extendedSections.show(new WelcomeView());
            App.extendedSections.show(new FeaturedVideoView({el: '#Video'}));
            
            //-- MAIN PAGE END --//
        
           
            var storyMasterContainer = new StoryMasterView()
            App.mainRegion.show(storyMasterContainer);        
           
            var storyEnterCommentContainer = new StoryEnterComments();
            App.mainRegion.show(storyEnterCommentContainer);
            
            var storyCommentsViewContainer = new StoryCommentsView();
            App.mainRegion.show(storyCommentsViewContainer);
             */
        }
    });
});

//New Story Template is not working!!!!!!!!!!