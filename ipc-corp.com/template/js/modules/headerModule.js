export default function headerModule() {
    mona_change_header();
    window.addEventListener("scroll", function () {
        mona_change_header();
    });
    function mona_change_header() {
      var header = document.querySelector(".header");
        var lang = document.querySelector(".lang__current");
        if (!lang.length) { 
            return;
        }
        if (window.scrollY > 0) {
            header.classList.add("change-logo");
            lang.classList.add("change-lang");
        } else {
            header.classList.remove("change-logo");
            lang.classList.remove("change-lang");
        }
        // var resr = document.querySelector(".our-corp");

        // if (jQuery(window).scrollTop() >= resr.offsetTop - 400) {
        //     const scrollTo = () => {
        //         window.scrollTo(0, resr.offsetTop);
        //             // requestAnimationFrame(scrollTo);

        //     };
        //     window.scrollTo(0, resr.offsetTop);
        // }   
    }
    // const main = document.querySelector('.main');
    // main.addEventListener("scroll", function () {
    //     var header = document.querySelector(".header");
    //     var lang = document.querySelector(".lang__current");
    //     // if (main.scrollY > 0) {
    //         header.classList.add("change-logo");
    //         lang.classList.add("change-lang");
    //     // } else {
    //     //     header.classList.remove("change-logo");
    //     //     lang.classList.remove("change-lang");
    //     // }
    // });
}