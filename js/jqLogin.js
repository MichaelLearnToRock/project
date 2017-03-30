$(function(){
	/********* 点击 下面focus显示**********/
	var textbox_ui_tel =$("#login-dynamic-form").find(".textbox_ui");
	var textbox_focus=textbox_ui_tel.find(".focus_text");
	var dynamic_pass=$(".dynamic_pass");
	var dynamic_passFocus=dynamic_pass.find(".focus_text");
	var textbox_ui_com=$(".textbox_ui");
	var textbox_ui_comfocus=textbox_ui_com.find(".focus_text");
	var textbox_ui_pass=$(".textbox_ui_pass");
	var textbox_ui_passFocus=textbox_ui_pass.find(".focus_text");
	textbox_ui_tel.click(function(){
		initFloat();
		textbox_focus.show();
	});
	dynamic_pass.click(function() {
		initFloat();
		dynamic_passFocus.show();
	});
	textbox_ui_com.click(function() {
		initFloat();
		textbox_ui_comfocus.show();
	});
	textbox_ui_pass.click(function() {
		initFloat();
		textbox_ui_passFocus.show();
	});
	function initFloat(){
		textbox_focus.hide();
		dynamic_passFocus.hide();
		textbox_ui_comfocus.hide();
		textbox_ui_passFocus.hide();
	}
	/********* 点击 只能输入数字**********/
	function onlyNumber(event){
		var keyCode = event.keyCode;
		if(keyCode<48 || keyCode>57){
			event.keyCode = 0;
		}
	}
	$(function(){
		$("#radio_dynamic").keydown(onlyNumber);
	});
	/********* 点击 下面focus显示**********/	
	var radio_dynamic=$("#radio_dynamic");
	var radio_normal=$("#radio_normal");
	var logindynamicform=$("#login-dynamic-form");
	var loginuserform=$(".login-user-form");
	 radio_dynamic.click(function () {
		if ($(this).prop("checked")) {
		   logindynamicform.show();
			loginuserform.hide();
		}
	 });
     radio_normal.click(function () {
		if ($(this).prop("checked")) {
		    loginuserform.show();
			logindynamicform.hide();
		}
	});
});