define(['App', 'backbone', 'marionette', 'underscore', 'handlebars', 'hbs!templates/Leadership/StoryCategories', 'collections/StoryCategoryCollection', 'hbs!templates/StoryBox', 'views/WelcomeView', 'accordian'], 
function(App, Backbone, Marionette, Underscore, Handlebars, StoryCategories, StoryCategoryCollection, StoryBoxTemplate, WelcomeView, Accordian) {
        
	//ItemView provides some default rendering logic
	return Backbone.Marionette.ItemView.extend({
	
		render : function() {
            
            var that = this;
            this.collection = new StoryCategoryCollection;            
            var template = StoryCategories;
            
            
            this.collection.fetch({
               success: function(data){
                   
                   data.forEach(function(item){
                       var data = item.toJSON();
                       that.$el.append(template(data));
                       var StoryContainer = that.$el.find(".CategoryStorySection_CategoryID_" + data.ID)
                       if(StoryContainer != null){
                           var storyLayout = new WelcomeView({el: StoryContainer, StoryCategory: data.Type});
                           storyLayout.render();                           
                       }
                       
                   });
                   
                   that.$el.find(".accordion-item").addClass("active")
                   
                   $(".accordion").accordion({
                     duration: 500,
                     delay: 0
                       
                  });
                   
                   
                   
                   
                   
               },
                error : function() {

				}
            });
            
		}
        
	});
});
