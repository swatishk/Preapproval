jQuery.sap.require("sap.ui.base.Event");
sap.ui.controller("st4_poc.home", {


	accList : function(evt) {
	var bus = sap.ui.getCore().getEventBus();
	var view = this.getView();
	bus.publish("nav", "to", {
		id : "accounts",
		data : { bpid : view.ipTxt.getValue(),
			}
		});
	},


});