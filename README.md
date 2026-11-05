# 慈濟大學經營管理學系｜GitHub Pages 網站作業

## 檔案結構
- `index.html`：系所首頁（必須維持小寫）
- `studentworks.html`：學生作品展示頁
- `graph/`：網站使用的全部本地圖片素材（SVG）
- `style.css`：響應式版面樣式
- `script.js`：手機導覽選單等互動
- `AI_COLLABORATION.md`：AI 協作紀錄與心得
- `ASSET_SOURCES.md`：素材來源與使用說明

## 本機預覽
直接用瀏覽器開啟 `index.html`。若瀏覽器限制本機資源，可使用 VS Code 的 Live Server 預覽。

## GitHub Pages 上線步驟
1. 登入 GitHub，建立新的 Repository。
2. Repository 設定為 **Public**。
3. 將本資料夾內所有檔案與 `graph` 資料夾上傳到 Repository 根目錄（不要把整個資料夾再包一層）。
4. 進入 **Settings → Pages**。
5. 在 Build and deployment 選擇 **Deploy from a branch**。
6. Branch 選 `main`，資料夾選 `/ (root)`，按 **Save**。
7. 等待 GitHub Pages 完成部署，回到 Pages 頁面查看網站網址。
8. 確認首頁、學生作品頁、圖片皆可正常開啟，再繳交網址。

網址通常會是：
- Repository 名稱為 `你的帳號.github.io`：`https://你的帳號.github.io/`
- 其他 Repository：`https://你的帳號.github.io/Repository名稱/`

## 上線前必檢查
- [ ] `index.html` 拼字與大小寫正確
- [ ] `studentworks.html` 存在且可從首頁進入
- [ ] 所有本地圖片都在 `graph/`，HTML 使用 `graph/檔名.svg`
- [ ] Repository 是 Public
- [ ] GitHub Pages 的 Branch 是 `main`，資料夾是 `/ (root)`
- [ ] 兩個頁面可互相切換，沒有 404
- [ ] 用手機與電腦各測試一次
- [ ] 將示範作品換成真實作品，並查核官方資料
- [ ] 圖片、影片授權與人物肖像同意已確認

## 重要內容聲明
本網站是課程作業示範，不代表慈濟大學官方網站。課程、師資、聯絡方式等正式資訊，請以校方最新公告為準。學生作品頁中的主題為展示版型的示例，正式提交前應替換成真實成果。
