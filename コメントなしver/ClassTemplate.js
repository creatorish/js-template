var ClassName = function(options) {
	this.settings = {
		propertyName: 'value',
		myEvent: function() {}
	};
	this.extend(this.settings,options);
	
	var self = this;
	
	this.clickHandler = function(e) {
		self.settings.myEvent(e);
		self.hoge_private();
		self.preventDefault(e);
	};
	
	this.init();
}
ClassName.prototype = {
	init: function() {
		this.addEvent(document.body,"click",this.clickHandler);
	},
	extend: function(obj,extObj) {
		for (var key in extObj) {
			if (typeof(extObj[key]) === "object") {
				this.extend(obj[key],extObj[key]);
			} else {
				obj[key] = extObj[key];
			}
		} return obj;
	},
	addEvent: function(element,type,func) {
		if (window.addEventListener) {
			element.addEventListener(type, func, false);
		} else {
			element.attachEvent('on' + type, func);
		}
	},
	removeEvent: function(element,type,func) {
		if (window.removeEventListener) {
			element.removeEventListener(type, func, false);
		} else {
			element.detachEvent('on' + type, func);
		}
	},
	preventDefault: function(e) {
		if (e.preventDefault) {
			e.preventDefault();
		} else {
			e.returnValue = false;
		}
	}
};