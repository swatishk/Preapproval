jQuery.sap.require("sap.ui.base.Event");
sap.ui.controller("st4_poc.accounts", {


	 backTriggered: function() {
	        var bus = sap.ui.getCore().getEventBus();
	        bus.publish("nav", "back");
	    } ,
	    
	      onBeforeShow : function(evt) {
	    	  if ("to" === evt.direction) {
		  		BPID = evt.data.data.bpid;
		  		view = this.getView();

				var binding = view.loanList.getBinding("items");
				
				if (binding !== undefined) {
					var filter = new sap.ui.model.Filter("AccountHolderID", sap.ui.model.FilterOperator.EQ, BPID);
					binding.filter([filter]);
				}
			}		
	    } , 
	    
	    offers : function(evt) {
			var bus = sap.ui.getCore().getEventBus();
			bus.publish("nav", "to", {
				id : "preApprovedLoan"
			});
		},
	    
	    loanData : function(evt) {
	    	this.loanAcc = evt.getParameter("listItem");
			var bus = sap.ui.getCore().getEventBus();
			bus.publish("nav", "to", {
				id : "accountData",
				data : { 
					selectedId : this.selectedAcc.getTitle(),
					
				}
			});
		}
		



});