define(['App', 'backbone', 'marionette', 'views/WelcomeView', 'views/DesktopHeaderView', 'models/StoryModel', 'views/NewStoryView'],
    function (App, Backbone, Marionette, WelcomeView, DesktopHeaderView, StoryModel, NewStoryView) {
    return Backbone.Marionette.Controller.extend({
        initialize:function (options) {
            //App.headerRegion.show(new DesktopHeaderView());
        },
        //gets mapped to in AppRouter's appRoutes
        index:function () {
        	var view = new WelcomeView({el:'#main'});
        	//var viewNew = new NewStoryView({el: '.newStorySection'});
        	
        	
        	//view.render();
            App.mainRegion.show(new WelcomeView());
            App.mainRegion.show(new NewStoryView({el: '.newStorySection'}));
            
            
        }
    });
});