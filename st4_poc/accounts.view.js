sap.ui.jsview("st4_poc.accounts", {

      getControllerName : function() {
         return "st4_poc.accounts";
      },
      
      onBeforeShow : function(evt) {
      	  this.getController().onBeforeShow(evt);
     		},

      createContent : function(oController) {
      	  jQuery.sap.includeStyleSheet("Style/style.css");
      	  
    	  	this.loanList = new sap.m.List({  
  				id: "loanList",
  				headerText : "Loan Accounts" ,
  				mode: sap.m.ListMode.SingleSelectMaster,
  				tap : [ oController.loanData , oController ]
  				});
    	  	
    	  	this.currentList = new sap.m.List({  
  				id: "currentList",
  				headerText : "Current Accounts" ,
  				mode: sap.m.ListMode.SingleSelectMaster,
  				tap : [ oController.currentData , oController ]
  				});
    	  	
    	  	this.depositList = new sap.m.List({  
  				id: "depositList",
  				headerText : "Deposit Accounts" ,
  				mode: sap.m.ListMode.SingleSelectMaster,
  				tap : [ oController.depositData , oController ]
  				});
    	  	
      		this.loanList.bindAggregation("items", {
      			path : "/LoanContractSet", 
      			template : new sap.m.StandardListItem({
      				title : "{LoanContractID}",
      				type : sap.m.ListType.Navigation,
      				tap : [ oController.loanData , oController ]
      			})
      				
      		});
      		
      		
      	/*	this.tabBar = new sap.m.IconTabBar("tabBar" ,{
      			expanded : "{device>/isNoPhone}",
      			items: [ new sap.m.IconTabFilter({ text : "Loan Accounts"}) ,
      			         new sap.m.IconTabFilter({ text : "Deposit Accounts"}) ,
      			         new sap.m.IconTabfilter({ text : "Current Accounts"})
      			]
      		}); */
      		
      	/*	this.currentList.bindAggregation("items", {
      			path : "/LoanContractSet", 
      			template : new sap.m.StandardListItem({
      				title : "{LoanContractID}",
      				type : sap.m.ListType.Navigation})
      		});
      		
      		this.depositList.bindAggregation("items", {
      			path : "/LoanContractSet", 
      			template : new sap.m.StandardListItem({
      				title : "{LoanContractID}",
      				type : sap.m.ListType.Navigation})
      		});*/
      		
      		
      		this.accPage = new sap.m.Page("accPage",{
  	       	   icon: "Images/sap-logo.png" ,
    		   showNavButton:true,
    		   navButtonText: "Back",
    		   navButtonTap:[oController.backTriggered,oController] ,
    		   headerContent: new sap.m.Button({
					text : "Offers",
					press : [oController.offers, oController]
						}),
			   content: [this.loanList , this.currentList , this.depositList]

      		});
    	  	
      		this.accPage.bindProperty("title", {
    	  		path : "/LoanContractSet"
    	  	});

    	   return this.accPage ;   	  

      }

});

