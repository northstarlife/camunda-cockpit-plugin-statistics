ngDefine('cockpit.plugin.statistics-plugin', ['./lib/d3',
                                              './lib/nv.d3',
                                              './lib/clusterfck-0.1',
                                              'module:nvd3:./lib/angular-nvd3',
                                              'module:cockpit.plugin.statistics-plugin.controllers:./controllers/main',
                                              'module:cockpit.plugin.statistics-plugin.directives:./directives/main',
                                              'module:cockpit.plugin.statistics-plugin.services:./services/main'
                                              ], function(module) {
 

	var Configuration = function Configuration(ViewsProvider) {


		ViewsProvider.registerDefaultView('cockpit.dashboard', {
			id: 'statistics-plugin',
			label: 'History Statistics',
			url: 'plugin://statistics-plugin/static/app/dashboard.html',
			priority: 12
		});
		
    ViewsProvider.registerDefaultView('cockpit.processDefinition.runtime.action', {
      id: 'overlay',
      priority: 20, 
      url: 'plugin://statistics-plugin/static/app/overlay.html'
    });

		ViewsProvider.registerDefaultView('cockpit.processDefinition.runtime.tab', {
			id: 'runtime',
			priority: 20,	
			label: 'Statistics',
			url: 'plugin://statistics-plugin/static/app/processDefinition.html',
			controller: 'processDefinitionCtrl'
		});
	};

	Configuration.$inject = ['ViewsProvider'];

	module.config(Configuration);

	return module;
});
