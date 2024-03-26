sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'attachproj1/test/integration/FirstJourney',
		'attachproj1/test/integration/pages/orderList',
		'attachproj1/test/integration/pages/orderObjectPage'
    ],
    function(JourneyRunner, opaJourney, orderList, orderObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('attachproj1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheorderList: orderList,
					onTheorderObjectPage: orderObjectPage
                }
            },
            opaJourney.run
        );
    }
);