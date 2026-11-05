# 素材來源與使用說明

## 本網站目前使用的本地素材
`graph/` 內的 SVG 圖像為本作業網站專門製作的原創向量示意圖，並非慈濟大學官方照片，也不是實際校園建築照片。它們用於先完成網站版面與相對路徑要求。若要呈現真實系所形象，建議以自己拍攝的校園、課堂、專題照片替換，或取得校方授權後使用官方素材。

## 可查找照片與影片的來源
以下是可搜尋大學學習、團隊合作與校園情境素材的頁面。下載前仍應確認每一項素材的授權與使用條件，並將實際下載的檔案放入 `graph/`，再更新 HTML 的 `src` 路徑與本文件紀錄。

- Pexels 大學校園學生影片搜尋：https://www.pexels.com/search/videos/university%20campus%20students/
- Pexels 學生在校園讀書影片（George Pak）：https://www.pexels.com/video/students-studying-inside-the-campus-7969378/
- Pexels 學生團隊合作影片（Yan Krukau）：https://www.pexels.com/video/college-students-studying-together-8198508/
- Unsplash 大學課堂學生照片（Vitaly Gariev）：https://unsplash.com/photos/students-talking-and-studying-in-a-lecture-hall-wAgfqXpYqug
- 慈濟大學智慧永續管理學院官方網站：https://hm.tcu.edu.tw/

## 圖片與影片上架規則
1. 將使用的檔案集中放在 `graph/`。
2. 圖片範例：`<img src="graph/campus-photo.jpg" alt="校園學習情境">`
3. 影片範例：`<video controls preload="metadata" poster="graph/video-poster.jpg"><source src="graph/student-project.mp4" type="video/mp4">您的瀏覽器不支援影片播放。</video>`
4. 不要只把外部網頁網址當成 `src`。請確認可下載、授權可用後，將影片檔實際存入 `graph/`。
5. 使用自己拍攝的人物照片或影片前，應先取得入鏡者同意。
