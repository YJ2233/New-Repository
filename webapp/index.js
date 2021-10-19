sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";

new ComponentContainer({
    name: "sap.ui.demo.walkthrough",
    settings : {
        id: "walkthroug"
    },
    async: true
}).placeAt("content");
});