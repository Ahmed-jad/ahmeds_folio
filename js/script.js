 

const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarCollapse')
const bsCollapse = new bootstrap.Collapse(menuToggle,{toggle:false})
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})

 

// ( function($){
//     " use stict"
//     //animation text
//     if($('.typed-text-output').length == 1){
//         var typed_strings = $('.typed-text').text();
//         var typed = new Typed('.typed-text-output',{
//             string: typed_strings.split(','),
//             typedSpeed:100,
//             backSpeed:60,
//             smartBackspace:false,
//             loop:true
//         });
//     }
//   })(jQuery);
 
 
 
 //smooth scrolling all links
 $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
 
  
    //Javascript for skill section
  
    $('.skill').waypoint(function () {
      $('.progress .progress-bar').each(function () {
          $(this).css("width", $(this).attr("aria-valuenow") + '%');
      });
  }, {offset: '80%'});

 //potfolio scrip
  
  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
});
$('#portfolio-flters li').on('click', function () {
    $("#portfolio-flters li").removeClass('active');
    $(this).addClass('active');

    portfolioIsotope.isotope({filter: $(this).data('filter')});
});

// Testimonial
$(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 3500,
    dots: true,
    loop: true,
    items: 1
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return true;
});

// typing text animation script
var typed = new Typed(".typing", {
  strings: [ "Developer", "Blogger", "Designer", "Freelancer", "YouTuber"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});
var typed = new Typed(".typing-2", {
  strings: [ "Developer", "Blogger", "Designer", "Freelancer", "YouTuber"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});