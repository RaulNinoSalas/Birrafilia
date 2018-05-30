var cargado = 1;


$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() + 10 >= $(document).height()) {
        if (cargado < 6) {
            $.getJSON("https://rawgit.com/RaulNinoSalas/WebNoticias/master/news-master/data/data" + cargado + ".json", function (jsonObject) {
                addrow(jsonObject);
            }); cargado++;
        } else {
            $('#mas').text('No hay más noticias');
        }
    }
});


function cargar() {
    if (cargado < 6) {
        $.getJSON("https://rawgit.com/RaulNinoSalas/WebNoticias/master/news-master/data/data" + cargado + ".json", function (jsonObject) {
            addrow(jsonObject);
        }); cargado++;
    } else {
        $('#mas').text('No hay más noticias');
    }
};



function addrow(json) {
    $.each(json, function (i, item) {
        $("#noticias").append("'<div class='card-deck mb-3'><div class='card'><img class='card-img-top img-fluid' src='"+ item.img+
		"'alt='"+item.titulo+"'><div class='card-body'><h5 class='card-title'>"+item.titulo+
		"'</h5><p class='card-text'>"+item.descripcion+"'</div><div class='card-footer text-center'><small class='text-muted'">+item.fecha+
		"'</small></div></div></div>");
    })
};







