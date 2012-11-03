var ClassName = function(options) {
	this.settings = {
		propertyName: 'value',
		myEvent: function() {}
	};
	jQuery.extend(this.settings,options);
	
	var self = this;
	
	this.clickHandler = function(e) {
		self.settings.myEvent(e);
		e.preventDefault();
	};
	
	this.init();
}
ClassName.prototype = {
	init: function() {
		jQuery(document.body).bind("click",this.clickHandler);
	}
};