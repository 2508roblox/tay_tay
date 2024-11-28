export default function subMenuModule() {
    ////////////// menu resize
    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    const projects__ctn = document.querySelector('.projects__ctn');
    
    const menuBar = document.querySelector('.menu__bars');
    const menuClose = document.querySelector('.menu__close');
    const menu = document.querySelector('.menu');
    const noScroll = document.querySelector('body');
    const overlay = document.querySelector('.header__menu-bg');
    const breadcrumb = document.querySelector('.breadcrumb');

    menuBar.addEventListener('click', onOffMenuShow);
    menuClose.addEventListener('click', onOffMenuShow);
    overlay.addEventListener('click', onOffMenuShow);

    function onOffMenuShow() {
        menuBar.classList.toggle('unactive');
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
        noScroll.classList.toggle('no-scroll');

        if (breadcrumb) {
            breadcrumb.style.zIndex = '97';
        }

        if (projects__ctn) {
            projects__ctn.style.zIndex = '0';
        }
    }

    if (menuClose) {
        menuClose.onclick = () => {
            breadCrumb();
        }
    }
    if (overlay) {
        overlay.onclick = () => {
            breadCrumb();
        }
    }

    function breadCrumb() {
        if (breadcrumb) {
            breadcrumb.style.zIndex = '99';
        }
        if (projects__ctn) {
            projects__ctn.style.zIndex = '99';
        }
    }

    //////////// sub menu
    var ddBtn = document.querySelectorAll(".ddBtn");
    var dropdowns = document.querySelectorAll(".dropdown");

    for (let i = 0; i < ddBtn.length; i++) {
        ddBtn[i].onclick = () => {
            for (let j = 0; j < ddBtn.length; j++) {
                if (j === i) {
                    dropdowns[i].classList.toggle("active");
                } else {
                    dropdowns[j].classList.remove("active");
                }
            }
        }
    }
}