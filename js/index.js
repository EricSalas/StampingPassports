$(document).ready(function() {
        $('.carousel').carousel({
            interval: 10000 //changes the speed
        });
$('.btn').click(function(e){
  e.preventDefault();
});      
        
$('html').on('click','.cursor, .btn',function(event){
    var elemento = $(event.target);
    var id = elemento.parents('.destino').attr('id');
    var lg = elemento.parents('.destino').attr('lg');
    if(id!==undefined && lg!==undefined){
  window.location = 'destinos.html?id='+id+'&lg='+lg;
    }
    
});
});