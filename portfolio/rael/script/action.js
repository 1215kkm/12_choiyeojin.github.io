$('.snb > li').click(function(){
    $(this).children('ul').show();
    return false
});
$('.snb li').mouseout(function(){
    $('.snb li ul').hide();
})
$('.snb li ul').mouseover(function(){
    $(this).show()
})


$('.snb .home').click(function(){
    
})


// 기본 위치(top)값
var floatPosition = parseInt($(".sideBanner").css('top'))

// scroll 인식
$(window).scroll(function() {
  
    // 현재 스크롤 위치
    var currentTop = $(window).scrollTop();
    var bannerTop = currentTop + floatPosition + "px";

    //이동 애니메이션
    $(".sideBanner").stop().animate({
      "top" : bannerTop
    }, 500);

}).scroll();



$('#section1 li').mouseenter(function(){
    $(this).find('div').fadeIn()
})
