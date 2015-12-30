define(['App', 'backbone', 'marionette', 'underscore', 'handlebars', 'models/Model', 'hbs!templates/StoryBoxContainer','hbs!templates/StoryBox', 'models/StoryModel', 'collections/StoryCollection','megafolio','ThemeBunchPlugin', 'fancybox'], 
function(App, Backbone, Marionette, Underscore, Handlebars, Model, templateStoryBoxContainer, templateTopStory, StoryModel, StoryCollection,MegaFolio) {
	//ItemView provides some default rendering logic
	return Backbone.Marionette.ItemView.extend({
		template2 : templateTopStory,
		model : new StoryModel(),

		// View Event Handlers
		events : {
		},
		render : function() {

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
						$(".megafolio-container").append(template(item.toJSON()));
					});
					
					var api = jQuery('.megafolio-container').megafoliopro({
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

				// THE FILTER FUNCTION
				/*jQuery('.filter').click(function() {
					jQuery('.filter').each(function() {
						jQuery(this).removeClass("selected")
					});
					api.megafilter(jQuery(this).data('category'));
					jQuery(this).addClass("selected");
				});*/

					
					
				},
				error : function() {

				}
			});
			
					
		}
	});
});
