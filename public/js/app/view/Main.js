
Ext.define('KP.view.Main', {
	extend: 'Ext.Viewport',
	layout: 'border',
	alias: 'widget.mainview',
	defaults: {
		border: false
	},
	initComponent: function() {

		var dsMenu = Ext.create('Ext.data.ArrayStore', {
			fields: ['id', 'text', 'slug', 'ctr'],
			data: [
				['1', 'Dashboard', 'dashboard', 'KP.controller.Dashboard'],
				['2', 'User Management', 'user-management', 'KP.controller.User'],
				['3', 'Purchase Order', 'purchase-order', 'KP.controller.PO'],
				['4', 'Sales Order', 'sales-order', 'KP.controller.SO']
			]
		});

		this.items = [
			{
				region: 'north',
				height: 50,
				contentEl: 'header'
			},
			{
				xtype: 'dataview',
				itemId: 'menu',
				region: 'west',
				width: 200,
				store: dsMenu,
				tpl: [
					'<tpl for=".">',
						'<a href="#{slug}" title="{text}" class="menu-item">{text}</a>',
					'</tpl>'
				],
				itemSelector: '.menu-item'
			},
			{
				xtype: 'tabpanel',
				region: 'center',
				style: 'background-color: #fff',
				itemId: 'workspace',
				unstyled: true,
				layout: 'fit'
			}
		];

		this.callParent();

	}
});