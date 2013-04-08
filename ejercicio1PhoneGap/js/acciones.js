// JavaScript Document
(document).ready(function(e) {
alert ("documento listo")
});
document.addEventListener("deviceready",function(){
	$('.btn').tap(function(){
		var boton =(($(this).attr('class')).split
		switch (boton)
		{
		case 'b1'
		navigator.notification.beep(1);
		break;
		case 'b2'
		navigator.notification.beep(2);
		break;
		case 'b3'
		navigator.notification.beep(5);
		break;
		case 'b4'
		navigator.notification.vibrate(500);
		break;
		case 'b5'
		navigator.notification.vibrate(300);
		   navigator.notification.vibrate(1000);
		break;
		}
	        });
	$('derecha').swiperight(function(){
		navigator.notification.alert("deslizame a la derecha", function(){},"practica 1","ACEPTAR"
	});
	},false);
	    $('table td').eq(1).text(device.name);
            $('table td').eq(3).text(device.cordova);
            $('table td').eq(5).text(device.plataform);
            $('table td').eq(7).text(device.version);
            $('table td').eq(9).text(device.UUID);

	
	
