document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".interviewtitle img");
    let currentIndex = 0;
    let timer;

    function showImage(index) {
      images.forEach(function(image, i) {
        if (i === index) {
          image.style.opacity = 1;
        } else {
          image.style.opacity = 0;
        }
      });
    }

    function slideShow() {
      timer = setInterval(function() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
      }, 5000); // 5秒ごとにスライド

      // 初期表示
      showImage(currentIndex);
    }

    slideShow();
  });