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
	/********* 当滚动条滚动时触发事件**********/
	/*******************倒计时*****************/
	var daoxuTimeDetail=$(".daoxuTimeDetail");
	var daoxuTimer = setInterval(clockFun, 1000);
	function clockFun() {
		var mydate = new Date();
		var dateStr = zhuanhuan(61 - mydate.getDate()) + " 天 " + zhuanhuan(23 - mydate.getHours()) + " 时 " + zhuanhuan(59 - mydate.getMinutes()) + " 分 " + zhuanhuan(59 - mydate.getSeconds()) + " 秒 ";
		daoxuTimeDetail.text(dateStr);
	}
	function zhuanhuan(num) {
		if (num < 10) {
			return "0" + num;
		} else {
			return "" + num;
		}
	}
	/*******************倒计时*****************/
	var rightBack = $(".rightBack");
	var floatSpeed = 0.15;
	var floatFlag = true;
	var floatTimer = null;
	//当滚动条滚动时触发搜索框事件var
	var fixedMenu = $("#fixedMenu");
	var flagBoxTime = true;
	var fixedMenuHeight = -40;
	var video=$(".advertisement").find("video");
	var closeAdv=$(".advertisement").find(".closeAdv");
	
	$(window).scroll( function(){
		var advertisement=$(".advertisement");
		var floatSearchBoxTime = null;
		var floatBox = $(".floatBox");
		var scrollTop = $(document).scrollTop();
		var video=advertisement.find("video");
		if (scrollTop >= 4500) {
			advertisement.show();
			closeAdv.css("display","block");

				if(video.attr("src")==""){
					video.attr("src","video/advertisement.mp4");
				}
		}
		if (scrollTop >= 100) {
			rightBack.css("display","block");
		} else {
			rightBack.css("display","none");
		}
		if (scrollTop >= 540) {
			floatBox.css("display","block");
		} else {
			floatBox.css("display","none");
		}
		//当滚动条滚动时触发搜索框事件
		if (scrollTop >= 804) {
			if (flagBoxTime) {
				floatSearchBoxTime = setInterval(function() {
					var fixedMenuTop=fixedMenu.position().top;
					if (fixedMenuTop < 0) {
						fixedMenu.css("top",fixedMenuTop+1);
						flagBoxTime = false;
					} else if (fixedMenuTop >= 0) {
						clearInterval(floatSearchBoxTime);
						flagBoxTime = false;
					}
				}, 30);
			} else {
				flagBoxTime = true;
				return null;
			}
		} 
		else {
			if (flagBoxTime) {
				floatSearchBoxTime = setInterval(function() {
					var fixedMenuTop=fixedMenu.position().top;
					if (fixedMenuTop > fixedMenuHeight) {
						fixedMenu.css("top",fixedMenuTop-3+"px");
						flagBoxTime = false;
					} else if (fixedMenuTop<= fixedMenuHeight) {
						clearInterval(floatSearchBoxTime);
						flagBoxTime = false;
					}
				}, 30);
			} else {
				flagBoxTime = true;
				return null;
			}
		}
		//当滚动条滚动时触发搜索框事件
		var myTimer = null;
		var scrollSpeed = 100;
		var flag = false;
		rightBack.click(function(){
			myTimer = setInterval(function() {
				var scrollTop = $(document).scrollTop();
				if (scrollTop <= 0) {
					clearInterval(myTimer);
				}
				document.documentElement.scrollTop= document.body.scrollTop = scrollTop - scrollSpeed;
				flag = false;
			}, 30);
		})
	});
	/********* 当滚动条滚动时触发事件**********/
	/********* 头部Head中导航Nav  送至北京内容 设置 **********/
	$(".navDetail1").find(".lastLi").hover(function(){
		$(".send").stop().animate({
			"top":"28px"
		},400);
	},function(){
		$(".send").stop().animate({
			"top":"-244px"
		},400);
	});
	/********* 头部Head中导航Nav  送至北京内容 设置 **********/
	
	/********* 商品信息点击事件**********/
	var goodsinfo = $(".goodsinfo").find("a");
	var goods_detail = $(".goods_detail").find("a");
	var goods_reality = $(".goods_reality").find("a");
	var goods_free = $(".goods_free").find("a");
	
	var fLi = $(".fLi").find("a");
	var sLi = $(".sLi").find("a");
	var tLi = $(".tLi").find("a");
	var fourLi = $(".fourLi").find("a");
	goodsinfo.click(function(){
		initFloat();
		$(document).scrollTop(804);
		$(this).css("color","#ed145b");
	});
	goods_detail.click(function() {
		initFloat();
		$(document).scrollTop(2300);
		$(this).css("color","#ed145b");
	});
	goods_reality.click(function() {
		initFloat();
		$(document).scrollTop(5050);
		$(this).css("color","#ed145b");
	});
	goods_free.click(function() {
		initFloat();
		$(document).scrollTop(10164);
		$(this).css("color","#ed145b");
	});

	fLi.click(function(){
		initFloat();
		$(document).scrollTop(804);
		$(this).css("color","#ed145b");
		$(this).css("background","#fff");
	});
	sLi.click(function(){
		initFloat();
		$(document).scrollTop(2300);
		$(this).css("color","#ed145b");
		$(this).css("background","#fff");
	});
	tLi.click(function(){
		initFloat();
		$(document).scrollTop(5050);
		$(this).css("color","#ed145b");
		$(this).css("background","#fff");
	});
	fourLi.click(function(){
		initFloat();
		$(document).scrollTop(10164);
		$(this).css("color","#ed145b");
		$(this).css("background","#fff");
	});

	function initFloat() {
		$(goodsinfo).css("color","#000");
		$(goods_detail).css("color","#000");
		$(goods_reality).css("color","#000");
		$(goods_free).css("color","#000");
		
		$(fLi).css("color","#fff");
		$(sLi).css("color","#fff");
		$(tLi).css("color","#fff");
		$(fourLi).css("color","#fff");
		
		$(fLi).css("background","#333");
		$(sLi).css("background","#333");
		$(tLi).css("background","#333");
		$(fourLi).css("background","#333");
	}
	/********* 左侧固定盒子点击事件**********/
});
