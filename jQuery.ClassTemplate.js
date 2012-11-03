var ClassName = function(options) {
	//オプションなどの設定をオブジェクトにしておきます。デフォルト値も同時に記述しておきます。
	this.settings = {
		propertyName: 'value',
		myEvent: function() {}
	};
	//デフォルト値と引数に渡されたoptionsをマージします。
	jQuery.extend(this.settings,options);

	//イベントハンドラ内からこのクラスにアクセスするために変数へ格納します。
	var self = this;

	//クリックイベントの内容
	this.clickHandler = function(e) {
		//オプションに設定したmyEventを実行
		self.settings.myEvent(e);
		//クリックイベントの伝播を停止します
		e.preventDefault();
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
		jQuery(document.body).bind("click",this.clickHandler);
	}
};