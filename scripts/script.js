function typeIt(text, className) {
  var count = -1;
  var rate = 150;
  var chars = text.split("");
  setInterval(function() {
    $(className).append(chars[++count]);
  }, rate);
}

typeIt("Paula Goyanes", ".typing");

$(document).ready(function() {
  var $main = $("#main");
  var mainbottom = $main.offset().top + $main.height();
  $(window).on("scroll", function() {
    // we round here to reduce a little workload
    var stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
      $("nav").addClass("past-main");
    } else {
      $("nav").removeClass("past-main");
    }
  });
});

$(document).ready(function() {
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
});
