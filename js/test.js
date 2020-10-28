$(function(){
    var startPos = 0;
    var headerElem = $('#fixed-header');
    var threshold = 200;
    $(window).on('scroll',function(){
        var currentPos = $(this).scrollTop();
        if(currentPos > startPos) {
            if($(window).scrollTop() >= threshold) {
                headerElem.css({
                    'transform': 'translateY(0)'
                });
            }
        } else {
            headerElem.css({
                'transform': 'translateY(-80px)'
            });
        }
        startPos = currentPos;
    });
});


