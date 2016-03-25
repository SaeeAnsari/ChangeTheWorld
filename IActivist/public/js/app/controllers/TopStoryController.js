define(['App', 'backbone', 'marionette', 'views/WelcomeView', 'views/DesktopHeaderView', 'models/StoryModel', 'views/NewStoryView', 'views/HeaderBelowView','views/TopHeaderView', 'views/TopBarView'],
    function (App, Backbone, Marionette, WelcomeView, DesktopHeaderView, StoryModel, NewStoryView, HeaderBelowView, TopHeaderView, TopBarView) {
    return Backbone.Marionette.Controller.extend({
        initialize:function (options) {
            //App.headerRegion.show(new DesktopHeaderView());
        },
        //gets mapped to in AppRouter's appRoutes
        index:function () {
        	//var view = new WelcomeView({el:'#main'});
        	//var viewNew = new NewStoryView({el: '.newStorySection'});
        	
        	
        	//view.render();
        	
            App.headerRegion.show(new TopBarView());
            App.headerRegion.show(new TopHeaderView({el: '.topHeaderSection'}));            
            App.headerRegion.show(new HeaderBelowView({el: '#banner-text'}));   
            
            App.extendedSections.show(new NewStoryView({el: '#p3-body'}));            
            App.mainRegion.show(new WelcomeView());
            
            //
            //App.mainRegion.show(new TopHeaderView({el: '.topHeaderSection'})); 
               
                
        }
    });
});

//New Story Template is not working!!!!!!!!!!