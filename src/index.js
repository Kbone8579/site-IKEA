$(document).ready(function () {
  $(".top-bar").mouseenter(function(){
    $(".top-bar").addClass("hover");
  });
  $(".top-bar").mouseleave(function(){
    $(".top-bar").removeClass("hover");
  });
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    effect: "fade",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      type: "custom",
      renderCustom: function (swiper, current, total) {
        const fillPer = (current / total) * 100;
        const fillWidth = fillPer + "%;";
        return (
          '<strong>0<span class="current">' +
          current +
          '</span></strong><div class="progress__bar"><span class="progress__fill" style="width:' +
          fillWidth +
          '"></span></div><span>0' +
          total +
          "</span>"
        );
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
});
