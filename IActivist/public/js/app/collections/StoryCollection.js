define(["jquery","backbone","models/StoryModel"],
  function($, Backbone, Model) {  	
    // Creates a new Backbone Collection class object
    var Collection = Backbone.Collection.extend({
      // Tells the Backbone Collection that all of it's models will be of type Model (listed up top as a dependency)
      model: Model,

      url: 'http://localhost:49520/api/story',//'http://saeedansari-001-site1.ctempurl.com/api/story',
     
    });

    return Collection;
  });