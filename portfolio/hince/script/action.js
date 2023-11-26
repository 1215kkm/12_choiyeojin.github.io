$('#floatingmenu a[data-semin=TOP]').click(function(){
    $('html').animate({scrollTop:0})
})

$('#floatingmenu a[data-semin=S1]').click(function(){
    $('html').animate({scrollTop:'937px'})
})

$('#floatingmenu a[data-semin=S2]').click(function(){
    $('html').animate({scrollTop:'1737px'})
})

$('#floatingmenu a[data-semin=S1]').click(function(){
    $('html').animate({scrollTop:'2277px'})
})



$('.small li a figure').click(function(){
    var sImg = $(this).find('img').attr('src')
    
    $('.big img').attr('src', sImg)
    return false;
})

$(window).scroll(function(){
    let winScr = $(window).scrollTop();
    let sec3Top = $('#section3').offset().top;

    if(winScr > sec3Top-500){
        $('#section3 .text_box').addClass('on')
    }
})
                