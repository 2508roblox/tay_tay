export default function ScrollTopModule() {

    const scrollTopBtn = document.querySelector('.moveToTop');
    const mouseCcroll = document.querySelector('.mouse-scroll');
    const toggleClass = () => {
        pageYOffset >= 300 ? scrollTopBtn.classList.add('active') : scrollTopBtn.classList.remove('active');
        pageYOffset <= 300 ? mouseCcroll.classList.add('active') : mouseCcroll.classList.remove('active');
    };
    const scrollTop = () => {
        if (pageYOffset > 0) {
            window.scrollTo(0, pageYOffset - pageYOffset / 8);
            requestAnimationFrame(scrollTop);
        }
    };
    document.addEventListener('DOMContentLoaded', toggleClass);
    window.addEventListener('scroll', toggleClass);
    scrollTopBtn.addEventListener('click', scrollTop);

    
    // const main = document.querySelector('.main');
    // const scrollTopBtn = document.querySelector('.moveToTop');
    // const toggleClass = () => {
    //     scrollTopBtn.classList.add('active');
    // };

    // scrollTopBtn.addEventListener('click', function (e) {
    //     e.preventDefault();
    //     // var header = document.querySelector(".header").classList.remove("change-logo");
    //     document.querySelector(this.getAttribute('href')).scrollIntoView({
    //         behavior: 'smooth'
    //     });
    // });
    // document.addEventListener('DOMContentLoaded', toggleClass);
    // main.addEventListener('scroll', toggleClass);
}
