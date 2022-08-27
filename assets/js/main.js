/* ==========================================
* Template Name         : Bizhub
* Description           : Business and Corporate Html5 Template
* Author                : ThemesLand
* Version               : 1.0
========================================== */


$( document ).ready( function() {
    // All Functions
    Header();
    CounterUp();
    Carousel();
    ScrollIt();
    BgImgPath();
    Faq();
});


// preloader
$( window ).ready(function(){
    $( '#preloader-wrap' ).delay(350).fadeOut( 'slow' );
});   


// magnific popup video
$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});



// FAQ Accordion
function Faq(){
	$('.accordion').find('.accordion-title').on('click', function(){
		$(this).toggleClass('active');
		$(this).next().slideToggle('fast');
		$('.accordion-content').not($(this).next()).slideUp('fast');
		$('.accordion-title').not($(this)).removeClass('active');		
    });
}


function BgImgPath(){
    "use-scrict";
    // Variables
    let dataBgItem = $( '*[data-bg-image-path]' );

    dataBgItem.each( function() {
        let imgPath        = $( this ).attr( 'data-bg-image-path' );
        $( this).css( 'background-image', 'url(' + imgPath + ')' );
    });
}



// Counter Up
function CounterUp() {
    "use-strict";

    // Variables
    let counterItem     = $( '.counter' );
    counterItem.counterUp({
        delay: 10,
        time: 1000
    });
}



// ScrollIt
function ScrollIt() {
    "use-strict";

    $.scrollIt({
        upKey: 38,            
        downKey: 40,          
        easing: 'linear',     
        scrollTime: 600,       
        activeClass: 'active', 
        onPageChange: null,    
        topOffset: 0    
    });
}


// Header
function Header() {
    "use-strict";

    // Variables
    let header          = $( '.header' );
    let logoTransparent = $( '.logo-transparent' );
    let scrollTopBtn    = $( '.scroll-top-btn' );
    let logoNormal      = $( '.logo-normal' );
    let windowWidth     = $( window ).innerWidth();
    let scrollTop       = $( window ).scrollTop();
    let $dropdown       = $( '.dropdown' );
    let $dropdownToggle = $( '.dropdown-toggle' );
    let $dropdownMenu   = $('.dropdown-menu');
    let showClass       = 'show';

    // When Window On Scroll
    $( window ).on( 'scroll', function(){
        let scrollTop = $( this ).scrollTop();

        if( scrollTop > 85 ) {
            logoTransparent.hide();
            logoNormal.show();
            header.addClass( 'header-shrink' );
            scrollTopBtn.addClass( 'active' );
        }else {
            logoTransparent.show();
            logoNormal.hide();
            header.removeClass( 'header-shrink' );
            scrollTopBtn.removeClass( 'active' );
        }
    });

    // The same process is done without page scroll to prevent errors.
    if( scrollTop > 85 ) {
        logoTransparent.hide();
        logoNormal.show();
        header.addClass( 'header-shrink' );
        scrollTopBtn.addClass( 'active' );
    }else {
        logoTransparent.show();
        logoNormal.hide();
        header.removeClass( 'header-shrink' );
        scrollTopBtn.removeClass( 'active' );
    }

    // Window On Resize Hover Dropdown
    $( window ).on( 'resize', function() {
        let windowWidth  = $( this ).innerWidth();

        if ( windowWidth > 991 ) {
            $dropdown.hover(
                function() {
                    let hasShowClass  =  $( this ).hasClass( showClass );
                    if( hasShowClass!==true ){
                        $( this ).addClass( showClass );
                        $( this ).find( $dropdownToggle ).attr( 'aria-expanded', 'true' );
                        $( this ).find( $dropdownMenu ).addClass( showClass );
                    }
                },
                function() {
                    $( this ).removeClass( showClass);
                    $( this ).find( $dropdownToggle ).attr( 'aria-expanded', 'false' );
                    $( this ).find( $dropdownMenu ).removeClass( showClass );
                }
            );
        }else {
            $dropdown.off( 'mouseenter mouseleave' );
            header.find( '.main-menu' ).collapse( 'hide' );
        }
    });
    // The same process is done without page scroll to prevent errors.
    if ( windowWidth > 991 ) {
        $dropdown.hover(
            function() {
                const $this = $( this );

                var hasShowClass  = $this.hasClass( showClass );

                if( hasShowClass!==true ){
                    $this.addClass( showClass);
                    $this.find ( $dropdownToggle ).attr( 'aria-expanded', 'true' );
                    $this.find( $dropdownMenu ).addClass( showClass );
                }
            },
            function() {
                const $this = $( this );
                $this.removeClass( showClass );
                $this.find( $dropdownToggle ).attr( 'aria-expanded', 'false' );
                $this.find( $dropdownMenu ).removeClass( showClass );
            }
        );
    }else {
        $dropdown.off( 'mouseenter mouseleave' );
    }
}


// Owl Carousel
function Carousel(){

    "use-strict";

    // Projects Carousel
    $('.latest-projects-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav: false,
        dots:true,
        autoplay:true,
        smartSpeed:1000,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1200:{
                items:4
            },
            1600:{
                items:5
            }
        }
    });


    // Team Carousel
    $('.team-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav: false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });


    // Testimonial Carousel
    $('.testimonial-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav: false,
        dots:true,
        autoplay:true,
        smartSpeed:1000,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            800:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });


    // Clients Carousel
    $('.clients-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav: false,
        dots:false,
        autoplay:true,
        smartSpeed:1000,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            700:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });


    // Project Details Carousel
    $('.projects-detail-slider').owlCarousel({
        loop:true,
        margin:20,
        nav: true,
        dots:false,
        items:1,
        navText: ['<span class="far fa-arrow-left"></span>', '<span class="far fa-arrow-right"></span>'],
        autoplay:true,
        smartSpeed:1000,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });


    // hero slider
    $('.hero-slider').owlCarousel({
        loop:true,
        margin:-1,
        nav: true,
        dots:false,
        items:1,
        navText: ['<span class="far fa-arrow-left"></span>', '<span class="far fa-arrow-right"></span>'],
        autoplay:true,
        smartSpeed:1000,
        autoplayTimeout:5000,
        autoplayHoverPause:true
    });


    // Project Recent Carousel
    $('.projects-recent-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav: false,
        dots:false,
        items:1,
        autoplay:true,
        smartSpeed:1000,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });
}



