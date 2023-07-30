// Back to top button
(function() {
    $(document).ready(function() {
      return (
        $(window).scroll(function() {
          return $(window).scrollTop() > 600
            ? $("#back-to-top").addClass("show")
            : $("#back-to-top").removeClass("show");
        }),
        $("#back-to-top").click(function() {
          return $("html,body").animate({
            scrollTop: "0"
          });
        })
      );
    });
  }.call(this));
  // Light Gallery
  $("#animated-thumbnail").lightGallery({
    thumbnail: true,
    getCaptionFromTitleOrAlt: true,
    selector: "a[style]"
  });
  // Image Transition
  var scroll = "yes",
    Fscroll = scroll.replace(/(\r\n|\n|\r)/gm, " ");
  "yes" === Fscroll &&
    ($(document).ready(function() {
      $("body").addClass("imgani");
    }),
    $(window).bind("load resize scroll", function() {
      var o = $(this).height();
      $("img").each(function() {
        var s = 0.1 * $(this).height() - o + $(this).offset().top;
        $(document).scrollTop() > s && $(this).addClass("anime");
      });
    }));
  