export default function MagnificModule() {
    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',
        preloader: false,
        removalDelay: 100,
        mainClass: 'my-mfp-zoom-in',
        modal: false,

        fixedBgPos: true,
        fixedContentPos: true,
    });

    $(document).on('click', '.dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
}