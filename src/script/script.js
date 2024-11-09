// swiper
var swiper2 = new Swiper(".swiper2", {
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// 화면 확대 축소
$(document).ready(function () {
  // Touch device support
  $(".gallery-item").on("touchstart", function () {
    $(".gallery-item").removeClass("active");
    $(this).addClass("active");
  });

  // Remove active class when clicking outside
  $(document).on("touchstart", function (e) {
    if (!$(e.target).closest(".gallery-item").length) {
      $(".gallery-item").removeClass("active");
    }
  });
});

// tap 메뉴
$(document).ready(function(){
  $(".category .swiper-wrapper a").click(function(){
    $(".category .swiper-wrapper a").removeClass("active");
    $(this).addClass("active");

    var index = $(this).parent().index();

    $(".all_box > .main_box").addClass("hidden");
    $(".all_box > .main_box").eq(index).removeClass("hidden");
  });
});

// content-1 mobile 스와이퍼
var swiper1 = new Swiper(".swiper1", {
  slidesPerView: 3,
  spaceBetween: 16,
  loop: true,
  pagination: {
    // el: ".swiper-pagination",
    clickable: true
  }
});

// all_box_mobile 스와이퍼
var swiper3 = new Swiper(".swiper3", {
  slidesPerView: 2,
  spaceBetween: 16,
  // loop: true,
  pagination: {
    // el: ".swiper-pagination",
    clickable: true
  }
});