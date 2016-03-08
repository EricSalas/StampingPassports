$(document).ready(function() {


        $('.carousel').carousel({
            interval: 5000 //changes the speed
        });

   /** (function() {
        $.ajax({
            'method': 'get',
            'url': 'http://ec2-52-10-12-157.us-west-2.compute.amazonaws.com:3500/ultimosDestinos',
            success: function(destinos) {
                if (destinos === undefined) {
                    var html = '';
                    $.each(destinos, function(i, v) {
                        if(i==0 || i==2){
                        html += '<hr class="featurette-divider">' +
                            '<div class="row featurette">' +
                            '<div class="col-md-7">' +
                            '<h2 class="featurette-heading"><span class="flag-icon flag-icon-' + destinos[i].bandera + '"> </span> ' + destinos[i].titulo1 + '<span class="text-muted"> ' + destinos[i].titulo2 + '</span></h2>' +
                            '<p class="lead">' + destinos[i].resumen + '</p>' +
                            '</div>' +
                            '<div class="col-md-5">' +
                            '<img class="featurette-image img-responsive center-block" src="img/' + destinos[i].img + '.jpg" alt="Generic placeholder image">' +
                            '</div>' +
                            '</div>'
                            
                        }else{
                            html += '<hr class="featurette-divider">' +
                            '<div class="row featurette">' +
                                                        '<div class="col-md-5">' +
                            '<img class="featurette-image img-responsive center-block" src="img/' + destinos[i].img + '.jpg" alt="Generic placeholder image">' +
                            '</div>' +
                            '<div class="col-md-7">' +
                            '<h2 class="featurette-heading"><span class="flag-icon flag-icon-' + destinos[i].bandera + '"> </span> ' + destinos[i].titulo1 + '<span class="text-muted"> ' + destinos[i].titulo2 + '</span></h2>' +
                            '<p class="lead">' + destinos[i].resumen + '</p>' +
                            '</div>' +
                            '</div>'  
                        }
                    });
                    $('.ultimosDestinos').html('').html(html);
                }
            },
            error: function(err) {
                console.log(err);
            }
        });
    })();

    $('.ir-arriba').on("click", function() {
        $('html, body').animate({
            scrollTop: 0
        }, 'slow');
    });

   /** $(window).scroll(function(event) {
        var scroll = $(window).scrollTop();

        if (scroll >= ($('.post-header').offset().top) + 10) {
            $('.navbar').css('background-color', 'gray');
        }

        if (scroll <= ($('.post-header').offset().top) - 10) {
            $('.navbar').css('background-color', 'transparent');
        }
    });**/


});