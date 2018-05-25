function typeIt(text, className, delay = 0, rate = 150) {
  var count = -1;
  var chars = text.split("");
  setTimeout(() => {
    setInterval(function() {
      $(className).append(chars[++count]);
    }, rate);
  }, delay);
}

typeIt("Paula ", ".first-typing");
typeIt("Goyanes", ".last-typing", 1000);

$(document).ready(function() {
  var $main = $("#main");
  var mainbottom = $main.offset().top + $main.height();
  var $navBar = $(".nav-bar");
  var $navHamburger = $(".nav-hamburger");
  var $navDropDown = $(".nav-dropdown");

  // Add smooth scrolling to all links
  $("a").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      var stop = $(hash).offset().top;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: stop
        },
        800,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    }
  });

  $(window).on("scroll", function() {
    // we round here to reduce a little workload
    var stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
      $navBar.addClass("past-main");
      $navDropDown.addClass("past-main");
    } else {
      $navBar.removeClass("past-main");
      $navDropDown.removeClass("past-main");
    }
  });

  $navHamburger.on("click", function() {
    $navDropDown.toggleClass("show");
  });

  $(window).resize(function() {
    if ($(document).width() > 565) {
      $navDropDown.removeClass("show");
    }
  });
});
