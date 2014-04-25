sap.ui.jsview("st4_poc.home", {

      getControllerName : function() {
         return "st4_poc.home";
      },

      createContent : function(oController) {
    	  	 jQuery.sap.includeStyleSheet("Style/style.css");
    	  	
    	  	 this.ipTxt = new sap.m.Input("ipTxt",{ 
             	type: sap.m.InputType.Text,
            	placeholder: 'Business Partner',
            	maxlength: 10,
    	  	 });
    	  	 
    	  	 this.ipBtn = new sap.m.Button("ipBtn",{
             	text: 'Login',
            	tap: [oController.accList , oController ]
            });
    	  	  	
             homePage = new sap.m.Page("homePage",{ 
          	   title: "TheBank" ,
          	   icon: "Images/sap-logo.png" ,
          	   content : [this.ipTxt, this.ipBtn ] 
        	});
             return homePage ;
      }

});

