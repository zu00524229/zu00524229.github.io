# 專案說明：陳文謙個人履歷網站

## 使用語言
- 思考不限語言，**回答一律繁體中文**

---

## 技術棧

| 技術 | 說明 |
|------|------|
| Astro 4.x | 靜態網站框架，`npm run dev` 啟動，port 4321 |
| Bootstrap 5.3 | 格線系統（CDN 載入） |
| jQuery 3.5.1 | 用於部分互動（CDN） |
| Typed.js | 打字動畫效果（CDN） |
| SweetAlert2 | 留言板互動彈窗（CDN） |
| Lightbox2 | 作品集圖片燈箱（CDN） |
| Press Start 2P / VT323 | 像素風字體（Google Fonts） |

### 部署
- GitHub Pages，base URL 透過 `import.meta.env.BASE_URL` 注入
- 所有圖片路徑需加 `${base}` 前綴
- `public/scripts/` 下的 JS 用 `is:inline` 載入

---

## 設計系統

### 風格定位
**像素藝術 + 深黑深橘**，Hero 區額外疊加賽博龐克霓虹（Canvas 遊戲專用），整體維持捲動式單頁架構。

### 配色

| 角色 | 色碼 |
|------|------|
| 主色（亮橘） | `#ff7a1a` |
| 深橘（按鈕/邊框） | `#e86010` |
| 陰影（暗紅棕） | `#7a2800` |
| Hover 淡橘 | `#ff9944` |
| 背景 | `#080404` |
| 卡片背景 | `#0d0808` |
| card-header 背景 | `#1a0a05` |

### 不使用的顏色（已清除）
- 黃色系 `#f8c006`、`#7a5f00` — 已全面換成橘色
- 螢光綠 `#39ff14`、`#1a7a00` — 已全面換成橘色

### 大氣效果（pixel-theme.css）
- `body::before` — radial-gradient vignette 暗角
- `body::after` — CRT 掃描線
- 背景格紋 — `repeating-linear-gradient` 32px 橘色微細格

### 禁止使用
- `border-radius`（任何地方都不加圓角）
- `ground.png`（已移除，不再使用）
- `bg4.png` 作為 body 背景（已改為純 CSS）

---

## 檔案結構

```
src/
├── layouts/
│   └── BaseLayout.astro       # HTML 殼，載入所有 CSS 和 CDN
├── pages/
│   └── index.astro            # 頁面組合，各 section 間插入 .room-divider
├── components/
│   ├── layout/
│   │   ├── Navbar.astro       # 固定頂部導覽，含語言切換按鈕
│   │   └── Footer.astro       # 頁尾版權
│   └── sections/
│       ├── Hero.astro         # 跑馬燈 + Canvas 打磚塊遊戲（自介關鍵字磚塊 + Web Audio）
│       ├── About.astro        # 個人介紹 + 經歷卡片
│       ├── Skills.astro       # 技能進度條 + 遊戲 GIF + Typed.js
│       ├── Portfolio.astro    # 作品集卡片（含 Lightbox）
│       └── Contact.astro      # 聯絡圖示
└── styles/
    ├── base.css               # Reset、body、h2、scrollbar
    ├── layout.css             # Navbar、Footer、Bento、RPG frame、.room-divider
    ├── components.css         # Card、Button、Form、Progress、Portfolio
    └── pixel-theme.css        # Vignette、CRT、pixel-blink、pixel-glow
```

---

## 設計元素說明

### Hero（互動 Canvas 打磚塊遊戲）
- 頂部：CSS 跑馬燈（`.marquee-bar`），顯示中文自我介紹，Press Start 2P 橘色字
- 主體：Canvas 2D 打磚塊遊戲，全部在 `<script is:inline>` 內完成，無外部套件
- 磚塊：6 排共 18 顆，文字為英文自介關鍵字（HELLO、WEN CHIEN、FULLSTACK DEV…）
  - 賽博龐克霓虹配色（品紅 / 青藍 / 熱粉 / 螢光綠 / 黃 / 紫），`shadowBlur` glow 效果
  - 無方塊外框，純文字顯示；碰撞判定用 `ctx.measureText()` 量實際文字寬度（`b.tw / b.th`）
  - 前兩排 hp=2，需打兩下；已被打過一次時透明度降至 0.45
- 操作：滑鼠移動控制擋板，**點擊發球**；觸控裝置同步支援
- 音效：Web Audio API 振盪器合成，無音檔（wall / paddle / break 各自不同頻率）
- 粒子爆炸：磚塊破碎時噴出文字字元，每顆隨機抽 8 種霓虹色
- 背景格線：青藍色 0.04 透明度 32px grid

### Room Divider（`.room-divider`）
- 各 section 之間的分隔線，模擬場景切換感
- 24px 重複方塊紋路 + 上下橘色邊線

### 進度條（`.pixel-progress`）
- 橘色條紋（`#ff7a1a` / `#c45000`交替）
- 無圓角，帶陰影光暈

### 語言切換
- `public/scripts/lang-switch.js` 處理
- HTML 元素加 `data-zh` / `data-en` 屬性即可自動切換

---

## 常用指令

```bash
npm run dev      # 本地開發（localhost:4321）
npm run build    # 建置靜態檔案
npm run preview  # 預覽建置結果
```
