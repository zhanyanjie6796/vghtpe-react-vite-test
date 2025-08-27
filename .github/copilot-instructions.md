# Copilot 使用說明 - vghtpe-react-vite-test

## 專案概述
- **類型：** React + Vite 單頁應用程式 (SPA)，用於台北榮總排班匯出工具
- **主要檔案：**
  - `src/main.js`：進入點，操作 `#app` div
  - `index.html`：載入 React 應用程式，設置 root div
  - `vite.config.mjs`：Vite 配置，設置 GitHub Pages 的 `base`
  - `package.json`：腳本與依賴
  - `.github/workflows/deploy.yml`：GitHub Actions 用於 Pages 部署
  - `說明.txt`：本地開發與部署說明（中文）

## 架構與模式
- **SPA 結構：** 所有邏輯在 `src/main.js` 中，通過 `index.html` 載入
- **尚未使用路由、狀態管理或複雜的 React 結構**
- **字體與 UI 調整直接在 JS 中完成（見 `main.js`）**
- **使用 Vite 的 React 插件，但目前尚未在程式碼中充分利用 React**
- **建置輸出：** `dist/` 資料夾，包含 `index.html` 和作為 GitHub Pages SPA 回退的 `404.html`

## 開發者工作流程
- **本地開發：**
  - `npm install`（安裝依賴）
  - `npm run dev`（啟動 Vite 開發伺服器，預設埠 5173）
- **建置：**
  - `npm run build`（輸出至 `dist/`）
  - `npm run preview`（本地預覽建置結果）
- **部署：**
  - 推送到 `main` 分支會觸發 GitHub Actions 工作流程（`deploy.yml`）
  - 輸出將發佈到 GitHub Pages 的 `/vghtpe-react-vite-test/`
- **SPA 回退：** 建置後，`dist/index.html` 會複製為 `dist/404.html`，以確保 GitHub Pages 的路由正確

## 約定與整合點
- **Vite 配置：** `base` 必須與 repo 子路徑匹配，確保 Pages 資產載入正確
- **尚無自定義測試腳本或 lint 配置**
- **建置/部署過程中不需要環境變數或機密**
- **目前所有程式碼都在單一 JS 檔案中；未來的 React 元件應放在 `src/` 資料夾中**
- **中文文件：** 請參閱 `說明.txt` 以獲取逐步設置與部署說明

## 範例模式
- **直接操作 DOM：**
  ```js
  document.querySelector('#app').style.fontFamily = 'Arial, sans-serif';
  ```
- **GitHub Pages 的 SPA 回退：**
  ```json
  "postbuild": "cp dist/index.html dist/404.html || copy dist\\index.html dist\\404.html"
  ```
- **Vite 子路徑配置：**
  ```js
  base: '/vghtpe-react-vite-test/'
  ```

## 關鍵檔案
- `src/main.js`, `index.html`, `vite.config.mjs`, `package.json`, `.github/workflows/deploy.yml`, `說明.txt`

---

如果新增了 React 元件，請更新此檔案以記錄新的模式與約定。如有疑問，請參閱 `說明.txt` 或進一步詢問。
