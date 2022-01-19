//
// TOPへ戻るボタン
//

$(function() {
    var appear = false;
    var $pagetop = $('#page-top');

    // ボタンの表示・非表示
    $(window).scroll(function() {
        if ($(this).scrollTop() > 250) {
            if (appear == false) {
                appear = true;
                $pagetop.stop().animate({
                    'bottom': '5rem'
                }, 300);
            }
        } else {
            if (appear) {
                appear = false;
                $pagetop.stop().animate({
                    'bottom': '-5rem'
                }, 300);
            }
        }
    });

    // トップへ戻る
    $pagetop.on('click', function() {
        $('body, html').animate({
            'scrollTop': '0'
        }, 500);
        return false;
    });
});