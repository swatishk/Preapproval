sap.ui.controller("st4_poc.App", {
	
	   onInit: function() {
		   var view = this.getView();
		   
		   var sODataUrl = "https://ldcippm.wdf.sap.corp:44345/sap/opu/odata/sap/PREAPPROVEDLOANPOC_SRV/";
		   
		   oModel = new sap.ui.model.odata.ODataModel(sODataUrl, false , "nairy", "initial123");   
		   sap.ui.getCore().setModel(oModel);  

		   this.app = view.byId("theApp");

	       // subscribe to event bus
	       var bus = sap.ui.getCore().getEventBus();
	       bus.subscribe("nav", "to", this.navToHandler, this);
	       bus.subscribe("nav", "back", this.navBackHandler, this);


	   },
	   
	   navToHandler : function(channelId, eventId, data) {
	       if (data && data.id) {
	           // lazy load view
	           if (this.app.getPage(data.id) === null) {
	               jQuery.sap.log.info("now loading page '" + data.id + "'");
	               this.app.addPage(sap.ui.jsview(data.id, "st4_poc." + data.id));
	           }
	           // Navigate to given page (include bindingContext)
	           this.app.to(data.id, data);
	       } else {
	           jQuery.sap.log.error("nav-to event cannot be processed. Invalid data: " + data);
	       }
	       
	   },
	   
	   navBackHandler : function() {
	       this.app.back();
	   }
	   
});







