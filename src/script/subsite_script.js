// 클릭시 원형 화면 확대
$(document).ready(function () {
    let circlesVisible = false;
  
    $(".logo").click(function (e) {
      e.stopPropagation();
      const $logo = $(this);
      const $circles = $(".circle");
  
      $logo.addClass("logo-clicked");
      setTimeout(() => {
        $logo.removeClass("logo-clicked");
      }, 500);
  
      if (!circlesVisible) {
        $circles.each(function (index) {
          gsap.to(this, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            delay: index * 0.15,
            ease: "back.out(1.7)",
            transformOrigin: "center"
          });
        });
      } else {
        $circles.each(function (index) {
          gsap.to(this, {
            opacity: 0,
            scale: 0.5,
            duration: 0.3,
            delay: index * 0.1,
            ease: "power2.in",
            transformOrigin: "center"
          });
        });
      }
  
      circlesVisible = !circlesVisible;
    });
  
    $(".circle").click(function (e) {
      e.stopPropagation();
      const $this = $(this);
      const index = $this.index() + 1;
      const $fullscreen = $(`.fullscreen-${index}`);
  
      const rect = this.getBoundingClientRect();
      const startX = rect.left + rect.width / 2;
      const startY = rect.top + rect.height / 2;
  
      $fullscreen.css({
        display: "flex",
        clipPath: `circle(0px at ${startX}px ${startY}px)`
      });
  
      gsap.to($fullscreen[0], {
        clipPath: `circle(150% at ${startX}px ${startY}px)`,
        duration: 0.8,
        ease: "power2.inOut"
      });
    });
  
    $(".close-btn").click(function (e) {
      e.stopPropagation();
      const $fullscreen = $(this).closest(".fullscreen");
  
      gsap.to($fullscreen[0], {
        clipPath: "circle(0px at 50% 50%)",
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          $fullscreen.hide();
        }
      });
    });
  });

  $(function(){
    let currentIndex = 0;
    $(".slider").hide().first().show()

    setInterval(function(){
      let nextIndex = (currentIndex + 1) % 3;

      $(".slider").eq(currentIndex).fadeOut(2600);
      $(".slider").eq(nextIndex).fadeIn(2600);

      currentIndex = nextIndex
    }, 5000);
  });

  // 캐릭터 변환
  function toggleImage(element) {
    const colorImg = element.querySelector('#colorImg');
    const normalImg = element.querySelector('#normalImg');
    
    if (colorImg.classList.contains('opacity-0')) {
        colorImg.classList.remove('opacity-0');
        colorImg.classList.add('opacity-100');
        normalImg.classList.remove('opacity-100');
        normalImg.classList.add('opacity-0');
    } else {
        colorImg.classList.add('opacity-0');
        colorImg.classList.remove('opacity-100');
        normalImg.classList.add('opacity-100');
        normalImg.classList.remove('opacity-0');
    }
}

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
