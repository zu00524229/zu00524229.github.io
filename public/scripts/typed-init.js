// typed-init.js — Typed.js 初始化（支援中英切換）

var typedInstance = null;

var typedStrings = {
  zh: ['持續學習各類程式語言與開發技術，目前已實作多個 Laravel 專案，涵蓋資料庫設計、後台管理系統、以及前台介面的整合，逐步累積完整的全端開發經驗。除了網頁開發，我也積極自學 C#、Unity 及 Pygame，開始嘗試開發遊戲，從邏輯設計、角色行為控制到畫面呈現，都一點一滴自己動手完成。這些實作不僅提升了我的程式能力，也讓我對「如何把想法變成可玩的東西」這件事更有感覺與熱情。'],
  en: ['Continuously expanding my skills across various programming languages and technologies. I have completed multiple Laravel projects covering database design, backend admin systems, and frontend integration. Beyond web development, I actively self-study C#, Unity, and Pygame — building games from logic design to character behavior and visual presentation. These hands-on projects have sharpened my coding skills and deepened my passion for turning ideas into playable experiences.'],
};

function initTyped(lang) {
  if (typeof Typed === 'undefined' || !document.getElementById('typed7')) return;
  if (typedInstance) { typedInstance.destroy(); }
  typedInstance = new Typed('#typed7', {
    strings: typedStrings[lang] || typedStrings.zh,
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 4000,
    startDelay: 300,
    loop: true,
  });
}

document.addEventListener('DOMContentLoaded', function () {
  initTyped(localStorage.getItem('lang') || 'zh');
});

document.addEventListener('langchange', function (e) {
  initTyped(e.detail.lang);
});
