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
    
    
    var openPhotoSwipe = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg',
            w: 964,
            h: 1024
        },
        {
            src: 'https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg',
            w: 1024,
            h: 683
        }
    ];
    
    // define options (if needed)
    var options = {
             // history & focus options are disabled on CodePen        
        history: false,
        focus: false,

        showAnimationDuration: 0,
        hideAnimationDuration: 0
        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};

openPhotoSwipe();

document.getElementById('btn').onclick = openPhotoSwipe;
    
    
});