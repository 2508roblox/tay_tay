export default function AosModule() {
    /** ANIMATION ON SCROLL */
    AOS.init({
        // startEvent: 'DOMContentLoaded',
        offset: 0,
        duration: 600,
        delay: '200',
        easing: 'ease-in-sine',
        once: true,
        mirror: true,
        disable: function () {
            return jQuery(window).width() <= 768;
        },
    });
    /** ANIMATION ON SCROLL - END */
}
