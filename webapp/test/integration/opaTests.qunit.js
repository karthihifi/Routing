/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Rout_Samp/Rout_Samp/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});