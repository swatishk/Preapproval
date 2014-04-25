jQuery.sap.require("sap.ui.base.Event");
sap.ui.controller("st4_poc.preApprovedLoan", {
	
	 backTriggered: function() {
	        var bus = sap.ui.getCore().getEventBus();
	        bus.publish("nav", "back");
	    } ,
	    
	      onBeforeShow : function(evt) {
	    	  if ("to" === evt.direction) {
		  		BP = evt.data;
		  		view = this.getView();


			}		
	    } , 

	    preapploan : function(evt) {
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "to", {
			id : "loanDetails"
		});
	}

});