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
    
    // slide sidebar
    var widthScreen = $( window ).width();
    $( window ).resize(function() {
        if(widthScreen < 768){
            $('.myCamp').addClass('slick-track') 
        } else{
            $('.myCamp').removeClass('slick-track')
        }
    });
    if(widthScreen < 768){
       $('.myCamp').addClass('slick-track') 
    } else{
        $('.myCamp').removeClass('slick-track')
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
    // menu mobile
    $('#main-nav').hcOffcanvasNav({
        insertClose: false,
        labelBack: 'Back' // back buton
    });
    
    $(function () {
    $('[data-toggle="tooltip"]').tooltip()
    })

})(jQuery);