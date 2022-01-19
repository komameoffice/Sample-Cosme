//
// Q&A
//

// アコーディオン
$(function() {
    $('.js-qa').on('click', function() {
        $(this).find('.answer').slideToggle(); // アコーディオン開閉
        $(this).find('.q-text').toggleClass('q-open'); // 矢印方向
    });
});