define(['App', 'backbone', 'marionette', 'underscore', 'handlebars', 'models/Model', 'hbs!templates/StoryBoxContainer','hbs!templates/StoryBox', 'models/StoryModel', 'collections/StoryCollection','megafolio','views/StoryModalControllerView','views/StoryActionView','ThemeBunchPlugin', 'fancybox', 'backbonemodel'], 
function(App, Backbone, Marionette, Underscore, Handlebars, Model, templateStoryBoxContainer, templateTopStory, StoryModel, StoryCollection,MegaFolio, StoryControllerView,
         StoryActionView) {
    
    var Modal = Backbone.Modal.extend({
        template: '#modal-template',
        cancelEl: '.bbm-button'
    });
    
    
	//ItemView provides some default rendering logic
	return Backbone.Marionette.ItemView.extend({
		template2 : templateTopStory,
		model : new StoryModel(),
		
		// View Event Handlers
		events : {
            "click [id*='dvGridItem']" : "doPop"
		},       
        doPop : function(elem){
          //alert('here');
            
            //App.modalRegion.show(new StoryControllerView({el: '#StoryModal'}));
        
            
            //var id = $('#dvStoryModalMain');
        
        },        
       
		render : function() {
             var that = this;
			this.collection = new StoryCollection();

			var template = templateTopStory;
			
			
			this.collection.fetch({
				success : function(data) {
					//SetRandomColor
					var colorChoices = ['mega-turquoise','mega-black','mega-violet','mega-green','mega-red','mega-blue','mega-orange mega-white'];
					var storySize = ['mega-entry cat-one cat-all','mega-entry cat-three cat-all','mega-entry cat-one cat-all','mega-entry cat-four cat-all'];
					var landscapePosition = ['mega-landscape-left','mega-landscape-right','mega-landscape-bottom'];
					var squarePosition = ['mega-square-top','mega-square-right','mega-square-bottom'];


					data.forEach(function(item){
						item.set({color : Underscore.sample(colorChoices), 
							size: Underscore.sample(storySize),
							landscapePosition: Underscore.sample(landscapePosition),
							squarePosition: Underscore.sample(squarePosition)});						
					});
					

					data.forEach(function(item) {
                        
                        var data = item.toJSON();         
                        
                                            
						that.$el.append(template(data));
                        
                        var storyActionSummary = data.ActionSummary;//Getting the value for Story Action Summary so that we can supply down   
                        
                        storyActionSummary = new Object();
                        storyActionSummary.SupportCount = 0;
                        storyActionSummary.DisagreeCount = 0;   
                        storyActionSummary.TotalActions = 0;
                        
                        if(data.ActionSummary != null)
                            {                                
                                storyActionSummary.SupportCount = data.ActionSummary.SupportCount == null ?  0 : data.ActionSummary.SupportCount;
                                storyActionSummary.DisagreeCount = data.ActionSummary.DisagreeCount == null ?  0 : data.ActionSummary.DisagreeCount;     
                                storyActionSummary.TotalActions = storyActionSummary.SupportCount + storyActionSummary.DisagreeCount;
                            }
                        var actionView = new StoryActionView({el: that.$el.find("#dvGridItem_" + data.ID), DataSource : storyActionSummary});//.find the right element based on ID
                        actionView.render();
					});
					
					var api = that.$el.megafoliopro({
					filterChangeAnimation : "pagebottom", // fade, rotate, scale, rotatescale, pagetop, pagebottom,pagemiddle
					filterChangeSpeed : 400, // Speed of Transition
					filterChangeRotate : 99, // If you ue scalerotate or rotate you can set the rotation (99 = random !!)
					filterChangeScale : 0.6, // Scale Animation Endparameter
					delay : 20,
					defaultWidth : 980,
					paddingHorizontal : 10,
					paddingVertical : 10,
					layoutarray : [9, 11, 5, 3, 7, 12, 4, 6, 13]	// Defines the Layout Types which can be used in the Gallery. 2-9 or "random". You can define more than one, like {5,2,6,4} where the first items will be orderd in layout 5, the next comming items in layout 2, the next comming items in layout 6 etc... You can use also simple {9} then all item ordered in Layout 9 type.
				    });



                    // FANCY BOX ( LIVE BOX) WITH MEDIA SUPPORT
                    jQuery(".fancybox").fancybox();		  
                    
                    
                    $("[id*='dvGridItem']").on('click', function(elem){

                        // Render an instance of your modal
                        var modalView = new Modal();
                        $(".app").html(modalView.render().el);
                        that.SetStoryModal(elem.currentTarget.id);
                        
                        
                        
                        $("#testID").html("hello");
                        
                    });


                  
				},
				error : function() {

				}
			});	
		},
        SetStoryModal(elem){
             var storyID = elem.replace("dvGridItem_", "");
            var storyControllerView = new StoryControllerView({ el: "#StoryContentModal", storyID : storyID});
            storyControllerView.render();            
        }
	});
});
