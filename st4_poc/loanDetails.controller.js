sap.ui.controller("st4_poc.loanDetails", {


	 backTriggered: function() {
	        var bus = sap.ui.getCore().getEventBus();
	        bus.publish("nav", "back");
	    } ,

		onBeforeShow : function(evt) {
			  if ("to" === evt.direction) {
				  
				  oModel.refreshSecurityToken();

				  var oEntry = {};
				  oEntry.AccountHolderID = BPID ;
				  
				  oModel.create("/PreApprovedLoanSet", oEntry, null,   
						   function(oData, oResponse) {
					  			alert('success');
					   			console.log("Create POT successful called");  
					   			var loandata = oResponse.data; 
					   			},  
					       function(oError) { 
					   				alert('error');
					            console.log("Create POT failed");    
					            }
					   		);

			}		
		} ,
		
  
	    
    

});