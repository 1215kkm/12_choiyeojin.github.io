
setInterval(function(){
    $('.slide')
    .delay(2000).animate({marginLeft:'-100%'})
    .delay(2000).animate({marginLeft:'-200%'})
    .delay(2000).animate({marginLeft:'-300%'}, function(){
        $('.slide').css({marginLeft:0})
    });
});




$(window).scroll(function(){
    let winScr = $(window).scrollTop();
    let sec1Top = $('.section1').offset().top;

    if(winScr > sec1Top-300){
        $('.section1 .profile_box').addClass('on')
    }
})
             