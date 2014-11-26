
Ext.define('KP.controller.Main', {
	extend: 'Ext.app.Controller',
	views: [
		'Main'
	],
	refs: [
		{ref: 'mainview', selector: 'mainview'}
	],
	init: function() {

		this.control({
			'mainview > #menu': {
				scope: this,
				itemclick: function(menu, data) {
					var workspace = this.getMainview().down('#workspace');
					var view, ctr;

					view = workspace.down('#view-'+data.get('id'));

					if ( ! view) {
						ctr = this.getController(data.get('ctr'));
						if (ctr.views && ctr.views.length) {
							view = this.getView(ctr.views[0]).create({
								itemId: 'view-'+data.get('id'),
								title: data.get('text'),
								border: false,
								closable: true
							});
							workspace.add(view);
						}
					}

					view.show();
				}
			}
		});

	}
});