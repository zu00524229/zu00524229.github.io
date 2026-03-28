// sweetalert-config.js — 作品集彈窗 + 聯絡方式 + 留言板

document.addEventListener('DOMContentLoaded', function () {
  // ===== 作品集說明彈窗 =====
  var learnConfigs = {
    learn1: {
      title: '第一個遊戲',
      text: '自學 Unity 1 個月後，嘗試做出的第一個作品，用了簡單的 Rigidbody 物理碰撞與角色控制邏輯腳本、階梯生成邏輯、UI 介面、重製遊戲功能。',
    },
    learn2: {
      title: '第二個遊戲',
      text: '使用 Unity 引擎開發的 2D 遊戲，嘗試 Player Input 控制系統來控制角色，運用物體生成與碰撞邏輯來做變化，讓遊戲的可玩性更高。較好維護的腳本，未來可以增加更多要素。',
    },
    learn3: {
      title: '一番賞抽獎網站',
      text: '與夥伴使用 Laravel、HTML、Bootstrap、JS、CSS、PHP 等技術，前台顯示由後台控制，並支援資料庫的新增、刪除、修改功能。增加抽獎功能，抽到的獎項資料存入資料庫，由後台顯示並同步前台資料。',
    },
    learn4: {
      title: '第三個遊戲',
      text: '使用 Pygame 製作，參考 DaFluffPotato 創作者的教學影片，獲益良多。我修復了滑牆太久導致死亡 BUG，運用衝刺閃避敵人子彈或是攻擊敵人，殲滅後進入下一關。',
    },
    learn5: {
      title: '第四個遊戲',
      text: '使用 Pygame 製作，參考 Coder Space 創作者的教學影片，太強了，居然可以寫 FPS，慢慢熬也完成了，滿滿成就感~',
    },
  };

  Object.keys(learnConfigs).forEach(function (id) {
    var el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', function () {
        Swal.fire(learnConfigs[id]);
      });
    }
  });

  // ===== Line QR Code =====
  document.querySelectorAll('.icon-container i').forEach(function (icon) {
    icon.addEventListener('click', function () {
      Swal.fire({
        position: 'top-end',
        title: icon.getAttribute('data-tooltip'),
        html: '<img src="' + (window.BASE_URL || '/') + 'images/lineQrcode.jpg" alt="Line QR Code" style="width: 200px; height: 200px;"/>',
        showConfirmButton: false,
        timer: 3500,
      });
    });
  });

  // ===== Email =====
  document.querySelectorAll('.icon-container2 i').forEach(function (icon) {
    icon.addEventListener('click', function () {
      Swal.fire({
        position: 'top-end',
        title: icon.getAttribute('data-tooltip'),
        html: '<i class="fa-regular fa-thumbs-up" style="font-size: 30px;"></i>',
        showConfirmButton: false,
        timer: 3500,
      });
    });
  });

  // ===== 留言板 Google Form =====
  var openFormBtn = document.getElementById('openFormBtn');
  if (openFormBtn) {
    openFormBtn.addEventListener('click', function () {
      Swal.fire({
        title: '留下您的留言',
        html: '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScyxsSOtDgTPmaQsWfscOwnde8gPbItfqFjPrFIN0caoRVv8w/viewform?usp=sharing" width="100%" height="500" frameborder="0" marginheight="0" marginwidth="0">載入中…</iframe>',
        showCloseButton: true,
        showConfirmButton: false,
      });
    });
  }
});
