// gnb jS
$(document).ready(function(){
    $("#gnb").hover(
    function(){
        $('.sub_menu').stop().fadeIn('fast');
        $(".menu_box").stop().slideDown();
    },
    function(){
        $('.sub_menu').stop().fadeOut('fast');
        $(".menu_box").stop().slideUp();
    });

});


// 사용자가 호버한 대상의 .sub_menu만 서서히 보여주는 효과
// $(document).ready(function(){
//     $(".main_menu>li").hover(
//         function(){
//             $(this).children(".sub_menu").stop().fadeIn('fast');
//         },
//         function(){
//             $(this).children(".sub_menu").stop().fadeOut('fast');
//         });
// });

// select JS
$(document).ready(function(){
    $('.select .arrow').toggle(
        function(){
            $('.select .family_site').fadeIn('fast');
            $('.select .arrow').css({'background-image' : "url(common/images/up.svg)"});
            // $('.select .arrow').css('background-image' : "url(common/images/up.svg)");
        }, function(){
            $('.select .family_site').fadeOut('fast');
            $('.select .arrow').css({'background-image': "url(common/images/down.svg)"});
        });
});

