$(() => {
    $("#logo").animate({
        "opacity":1,
        "width": "70%",
        "height": "70%"
    }, 3000, () => {
        console.log("complete")
        $("#nav-buttons").animate({
            "opacity": 1
        }, 1000)
    })
});