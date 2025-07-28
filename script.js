$(document).ready(function() {
    $('html, body').scrollTop($(document).height() - $(window).height());
    $('html, body').scrollLeft(0);
    
    let scrollInterval;
    const scrollSpeed = 20;
    const scrollDelay = 10;
    
    function startScroll(direction) {
        stopScroll(); 
        scrollInterval = setInterval(function() {
            const currentScrollTop = $(window).scrollTop();
            const currentScrollLeft = $(window).scrollLeft();
            
            switch(direction) {
                case 'up':
                    $(window).scrollTop(currentScrollTop - scrollSpeed);
                    break;
                case 'down':
                    $(window).scrollTop(currentScrollTop + scrollSpeed);
                    break;
                case 'left':
                    $(window).scrollLeft(currentScrollLeft - scrollSpeed);
                    break;
                case 'right':
                    $(window).scrollLeft(currentScrollLeft + scrollSpeed);
                    break;
            }
        }, scrollDelay);
    }
    
    function stopScroll() {
        if (scrollInterval) {
            clearInterval(scrollInterval);
            scrollInterval = null;
        }
    }
    
    $('#scrollUp').on('mousedown touchstart', function(e) {
        e.preventDefault();
        startScroll('up');
    });
    
    $('#scrollDown').on('mousedown touchstart', function(e) {
        e.preventDefault();
        startScroll('down');
    });
    
    $('#scrollLeft').on('mousedown touchstart', function(e) {
        e.preventDefault();
        startScroll('left');
    });
    
    $('#scrollRight').on('mousedown touchstart', function(e) {
        e.preventDefault();
        startScroll('right');
    });
    
    $(document).on('mouseup touchend', function() {
        stopScroll();
    });
    
    $('.nav-btn').on('mouseleave', function() {
        stopScroll();
    });
    
    $('.nav-btn').on('contextmenu', function(e) {
        e.preventDefault();
    });
});

$(window).bind('scroll', function(e) {
    parallaxScroll();
});

function parallaxScroll() {
    var scrolledY = $(window).scrollTop();
    var scrolledX = $(window).scrollLeft();
    
    // Background seaweeds
    $('.seaweed-1').css({
        'bottom': (-200 - (scrolledY * 0.1)) + 'px',
        'left': (10 - (scrolledX * 0.05)) + '%'
    });
    
    $('.seaweed-2').css({
        'bottom': (-200 - (scrolledY * 0.15)) + 'px',
        'left': (25 - (scrolledX * 0.08)) + '%'
    });
    
    $('.seaweed-3').css({
        'bottom': (-200 - (scrolledY * 0.12)) + 'px',
        'left': (45 - (scrolledX * 0.06)) + '%'
    });
    
    $('.seaweed-4').css({
        'bottom': (-200 - (scrolledY * 0.18)) + 'px',
        'left': (70 - (scrolledX * 0.09)) + '%'
    });
    
    $('.seaweed-5').css({
        'bottom': (-200 - (scrolledY * 0.14)) + 'px',
        'left': (85 - (scrolledX * 0.07)) + '%'
    });
    
    // Foreground seaweeds
    $('.seaweed-6').css({
        'bottom': (-200 - (scrolledY * 0.35)) + 'px',
        'left': (5 - (scrolledX * 0.15)) + '%'
    });
    
    $('.seaweed-7').css({
        'bottom': (-200 - (scrolledY * 0.4)) + 'px',
        'left': (35 - (scrolledX * 0.18)) + '%'
    });
    
    $('.seaweed-8').css({
        'bottom': (-200 - (scrolledY * 0.38)) + 'px',
        'left': (55 - (scrolledX * 0.16)) + '%'
    });
    
    $('.seaweed-9').css({
        'bottom': (-200 - (scrolledY * 0.42)) + 'px',
        'left': (75 - (scrolledX * 0.19)) + '%'
    });
    
    $('.seaweed-10').css({
        'bottom': (-200 - (scrolledY * 0.36)) + 'px',
        'left': (90 - (scrolledX * 0.17)) + '%'
    });
    
    // Fish
    $('.fish-1').css({
        'top': (400 - (scrolledY * 0.25)) + 'px',
        'left': (15 - (scrolledX * 0.12)) + '%'
    });
    
    $('.fish-2').css({
        'top': (600 - (scrolledY * 0.3)) + 'px',
        'left': (40 - (scrolledX * 0.14)) + '%'
    });
    
    $('.fish-3').css({
        'top': (300 - (scrolledY * 0.22)) + 'px',
        'left': (60 - (scrolledX * 0.11)) + '%'
    });
    
    $('.fish-4').css({
        'top': (800 - (scrolledY * 0.28)) + 'px',
        'left': (20 - (scrolledX * 0.13)) + '%'
    });
    
    $('.fish-5').css({
        'top': (500 - (scrolledY * 0.26)) + 'px',
        'left': (80 - (scrolledX * 0.15)) + '%'
    });
    
    $('.fish-6').css({
        'top': (700 - (scrolledY * 0.24)) + 'px',
        'left': (65 - (scrolledX * 0.12)) + '%'
    });
    
    $('.fish-7').css({
        'top': (350 - (scrolledY * 0.27)) + 'px',
        'left': (30 - (scrolledX * 0.13)) + '%'
    });
    
    $('.fish-8').css({
        'top': (750 - (scrolledY * 0.29)) + 'px',
        'left': (50 - (scrolledX * 0.14)) + '%'
    });
    
    // fact
    $('.fact-1').css({
        'top': (450 - (scrolledY * 0.23)) + 'px',
        'left': (8 - (scrolledX * 0.11)) + '%'
    });
    
    $('.fact-2').css({
        'top': (650 - (scrolledY * 0.31)) + 'px',
        'left': (72 - (scrolledX * 0.16)) + '%'
    });
    
    $('.fact-3').css({
        'top': (380 - (scrolledY * 0.25)) + 'px',
        'left': (48 - (scrolledX * 0.13)) + '%'
    });
    
    $('.fact-4').css({
        'top': (720 - (scrolledY * 0.27)) + 'px',
        'left': (32 - (scrolledX * 0.12)) + '%'
    });
    
    $('.fact-5').css({
        'top': (550 - (scrolledY * 0.29)) + 'px',
        'left': (88 - (scrolledX * 0.17)) + '%'
    });
}