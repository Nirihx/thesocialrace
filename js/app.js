(function($){
    // // Sticky menu 
    $(document).on("scroll", function(){
        // var widthScreen = $( window ).width();
        if($(document).scrollTop() > 1){
            $(".header").addClass("sticky");
        }else{
            $(".header").removeClass("sticky");
        }
    });
    
    // date picker
    $('.date input').datepicker({
        format: "dd-mm-yyyy",
        language: "fr",
        autoclose: true,
        todayHighlight: true,
        toggleActive: true
    });
    
    var widthScreen = $( window ).width();
    // sticky sidebar
    if(widthScreen > 768){
        $(document).on("scroll", function(){
            if($(document).scrollTop() > 180){
                $(".sidebar .sticky").addClass("sticky-top");
            }else{
                $(".sidebar .sticky").removeClass("sticky-top");
            }
        });
    }
    // Check if Navigator is Internet Explorer
    // if(navigator.userAgent.indexOf('MSIE')!==-1
    // || navigator.appVersion.indexOf('Trident/') > -1){
    //     // Scroll event check
    //     $(window).scroll(function (event) {
    //         var scroll = $(window).scrollTop();

    //         // Activate sticky for IE if scrolltop is more than 20px
    //         if ( scroll > 20) {
    //             $('.sidebar .sticky').addClass( "sticky-top-ie" );
    //         }else{
    //             $('.sidebar .sticky').removeClass( "sticky-top-ie" );        
    //         }
    //     });
    // }
    
    // slide sidebar
    if(widthScreen < 768){
        $('.myCamp').addClass('slick-track') 
        $('.slideMobile').addClass('slick-track') 
    } else{
        $('.myCamp').removeClass('slick-track')
        $('.slideMobile').removeClass('slick-track') 
    }

    $('.sidebar .slick-track').slick({
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: false
            }
          }
        ]
    });

    $('.slideMobile.slick-track').slick({
        arrows: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '0',
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '0',
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
        ]
    });
    // menu mobile
    $('#main-nav').hcOffcanvasNav({
        insertClose: false,
        labelBack: 'Back' // back buton
    });
    
    $(function () {
    $('[data-toggle="tooltip"]').tooltip()
    })

})(jQuery);