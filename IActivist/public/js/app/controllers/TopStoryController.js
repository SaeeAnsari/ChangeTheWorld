define(['App', 'backbone', 'marionette', 'views/WelcomeView', 'views/DesktopHeaderView', 'models/StoryModel', 'views/NewStoryView', 'views/HeaderBelowView','views/TopHeaderView', 'views/TopBarView', 'views/FeaturedVideoView','views/StoryViewMasterView'],
    function (App, Backbone, Marionette, WelcomeView, DesktopHeaderView, StoryModel, NewStoryView, HeaderBelowView, TopHeaderView, TopBarView, FeaturedVideoView ,StoryMasterView) {
    return Backbone.Marionette.Controller.extend({
        initialize:function (options) {
            //App.headerRegion.show(new DesktopHeaderView());
        },
        //gets mapped to in AppRouter's appRoutes
        index:function () {
        	//var view = new WelcomeView({el:'#main'});
        	//var viewNew = new NewStoryView({el: '.newStorySection'});
        	
        	
        	//view.render();
        	
            //-- MAIN PAGE --//
            App.headerRegion.show(new TopBarView());
            App.headerRegion.show(new TopHeaderView({el: '.topHeaderSection'}));            
            App.headerRegion.show(new HeaderBelowView({el: '#banner-text'}));    
            
            App.mainRegion.show(new NewStoryView({el: '#p3-body'}));            
           
            App.extendedSections.show(new WelcomeView({el : '.megafolio-container'}));
            //App.extendedSections.show(new FeaturedVideoView({el: '#Video'}));
            
            //-- MAIN PAGE END --//
        
            
          /*  var storyMasterContainer = new StoryMasterView()
            App.headerRegion.show(storyMasterContainer);
          */
        
        }
    });
});

//New Story Template is not working!!!!!!!!!!