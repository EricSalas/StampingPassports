$(document).ready(function() {
    
    $('.pais').click(function(event){
        var pais = $(event.target);
        if(pais.attr('id')!==undefined){
       window.location = pais.attr('id')+'.html';
        }
    });
    
        $('.ir-arriba').on("click", function() {
        $('html, body').animate({
            scrollTop: 0
        }, 'slow');
    });
    
});