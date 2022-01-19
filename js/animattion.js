//
// アニメーション  
//

// フェイドイン
function fadeInAnime() {
    $('.fadeInTrigger').each(function() {
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fade-in');
        } else {
            $(this).removeClass('fade-in');
        }
    });
}

$(window).scroll(function() {
    fadeInAnime();
});