$(document).ready(function() {
    
    
    $('.pais').click(function(event){
        var pais = $(event.target);
        if(pais.attr('id')!==undefined){
       window.location = 'paises.html?id='+pais.attr('id');
            
        }
    });
    
});