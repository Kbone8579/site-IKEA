SubTextBox__init();

// swiper
var swiper = new Swiper(".swiper2 .swiper", {
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper2 .swiper-pagination",
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

    $(".all_box_pc > .main_box").addClass("hidden");
    $(".all_box_pc > .main_box").eq(index).removeClass("hidden");
  });
});

// content-1 mobile 스와이퍼
var swiper = new Swiper(".swiper1 .swiper", {
  slidesPerView: 3,
  spaceBetween: 16,
  loop: true,
  pagination: {
    // el: ".swiper1 .swiper-pagination",
    clickable: true
  }
});

// all_box_mobile 스와이퍼
var swiper = new Swiper(".swiper3 .swiper", {
  slidesPerView: 2,
  spaceBetween: 16,
  // loop: true,
  pagination: {
    // el: ".swiper3 .swiper-pagination",
    clickable: true
  }
});

// footer mobile
function SubTextBox__init() {
  $(".sub-text-box ul > li").click(function () {
    let $this = $(this);

    if ($this.hasClass("active")) {
      $this.removeClass("active");
    } else {
      $this.addClass("active");
    }
  });

  $(".sub-text-box ul").click(function () {
    return false;
  });
}

// color banner
$(document).ready(function () {
  var banner_swiper = new Swiper(".banner-swiper", {
    direction: "horizontal",
    loop: true, // 무한 반복
    autoplay: {
      delay: 5000, // 5초마다 자동으로 슬라이드 전환
      disableOnInteraction: false, // 사용자 상호작용 후에도 자동 슬라이드가 계속 되도록 설정
    },
    speed: 1000,
    observe: true,
    observeParents: true,
  });

  var tab_body_swiper = new Swiper(".tab-body-swiper", {
    // Optional parameters
    direction: "horizontal",
    // loop: true,
    slidesPerView: 5,
    spaceBetween: 20,
    slidesPerGroup: 5,
    scrollbar: {
      // el: ".swiper-scrollbar", // 스크롤바가 표시될 요소
      // hide: true,  // 스크롤바가 불필요할 때 자동으로 숨기기
    },
  });

  var tab_mobile_swiper = new Swiper(".tab-mobile-swiper", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 2.5, // 한 번에 보일 슬라이드 수
    spaceBetween: 16, // 슬라이드 사이의 간격
    slidesPerGroup: 2,
    scrollbar: {
      // el: ".swiper-scrollbar",
      // hide: true,
    },
  });

  function Box1__init() {
    $(".tab-head > ul > li").click(function () {
      // 클릭당한 녀석
      let $this = $(this);
      // 클릭당한 녀석의 형제번호(0 부터 시작)
      let thisIndex = $this.index();

      // 클릭당한 녀석의 형제 중에서 활성화된 녀석 제거
      $this.siblings(".active").removeClass("active");
      // 클릭당한 녀석이 active를 갖는다.
      $this.addClass("active");

      let $box1 = $this.closest(".all-wrap");
      let $box1Main = $box1.find(".banner");

      $box1Main.find(" > ul > li.active").removeClass("active");
      $box1Main.find(" > ul > li").eq(thisIndex).addClass("active");

      let $box2 = $this.closest(".all-wrap");
      let $colorTitle = $box2.find(".tab-body");

      $colorTitle.find(" > ul > li.active").removeClass("active");
      $colorTitle.find(" > ul > li").eq(thisIndex).addClass("active");
    });
  }

  Box1__init();
});

