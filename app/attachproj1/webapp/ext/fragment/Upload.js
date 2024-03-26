sap.ui.define([
    "sap/m/MessageToast"
], function (MessageToast) {
    'use strict';
    var dialogbox;

    return {
        onPress: function (oEvent) {
            // MessageToast.show("Custom handler invoked.");
            debugger;
            this.loadFragment({
                name: "attachproj1.ext.fragment.Uploadbtn",
            }).then(function (oDialog) {
                oDialog.open();
                dialogbox = oDialog;
            });
        },
        handleUploadComplete: function () {
            debugger;
            var sResponse = oEvent.getParameter("response"),
                aRegexResult = /\d{4}/.exec(sResponse),
                iHttpStatusCode = aRegexResult && parseInt(aRegexResult[0]),
                sMessage;

            if (sResponse) {
                sMessage = iHttpStatusCode === 200 ? sResponse + " (Upload Success)" : sResponse + " (Upload Error)";
                MessageToast.show(sMessage);
            }
        },

        onSavePress: function (oEvent) {
            debugger;
            var fileUploader = this.byId("fileUploader");

            // Retrieve the uploaded file object
            // var file = fileUploader.oFileUpload.files[0];

            var file = fileUploader.getValue();


            // You can now use the 'file' object as needed
            console.log("Uploaded file:", file);

            // var oFileUploader = this.byId("fileUploader");
            // oFileUploader.checkFileReadable().then(function () {
            //     oFileUploader.upload();
            // }, function (error) {
            //     MessageToast.show("The file cannot be read. It may have changed.");
            // }).then(function () {
            //     oFileUploader.clear();
            // });
            dialogbox.close();
            dialogbox.destroy();


        },
        onCancelPress: function (oEvent) {
            dialogbox.close();
            dialogbox.destroy();
        }
    }
});
