    sap.ui.define([
        "sap/m/MessageToast"
    ], function(MessageToast) {
        'use strict';

        return {
            newsave: function(oEvent) {
                debugger
                // MessageToast.show("Custom handler invoked.");
                var oDialog = new sap.m.Dialog({
                    title: "Sumbit",
                    resizable: true,
                    draggable: true,
                    content: [
                        new sap.m.Label({ text: "Are you sure you want to save?" })
                    ],
                    buttons: [
                        new sap.m.Button({
                            text: "Yes",
                            press: function() {
                                
                                oDialog.close();
                                MessageToast.show("Saved successfully");
                            }
                        }),
                        new sap.m.Button({
                            text: "No",
                            press: function() {
                                oDialog.close();
                                MessageToast.show("Cancelled");
                            }
                        })
                    ]
                });
                
                oDialog.open();
            }
        };
    });
