$(document).ready(function () {
  $(".top-bar").mouseenter(function(){
    $(".top-bar").addClass("hover");
  });
  $(".top-bar").mouseleave(function(){
    $(".top-bar").removeClass("hover");
  });

//   document.addEventListener('mousemove', (e) => {
//     let mouseX = e.pageX + 10;
//     let mouseY = e.pageY + 10; 

//     let cursor = document.querySelector('.cursor');
//     cursor.style.left = mouseX + 'px';
//     cursor.style.top = mouseY + 'px';
// })
  
  const swiper = new Swiper(".swiper0 .swiper", {
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
  // rolling
  let roller = document.querySelector(".rolling-list");
roller.id = "roller1"; // 아이디부여

let clone = roller.cloneNode(true);
// 기본값은 false. 자식 노드까지 복제 할 경우 true
clone.id = "roller2";
document.querySelector(".wrap-box").appendChild(clone);

//document.querySelector('#roller1').style.left = '0px';
//document.querySelector('#roller2').style.left = document.querySelector('.rolling-list').offsetWidth + 'px';
// offsetWidth는 요소의 너비를 픽셀 단위로 반환
// 요소의 내부 너비, 패딩, 테두리, 수직스크롤바의 너비를 모두 포함
// 부모요소에 flex를 주면 굳이 줄 필요 없음

roller.classList.add("original");
clone.classList.add("clone");
});
