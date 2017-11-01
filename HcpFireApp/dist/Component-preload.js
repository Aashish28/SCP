/**
* This file was auto-generated by SAP Web IDE build and includes all
* the source files required by SAPUI5 runtime for performance optimization.
* PLEASE DO NOT EDIT THIS FILE!! Changes will be overwritten the next time the build is run.
*/
jQuery.sap.registerPreloadedModules({
	"version": "2.0",
	"name": "com/hcpfireapp/Component-preload",
	"modules": {
		"com/hcpfireapp/controller/Main.controller.js": "sap.ui.define([\n\t\t\t\"sap/ui/core/mvc/Controller\"\n\t\t], function(Controller) {\n\t\t\t\"use strict\";\n\n\t\t\treturn Controller.extend(\"com.hcpfireapp.controller.Main\", {\n\t\t\t\tonInit: function() {\n\t\t\t\t\tvar that = this;\n\t\t\t\t\tsetInterval(function() {\n\t\t\t\t\t\tthat.doGet(that);\n\t\t\t\t\t}, 2000);\n\t\t\t\t},\n\n\t\t\t\tdoGet: function(obj) {\n\t\t\t\t\tvar sUrlCount = '/iot/v1/api/http/app.svc/T_IOT_3739597CDBB10D3A8A44/$count';\n\t\t\t\t\tvar skip, sUrl;\n\t\t\t\t\tvar that = this;\n\n\t\t\t\t\tjQuery.ajax({\n\t\t\t\t\t\t\ttype: \"GET\",\n\t\t\t\t\t\t\tcontentType: \"application/json\",\n\t\t\t\t\t\t\turl: sUrlCount,\n\t\t\t\t\t\t\tdataType: \"json\",\n\t\t\t\t\t\t\tasync: false,\n\t\t\t\t\t\t\tsuccess: function(data, textStatus, jqXHR) {\n\t\t\t\t\t\t\t\tskip = data - 1;\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\terror: function() {\n\t\t\t\t\t\t\t\talert(\"No Data Found\");\n\t\t\t\t\t\t\t}\n\t\t\t\t\t});\n\n\t\t\t\t\t\t\t\tsUrl = '/iot/v1/api/http/app.svc/T_IOT_3739597CDBB10D3A8A44?$top=1&$skip=' + skip;\n\n\t\t\t\t\t\t\tjQuery.ajax({\n\t\t\t\t\t\t\t\ttype: \"GET\",\n\t\t\t\t\t\t\t\tcontentType: \"application/json\",\n\t\t\t\t\t\t\t\turl: sUrl,\n\t\t\t\t\t\t\t\tdataType: \"json\",\n\t\t\t\t\t\t\t\tasync: false,\n\t\t\t\t\t\t\t\tsuccess: function(data, textStatus, jqXHR) {\n\t\t\t\t\t\t\t\t\tthat.getView().byId(\"idNotifText\").setText(data.d.results[0].C_SENSOR1 + \"  \");\n\t\t\t\t\t\t\t\t\tvar dt = that._getDateTime(data.d.results[0].C_TIMESTAMP);\n\t\t\t\t\t\t\t\t\tthat.getView().byId(\"idNotifTime\").setText(dt);\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\terror: function() {\n\t\t\t\t\t\t\t\t\t//\t            \talert(\"error to post\");\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t});\n\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\n\t\t\t\t\t\t_getDateTime:function(stimeStamp){\n\t\t\t\t\t\t\tvar sTs =  stimeStamp.replace(\".\",\"\");\n\t\t\t\t\t\t\tsTs = sTs.substr(0,10);\n\t\t\t\t\t\t\tvar date = new Date(parseInt(sTs)*1000);\n\t\t\t\t\t\t\tvar formattedDT;\n\n\t\t\t\t\t\t\tvar hours = date.getHours();\n\t\t\t\t\t\t\t// Minutes part from the timestamp\n\t\t\t\t\t\t\tvar minutes = \"0\" + date.getMinutes();\n\t\t\t\t\t\t\t// Seconds part from the timestamp\n\t\t\t\t\t\t\tvar seconds = \"0\" + date.getSeconds();\n\n\t\t\t\t\t\t\t// Will display time in 10:30:23 format\n\t\t\t\t\t\t\tvar formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tvar year = date.getFullYear();\n\t\t\t\t\t\t\tvar month = date.getMonth()-1;\n\t\t\t\t\t\t\tvar date = date.getDate();\n\n\t\t\t\t\t\t\tvar formattedDate = date + '/' + month + '/' + year;\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tformattedDT = formattedDate + \" \" + formattedTime;\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\treturn formattedDT;\n\n\t\t\t\t\t\t}\n\t\t\t\t\t\t\n\t\t\t\t\t\t\n\n\t\t\t\t\t});\n\t\t\t});",
		"com/hcpfireapp/Component.js": "sap.ui.define([\n\t\"sap/ui/core/UIComponent\",\n\t\"sap/ui/Device\",\n\t\"com/hcpfireapp/model/models\"\n], function(UIComponent, Device, models) {\n\t\"use strict\";\n\n\treturn UIComponent.extend(\"com.hcpfireapp.Component\", {\n\n\t\tmetadata: {\n\t\t\tmanifest: \"json\"\n\t\t},\n\n\t\t/**\n\t\t * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.\n\t\t * @public\n\t\t * @override\n\t\t */\n\t\tinit: function() {\n\t\t\t// call the base component's init function\n\t\t\tUIComponent.prototype.init.apply(this, arguments);\n\n\t\t\t// set the device model\n\t\t\tthis.setModel(models.createDeviceModel(), \"device\");\n\t\t}\n\t});\n});",
		"com/hcpfireapp/view/Main.view.xml": "<mvc:View controllerName=\"com.hcpfireapp.controller.Main\" xmlns:html=\"http://www.w3.org/1999/xhtml\" xmlns:mvc=\"sap.ui.core.mvc\"\n\tdisplayBlock=\"true\" xmlns=\"sap.m\">\n\t<App>\n\t\t<pages>\n\t\t\t<Page title=\"{i18n>title}\">\n\t\t\t\t<content>\n\t\t\t\t\t<Panel id=\"idMainPanel\" headerText = \"{i18n>fireupdate}\" width=\"auto\" class=\"sapUiResponsiveMargin\" expandable=\"true\" expanded=\"true\">\n\t\t\t\t\t<VBox class=\"sapUiResponsiveMargin\">\n\t\t\t\t\t<HBox>\t\n\t\t\t\t\t<Label text=\"Notification:\" design=\"Bold\"/>\n\t\t\t\t\t<Text id=\"idNotifText\" class=\"sapUiTinyMarginBegin\"/>\n\t\t\t\t\t<Text id=\"idNotifTime\" class=\"sapUiTinyMarginBegin\"/>\n\t\t\t\t\t</HBox>\n\t\t\t\t\t<Label text=\"Image:\" design=\"Bold\"/>\n    \t\t\t\t</VBox>\n\t\t\t\t\t</Panel>\n\t\t\t\t\t<Panel headerText = \"{i18n>moredetails}\" width=\"auto\" class=\"sapUiResponsiveMargin\" expandable=\"true\" expanded=\"true\">\n\t\t\t\t\t\t<IconTabBar id=\"idIconTabBarMulti\" expanded=\"{device>/isNoPhone}\" class=\"sapUiResponsiveContentPadding\" expandable=\"true\">\n\t\t\t\t\t\t\t<items>\n\t\t\t\t\t\t\t\t<IconTabFilter icon=\"sap-icon://customer-briefing\">\n\t\t\t\t\t\t\t\t\t<Text text=\"Emergency contact ...\"/>\n\t\t\t\t\t\t\t\t</IconTabFilter>\n\t\t\t\t\t\t\t\t<IconTabFilter icon=\"sap-icon://history\" count=\"3\">\n\t\t\t\t\t\t\t\t\t<Text text=\"History detail ...\"/>\n\t\t\t\t\t\t\t\t</IconTabFilter>\n\t\t\t\t\t\t\t\t<IconTabFilter icon=\"sap-icon://notes\" count=\"12\">\n\t\t\t\t\t\t\t\t\t<Text text=\"Addional inforamtion ...\"/>\n\t\t\t\t\t\t\t\t</IconTabFilter>\n\t\t\t\t\t\t\t\t<IconTabFilter icon=\"sap-icon://map\">\n\t\t\t\t\t\t\t\t\t<Text text=\"Location details ...\"/>\n\t\t\t\t\t\t\t\t</IconTabFilter>\n\t\t\t\t\t\t\t</items>\n\t\t\t\t\t\t</IconTabBar>\n\t\t\t\t\t</Panel>\n\t\t\t\t</content>\n\t\t\t</Page>\n\t\t</pages>\n\t</App>\n</mvc:View>",
		"com/hcpfireapp/model/models.js": "sap.ui.define([\n\t\"sap/ui/model/json/JSONModel\",\n\t\"sap/ui/Device\"\n], function(JSONModel, Device) {\n\t\"use strict\";\n\n\treturn {\n\n\t\tcreateDeviceModel: function() {\n\t\t\tvar oModel = new JSONModel(Device);\n\t\t\toModel.setDefaultBindingMode(\"OneWay\");\n\t\t\treturn oModel;\n\t\t}\n\n\t};\n});"
	}
});