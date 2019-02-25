$(() => {
    $("#logo").animate({
        "opacity":1,
        "width": "80%",
        "height": "70%"

    }, 3000, () => {
        $("#nav-buttons").css("display", "flex");
        $("#nav-buttons").animate({
            "opacity": 1
        }, 1000)
    });

    $("#hinnad-button").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#hinnad").offset().top
        }, 2000);
    });

    $("#kontakt-button").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#kontakt").offset().top
        }, 2000);
    });

});