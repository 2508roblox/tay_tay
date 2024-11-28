export default function () {
    function runLine() {
        $(".frame__tt").each(function (i) {
            if ($(window).scrollTop() > $(this).offset().top - window.innerHeight) {
                $(this).find(".frame__line").addClass("run");
            }
        })

        $(".sec-tt.frame").each(function (i) {
            if ($(window).scrollTop() > $(this).offset().top - window.innerHeight) {
                if ($(this).find("h2")[0].offsetHeight > 90){
                    $(this).addClass("commit-value__tt");
                    this.closest('section').classList.add("heightTT");
                }
            }
        })
    }
    runLine();

    $(window).scroll(function () {
        runLine();
    })


    // function runLine() {
    //     $("section").each(function (i) {
    //         if ($(this).offset().top <= 20) {
    //             $(this).find(".frame__line").addClass("run");
    //         }
    //     })
    // }
    // runLine();

    // $('main').scroll(function () {
    //     runLine();
    // })
}