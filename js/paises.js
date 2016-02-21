$(document).ready(function() {


    var paisId = window.location.search.substring(4);

    $.ajax({
        method: 'get',
        url: 'http://ec2-52-10-12-157.us-west-2.compute.amazonaws.com:3500/pais',
        data: {
            id: paisId
        },
        success: function(pais) {
            if (pais !== '0') {
                $('#nombrePais').text(pais[0].cuidad);
                $('#titulo1').text(pais[0].pais);
                $('#bandera').addClass('flag-icon-' + pais[0].bandera);
                $('#capaHistoria').css('background-image', 'url(img/' + pais[0].capa + '.jpg)');
                var indice = 0;
                var html = "";
                $.each(pais[0].historias, function(i, h) {
                    html += '<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">' +
                        '<div class="panel panel-default">' +
                        '<div class="panel-heading">' +
                        '<h3 class="panel-title">' + h.titulo + '</h3>' +
                        '</div>' +
                        '<div class="panel-body">' +
                        '<img  class="featurette-image img-responsive center-block" src="img/' + h.foto + '.jpg" alt="Generic placeholder image">' +
                        '</div>' +
                        '<div class="panel-footer">Leer historia</div>' +
                        '</div>' +
                        '</div>'
                });

                $('.historias').html('').html(html);
            }
        },
        error: function() {

        }

    });




});