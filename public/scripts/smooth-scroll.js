// smooth-scroll.js — 平滑滾動 + 回到頂部按鈕

document.addEventListener('DOMContentLoaded', function () {
  // 支援 Bootstrap navbar 連結與舊式 nav 連結
  var navLinks = document.querySelectorAll(
    '.navbar-nav .nav-link[href^="#"], nav ul li a[href^="#"]'
  );

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (!href || href === '#') return;

      e.preventDefault();

      var targetId = href.substring(1);
      var targetSection = document.getElementById(targetId);

      if (targetSection) {
        var navbar = document.querySelector('.navbar') || document.querySelector('nav');
        var navHeight = navbar ? navbar.offsetHeight : 0;
        var targetPosition = targetSection.offsetTop - navHeight;
        var currentPosition = window.pageYOffset;
        var distance = targetPosition - currentPosition;
        var duration = 600;
        var start = null;

        function step(timestamp) {
          if (!start) start = timestamp;
          var progress = timestamp - start;
          var ratio = progress / duration;
          var eased =
            ratio < 0.5
              ? 4 * ratio * ratio * ratio
              : 1 - Math.pow(-2 * ratio + 2, 3) / 2;

          window.scrollTo(0, currentPosition + distance * eased);

          if (progress < duration) {
            window.requestAnimationFrame(step);
          } else {
            window.scrollTo(0, targetPosition);
          }
        }

        window.requestAnimationFrame(step);
      }
    });
  });

  // 回到頂部按鈕點擊
  var backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});

// 顯示 / 隱藏回到頂部按鈕
window.addEventListener('scroll', function () {
  var backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    backToTop.style.display = window.scrollY > 200 ? 'block' : 'none';
  }
});
