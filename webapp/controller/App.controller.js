sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Sorter",
	"sap/m/ViewSettingsDialog",
	"sap/m/ViewSettingsItem"
], function (Controller, Sorter,
	ViewSettingsDialog,
	ViewSettingsItem) {
	"use strict";

	return Controller.extend("Rout_Samp.Rout_Samp.controller.App", {
		onInit: function () {
			this._oTable = this.byId("Products");
			this._oVSD = null;
			this._sSortField = null;
			this._bSortDescending = false;
			this._aValidSortFields = ["ContactTitle"];
			this._sSearchQuery = null;

			//			this._initViewSettingsDialog();

		},
		_getDialog: function () {
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("Rout_Samp.Rout_Samp.view.Sortsettings", this);
				this.getView().addDependent(this._oDialog);
			}
			return this._oDialog;
		},
		handleFilterButtonPressed: function () {
			this._getDialog().open();
			//			this.createViewSettingsDialog("Rout_Samp.Rout_Samp.view.Sortsettings").open();
		},
		handleSortDialogConfirm: function(oEvent) {
			var oTable = this.byId("Products"),
				mParams = oEvent.getParameters(),
				oBinding = oTable.getBinding("items"),
				sPath,
				bDescending,
//				vGroup,
				aGroups = [];

			if (mParams.sortItem) {
				sPath = mParams.sortItem.getKey();
				bDescending = mParams.sortDescending;
//				vGroup = this.mGroupFunctions[sPath];
				aGroups.push(new Sorter(sPath, bDescending ));
				// apply the selected group settings
				oBinding.sort(aGroups);
			}
			
		},

		NavToDetail: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			var oItem = oEvent.getSource();
			var surl = oItem.getBindingContext().getPath().substr(1);
			oRouter.navTo("detail", {
				Path: surl
			});
		}
	});
});