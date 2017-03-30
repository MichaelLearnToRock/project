$(function(){
	/********* 右侧固定盒子改变窗口大小**********/
	var fixedBox = $(".fixedBox");
	var fixedShopping = $(".fixedShopping");
	$(window).resize(function(){
		var screenWidth = $(window).width();
		if (screenWidth <= 1000) {
			fixedShopping.css("display","block");
			fixedBox.css("right","-40px");
		} else {
			fixedBox.css("right","0px");
			fixedShopping.css("display","none");
		}
	});
	/********* 右侧固定盒子改变窗口大小**********/
	/********* 左侧固定盒子点击事件**********/
	var floatMakeup = $(".floatMakeup");
	var floatCoat = $(".floatCoat");
	var floatRoom = $(".floatRoom");
	var floatBack = $(".floatBack");
	floatMakeup.click(function(){
		$(document).scrollTop(1396);
	});
	floatCoat.click(function(){
		$(document).scrollTop(4164);
	});
	floatRoom.click(function() {
		$(document).scrollTop(8384);
//		alert($(document).scrollTop()); 获取内容距top的高度方法
	});
	floatBack.click(function() {
		$(document).scrollTop(0);
	});
	/********* 左侧固定盒子点击事件**********/
	var rightBack = $(".rightBack");
	var myTimer = null;
	var scrollSpeed = 100;
	var flag = false;
	var floatBox = $(".floatBox");
	$(window).scroll( function() {
		var scrollTop = $(document).scrollTop();
		if (scrollTop >= 100) {
			rightBack.css("display","block");
		} else {
			rightBack.css("display","none");
		}
		if (scrollTop >= 800) {
			floatBox.css("display","block");
		} else {
			floatBox.css("display","none");
		}
	});
	rightBack.click(function(){
		myTimer = setInterval(function() {
			var scrollTop = $(document).scrollTop();
			if (scrollTop <= 0) {
				clearInterval(myTimer);
			}
			document.documentElement.scrollTop= document.body.scrollTop = scrollTop - scrollSpeed;
			flag = false;
		},30);
	});
	/********* 当滚动条滚动时触发事件**********/
});
