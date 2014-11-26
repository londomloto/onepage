
Ext.define('KP.view.Dashboard', {
	extend: 'Ext.Panel',
	alias: 'widget.dashboardview',
	constructor: function (config) {
		config = config || {};

		Ext.applyIf(config, {
			// ...
		});

		this.callParent([config]);
	}
});