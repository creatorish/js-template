(function(jQuery) {
	jQuery.pluginName = function(options) {
		var plugin = this;
		
		plugin.settings = {
			propertyName: 'value',
			myEvent: function() {}
		}
		jQuery.extend(plugin.settings, options);
		
		var init = function() {
			hoge_private();
		}
		plugin.hoge_public = function() {
			alert("public method");
		}
		var hoge_private = function() {
			plugin.settings.myEvent();
		}
		init();
	}
})(jQuery);