sap.ui.jsview("st4_poc.preApprovedLoan", {

      getControllerName : function() {
         return "st4_poc.preApprovedLoan";
      },
      
      onBeforeShow : function(evt) {
      	  this.getController().onBeforeShow(evt);
     		},

      createContent : function(oController) {
    	  
    	  jQuery.sap.includeStyleSheet("Style/style.css");
		
    	  
    	loanAmt = new sap.m.StandardListItem({ 
    						title : "Preapproved loan 50000 EUR for 24 months",
    						type : sap.m.ListType.Navigation,
    						tap : [ oController.preapploan , oController ]
    							});
    	loanInt = new sap.m.StandardListItem({ title : "Card with credit limit of 1000 EUR"});
    	loanTerm = new sap.m.StandardListItem({ title : "Vehicle loan 1000 EUR for 12 months"});
    	  
  	  	loanDetail = new sap.m.List({  
				id: "loanDetail",
				headerText : "Offers" ,
				mode: sap.m.ListMode.None,
				
					
	  	});
  	  	loanDetail.addItem(loanAmt);
  	  	loanDetail.addItem(loanInt);
  	  	loanDetail.addItem(loanTerm);
  	  	
     /**   var oDialog = new sap.m.Dialog("dialog", {
            title: "Information",
            content: [ new sap.m.Label({text: " Loan Contract created "}).addStyleClass("dialogLbl")],
            leftButton:
                   new sap.m.Button({
                          text: "OK",
                          width: "100%",
                          tap : function() {
                                 oDialog.close();
                                 

                          }
                   }).addStyleClass("dialogBtn")

      }); */
  		
  		this.acceptBtn = new sap.m.Button("accept" ,{
  			text : "Accept" ,
  			tap : [oController.loan, oController]
  			/**tap : function() {
  				oDialog.open();
  			} */
  		});
	  	
			
	  	this.preApprovedLoanPage = new sap.m.Page("preApprovedLoanPage",{
	       	   icon: "Images/sap-logo.png" ,
		   showNavButton:true,
		   navButtonText: "Back",
		   navButtonTap:[oController.backTriggered,oController] ,
		   content: [loanDetail]

	   });

	   return this.preApprovedLoanPage ;

      }

});