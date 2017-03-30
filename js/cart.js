var cart = angular.module("cart",[]);

cart.controller("CartCtrl",["$scope",function($scope){
	$scope.cart = [
		{
//			id:1000,
			name:"Cetaphil丝塔芙洁面乳 118ml",
			img:"img/cart/sitafu.jpg",
			size:"  型号：118ml",
			quantity:4,
			price:50.4564
		},{
//			id:1001,
			name:"美宝莲(MAYBELLINE) 眼部唇部卸妆液2支装",
			img:"img/cart/meibaolian.jpg",
			size:"  型号：150ml",
			quantity:6,
			price:60.789
		},{
//			id:1002,
			name:"Itsskin晶钻红参蜗牛眼霜",
			img:"img/cart/itsskinCart.jpg",
			type:"[极速免税]",
			size:"容量：2支*15ml",
			quantity:9,
			price:70.1233
		},{
//			id:1003,
			name:"jQuery应用与开发",
			img:"img/cart/hou.jpg",
			type:"[极速免税]",
			size:" 容量：45ml+20ml+25ml+25ml+1ea",
			quantity:2,
			price:45.4546
		}
	];
	$scope.getTotalPrice = function(){
		var result = 0;
		//forEach(): angular框架封装好的遍历集合的方法
		angular.forEach($scope.cart,function(item){
			result += item.quantity*item.price;
		});
		return result;
	};
	
	$scope.getTotalQuantity = function(){
		var result = 0;
		angular.forEach($scope.cart,function(item){
			result += parseInt(item.quantity);
		});
		return result;
	};
	
	$scope.remove = function(index){
		$scope.cart.splice(index,1);
	};
	
	$scope.removeAll = function(){
		$scope.cart.length = 0;
	};
	
	$scope.add = function(index){
		$scope.cart[index].quantity++;
		$(".decrease_one").eq(index).css({
				"cursor":"default",
				"color":"#000"
			});
	};
	
	$scope.reduce = function(index){
		if($scope.cart[index].quantity>1){
			$scope.cart[index].quantity--;
//			$(".decrease_one").css("cursor","pointer");
		}else{
//			var bool = confirm("你确定要移除这件商品吗？");
//			if(bool){
//				$scope.cart.splice(index,1);
//			}
			$(".decrease_one").eq(index).css({
				"cursor":"not-allowed",
				"color":"#ccc"
			});
		}
	};

	$scope.$watch("cart",function(newValue,oldValue){
		angular.forEach($scope.cart,function(item,index){
			if(item.quantity=="-"){
				alert("数量不能为负！");
				item.quantity = oldValue[index].quantity;
			}
			if(item.quantity<=0){
				var bool = confirm("你确定要移除这件商品吗？");
				if(bool){
					$scope.cart.splice(index,1);
				}else{
					item.quantity = oldValue[index].quantity;
				}
			}
		});
	},true);
}]);

