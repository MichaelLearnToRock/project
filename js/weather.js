$(function(){
	$.ajaxSetup({
	type: "get",
	dataType: "jsonp",
	jsonp: "callback",
	error: function() {
		console.log("请求异常！");
	}
});
	$.ajax({
		type:"get",
		url:"http://op.juhe.cn/onebox/weather/query?cityname=%E5%8C%97%E4%BA%AC&key=d1bc993759c075cbb526c77d498a930c",
		async:true,
		dataType:"jsonp",
		jsonp:"callback",
		success:function(response,status,xhr){
			report(response);
		}
	});
	function report(response){
		$(".picture").find("img").attr("src","img/g2/120x120/day/" + response.result.data.realtime.weather.img + ".png");
//				$("#changeCity").val(response.result.today.city);
		$("#nowcityContent").html(response.result.data.realtime.city_name);
		$("#dateContent").html(response.result.data.realtime.date);
		var weekDay=null;
		switch(response.result.data.realtime.week){
			case 0:
				weekDay="日";
				break;
			case 1:
				weekDay="一";
				break;
			case 2:
				weekDay="二";
				break;
			case 3:
				weekDay="三";
				break;
			case 4:
				weekDay="四";
				break;
			case 5:
				weekDay="五";
				break;
			case 6:
				weekDay="六";
				break;
		}
		$("#weekContent").html(weekDay);
		$("#windContent").html(response.result.data.realtime.wind.power);
		$("#temperatureContent").html(response.result.data.realtime.weather.temperature);
		$("#weatherContent").html(response.result.data.realtime.weather.info);
		if(response.result.data.realtime.weather.temperature>15){
			$(".coat").find("img").removeAttr().attr("src","img/coatSmall.png");
		}else{
			$(".coat").find("img").removeAttr().attr("src","img/coatLong.png");
		}
		var str = "";
	for (var i = 0; i < response.result.data.weather.length; i++) {
		str += "<li><p class='futureTime'><span class='futureDate'>" +
		response.result.data.weather[i].date +
		"&nbsp;</span><span class='futureWeek'>" +
		response.result.data.weather[i].week +
		"</span></p><div class='futureDay'><img src='img/g2/120x120/day/" +
		response.result.data.weather[i].info.day[0] +
		".png'><span>"+
		response.result.data.weather[i].info.day[2]+"<sup>o</sup>C"+
		"</span><span>~"+
		 response.result.data.weather[i].info.night[2]+"<sup>o</sup>C"+
		"</span></div><div class='futureNight' style='position:relative;top:5px;left:0;'>" +
		"<span style='font-weight:bolder;'>"+
		response.result.data.weather[i].info.day[4]+
		"</span></div></li>";

	}
	$(".futureWeather").empty().append(str);
	}
	$("#searchBtnBox").click(function(){
		var cityName=$("#searchText").val();
		$.ajax({
			url:"http://op.juhe.cn/onebox/weather/query?cityname="+cityName+"&key=d1bc993759c075cbb526c77d498a930c",
			dataType:"jsonp",
			jsonp:"callback",
			success:function(response){
				report(response);
			}
		});
	});
	console.log('由于github不支持跨域数据，所以不能从第三方获取相关信息');
});
