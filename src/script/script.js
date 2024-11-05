// swiper
var swiper = new Swiper(".mySwiper", {
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

// 텍스트 복사
function copyToClipboard(text) {
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
  alert("복사되었습니다.");
}
