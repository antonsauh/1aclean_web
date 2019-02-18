$(() => {
    $("#logo").animate({
        "opacity":1,
        "width": "70%",
        "height": "70%"
    }, 3000, () => {
        $("#nav-buttons").animate({
            "opacity": 1
        }, 1000)
    })

    $("#hinnad-button").click(function() {
        console.log(123);
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#hinnad").offset().top
        }, 2000);
    });

});