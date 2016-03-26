$(document).ready(function() {


    var paisId = window.location.search.substring(4);
    
$('html').on('click','.destino',function(event){
    var destino = $(event.target);
    var id = destino.parents('.destino').attr('id');
    var lg = destino.parents('.destino').attr('lg');
    if(id!==undefined && lg!==undefined){
    window.location = 'destinos.html?id='+id+'&lg='+lg;
    }
    
});

});