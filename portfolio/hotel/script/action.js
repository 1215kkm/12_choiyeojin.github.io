// window.onload = function(){

// }
// 바닐라스크립트 



$(document).ready(function(){
    let gnbHtml = $('.gnb').html()

    $('header').append('<ul class="gnb_mo" style="display:none">'+gnbHtml+'</ul>')

    $('.gnb > li').mouseenter(function(){
        $('.lnb').stop().fadeIn(200);
        $('.lnb_bg').stop().fadeIn(200);
    });
    $('.gnb').mouseleave(function(){
        $('.lnb').stop().fadeOut(200);
        $('.lnb_bg').stop().fadeOut(200);
    });


    $('.gnb_mo > li').click(function(){
        $('.lnb').slideUp();
        $(this).find('.lnb').stop().slideDown();
    });


    $('header .hamburger').click(function(){
        $('.gnb_mo').fadeToggle()
        $('header .hamburger').toggleClass('on')
    })



    $(window).resize(function(){
        let winWidth = $(window).width();

        if(winWidth > 780){
            $('.gnb_mo').hide()
            $('.gnb_mo').hide()
            $('header .hamburger').removeClass('on')
        }
    })


    // function gnbActionPc(){
    //     $('.lnb').hide();
    //     $('.lnb_bg').hide()

    //     $('.gnb > li').mouseenter(function(){
    //         $('.lnb').stop().slideDown();
    //         $('.lnb_bg').stop().slideDown();
    //     });
    //     $('.gnb').mouseleave(function(){
    //         $('.lnb').stop().fadeOut();
    //         $('.lnb_bg').stop().fadeOut();
    //     });
    // }

    // let winWidth = $(window).width();
    // function gnbActionMobile(){
    //     $('.lnb').hide();
    //     $('.lnb_bg').hide()

    //     winWidth = $(window).width();
    //     $('.gnb > li').click(function(){
    //         if(winWidth <= 780){
    //             $('.lnb').slideUp();
    //             $(this).find('.lnb').stop().slideDown();
    //             $('.lnb_bg').stop().slideDown();
    //         } else {
    //             $('.lnb').stop().slideDown();
    //             $('.lnb_bg').stop().slideDown();
    //         }
    //     });
    // }


    // if(winWidth > 780){
    //     gnbActionPc()
    // } else {
    //     gnbActionMobile()
    // }
    

    // $(window).resize(function(){
    //     if(winWidth > 780){
    //         gnbActionPc()
    //     } else {
    //         gnbActionMobile()
    //     }
    // })
});

//     var maxLnbH = 0;
//     for(var i=0; i<5; i++){
//         var lnbH = $('.gnb .lnb').eq(i).height();
//         if(maxLnbH < lnbH){
//             maxLnbH = lnbH
//         }
//     }

//     $('.gnb .lnb').height(maxLnbH)
//     $('.lnb_bg').height(maxLnbH)
// });
// 제이쿼리스크립트

$


// visual scroll 효과 = 패럴랙스 효과
$(window).scroll(function(){
    var scrT = $(window).scrollTop();  /* 스크롤 위치값 */
    $('#visual').css({backgroundPositionY: scrT/2})
    $('#visual img').css({top:200-scrT/2})
    $('#visual .text_box').css({top:300 + scrT/2, opacity:1 - scrT/700})
});


    var sc2Top = $('#section2').offset().top;
    var sc3Top = $('#section3').offset().top;


    var scrT
    $(window).scroll(function(){
        scrT = $(window).scrollTop();   //스크롤위치값
        
        $('#visual').css({backgroundPositionY:scrT/2})
        $('#visual img').css({top:200 - scrT/4});
        $('#visual .text_box').css({top:300 + scrT/2, opacity:1 - scrT/700})

        
        
        /* 플로팅메뉴 */
        $('#floating_menu').stop().animate({top:200 + scrT});
        

        var winH = $(window).height();

        if(scrT > sc2Top - winH / 2){
            $('#section2').addClass('on')
        } else {
            $('#section2').removeClass('on')
        };


        if(scrT > sc3Top - winH / 1.5){
            $('#section3').addClass('on')
        } else {
            $('#section3').removeClass('on')
        }

        
        // var km = Math.max(0,800-scrT)
        // console.log(km)
        // $('#section2 li').css({transform:'translateY('+(km)+'%)'})
    });