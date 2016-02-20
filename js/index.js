$(document).ready(function() {
    
    
    $('.ir-arriba').on("click",function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
});
    
    $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    
    if(scroll   >=  ($('.post-header').offset().top) + 10){
        $('.navbar').css('background-color','gray');
    }
    
        if(scroll <=  ($('.post-header').offset().top) - 10){
        $('.navbar').css('background-color','transparent');
    }
});
    

});