$(document).ready(function() {
    
    
    var historiaId = window.location.search.substring(4);
    $.ajax({
        method: 'get',
        url: 'http://ec2-52-10-12-157.us-west-2.compute.amazonaws.com:3500/destino',
        data: {id: historiaId},
        success: function(historia){
            if(historia+"" !== '0'){
            $('#nombreCuidad').text(historia.cuidad);
             $('#titulo1').text(historia.titulo1);
              $('#titulo2').text(historia.titulo2);
              $('#bandera').addClass('flag-icon-'+historia.bandera);
              $('#capaHistoria').css('background-image','url(img/'+historia.capa+'.jpg)');
              $('#fecha').text(historia.fecha);
            }else{
                window.location = '/';
            }
        },
        error: function(){
         
        }
        
    });

    
    
    
});