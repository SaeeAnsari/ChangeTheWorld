define(["jquery", "backbone",'underscore'], function($, Backbone, Underscore) {
	// Creates a new Backbone Model class object
	var Model = Backbone.Model.extend({
		
        defaults: {
            ID: 0,
            Title: '',
            LongDescription: '',
            UserID: -1,
            Video: null,
            ImageURL: null,
            CategoryID: -1,
            RecommendationTypeID: -1,
            RecommendationOrder: 0,
            Active : true
	    },
        
		// Model Constructor
		initialize : function() {
			this.BoxColor = Underscore.sample(this.colorChoices);
		},
        url: function()
        {
            return "http://localhost:49520/api/story";
        },
        AddStory: function(){
            
            var data = { Title: this.Title, LongDescription : this.LongDescription};
            
            $.ajax({
                    url : this.url(),
                    type: "POST",
                    data : data,
                    success: function(data, textStatus, jqXHR)
                    {
                        var x = 0;
                    },
                    error: function (jqXHR, textStatus, errorThrown)
                    {
                        var errors = 0;
                    }
                });
            
        }
        
	});
	// Returns the Model class
	return Model;

});
