$(function(){
	/*******************倒计时*****************/
	var daoxuTimeDetail=$(".daoxuTimeDetail");
	var daoxuTimer = setInterval(clockFun, 1000);
	var daoxuSecond=5;
	var daoxuMinute=0;
	function clockFun() {
		
		var dateStr =  daoxuMinute + " 分 " + zhuanhuan(daoxuSecond ) + " 秒 ";
		daoxuTimeDetail.text(dateStr);
		
		if(daoxuMinute<0){
				$(".cart_timer_counting").hide();
				$(".cart_timer_out").show();
				clearInterval(daoxuTimer);
			}
		daoxuSecond--;
	};
	function zhuanhuan(num) {
		if(num<=0){
			daoxuSecond=60;
			
			
			daoxuMinute--;
		};
		if (num < 10) {
			return "0" + num;
		} else {
			return "" + num;
			
		}
		
	};
	/*******************倒计时*****************/
})