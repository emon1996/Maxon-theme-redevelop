
 
// shrink navbar on scroll

$(document).on("scroll",function(){
  if ($(document).scrollTop() > 400){
    $("header").removeClass("unshrink");
    $("header").addClass("shrink");
  }else {
    $("header").addClass("unshrink");
    $("header").removeClass("shrink");
  }  
}); 


// owl carousel>>>>>

// testimonial slider 

    $('.testimonial-slide').owlCarousel({
        loop: true,
        autoplay:true,
        autoplayTimeout:3000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    });

// partners slider

    $('.partners-slide').owlCarousel({
        loop: true,
        autoplay:true,
        autoplayTimeout:2000,
        margin:10,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:5,
            }
        }
    });


// AOS INTIALIZE 
   AOS.init();



  


