sap.ui.jsview("st4_poc.loanDetails", {

      getControllerName : function() {
         return "st4_poc.loanDetails";
      },
      
      onBeforeShow : function(evt) {
      	  this.getController().onBeforeShow(evt);
      },

      createContent : function(oController) {
    	  jQuery.sap.includeStyleSheet("Style/style.css");
    	  

  	  	this.loanInfo = new sap.m.Label("loanInfo" , {
  	  		text : "Congratulations! Your loan account with ID 123 was created successfully"
  	  	});
  			
  	  	this.loanDetailsPage = new sap.m.Page("loanDetailsPage",{
  	       	   icon: "Images/sap-logo.png" ,
  		   showNavButton:true,
  		   navButtonText: "Back",
  		   navButtonTap:[oController.backTriggered,oController] ,
  		   content: [this.loanInfo]

  	   });

  	   return this.loanDetailsPage ;
      }

});