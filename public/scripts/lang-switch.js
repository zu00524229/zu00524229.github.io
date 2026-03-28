// lang-switch.js — 中文 / English 切換

(function () {
  var lang = localStorage.getItem('lang') || 'zh';

  function apply(l) {
    lang = l;
    localStorage.setItem('lang', l);
    document.querySelectorAll('[data-zh]').forEach(function (el) {
      el.textContent = el.dataset[l];
    });
    var btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = l === 'zh' ? 'EN' : '中文';
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: l } }));
  }

  document.addEventListener('DOMContentLoaded', function () {
    apply(lang);
    var btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.addEventListener('click', function () {
        apply(lang === 'zh' ? 'en' : 'zh');
      });
    }
  });
})();
