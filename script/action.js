let sec1Top = $('#section1').offset().top;
let int = 0;

// 스크롤 이벤트 핸들러 등록
$(window).scroll(function() {
    updatePageNum()
});

// .top_arrow 클릭 시 스크롤 이동
$('.top_arrow').click(function() {
    let topNum = parseInt($('.page_menu span.top').text()) - 1;
    let goSection = Math.ceil($('#section' + topNum).offset().top);
    $('html,body').animate({ scrollTop: goSection + 'px' }, 'slow');
    console.log(topNum, goSection);
});

// .bottom_arrow 클릭 시 스크롤 이동
$('.bottom_arrow').click(function() {
    let topNum = parseInt($('.page_menu span.top').text()) + 1;
    let goSection = Math.ceil($('#section' + topNum).offset().top);
    $('html,body').animate({ scrollTop: goSection + 'px' }, 'slow');
    console.log(topNum, goSection);
});


function updatePageNum(){
    let scrT = $(window).scrollTop();

    if (scrT >= sec1Top) {
        $('.page_menu').css({ display: 'flex' });
    } else {
        $('.page_menu').css({ display: 'none' });
    }

    $('#section_box > div').each(function() {
        let sectionDiv = $(this);
        let sectionTop = Math.ceil(sectionDiv.offset().top);

        if (scrT >= sectionTop) {
            $('.page_menu span.top').text(sectionDiv.index() + 1);
            if (int < sectionDiv.index()) {
                int = sectionDiv.index();
                console.log(int);
            }
        }
    });

    if(scrT >= $(document).height() - $(window).height()){
        $('#section11 .name_box').addClass('on')
    }
};





$('.pcver figure').mouseenter(function(){
    let pcverHeight = $(this).height();
    let pcimgHeight = $(this).find('img').height();

    $(this).find('img').css({marginTop:-pcimgHeight + pcverHeight, transitionDuration:(pcimgHeight/300)+'s'})
}).mouseleave(function(){
    $('.pcver figure img').css({marginTop:0})
})

$('.mobilever figure').mouseenter(function(){
    let pcverHeight = $(this).height();
    let pcimgHeight = $(this).find('img').height();

    $(this).find('img').css({marginTop:-pcimgHeight + pcverHeight, transitionDuration:(pcimgHeight/200)+'s'})
}).mouseleave(function(){
    $('.mobilever figure img').css({marginTop:0})
})