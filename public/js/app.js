
Ext.Loader.setConfig({
	disableCaching: false
});

Ext.application({
	name: 'KP',	// inisial klikpedia
	appFolder: './public/js/app',
	controllers: [
		'Main'
	],
	launch: function() {
		Ext.create('KP.view.Main');
	}
});