$(document).ready(function () {
  let currentIndex = 0;
  let totalSlides = $(".slider-iteam").length;

  function showSlide(index) {
    $(".slider-iteam").hide().eq(index).fadeIn();
    $(".iteam-img").removeClass("active");
    $(".iteam-img").eq(index).addClass("active");

    $(".iteam-allbox .iteam-img ").css({
      transition: "transform 500ms ease-in-out",
        opacity: `1`,
    });
  }

  $(".slider-iteam").hide().eq(currentIndex).show();
  $(".iteam-img").eq(currentIndex).addClass("active");

  $(".slider-button .btn button").click(function () {
    if ($(this).text() === "next") {
      currentIndex = (currentIndex + 1) % totalSlides;
    } else {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    }
    showSlide(currentIndex);
  });

  $(".iteam-img img").click(function () {
    currentIndex = $(this).parent().index();
    showSlide(currentIndex);
  });
});




