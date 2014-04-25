sap.ui.jsview("st4_poc.accountData", {

      getControllerName : function() {
         return "st4_poc.accountData";
      },

      createContent : function(oController) {
          return new sap.m.Page({
              title: "Title",
              content: [ new sap.m.Label({text : "Balance key figures will be shown"})
              ]
          });
      }

});