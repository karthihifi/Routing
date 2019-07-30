sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent"
], function (Controller, History, UIComponent) {
	"use strict";

	return Controller.extend("Rout_Samp.Rout_Samp.controller.Addr", {
		onInit: function () {
			var oRouter = UIComponent.getRouterFor(this);
			oRouter.getRoute("empAddr").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (oEvent) {
			this.getView().bindElement({
				path: "/" + oEvent.getParameter("arguments").Path
					//				model: "invoice"
			});
		},
		onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = UIComponent.getRouterFor(this);
				var surl = oHistory.aHistory[0].split("/address")[0];
				oRouter.navTo("overview", {});
			}
		}
	});
});