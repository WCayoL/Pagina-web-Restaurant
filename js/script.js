$(function () {
    $("#navbarToggle").blur(function (event) {
        var screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $("#collapse-nav").collapse('hide');
        }
    });
    
    $("#navbarToggle").click(function (event) {
        $(event.target).focus();
    });
});
