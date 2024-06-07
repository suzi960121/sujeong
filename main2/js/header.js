
$(window).on("load resize scroll", function() {
    var scrollCount = 0;
    var $header = $("#header, .hero");
    
    $(window).on("scroll", function() {
      var scrollPosition = $(window).scrollTop();
      var $bgStatic = $(".bg-static");
  
      // Toggle header class on scroll
      if (scrollPosition > 0) {
        $header.addClass("scrolled");
      } else {
        $header.removeClass("scrolled");
      }
  
      // Handle bg-static position and scroll count
      if (scrollPosition > 0 && !$bgStatic.hasClass('static')) {
        scrollCount++;
        if (scrollCount >= 2) {
          $bgStatic.addClass('static');
        }
      }
  
      if ($bgStatic.hasClass('static')) {
        var windowTop = $(window).scrollTop();
        var elementTop = $bgStatic.offset().top;
        var leftPosition = windowTop - elementTop;
        $bgStatic.find(".bg-move").css({ right: leftPosition });
      }
    });
  });