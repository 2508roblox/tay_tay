export default function ScrollToSectionModule() {
    const speed = 800;
    // NẾU CÓ ĐỊA CHỈ ID TRÊN THANH URL THÌ SCROLL XUỐNG
    const hash = window.location.hash;
    if (jQuery(hash).length) scrollToID(hash, speed);
    // TÌM ĐỊA CHỈ ID VÀ SCROLL XUỐNG NẾU CÓ CLASS
    jQuery('.btn-scroll').on('click', function (e) {
        e.preventDefault();

        const href = jQuery(this).find('> a').attr('href') || jQuery(this).attr('href');
        const id = href.slice(href.lastIndexOf('#'));
        if (jQuery(id).length) {
            scrollToID(id, speed);
        } else {
            // window.location.replace(`/${id}`);
            window.location.href = href;
        }
    });
    // HÀM SCROLL CHO MƯỢT MÀ
    function scrollToID(id, speed) {
        const offSet = jQuery('.header').outerHeight();
        const section = jQuery(id).offset();
        const targetOffset = section.top - offSet - 20;
        jQuery('html,body').animate({ scrollTop: targetOffset }, speed);
    }
}
