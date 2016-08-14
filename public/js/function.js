$(document).ready(function(){

	var a = $("#a");
	var portafolio = $("#m1");
	var about = $("#m2");
	var contacto = $("#m3");
	var down = $("#down");
	var logo = $("#logo");
	var html = $("#html");
	var css = $("#css");
	var bootstrap = $("#bootstrap");
	var jquery = $("#jquery");
	var js = $("#js");
	var node = $("#node");
	var mongo = $("#mongo");
	var android = $("#android");
	var form = $("#form");
	var name = $("#name");
	var tel = $("#tel");
	var mail = $("#mail");
	var msg = $("#msg");
	var send = $("#send");



	a.click(function(){
		$("#img-model").attr("src","./img/marianela.svg");
		$("#myModalLabel").html("Marianela.cl");
		$("#url").html("http://marianelabarca.vmgroup.cl");
		$("#url").attr("href","http://marianelabarca.vmgroup.cl");
		$("#html-img").attr('src',"./img/dev/html5.png");
		$("#html").html("HTML5");
		$("#css-img").attr('src',"./img/dev/css.png");
		$("#css").html("CCS3");
		$("#js-img").attr('src',"./img/dev/js.png");
		$("#js").html("JS");
		$("#jquery-img").attr('src',"./img/dev/jquery2.png");
		$("#jquery").html("JQUERY");
		$("#bootstrap-img").attr('src',"./img/dev/bootstrap2.png");
		$("#bootstrap").html("BOOTSTRAP");
	});
	portafolio.click(function(){
		desplazarDown($("#portafolio"));
	});

	down.click(function(){
		desplazarDown($("#portafolio"));
	});

	about.on("click",function(){
		desplazarDown($("#about"));
	});

	contacto.click(function(){
		desplazarDown($("#contacto"));
	});

	logo.click(function(){
		desplazarUp(0);
	});

	progress(html,70);
	progress(css,60);
	progress(bootstrap,50);
	progress(jquery,50);
	progress(js,50);
	progress(node,40);
	progress(mongo,30);
	progress(android,40);

});

function desplazarDown(ubicacion){
    var posicion = ubicacion.offset().top;
    event.preventDefault()
    $("html, body").animate({
        scrollTop: posicion
    }, 1000);
};

function desplazarUp(position){
    event.preventDefault()
    $("html, body").animate({
        scrollTop: position
    }, 1000);
};

function progress(ancla,porcentaje){
	var progreso = 0;
      var idIterval = setInterval(function(){
	    // Aumento en 10 el progeso
	    progreso +=10;
	    ancla.css('width', progreso + '%');
	   
	  //Si llegó a 100 elimino el interval
	    if(progreso == porcentaje){
	   clearInterval(idIterval);
      }
    },1000);
}