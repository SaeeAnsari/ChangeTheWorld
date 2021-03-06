define(["jquery","backbone","models/StoryCommentModel"],
  function($, Backbone, Model) {  	
    // Creates a new Backbone Collection class object
    var Collection = Backbone.Collection.extend({
      // Tells the Backbone Collection that all of it's models will be of type Model (listed up top as a dependency)
      model: Model,
        
        initialize: function(storyID){
           if(storyID != undefined){
                this.url +=  '?storyID=' + storyID;
           }
        },
        url: 'http://localhost:49520/api/Comment',
    });

    return Collection;
  });