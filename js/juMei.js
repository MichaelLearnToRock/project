function domReady(fn){
	if(document.addEventListener){
		document.addEventListener('DOMContentLoaded',function(){//高版本浏览器
			fn&&fn();
		},false);
	}else {
		document.onreadystatechange = function(){
			if (document.readyState == 'complete'){
				fn&&fn();
			}
		}
	}
}
domReady(function(){
	/********* 右侧固定盒子开始**********/
	/********* 右侧固定盒子改变窗口大小**********/
	(function(){
		var fixedBox = document.getElementsByClassName("fixedBox")[0];
		var fixedShopping = document.getElementsByClassName("fixedShopping")[0];
		window.onresize = function() {
			var screenWidth = document.documentElement.clientWidth;
			if (screenWidth <= 1000) {
				fixedShopping.style.display = "block";
				fixedBox.style.right = -40 + "px";
			} else {
				fixedBox.style.right = 0 + "px";
				fixedShopping.style.display = "none";
			}
		};
	})();
	/********* 右侧固定盒子滚动条滚动后**********/
	//rightBack回到顶部按钮,floatBox左侧fixed导航
            /******* 左侧固定盒子********/
	(function(){
        var floatDay = document.getElementsByClassName("floatDay")[0].getElementsByTagName("a")[0];
        var floatNews = document.getElementsByClassName("floatNews")[0].getElementsByTagName("a")[0];
        var floatBrand = document.getElementsByClassName("floatBrand")[0].getElementsByTagName("a")[0];
        floatDay.onclick = function() {
            //每次点击前先清空
            initFloat();
            document.documentElement.scrollTop = document.body.scrollTop = 4489;
            this.style.background = " url(img/leftFloat.jpg) -176px 0";
            this.style.color = "#fff";
        };
        floatNews.onclick = function() {
            initFloat();
            document.documentElement.scrollTop = document.body.scrollTop = 6390;
            this.style.background = " url(img/leftFloat.jpg) -176px -124px";
            this.style.color = "#fff";
        };
        floatBrand.onclick = function() {
            initFloat();
            document.documentElement.scrollTop = document.body.scrollTop = 7936;
            this.style.background = " url(img/leftFloat.jpg) -176px -186px";
            this.style.color = "#fff";
        };
        function initFloat() {
            floatDay.style.background = "url(img/leftFloat.jpg) 0 0";
            floatNews.style.background = "url(img/leftFloat.jpg) 0 -124px";
            floatBrand.style.background = "url(img/leftFloat.jpg) 0 -186px";
            floatDay.style.color = "#8f8f8f";
            floatNews.style.color = "#8f8f8f";
            floatBrand.style.color = "#8f8f8f";
        }
		var rightBack = document.getElementsByClassName("rightBack")[0];
		//当滚动条滚动时触发搜索框事件
		var fixedMenu = document.getElementById("fixedMenu");
		var flagBoxTime = true;
		var fixedMenuHeight = -40;
		window.onscroll = function() {
			var floatSearchBoxTime = null;
			var floatBox = document.getElementsByClassName("floatBox")[0];
			var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
			if (scrollTop >= 10) {
				rightBack.style.display = "block";
			} else {
				rightBack.style.display = "none";
			}
			if (scrollTop >= 540) {
				floatBox.style.display = "block";
			} else {
				floatBox.style.display = "none";
			}
			//当滚动条滚动时触发搜索框事件
			//alert(scrollTop);
			if (scrollTop >= 540) {
				if (flagBoxTime) {
					floatSearchBoxTime = setInterval(function() {
						if (fixedMenu.offsetTop < 0) {
							fixedMenu.style.top = fixedMenu.offsetTop + 1 + "px";
							flagBoxTime = false;
						} else if (fixedMenu.offsetTop >= 0) {
							clearInterval(floatSearchBoxTime);
							flagBoxTime = false;
						}
					}, 30);
				} else {
					flagBoxTime = true;
					return null;
				}
			} else {
				if (flagBoxTime) {
					floatSearchBoxTime = setInterval(function() {
						if (fixedMenu.offsetTop > fixedMenuHeight) {
							fixedMenu.style.top = fixedMenu.offsetTop - 3 + "px";
							flagBoxTime = false;
						} else if (fixedMenu.offsetTop <= fixedMenuHeight) {
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

			//随着scroll的变化 变换float左边的块
			if (scrollTop >= 4489 && scrollTop < 6390) {

				floatDay.style.background = " url(img/leftFloat.jpg) -176px 0";
				floatDay.style.color = "#fff";
			} else if (scrollTop >= 6390 && scrollTop < 7936) {

				floatNews.style.background = " url(img/leftFloat.jpg) -176px -124px";
				floatNews.style.color = "#fff";
			} else if (scrollTop >= 7936) {

				floatBrand.style.background = " url(img/leftFloat.jpg) -176px -186px";
				floatBrand.style.color = "#fff";
			}
			if (flag) {
				clearInterval(myTimer);
			}
			flag = true;
		};

		var myTimer = null;
		var scrollSpeed = 100;
		var flag = false;
		/********* 右侧固定盒子回到顶部**********/
		rightBack.onclick = function() {
			myTimer = setInterval(function() {
				var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
				if (scrollTop <= 0) {
					clearInterval(myTimer);
				}
				document.documentElement.scrollTop = document.body.scrollTop = scrollTop - scrollSpeed;
				flag = false;
			},30);
		};
	})();
	/********* 右侧固定盒子结束**********/
	/*******************轮播图开始******************/
	(function(){
		var bannerImg = document.getElementById("bannerImg");
		var imgArr = bannerImg.getElementsByTagName("div");
		var tableArr = bannerImg.getElementsByTagName("table")[0].getElementsByTagName("td");
		var index = 0;
		var myTimer = null;
		var speed = 0.15;
		var lunboFlag = true;
		imgArr[index].style.opacity = 1;
		tableArr[index].style.backgroundColor = "#EA175C";
		myTimer = setInterval(move, 3000);
		function move() {
			if (index >= imgArr.length - 1) {
				index = 0;
			} else {
				index++;
			}
			init();
			donghua();
			tableArr[index].style.backgroundColor = "#EA175C";
		}
		var donghuaTimer = null;
		function donghua() {
			donghuaTimer = setInterval(function() {
				imgArr[index].style.opacity = parseFloat(imgArr[index].style.opacity) + speed;
				if (imgArr[index].style.opacity >= 1) {
					clearInterval(donghuaTimer);
					lunboFlag = true;
				}
			},200);
		}
		function init() {
			for (var i = 0; i < imgArr.length; i++) {
				imgArr[i].style.opacity = 0;
				tableArr[i].style.backgroundColor = "#CCC";
			}
		}
		for (var i = 0; i < tableArr.length; i++) {
			tableArr[i].tableIndex = i;
			tableArr[i].onclick = function() {
				if (lunboFlag) {
					lunboFlag = false;
				} else {
					return null;
				}
				index = this.tableIndex;
				clearInterval(myTimer);
				init();
				donghua();
				this.style.backgroundColor = "#EA175C";
				myTimer = setInterval(move, 6000);
			}
		}
	})();
	/*******************轮播结束******************/
	/************ 显示的地图*************?????????????????????????????????*/
	/*var monitor = document.getElementsByClassName("monitor")[0];
	var fixedMap = document.getElementsByClassName("fixedMap")[0];
	var closeMap = document.getElementsByClassName("closeMap")[0];
	 closeMap.onclick = function() {
		 monitor.style.display = "none";
		 fixedMap.style.display = "none";
	 };*/
	/************显示的地图 *************/
	/********* 头部Head中导航Nav 送至北京内容 设置开始 **********/
    (function(){
        var send = document.getElementsByClassName("send")[0];
        var lastLiArr = document.getElementsByClassName("navDetail1")[0].getElementsByClassName("lastLi")[0];
        var sendTimer = null;
        var outTimer = null;
        var sendFlag = true;
        var sendSpeed = 5;
        lastLiArr.onmouseover = function(ev) {
            var objEvent = ev || window.event;
            clearTimeout(sendTimer);
            clearTimeout(outTimer);
            sendTimer = setInterval(function() {
                var y = send.offsetTop;
                if (sendFlag) {
                    if (y < 28) {
                        send.style.top = y + sendSpeed + "px";
                    } else {
                        clearInterval(sendTimer);
                        send.style.top = 28 + "px";
                        send.onmouseover = function() {
                            send.style.top = 28 + "px";
                        };
                        sendFlag = false;
                    }
                }
            }, 3);
            //		objEvent.cancelBubble = true;
        };
        lastLiArr.onmouseout = function() {
            if (!sendFlag) {
                clearTimeout(sendTimer);
                clearTimeout(outTimer);
                outTimer = setInterval(function() {
                    var y = send.offsetTop;
                    if (y > -244) {
                        send.style.top = y - sendSpeed + "px";
                    } else {
                        send.style.top = -244 + "px";
                        clearInterval(outTimer);
                    }
                },30);
                sendFlag = true;
            }
        };
    })();
	/********* 头部Head中导航Nav  送至北京内容 设置结束 **********/

	/*******************今日疯抢 明日预告开始*****************/
    (function(){
        var liArr = document.getElementsByClassName("navSearch")[0].getElementsByTagName("li");
        var aArr = document.getElementsByClassName("navSearch")[0].getElementsByTagName("a");
        var todayUlArr = document.getElementsByClassName("today")[0].getElementsByTagName("ul"); //商品
        var sanjiao = document.getElementById("topBuy").getElementsByClassName("sanjiao");
        for (var i = 0; i < liArr.length; i++) {
            liArr[i].index = i;
            sanjiao[0].style.display = "block";
            aArr[0].style.color = "#fff";
            aArr[0].style.fontWeight = "700";
            liArr[i].onclick = function() {
                document.documentElement.scrollTop = document.body.scrollTop = 534;
                for (var j = 0; j < todayUlArr.length; j++) {
                    todayUlArr[j].style.display = "none";
                    liArr[j].className = "none";
                    sanjiao[j].style.display = "none";
                    aArr[j].style.color = "#000";
                    aArr[0].style.fontWeight = "normal";
                }
                aArr[this.index].style.color = "#fff";
                aArr[this.index].style.fontWeight = "700";
                this.className = "activeLi";
                todayUlArr[this.index].style.display = "block";
                sanjiao[this.index].style.display = "block";
            };
        }
    })();
	/*******************今日疯抢 明日预告结束*****************/
	/*******************倒计时开始*****************/
    (function(){
        var daoxuTimeDetail = document.getElementsByClassName("daoxuTimeDetail");
        var daoxuTimer = setInterval(clockFun, 1000);
        function clockFun() {
            var mydate = new Date();
            var dateStr = zhuanhuan(31 - mydate.getDate()) + " 天 " + zhuanhuan(23 - mydate.getHours()) + " 时 " + zhuanhuan(59 - mydate.getMinutes()) + " 分 " + zhuanhuan(59 - mydate.getSeconds()) + " 秒 ";
            for (var i = 0; i < daoxuTimeDetail.length; i++) {
                daoxuTimeDetail[i].innerHTML = dateStr;
            }
        }
        function zhuanhuan(num) {
            if (num < 10) {
                return "0" + num;
            } else {
                return "" + num;
            }
        }
    })();
	/*******************倒计时结束*****************/
});