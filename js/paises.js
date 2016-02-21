$(document).ready(function() {
    
    
    var historiaId = window.location.search.substring(4);
    
    $.ajax({
        method: 'get',
        url: 'http://ec2-52-10-12-157.us-west-2.compute.amazonaws.com:3500/pais',
        data: {id: historiaId},
        success: function(historia){
            if(historia!=='0'){
            $('#nombreCuidad').text(historia[0].cuidad);
             $('#titulo1').text(historia[0].titulo1);
              $('#titulo2').text(historia[0].titulo2);
              $('#bandera').addClass('flag-icon-'+historia[0].bandera);
              $('#capaHistoria').css('background-image','url(img/'+historia[0].capa+'.jpg)');
              $('#fecha').text(historia[0].fecha);
            }
        },
        error: function(){
         
        }
        
    });

    
    
    
});