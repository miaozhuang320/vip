


//主题的颜色
var skinColor= '#F10180';
//基本字号
var baseFontSize= '16px';
//固定宽度
var baseWidth= '1000px';
//正常的文本颜色:
var normalTextColor= '#666666';

function TabControl(){
	
	this.locTabView = new LocationTabView()
	
	this.moreTabView = new MoreTabView()
	this.control()
}

TabControl.prototype.control = function(){
	
	//监听定位的标签触发悬停事件
	$('.header-location').hover(function(){
		this.locTabView.load(0)
	}.bind(this))
	
	$('.more-show').hover(
		function(){
			this.moreTabView.load()
		}.bind(this),
	function(){
		this.moreTabView.unLoad()
	}.bind(this))
}













































