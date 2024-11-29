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
    /* Set ME JSON 
    /* ============================================================ */
    $(document).ready(function () {
        $.ajax({
            url: 'me.json',
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                const works = data.work;
                const educations = data.education;
                const projects = data.project;

                setWorkExperiance(works);
                setEducation(educations);
                setProjets(projects);
            },
            error: function (e) {
                let err = e.error
                console.log('JSON Error.');
            }
        });
    });


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
    /* Set Work Experiance 
    /* ============================================================ */
    function setWorkExperiance(works) {
        const workDiv = document.getElementById('medo-work-experiance-div');

        let worksEl = ``;

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
                element.location +
                "</p>" +
                "<p class=\"text-[13px] md:text-sm text-theme\">" +
                element.role +
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

                
        workDiv.innerHTML = worksEl;
    }

    /* ============================================================ */
    /* Set Education 
    /* ============================================================ */
    function setEducation(educations) {
        const educationDiv = document.getElementById('medo-education-experiance-div');

        let educationsEl = ``;

        educations.forEach(function(element, index, array) {
            let education = "<li>" +
                        "<div class=\"flex items-center justify-between mb-5 md:w-64 md:block md:mb-0\">" +
                        "<h6 class=\"text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100\">" +
                        element.name +  
                        "</h6>" +
                        "<p class=\"text-[13px] md:text-sm text-theme\">" +
                        element.date +
                        "</p>" +
                        "</div>" +
                        "<div class=\"md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow\">" +
                        "<h4 class=\"text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5\">" +
                        element.tite + 
                        "</h4>" +
                        "<p>" +
                        element.todo +
                        "</p>" +
                        "</div>" +
                        "</li>";

            educationsEl = educationsEl + education;
        });
                
        educationDiv.innerHTML = educationsEl;
    }

    /* ============================================================ */
    /* Set Projets 
    /* ============================================================ */
    setProjets([
        {
            "id": 1,
            "name": "El Ezaby",
            "sub_name": "Pharmacy",
            "slogen": "El Ezaby Pharmacy app",
            "clinet": "Awfar Inc.",
            "clinet_site": "https://solutions.awfar.com/",
            "position": "Senior iOS Software Engineer",
            "date": "Feb 2020 - Present",
            "role": "Full-time",
            "description": "El Ezaby pharmacies mobile application is your \"to go\" portal for all your medical, cosmetics, and health needs. <br> <br> El Ezaby pharmacies mobile application offers:<br>- Home Delivery.<br>- Online Payment.<br>- More than 11,000 products.<br>- Detailed products' descriptions.<br>- Online Medical insurance's prescriptions cash out.<br>- Online Products' availability checking.<br>- Scanning the product's bar code from your mobile's camera to make sure it's available.<br>Download the biggest pharmaceutical mobile application, and enjoy the promo codes and gifts.",
            "mainImage": "assets/img/projects/project-main-1.png",
            "subImage": "assets/img/projects/project-main-1.png",
            "otherImage": "assets/img/projects/project-main-1.png",
            "technology": [
                {
                    "logo": "",
                    "name": "SwiftUI",
                    "percentage": ""
                }
            ]
        },
        {
            "id": 2,
            "name": "Wayak - وياك",
            "sub_name": "Your Meds, Your Health",
            "slogen": "Wayak - ONE APPLICATION FOR ALL YOUR MEDICAL NEEDS",
            "clinet": "Wayak",
            "clinet_site": "https://wayakcard.com/en/",
            "position": "iOS Developer",
            "date": "Dec 2022 - Nov 2024",
            "role": "Freelance",
            "description": "Healthcare Service Platform<br>Wayak is an innovative mobile application designed to simplify healthcare management while reducing costs. As an iOS developer, I contributed to building and optimizing an app that unifies multiple healthcare services, providing users with a seamless experience for managing prescriptions, consultations, and medical services.<br>Key Features Developed:<br>• Medication Delivery Service: Integrated a feature for free home delivery of prescribed medications, with savings up to 20%.<br>•  Easy Ordering System: Implemented search functionality for medications by name, category, or prescription upload, streamlining the ordering process.<br>•  Unlimited Medical Consultations: Developed a system for users to access free, unlimited medical consultations via the app.<br>•  Wayak Card Discounts: Integrated a digital card offering users up to 40% savings at trusted medical centers and labs.<br>•  User Experience Optimization: Focused on intuitive UI/UX design and efficient app performance to enhance user engagement and satisfaction.<br>This project highlights my proficiency in mobile app development, UI/UX design, and integrating third-party services to create a comprehensive and cost-effective healthcare solution.",
            "mainImage": "assets/img/projects/project-sub-2.png",
            "subImage": "assets/img/projects/project-sub-2.png",
            "otherImage": "assets/img/projects/project-sub-2.png",
            "technology": [
                {
                    "logo": "",
                    "name": "Swift",
                    "percentage": ""
                }
            ]
        },
        {
            "id": 3,
            "name": "Awfar Chat",
            "sub_name": "CRM Chat System",
            "slogen": "Awfar Chat Center",
            "clinet": "Awfar Inc.",
            "clinet_site": "https://solutions.awfar.com/eg/awfar-chat-center/",
            "position": "UI/UX Designer - iOS Developer",
            "date": "Feb 2022 - Feb 2024",
            "role": "Freelance",
            "description": "Awfar Customer Engagement Platform – the ultimate solution for streamlining customer interactions and enhancing engagement with your business. Awfar Chat empowers businesses to efficiently manage and connect website and mobile application chats, all in one easy-to-use platform.<br>Key Features:<br>1. Seamless Chat Management:* Awfar Chat brings together chats from your website and mobile application into a single, unified dashboard. Stay connected with your customers in real-time and never miss a conversation again.<br>2. Multi-Channel Communication:* Engage with your customers across more than 10 online communication channels, all from one place. Connect through WhatsApp, Facebook, Instagram messages, and more, providing a unified experience for your customers.<br>3. Unlimited Data Insights:* Awfar Chat's comprehensive data management allows you to harness the power of customer data. Track and analyze customer interactions, enabling you to make data-driven decisions for your business.<br>4. Personalized Customer Campaigns:* Tailor your messages to specific customer segments and interests. Create personalized campaigns for both new and returning customers to enhance their experience and boost brand loyalty.<br>5. Automated Chatbot Support:* Integrate chatbots into your interactions to efficiently handle frequently asked questions and provide immediate responses, even outside regular business hours.<br>6. Dynamic Chat Distribution:* Assign chats to employees, departments, or branches automatically, optimizing workload distribution and ensuring timely responses to your customers.<br>7. E-Commerce on WhatsApp:* Showcase your products and facilitate seamless purchasing experiences within the app through our E-Commerce feature on WhatsApp.<br>8. Real-Time Employee Performance Tracking:* Monitor employee performance, track response times, and optimize productivity with Awfar Chat's performance monitoring tools.<br>9. Secure User Accounts:* Ensure the safety of your data with individual user accounts, allowing businesses to manage access to the platform securely.<br>10. Detailed Analytics and Reports:* Access a wide range of detailed reports and analytics to measure your team's efficiency, customer satisfaction, and business growth.<br>Awfar Chat is your go-to customer engagement platform that ensures effortless management of customer communications. As a Software-as-a-Service (SaaS) platform, we prioritize your business's success by providing cutting-edge technology solutions without any paid content or subscriptions.<br>Experience the power of Awfar Chat and discover a new era of customer engagement and seamless communication. Download now and revolutionize the way you interact with your customers!",
            "mainImage": "assets/img/projects/project-sub-3.png",
            "subImage": "assets/img/projects/project-sub-3.png",
            "otherImage": "assets/img/projects/project-sub-3.png",
            "technology": [
                {
                    "logo": "",
                    "name": "Swift",
                    "percentage": ""
                }
            ]
        },
        {
            "id": 4,
            "name": "TEBCOM",
            "sub_name": "Doctor - Patient",
            "slogen": "TEBCOM Online Medical Community",
            "clinet": "TEBCOM",
            "clinet_site": "https://tebcom.net/",
            "position": "iOS Developer",
            "date": "Feb 2022 - Feb 2024",
            "role": "Freelance",
            "description": "Developed TEBCOM, a comprehensive Closed-Loop Tele-Consultation solution with two tailored schemes:<br>1.  TEBCOM for Patients: Designed for patients to easily access professional healthcare services from anywhere.<br>2.  TEBCOM - Doctor for Doctors: Built to help doctors manage virtual consultations and provide one-on-one care seamlessly.<br>The apps enable virtual clinics, breaking barriers to healthcare access across the globe. Integrated with .NET, SignalR for real-time communication, and Twilio for secure video and audio calls. Developed using Swift and the MVP architecture, this solution ensures doctors can run their online practices as efficiently as their physical ones, delivering professional care while maintaining quality and reliability.",
            "mainImage": "assets/img/projects/project-main-4.png",
            "subImage": "assets/img/projects/project-main-4.png",
            "otherImage": "assets/img/projects/project-main-4.png",
            "technology": [
                {
                    "logo": "",
                    "name": "Swift",
                    "percentage": ""
                }
            ]
        }
    ]);

    function setProjets(projects) {
        let first4 = projects.slice(0, 4);
        const projectDiv = document.getElementById('medo-project-div');

        let projectsEl = ``;

        first4.forEach(function(element, index, array) {
            if (index == 0 || index == 3) {
                let project = "<div class=\"item md:col-span-2 group\">" +
                            "<a href=\"project-single.html\" class=\"block p-3 overflow-hidden border md:p-4 rounded-xl border-platinum dark:border-greyBlack\">" +
                            "<div class=\"img-wrapper\">" +
                            "<img src=\"" + element.mainImage + "\" class=\"rounded-lg max-md:h-[17rem] w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs\" alt=" + element.name + ">" + 
                            "<div class=\"absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white dark:from-black to-transparent rounded-xl group-hover:opacity-100\">" + 
                            "</div>" +
                            "</div>" +
                            "<div class=\"info text-center position-center max-lg:text-3xl text-lead font-semibold text-black dark:text-white leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 relative z-10\">" +
                            element.name +
                            "<br><span>" +
                            element.sub_name +
                            "</span>" +
                            "</div>" +
                            "</a>" +
                            "<ul class=\"absolute z-10 transition-all duration-500 opacity-0 md:top-9 md:right-9 top-6 right-6 group-hover:opacity-100\">" +
                            "<li>" +
                            "<a href=" + element.client_site + " class=\"inline-flex items-center gap-2 px-5 py-3 text-sm font-light leading-none text-white transition-colors bg-metalBlack rounded-3xl hover:text-theme\">" +
                            element.clinet +
                            "</a>" +
                            "</li>" +
                            "</ul>" +
                            "</div><!--./portfolio-card-->";

                projectsEl = projectsEl + project;
            } else {
                let project = "<div class=\"item md:col-span-1 group\">" +
                        "<a href=\"project-single.html\" class=\"block p-3 overflow-hidden border md:p-4 rounded-xl border-platinum dark:border-greyBlack\">" +
                        "<div class=\"img-wrapper\">" +
                        "<img src=\"" + element.subImage + "\" class=\"rounded-lg max-md:h-[17rem] w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs\" alt=" + element.name + ">" +
                        "<div class=\"absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white dark:from-black to-transparent rounded-xl group-hover:opacity-100\">" +
                        "</div>" +
                        "</div>" +
                        "<div class=\"info text-center position-center max-lg:text-3xl text-lead font-semibold text-black dark:text-white leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 relative z-10\">" +
                        element.name +
                        "<br><span>" +
                        element.sub_name +
                        "</span>" +
                        "</div>" +
                        "</a>" +
                        "<ul class=\"absolute z-10 transition-all duration-500 opacity-0 md:top-9 md:right-9 top-6 right-6 group-hover:opacity-100\">" +
                        "<li>" +
                        "<a href=" + element.client_site + " class=\"inline-flex items-center gap-2 px-5 py-3 text-sm font-light leading-none text-white transition-colors bg-metalBlack rounded-3xl hover:text-theme\">" +
                        element.clinet +
                        "</a>" +
                        "</li>" +
                        "</ul>" +
                        "</div><!--./portfolio-card-->";

                projectsEl = projectsEl + project;

            }
        });
                
        projectDiv.innerHTML = projectsEl;
    }


    /* ============================================================ */
    /* Set Gmail Setup
    /* ============================================================ */           
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const date = new Date();
        const day = String(date.getDate()).padStart(2, '0'); // Add leading zero if day is less than 10
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = monthNames[date.getMonth()]; // Get the abbreviated month name
        const year = date.getFullYear();


        // Collect the form data
        const formData = {
            name: document.querySelector('[name="client__name"]').value,
            email: document.querySelector('[name="client_email"]').value,
            message: document.querySelector('[name="contact__message"]').value,
            date: `${day}, ${month} ${year}`
        };


            var data = {
                service_id: 'service_yljwisr',
                template_id: 'template_uhwm5nx',
                user_id: 'VAemlW7kSM9ZJv3Mk',
                template_params: formData
            };

            $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
                type: 'POST',
                data: JSON.stringify(data),
                contentType: 'application/json'
            }).done(function() {
               console.log('Hello, ' + formData.name +'Your mail is sent!');
            }).fail(function(error) {
                console.log('Oops... ' + JSON.stringify(error));
            });


  });


})(jQuery);
// jQuery Ended