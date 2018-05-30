var x = 0;
var datos1 = null;
var datos2 = null;



$(function () {
    //cargar noticias
    $.getJSON("https://rawgit.com/RaulNinoSalas/WebNoticias/master/news-master/data/data1.json", function (json1) {
		datos1 = json1;
	});
    $.getJSON("https://rawgit.com/RaulNinoSalas/WebNoticias/master/news-master/data/data2.json", function (json2) {
		datos2 = json2;
	});
	$(window).scroll(function(){
		if($(window).scrollTop()+$(window).height()>$(document).height()-1){
			cargarNoticias();
		}
	});
    $('#boton').click(function () {
		cargarNoticias();
	});
	
});
function ponerNoticias(json) {
	$.each(json, function (i, noticia) {
		$('#main').append($("<div class='card-deck mb-3'><div class='card'><img class='card-img-top img-fluid' src='"+ noticia.img+
		"'alt='"+noticia.titulo+"'><div class='card-body'><h5 class='card-title'>"+noticia.titulo+
		"'</h5><p class='card-text'>"+noticia.descripcion+"'</div><div class='card-footer text-center'><small class='text-muted'">+noticia.fecha+
		"'</small></div></div></div>")
		
		);
	}
	);
}

function ponerNoticias1(json) {
	$.each(json, function (i, noticia) {
        $('#main').append($("<div class='card-deck mb-3'><div class='card'><img class='card-img-top img-fluid' src='"+ noticia.img+
		"'alt='"+noticia.titulo+"'><div class='card-body'><h5 class='card-title'>"+noticia.titulo+
		"'</h5><p class='card-text'>"+noticia.descripcion+"'</div><div class='card-footer text-center'><small class='text-muted'">+noticia.fecha+
		"'</small></div></div></div>")
		
		);
	}
	);
}

function cargarNoticias() {
	if (x === 1) {
		ponerNoticias1(datos2);
		x++;
		$('#boton').hide();
		} else if (x === 0) {
		ponerNoticias(datos1);
		x++;
	}
}