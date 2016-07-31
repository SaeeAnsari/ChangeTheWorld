define(['App', 'backbone', 'marionette', 'views/Actions/CommunitiesView'],
    function (App, Backbone, Marionette, CommunitiesMainView) {
    
     var Modal = Backbone.Modal.extend({
        template: '#modal-template',
        cancelEl: '.bbm-button'
    });
    
	
	return Backbone.Marionette.ItemView.extend({
		modalType: '',
        modalContent : '#StoryContentModal',
        initialize: function() {
            this.modalType = this.options.modalType;
        },
        render : function() {	
            
            var modalView = new Modal();
            $(".app").html(modalView.render().el);
            
            if(this.modalType == 'Communities'){               
               var communities = new CommunitiesMainView({el: '#StoryContentModal'}); 
               communities.render();
            }
            
            /* var storyMasterContainer = new StoryMasterView({el: this.$el, storyID : this.storyID});
             storyMasterContainer.render();
             
           
            var storyEnterCommentContainer = new StoryEnterComments({el: this.$el, storyID: this.storyID});
            storyEnterCommentContainer.render();
           
            var storyCommentsViewContainer = new StoryCommentsView({el: this.$el, storyID: this.storyID});
            storyCommentsViewContainer.render();
           */
        }
	});
});
