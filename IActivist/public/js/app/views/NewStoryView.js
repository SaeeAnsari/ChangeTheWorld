define(['App', 'backbone', 'marionette', 'underscore', 'handlebars', 'models/StoryModel', 'hbs!templates/NewStory', 'collections/StoryCategoryCollection','models/StoryCategoryModel', 'dropzonejs','select2'], 
       function(App, Backbone, Marionette, Underscore, Handlebars, StoryModel, NewStoryTemplate, CategoryCollection, CategoryModel) {
	//ItemView provides some default rendering logic
	return Backbone.Marionette.ItemView.extend({
		template : NewStoryTemplate,
		model : new StoryModel(),

		// View Event Handlers
		events : {
			"click #txtNewStory" : "NewStoryOnblur",
			"blur #txtNewStory" : "NewStoryOnblurOut",
            "click #btnPost" : "PostStory"
		},
		render : function() {
			var that = this;
			var template = NewStoryTemplate;
            
            //Getting data for Catgory DDL
            this.collection = new CategoryCollection();
            
			this.$el.append(template);
            
            //Add the DDL for Category now once the screen is set
             this.collection.fetch({
                success: function(data){                    
                    if(data != null)
                    {
                        /*data.toJSON().forEach(function(item) {
                            if(item != null)
                                {
                                    
                                    $("#SelectCategoryMultiple").append("<option value='" + item.ID+ "'>" + item.Type + "</option>");
                                }
                        });
                        */
                        
                        //$('#SelectCategoryMultiple').select2("val", ["american", "french", "italian"]);
                    
                        //$('#SelectCategoryMultiple').select2({data: [{id: '1', text: 'A'}, {id: '2', text: 'B'}]});
                    
                    }                    
                }                
            })
            
		},
		NewStoryOnblur : function() {

			$("#txtNewStory").animate({
				height : '150px'
			}, "slow");		
		},
		NewStoryOnblurOut : function() {
			$("#txtNewStory").animate({
				height : '50px'
			}, "slow");	
		},
        PostStory : function()
        {
            if(this.$el.find('#txtNewStory').val() != "")
                {
                    var data = this.$el.find('#txtNewStory').val();
                    this.model.Title = data;
                    this.model.LongDescription = data;
                    this.model.CategoryID =-1;
                    this.model.Active = true;
                    this.model.ImageURL = null;
                    this.model.UserID= 1;
                    
                    this.model.AddStory();
                }
        }
	});
});
