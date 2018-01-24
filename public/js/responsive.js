// unlinked 
$(window).on('resize', function() {
    if ($(window).width() < 600) {
        $('#toggle').removeClass('col-10');
        $('#toggle').addClass('col-12')
    } else {
        $('#toggle').removeClass('col-12');
        $('#toggle').addClass('col-10');
    }
});
