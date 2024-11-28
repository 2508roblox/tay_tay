export default function SlideToggleModule() {

    jQuery(document).ready(function () {
        jQuery(".slide-toggle-hidden").hide();
        jQuery(".slide-toggle-hidden").first().slideToggle();
        jQuery(".slide-toggle").first().addClass("active");
        jQuery(".slide-toggle").click(function (e) {
            e.preventDefault();
            jQuery(".slide-toggle-hidden").hide();
            jQuery(".slide-toggle").removeClass("active");
            jQuery(this).toggleClass("active");
            jQuery(this).next(".slide-toggle-hidden").stop().slideToggle();
        });
    });

    // jQuery(document).ready(function () {
    //     jQuery(".sub-menu").hide();
    //     jQuery(".menu-item.dropdown > a").click(function (e) {
    //         e.preventDefault();
    //         jQuery(this).toggleClass("active");
    //         jQuery(this).next(".sub-menu").stop().slideToggle();
    //     });
    // });
}