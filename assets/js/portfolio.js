$(document).ready(function () {
  $grid = $(".grid").imagesLoaded(function () {
    $grid.isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        columnWidth: ".grid-sizer",
        gutter: 20,
      },
    });
  });
});

$(document).ready(function () {
  $grid = $(".grid").imagesLoaded(function () {
    lightGallery(document.getElementById("lightgallery"), {
      plugins: [lgZoom, lgThumbnail, lgVideo],
      speed: 500,
    });
  });
});

//
$(".button").click(function () {
  $(".button").removeClass("is-checked");
  $(this).addClass("is-checked");
});

//マウスが乗った時の処理
$("#gallery a .nak-gallery-poster").addClass("inkwell");

$("#gallery a").on({
  mouseenter: function () {
    $(this)
      .find(".nak-gallery-poster")
      .removeClass("inkwell")
      .addClass("walden");
  },
  mouseleave: function () {
    $(this)
      .find(".nak-gallery-poster")
      .removeClass("walden")
      .addClass("inkwell");
  },
});
