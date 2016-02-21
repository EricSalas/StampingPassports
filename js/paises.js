$(document).ready(function() {
    
    
    var paisId = window.location.search.substring(4);
    
    $.ajax({
        method: 'get',
        url: 'http://ec2-52-10-12-157.us-west-2.compute.amazonaws.com:3500/pais',
        data: {id: paisId},
        success: function(pais){
            if(pais!=='0'){
                console.log(pais[0].historias[0].id);
            $('#nombrePais').text(pais[0].cuidad);
             $('#titulo1').text(pais[0].pais);
              $('#bandera').addClass('flag-icon-'+pais[0].bandera);
              $('#capaHistoria').css('background-image','url(img/'+pais[0].capa+'.jpg)');
              $('#fecha').text(pais[0].fecha);
            }
        },
        error: function(){
         
        }
        
    });

    
    
    
});