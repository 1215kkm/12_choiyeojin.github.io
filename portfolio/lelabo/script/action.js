$(document).ready(function(){
    $('.lnb a').focus(function(){
        $(this).parents('.lnb').css({transform:'scale(1)'})
    })
    $('.lnb a').blur(function(){
        $(this).parents('.lnb').css({transform:'scale(0)'})
    })
    
    $('.gnb li').mouseover(function(){
        $('.lnb').css({transform:'scale(0)'})
        $(this).find('.lnb').css({transform:'scale(1)'})
    }).mouseleave(function(){
        $(this).find('.lnb').css({transform:'scale(0)'})
    })
});

