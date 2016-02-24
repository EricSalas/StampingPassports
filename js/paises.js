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
                $('#nombrePais').text(pais.cuidad);
                $('#titulo1').text(pais.pais);
                $('#bandera').addClass('flag-icon-' + pais.bandera);
                $('#capaHistoria').css('background-image', 'url(img/' + pais.capa + '.jpg)');
                var indice = 0;
                var html = "";
                if(pais['historias']!==undefined){
                $.each(pais.historias, function(i, h) {
                    html += '<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 cursor destino" id="'+h.id+'">' +
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
                        indice+=1;
                        if(indice==4){
                            html = '<div class="row">'+html+'</div>';
                            indice = 0;
                        }
                });

                $('.destinos').html('').html(html);
            }
            }else{
                  window.location = '/';
            }
        },
        error: function() {

        }

    });


$('html').on('click','.destino',function(event){
    var destino = $(event.target);
    var id = destino.parents('.destino').attr('id');
    if(id!==undefined){
    window.location = 'destinos.html?id='+id;
    }
    
});

});