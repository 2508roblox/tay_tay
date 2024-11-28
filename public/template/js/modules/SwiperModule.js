export default function SwiperModule() {
    const Slides = document.querySelectorAll(".swiper-check");
    if (Slides) {
        for (let i = 0; i < Slides.length; i++) {
            let sCon = Slides[i].querySelector(".swiper-container");
            let sNext = Slides[i].querySelector(".swiper-button-next");
            let sPrev = Slides[i].querySelector(".swiper-button-prev");
            const isLoop = Slides[i].classList.contains('--loop') || false;

            const mySwiper = new Swiper(sCon, {
                watchSlidesProgress: true,
                watchSlidesVisibility: true,
                slidesPerView: 1,
                spaceBetween: 15,
                loop: isLoop,
                autoplay: true,
                speed: 1200,
                delay: 5000,
                navigation: {
                    nextEl: sNext,
                    prevEl: sPrev,
                },

                breakpoints: {
                    535: {
                        slidesPerView: 2,
                    },
                    900: {
                        slidesPerView: 3,
                    },
                    1025: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    }
                },
            })
        }
    }

    ////////// banner
    const xthumb = new Swiper('.swiper-container.xban-thumb', {
        slidesPerView: 'auto',
        // loop: true,
        speed: 1500,
        delay: 7000,
        autoplay: true,

        // breakpoints: {
        //     800: {
        //         slidesPerView: 3,
        //     },
        //     1024: {
        //         slidesPerView: 4,
        //     },
        //     1300: {
        //         slidesPerView: 5,
        //     }
        // },
    });
    const xban = new Swiper('.swiper-container.xban-slide', {
        slidesPerView: 1,
        effect: 'fade',
        // loop: true,
        speed: 1200,
        delay: 7000,
        autoplay: true,
        thumbs: {
            swiper: xthumb,
        },
    });

    ////////// banner small
    const bannerSmall = new Swiper('.swiper-container.banner-small', {
        slidesPerView: 1,
        loop: true,
        speed: 1200,
        delay: 5000,
        autoplay: true,
    });

    ////////// our project
    const ourPj = new Swiper(".our-pj__slide > .swiper-container", {
        effect: "coverflow",
        // grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1.5,
        loop: true,
        speed: 1200,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            600: {
                slidesPerView: 'auto',
            },
        },

        coverflowEffect: {
            rotate: 30,
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows: false,
            scale: 0.9,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    //////////// project had finish
    const pjFinishs = document.querySelectorAll(".pj-finish-check");
    if (pjFinishs) {
        for (let i = 0; i < pjFinishs.length; i++) {
            let sCon = pjFinishs[i].querySelector(".swiper-container");
            let sNext = pjFinishs[i].querySelector(".swiper-button-next");
            let sPrev = pjFinishs[i].querySelector(".swiper-button-prev");

            const pjFinish = new Swiper(sCon, {
                speed: 1200,
                delay: 5000,
                slidesPerView: 1.4,
                spaceBetween: 0,
                watchSlidesProgress: true,
                loop: true,
                autoplay: true,
                centeredSlides: true,
                roundLengths: true,

                breakpoints: {
                    535: {
                        slidesPerView: 2,
                    },
                    900: {
                        slidesPerView: 3,
                    }
                },

                navigation: {
                    nextEl: sNext,
                    prevEl: sPrev,
                },
            })
        }
    }

    /////////// project detail
    const pjDetailThums = new Swiper('.swiper-container.gallery-pj-thumbs', {
        slidesPerView: 3,
        // autoplay: {
        //     speed: 6000,
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        spaceBetween: 15,

        breakpoints: {
            740: {
                slidesPerView: 4,
            },
            800: {
                slidesPerView: 5,
            }
        },
    });

    const pjDetailMain = new Swiper('.swiper-container.gallery-pj-main', {
        slidesPerView: 1,
        loop: true,
        // autoplay: {
        //     speed: 6000,
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },

        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },

        navigation: {
            nextEl: '.projects-detail-next',
            prevEl: '.projects-detail-prev',
        },

        thumbs: {
            swiper: pjDetailThums,
        },
    });

    /////////// client-partner
    const ClientPartner = new Swiper('.client-partner__intro .swiper-container', {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 2,
        autoplay: true,
        speed: 1200,
    });
}