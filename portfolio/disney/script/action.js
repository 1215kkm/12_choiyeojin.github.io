
$(document).ready(function(){

/* 
    $(window).scroll(function(){
        let scrT = $(window).scrollTop();

        let docH = $(document).height();
        let winH = $(window).height();

        $('.v_right svg').css({strokeDashoffset: 3560 - scrT * 5});
        $('.v_right .charactor').css({left:(25 + scrT/30)+'%'});

        //    (알고싶은값 나누기 전체높이)*100
        $('.progress').css({width:scrT / (docH - winH) * 100 + '%'});
    });


 */



    /* 숫자증가1번째 방법 */
    let count = 0;
    let maxTarget = 0;

    /* 최대값 구하기 */
    // $('.count .num').each(function(){
    //     let dataTarget = parseInt($(this).attr('data-target'));

    //     console.log(   typeof(dataTarget)          )

    //     if(maxTarget < dataTarget){
    //         maxTarget = dataTarget
    //     }
    // })




    // function countUp(){
    //     count++;

    //     $('.count .num').each(function(){
    //         let targetNum = $(this).attr('data-target');

    //         if(count <= targetNum){
    //             $(this).text(count);
    //         } 
    //         if(count > maxTarget) {
    //             clearInterval(numberUp);
    //         }
    //     });
    // }

    // let numberUp = setInterval(countUp, 1)




    /* 숫자증가2번째 방법 */
    // $('.count .num').each(function(){
    //     let targetNum = $(this).attr('data-target');
    //     let $this = $(this)

    //     $({merong:0}).animate({merong:targetNum},{
    //         duration:1000,
    //         step:function(){
    //             $this.text(  Math.ceil(this.merong)   )
    //         },
    //         complete:function(){
    //             $this.text(  targetNum  )
    //         }
    //     })
    // })
    
    let semin = true;
    let scrT = $(window).scrollTop();
    let winH = $(window).height();
    let sec2Top = $('#section2').offset().top;
    let s3LiTop

    parallax()

    $(window).scroll(function(){
        scrT = $(window).scrollTop();
        winH = $(window).height();
        sec2Top = $('#section2').offset().top;
        
        parallax()
    });
    

    function parallax(){
        if(scrT >= sec2Top - (winH/3)){
            if(semin == true){
                numberDdorrr();
                semin = false
            };
        };

        $('#section3 .cont li').each(function(){
            s3LiTop = $(this).offset().top;

            if(scrT >= s3LiTop - (winH/1.5)){
                $(this).addClass('on')
            }
        });
    };



    function numberDdorrr(){
        $('.num').each(function(){
        let dataTarget = $(this).attr('data-target')    //4000, 5000, 98
        let $this = $(this).find('em')
        
        $({val:0}).animate({val:dataTarget},{
            duration:1000,
            step:function(){
                $this.text(priceToString(Math.ceil(this.val)))
                // $this.text(Math.ceil(this.val).toLocaleString())
            },
            complete:function(){
                $this.text(priceToString(Math.ceil(this.val)))
                // $this.text(Math.ceil(this.val).toLocaleString())
            }
        })

    })
    }  
    

    function priceToString(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }


    $('#section4 nav li').click(function(){
        let navIndex = $(this).index();
        let contH = $('.cont_box').height();

        $('.cont').css({top:-navIndex*contH});
        

        $(this).addClass('on').siblings().removeClass('on');

        return false
    });




    
}); //document.ready






// $({변수명:시작값}).animate({변수명:목표값},{
//     duration:걸리는시간,
//     step:function(){
//         애니메이션 진행될때 할일
//     },
//     complete:function(){
//         끝나면 할일
//     }
// })