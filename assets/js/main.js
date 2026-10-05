$(document).ready((function () {
    var key = '5XpThOAEkfgOvEJ';
    var currentIP = $("meta[name=ip2loc]").attr('content');
    var pgurl = $("meta[name=page_url]").attr('content');
    $.ajax({
        method: 'get',
        url: '//pro.ip-api.com/json/' + currentIP,
        data: {
            key: key
        },
        success: function (data) {
            if (data) {
                $('input[name=ip2loc_ip]').val(data.query);
                $('input[name=ip2loc_isp]').val(data.isp);
                $('input[name=ip2loc_org]').val(data.org);
                $('input[name=ip2loc_country]').val(data.country);
                $('input[name=ip2loc_region]').val(data.regionName);
                $('input[name=ip2loc_city]').val(data.city);
                $('input[name=pageurl]').val(pageurl);
            }
        }
    });

    // Mobile Header Script
    document.getElementById('menu-toggle').addEventListener('click', function () {
        this.classList.toggle('active');
        document.getElementById('mobile-menu').classList.toggle('active');
    });

    document.querySelectorAll('.dropdown-icon').forEach(icon => {
        icon.addEventListener('click', function (e) {
            const parent = this.parentElement;
            parent.classList.toggle('open');
            document.querySelectorAll('.has-dropdown').forEach(item => {
                if (item !== parent) item.classList.remove('open');
            });
            e.stopPropagation();
        });
    });

    document.querySelectorAll('.inner-dropdown-icon').forEach(icon => {
        icon.addEventListener('click', function (e) {
            const parent = this.parentElement;
            parent.classList.toggle('open');
            document.querySelectorAll('.has-inner-dropdown').forEach(item => {
                if (item !== parent) item.classList.remove('open');
            });
            e.stopPropagation();
        });
    });

    // Wow Animation Script
    new WOW().init();

    // Tab Script
    $('[data-targetit]').on('click', function () {
        $(this).siblings().removeClass('current');
        $(this).addClass('current');
        var target = $(this).data('targetit');
        $('.' + target).siblings('[class*="my-tabs"]').removeClass('current');
        $('.' + target).addClass('current');
        $('.slick-slider').slick('setPosition', 0);
    });

    // Fancybox Config
    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
            "slideShow",
            "thumbs",
            "zoom",
            "fullScreen",
            "share",
            "close"
        ],
        loop: false,
        protect: true
    });

    // Banner Slider
    $('.banner_slider').slick({
        autoplay: true,
        autoplaySpeed: 0,
        infinite: true,
        speed: 5000,
        arrows: false,
        swipe: false,
        slidesToShow: 7,
        slidesToScroll: 7,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

    $('.banner_slider_rtl').slick({
        autoplay: true,
        autoplaySpeed: 0,
        infinite: true,
        speed: 5000,
        arrows: false,
        swipe: false,
        slidesToShow: 7,
        slidesToScroll: 7,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        rtl: true,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

    // Section 2 Slider
    $('.sec2_slider').slick({
        autoplay: true,
        autoplaySpeed: 0,
        infinite: true,
        speed: 10000,
        arrows: false,
        swipe: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $('.sec2_slider_rtl').slick({
        autoplay: true,
        autoplaySpeed: 0,
        infinite: true,
        speed: 10000,
        arrows: false,
        swipe: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        rtl: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    // Section 4 Slider
    $('.sec4_slider').slick({
        autoplay: true,
        infinite: false,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Section 5 Slider
    $('.sec5_slider').slick({
        autoplay: false,
        infinite: true,
        speed: 500,
        arrows: true,
        prevArrow: '<img src="assets/images/left-arrow.webp" class="slick-prev">',
        nextArrow: '<img src="assets/images/right-arrow.webp" class="slick-next">',
        dots: true,
        swipe: true,
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        pauseOnHover: true,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Section 6 Slider
    $('.sec6_slider').slick({
        autoplay: true,
        autoplaySpeed: 0,
        infinite: false,
        speed: 5000,
        arrows: false,
        swipe: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        pauseOnHover: true,
        responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }]
    });

    $(document).ready(function () {
        $('.video-slider').slick({
            slidesToShow: 2, // ek slide me 2 videos
            slidesToScroll: 1,
            autoplay: true, // auto chalega
            autoplaySpeed: 4000, // 4 second delay
            // dots: true, // navigation dots
            arrows: true, // prev/next arrows
            responsive: [{
                    breakpoint: 992, // tablet
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 576, // mobile
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    });

    // Section 8 Slider
    // $('.slider-for').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     autoplay: true,
    //     speed: 500,
    //     asNavFor: '.slider-nav'
    // });

    $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        // asNavFor: '.slider-for',
        dots: false,
        arrows: false,
        focusOnSelect: true
    });

    // Section 7 List Hover Script:
    const list = document.getElementById('myList');
    list.addEventListener('mouseover', (event) => {
        const li = event.target.closest('li');
        if (!li) return;
        list.querySelectorAll('li').forEach(el => el.classList.remove('active'));
        li.classList.add('active');
    });
}));