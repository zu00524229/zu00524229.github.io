# zuchien.github.io

陳文謙的個人履歷網站，以像素藝術風格打造的互動式單頁應用。

**Live:** https://zuchien.github.io

---

## 特色

- **Hero 打磚塊遊戲** — 進站即玩，用自我介紹關鍵字做成磚塊，賽博龐克霓虹配色，碰撞判定依實際文字寬度計算
- **中文跑馬燈** — Hero 頂部 CSS 跑馬燈，顯示中文自我介紹
- **像素風格系統** — Press Start 2P 字體、CRT 掃描線、vignette 暗角、32px 背景格紋
- **雙語切換** — 所有文字標記 `data-zh` / `data-en`，一鍵切換中英文

---

## 技術棧

| 技術 | 用途 |
|------|------|
| Astro 4.x | 靜態網站框架 |
| Canvas 2D API | Hero 打磚塊遊戲 |
| Web Audio API | 遊戲音效（程式合成，無音檔） |
| Bootstrap 5.3 | 格線系統 |
| Typed.js | 打字動畫 |
| Lightbox2 | 作品集燈箱 |
| GitHub Pages | 部署 |

---

## 本地開發

```bash
npm install
npm run dev      # localhost:4321
npm run build
npm run preview
```

---

## 專案結構

```
src/
├── layouts/BaseLayout.astro       # HTML 殼，載入 CSS / CDN
├── pages/index.astro              # 頁面組合
├── components/
│   ├── layout/
│   │   ├── Navbar.astro           # 固定導覽，含語言切換
│   │   └── Footer.astro
│   └── sections/
│       ├── Hero.astro             # 跑馬燈 + Canvas 打磚塊遊戲
│       ├── About.astro            # 個人介紹 + 經歷
│       ├── Skills.astro           # 技能進度條
│       ├── Portfolio.astro        # 作品集
│       └── Contact.astro          # 聯絡方式
└── styles/
    ├── base.css                   # Reset、body、scrollbar
    ├── layout.css                 # Navbar、Footer、room-divider
    ├── components.css             # Card、Button、Progress
    └── pixel-theme.css            # CRT、vignette、像素動畫
public/
└── scripts/lang-switch.js         # 語言切換邏輯
```

---

## 設計規範

- 主色調：橘（`#ff7a1a`）配黑（`#080404`）；Hero Canvas 另加賽博龐克霓虹
- 禁用 `border-radius`（全站無圓角）
- 圖片路徑必須加 `${base}` 前綴（GitHub Pages base URL）
