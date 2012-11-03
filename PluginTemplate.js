(function(jQuery) {
	//pluginNameは任意のプラグイン名に$(elm).pluginName()と使います。
	jQuery.pluginName = function(options) {
		var plugin = this;
		
		//オプションなどの設定をオブジェクトにしておきます。デフォルト値も同時に記述しておきます。
		plugin.settings = {
			propertyName: 'value',
			myEvent: function() {}
		}
		//デフォルト値と引数に渡されたoptionsをマージします。
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