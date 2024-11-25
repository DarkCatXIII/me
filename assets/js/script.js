(function($) {
'use strict';

    /* ============================================================ */
    /* PRELOADER START
    /* ============================================================ */
    setTimeout(function() {
        var e = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
                navigator.userAgent
            ),
            s = document.getElementById('preloader');
            e ? s && s.parentNode && s.parentNode.removeChild(s) :
            (setTimeout(function() {
                    s.classList.add('preloaded');
                }, 1000),
                setTimeout(function() {
                    s && s.parentNode && s.parentNode.removeChild(s);
                }, 
            2000));
    }, 1000);
    /* Preloader End */

    /* ============================================================ */
    /* MOBILE MENU START
    /* ============================================================ */
    function mobile_menu(selector, actionSelector) {
        var mobile_menu = $(selector);
        mobile_menu.on('click', function() {
            $(selector).toggleClass('is-menu-open');
        });

        var hamburgerbtn = $(selector);
        hamburgerbtn.on('click', function() {
            $(actionSelector).toggleClass('is-menu-open');
        });

        $(document).on('click', function(e) {
            var selectorType = $(actionSelector).add(mobile_menu);
            if (
                selectorType.is(e.target) !== true &&
                selectorType.has(e.target).length === 0
            ) {
                $(actionSelector).removeClass('is-menu-open');
                $(selector).removeClass('is-menu-open');
            }
        });
        $('.mobile-menu .main-menu a, .menu-overlay').on('click', function(e) {
            $(actionSelector).removeClass('is-menu-open');
            $(selector).removeClass('is-menu-open');
        });
    }
    mobile_menu(
        '.menu_toggle, .close-menu ',
        '.mobile-menu, .minfo__app, .menu-overlay'
    );
    /* Mobile menu End */


    /* ============================================================ */
    /* Scrollit Scrollspy start
    /* ============================================================ */
    $.scrollIt({
        scrollTime: 1000,
        topOffset: 0,
    });
    /* Scrollit Scrollspy End */

    /* ============================================================ */
    /* Counterup Fun-facts start
    /* ============================================================ */
    $('.counters .number span').counterUp({
        delay: 10,
        time: 1500,
    });
    /* Counterup Fun-facts End */

    /* ============================================================ */
    /* Hero Section Logo Slider start
    /* ============================================================ */
    let logoSlider = new Swiper('.logo-slider .swiper', {
        spaceBetween: 30,
        slidesPerView: 3,
        loop: true,
        speed: 3000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        allowTouchMove: false,
        breakpoints: {
            576: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 4,
            },
            1400: {
                slidesPerView: 5,
            },
        },
    });

    /* ============================================================ */
    /* Skills Slider start
    /* ============================================================ */
    var skillSlider = new Swiper('.skills-slider .swiper', {
        spaceBetween: 30,
        slidesPerView: 1,
        loop: true,
        speed: 800,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            500: {
                slidesPerView: 2,
            },
            600: {
                slidesPerView: 3,
            },
            800: {
                slidesPerView: 4,
            },
            900: {
                slidesPerView: 3,
            },
            1000: {
                slidesPerView: 4,
            },
        },
        navigation: {
            nextEl: '#skill .button-next',
            prevEl: '#skill .button-prev',
        },
        on: {
            init: function() {
                const screenWidth = $('body').width();
                let slidesPerView = 0;
                let slidesCount = this.slides.length;
                if (screenWidth >= 1000) {
                    slidesPerView = 8;
                } 
                if (screenWidth >= 900 && screenWidth < 1000) {
                    slidesPerView = 6;
                } 
                if (screenWidth >= 800 && screenWidth < 900) {
                    slidesPerView = 8;
                }
                 if (screenWidth >= 600 && screenWidth < 800) {
                    slidesPerView = 6;
                }
                if (screenWidth >= 500 && screenWidth < 600) {
                    slidesPerView = 4;
                }
                if (screenWidth >= 0 && screenWidth < 500) {
                    slidesPerView = 2;
                }

                $('.skills-slider-navigation .counter').html(
                    '<span class="text-theme">' +
                    (this.realIndex + 1) +
                    '</span>' +
                    '/' +
                    (slidesCount - (slidesPerView))
                );
            },
            slideChange: function() {
                const screenWidth = $('body').width();
                let slidesPerView = 0;
                let slidesCount = this.slides.length;
                if (screenWidth >= 1000) {
                    slidesPerView = 8;
                } 
                if (screenWidth >= 900 && screenWidth < 1000) {
                    slidesPerView = 6;
                } 
                if (screenWidth >= 800 && screenWidth < 900) {
                    slidesPerView = 8;
                }
                 if (screenWidth >= 600 && screenWidth < 800) {
                    slidesPerView = 6;
                }
                if (screenWidth >= 500 && screenWidth < 600) {
                    slidesPerView = 4;
                }
                if (screenWidth >= 0 && screenWidth < 500) {
                    slidesPerView = 2;
                }

                $('.skills-slider-navigation .counter').html(
                    '<span class="text-theme">' +
                    (this.realIndex + 1) +
                    '</span>' +
                    '/' +
                    (slidesCount - (slidesPerView))
                );
            },
        },
    });
    // Skills Slider End

    /* ============================================================ */
    /* Testimonial Slider start
    /* ============================================================ */
    let testimonialSlider = new Swiper('.testimonial-slider .swiper', {
        spaceBetween: 30,
        slidesPerView: 1,
        loop: false,
        speed: 800,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
        },
        navigation: {
            nextEl: '.testimonial-slider-navigation .button-next',
            prevEl: '.testimonial-slider-navigation .button-prev',
        },
        on: {
            init: function() {
                $('.testimonial-slider-navigation .counter').html(
                    '<span class="text-theme">' +
                    (this.realIndex + 1) +
                    '</span>' +
                    '/' +
                    this.slides.length
                );
            },
            slideChange: function() {
                $('.testimonial-slider-navigation .counter').html(
                    '<span class="text-theme">' +
                    (this.realIndex + 1) +
                    '</span>' +
                    '/' +
                    this.slides.length
                );
            },
        },
    });
    // Testimonial Slider End

    /* ============================================================ */
    /* Progressbar start
    /* ============================================================ */
    var CroWey = $('.progressbar');
    if (CroWey.length > 0) {
        CroWey.waypoint(
            function() {
                $('.bar').each(function() {
                    $(this).find('.progress-content').animate({
                            width: $(this).attr('data-percentage'),
                        },
                        2000
                    );
                });
            }, {
                offset: '100%'
            }
        );
    }
    // Progressbar End

    /* ============================================================ */
    /* Custom Cursor start
    /* ============================================================ */
    if ($('.custom_cursor').length) {
        var cursor = document.querySelector('.custom_cursor_one');
        var cursorInner = document.querySelector('.custom_cursor_two');
        var anchors = document.querySelectorAll('a');

        document.addEventListener('mousemove', function(e) {
            var x = e.clientX;
            var y = e.clientY;
            cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
        });
        document.addEventListener('mousemove', function(e) {
            var x = e.clientX;
            var y = e.clientY;
            cursorInner.style.left = x + 'px';
            cursorInner.style.top = y + 'px';
        });
        document.addEventListener('mousedown', function() {
            cursor.classList.add('click');
            cursorInner.classList.add('custom_cursor_hover');
        });
        document.addEventListener('mouseup', function() {
            cursor.classList.remove('click');
            cursorInner.classList.remove('custom_cursor_hover');
        });
        anchors.forEach((item) => {
            item.addEventListener('mouseover', () => {
                cursor.classList.add('custom_cursor_hover');
            });
            item.addEventListener('mouseleave', () => {
                cursor.classList.remove('custom_cursor_hover');
            });
        });
    }
    // Custom Cursor End


    /* ============================================================ */
    /* Animated Circle Progress start
    /* ============================================================ */
    function animateElements() {
        $('.minfo__sidebar .progressCircle').each(function() {
            let elementPos = $(this).offset().top;
            let topOfWindow = $(window).scrollTop();
            let percent = $(this).find('.circle').attr('data-percent');
            let circleFill = $(this).find('.circle').attr('data-circlefill');
            let circleEmpty = $(this).find('.circle').attr('data-circleempty');
            let animate = $(this).data('animate');
            if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                $(this).data('animate', true);
                $(this).find('.circle').circleProgress({
                    startAngle: -Math.PI / 30,
                    value: percent / 100,
                    thickness: 2,
                    lineCap: 'round',
                    mptyFill: `${circleEmpty}`,
                    fill: `${circleFill}`,
                    size: $('.circle').width(),
                }).on(
                    'circle-animation-progress',
                    function(event, progress, stepValue) {
                        $(this).parent().find('.label').html((stepValue * 100).toFixed(0) + '%');
                    }
                ).stop();
            }
        });
        $('.skills-slider .progressCircle').each(function() {
            let elementPos = $(this).offset().top;
            let topOfWindow = $(window).scrollTop();
            let percent = $(this).find('.circle').attr('data-percent');
            let circleFill = $(this).find('.circle').attr('data-circlefill');
            let circleEmpty = $(this).find('.circle').attr('data-circleempty');
            let animate = $(this).data('animate');
            if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                $(this).data('animate', true);
                $(this).find('.circle').circleProgress({
                    startAngle: -Math.PI / 2,
                    value: percent / 100,
                    thickness: 1.5,
                    lineCap: 'round',
                    emptyFill: `${circleEmpty}`,
                    fill: `${circleFill}`,
                    size: $('.skills-slider .circle').width(),
                }).on(
                    'circle-animation-progress',
                    function(event, progress, stepValue) {
                        $(this).parent().find('.label').html((stepValue * 100).toFixed(0) + '%');
                    }
                ).stop();
            }
        });
    }
    setTimeout(function() {
        animateElements();
        $(window).scroll(animateElements);
    }, 2500);


    /* ============================================================ */
    /* Style Switcher
    /* ============================================================ */
    $('.style-switcher .toggle-btn').on('click', function() {
        $('.style-switcher').toggleClass('active');
    });
    $(document).on('click', function(e) {
        var style_switcher = $('.style-switcher.active');
        if (style_switcher.is(e.target) !== true && style_switcher.has(e.target).length === 0) {
            $(style_switcher).removeClass("active");
        }
    });


    /* ============================================================ */
    /* Scroll Top
    /* ============================================================ */
    $('body').append(
        "<a href='#top' title='Scroll Top' id='scroll-top' class='topbutton'><i class='far fa-level-up-alt'></i></a>"
    );
    var $scrolltop = $('#scroll-top');
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > $(this).height()) {
            $scrolltop.addClass('btn-show').removeClass('btn-hide');
        } else {
            $scrolltop.addClass('btn-hide').removeClass('btn-show');
        }
    });
    $("a[href='#top']").on('click', function () {
        $('html, body').animate( {
                scrollTop: 0,
        }, 1000);
        return false;
    });


    /* ============================================================ */
    /* Set Work Experiance & Education
    /* ============================================================ */
    $(document).ready(function () {
        $.ajax({
            url: 'me.json',
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                const works = data.work
                const educations = data.education

                const workDiv = document.getElementById('medo-work-experiance-div');
                const educationDiv = document.getElementById('medo-education-experiance-div');

                let worksEl = ``;
                let educationsEl = ``;

                works.forEach(function(element, index, array) {
                    let work = "<li>" +
                        "<div class=\"flex items-center justify-between mb-5 md:w-64 md:block md:mb-0\">" +
                        "<h6 class=\"text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100\">" +
                        element.name +
                        "</h6>" +
                        "<p class=\"text-[13px] md:text-sm text-theme\">" +
                        element.date +
                        "</p>" +
                        "<p>" +
                        element.location + " - " + element.role +
                        "</p>" +
                        "</div>" +
                        "<div class=\"md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow\">" + 
                        "<h4 class=\"text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5\">" +
                        element.position +
                        "</h4>" +
                        "<p>" +
                        element.todo +
                        "</p>" +
                        "</div>" + 
                        "</li>";

                    worksEl = worksEl + work;
                });

                // educations.array.forEach(education => {
                    
                // });
                
                workDiv.innerHTML = worksEl;
                // educationDiv.innerHTML = educationsEl;
            },
            error: function (e) {
                let err = e.error
                console.log('JSON Error.');
            }
        });
    });
            
})(jQuery);
// jQuery Ended