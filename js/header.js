//
// ヘッダー
//

$(function() {
    // ---------------------------------------
    // ハンバーガーメニュー
    // ---------------------------------------

    // openクラス付け外し
    var $body = $('#js-hamburger-trigger');
    var $btn = $('.hamburger-icon');
    var $mask = $('#mask');
    var open = 'open';
    $btn.on('click', function() {
        if (!$body.hasClass(open)) {
            $body.addClass(open);
        } else {
            $body.removeClass(open);
        }
    });

    // ハンバーガーメニューを閉じる
    $mask.on('click', function() {
        $body.removeClass(open);
    });

    // メニューをクリックしたらハンバーガーメニューを閉じる
    $('.page-link').on('click', function(){
        $body.removeClass(open);
    });

    // ---------------------------------------
    // スクロール位置取得
    // ---------------------------------------
    var nav_position = $('#cover').offset().top;
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= nav_position) {
            if (!$('header').hasClass('scrolled')) {
                $('header').addClass('scrolled');
            }
        } else if (scroll < nav_position) {
            $('header').removeClass('scrolled');
        }
    });
});