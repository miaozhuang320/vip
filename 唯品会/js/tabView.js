function TabView(){
	
	this.tabDatas = TabView.tabViewDatas.datas
	
	
}

TabView.prototype.load= function(index){
	
	this.datas = this.checkDatas(index)
	
	
}

TabView.prototype.checkDatas = function(index){
	
	if(index ==0){
		var locationDatas = this.tabDatas[0].userLocation
		return locationDatas
	}
	
}


MoreTabView.prototype.unLoad = function(){
	
	
	
	
}
































