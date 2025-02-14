$(window).scroll(function(){
    let winScr = $(this).scrollTop();
    if(winScr > 100) {
        $('header').addClass('on')
    } else {
        $('header').removeClass('on')
    }
})