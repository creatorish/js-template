//ClassNameは任意のクラス名に new ClassName()して使います。
var ClassName = function(options) {
	//オプションなどの設定をオブジェクトにしておきます。デフォルト値も同時に記述しておきます。
	this.settings = {
		propertyName: 'value',
		myEvent: function() {}
	};
	//デフォルト値と引数に渡されたoptionsをマージします。
	this.extend(this.settings,options);
	
	//イベントハンドラ内からこのクラスにアクセスするために変数へ格納します。
	var self = this;
	
	//クリックイベントの内容
	this.clickHandler = function(e) {
		self.settings.myEvent(e);
		self.hoge_private();
		self.preventDefault(e);
	};
	
	//init処理を開始します。
	this.init();
}

//ClassName.prototypeでこのクラスの関数を追加していきます。
ClassName.prototype = {
	//init関数
	init: function() {
		alert(this.settings.propertyName);
		//イベントを付与します。
		this.addEvent(document.body,"click",this.clickHandler);
	},
	//オブジェクトの継承関数です。
	extend: function(obj,extObj) {
		for (var key in extObj) {
			if (typeof(extObj[key]) === "object") {
				this.extend(obj[key],extObj[key]);
			} else {
				obj[key] = extObj[key];
			}
		} return obj;
	},
	//addEventのクロスブラウザ対応
	addEvent: function(element,type,func) {
		if (window.addEventListener) {
			element.addEventListener(type, func, false);
		} else {
			element.attachEvent('on' + type, func);
		}
	},
	//removeEventのクロスブラウザ対応
	removeEvent: function(element,type,func) {
		if (window.removeEventListener) {
			element.removeEventListener(type, func, false);
		} else {
			element.detachEvent('on' + type, func);
		}
	},
	//preventDefaultのクロスブラウザ対応
	preventDefault: function(e) {
		if (e.preventDefault) {
			e.preventDefault();
		} else {
			e.returnValue = false;
		}
	}
};