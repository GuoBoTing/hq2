# 晨杏生醫 Universal Antiseptic Solution 產品介紹網站

## 專案說明

這是一個單頁式靜態產品介紹網頁（Landing Page），專為晨杏生醫的 Universal Antiseptic Solution（通用抗菌液）設計。網站採用現代簡約、醫療科技感的設計風格，旨在展示產品專業性並建立信任感。

## 專案結構

```
Hq2/
├── index.html          # 主頁面 HTML 檔案
├── styles.css          # 樣式表檔案
├── script.js           # JavaScript 互動效果檔案
├── README.md           # 專案說明文件
└── image/              # 圖片資源資料夾
    ├── LINE_ALBUM_logo 去背圖_231025_7.jpg
    ├── 全方位抗菌液系列-01.png
    ├── 全方位抗菌液系列-02.png
    ├── 應用範圍-01.png
    ├── 關於二氧化氯_02_建立外框-01.png
    ├── 產品圖/
    ├── 功效性檢驗報告/
    └── 安全性檢驗報告/
```

## 功能特色

### 網頁區域

1. **Header 區域**
   - 晨杏生醫 Logo
   - 主標題與副標題

2. **關於二氧化氯區域**
   - 產品介紹（中英文）
   - 6 個國際認證卡片展示

3. **產品資訊區域**
   - 4 個資訊卡片（主要成分、產品功效、儲存方式、品質控制）
   - 物理與化學特性表格

4. **應用範圍區域**
   - 6 個應用場景圖標展示
   - 5 個使用步驟說明

5. **產品特色區域**
   - 8 個產品特色卡片

6. **CTA 行動呼籲區域**
   - 詢價按鈕
   - 下載產品資訊按鈕

7. **Footer 頁尾**
   - 公司簡介、聯絡資訊、產品系列、快速連結

### 互動效果

- ✅ 平滑滾動（Smooth Scroll）
- ✅ 滾動動畫（Intersection Observer）
- ✅ 卡片 Hover 效果
- ✅ 按鈕 Hover 效果
- ✅ 響應式設計（桌面、平板、手機）

## 技術規格

### 使用的技術

- **HTML5** - 語義化標籤結構
- **CSS3** - 現代 CSS 特性（Grid、Flexbox、動畫）
- **JavaScript (ES6+)** - 互動效果與動畫
- **Font Awesome** - 圖標庫（CDN）

### 瀏覽器相容性

- Chrome（最新版）
- Firefox（最新版）
- Safari（最新版）
- Edge（最新版）

### 響應式設計斷點

- **桌面：** > 1200px
- **平板：** 768px - 1199px
- **手機：** < 767px

## 安裝與使用

### 方式一：直接開啟

1. 確保所有檔案都在同一資料夾中
2. 雙擊 `index.html` 檔案即可在瀏覽器中開啟

### 方式二：使用本地伺服器（推薦）

由於瀏覽器的 CORS 政策，建議使用本地伺服器來開啟網站：

#### 使用 Python

```bash
# Python 3
python -m http.server 8000

# 或 Python 2
python -m SimpleHTTPServer 8000
```

然後在瀏覽器中開啟 `http://localhost:8000`

#### 使用 Node.js (http-server)

```bash
# 安裝 http-server
npm install -g http-server

# 啟動伺服器
http-server
```

#### 使用 VS Code Live Server

1. 在 VS Code 中安裝 "Live Server" 擴充功能
2. 右鍵點擊 `index.html`
3. 選擇 "Open with Live Server"

## 🚀 部署到 Zeabur

### 準備工作

1. **確保專案已準備好**
   - 所有文件都在正確位置
   - `index.html` 是入口文件
   - 圖片資源在 `image/` 資料夾中

2. **選擇部署方式**

### 方式一：通過 Zeabur 網頁介面部署（推薦）

#### 步驟 1：將專案推送到 Git 倉庫

1. 在 GitHub/GitLab/Bitbucket 建立新的倉庫
2. 將專案文件上傳：

```bash
# 在專案目錄下執行
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <你的倉庫網址>
git push -u origin main
```

#### 步驟 2：在 Zeabur 部署

1. **登入 Zeabur**
   - 前往 [https://zeabur.com](https://zeabur.com)
   - 使用 GitHub/GitLab 帳號登入

2. **創建新專案**
   - 點擊 "New Project"
   - 輸入專案名稱（例如：`hq2-website`）

3. **連接 Git 倉庫**
   - 點擊 "Import Project"
   - 選擇你的 Git 倉庫（GitHub/GitLab/Bitbucket）
   - 授權 Zeabur 存取你的倉庫

4. **選擇部署方式**
   - Zeabur 會自動偵測為靜態網站
   - 或手動選擇 "Static Site" 類型

5. **配置部署設定**
   - **Root Directory**: `.` (根目錄)
   - **Output Directory**: `.` (不需要構建)
   - **Framework**: 選擇 "Static" 或 "Other"

6. **部署**
   - 點擊 "Deploy"
   - 等待部署完成（通常需要 1-2 分鐘）

7. **取得網址**
   - 部署完成後，Zeabur 會自動提供一個網址
   - 格式：`https://你的專案名稱.zeabur.app`
   - 可以自訂域名（需要配置）

### 方式二：使用 Zeabur CLI

1. **安裝 Zeabur CLI**

```bash
# 使用 npm
npm install -g @zeabur/cli

# 或使用 yarn
yarn global add @zeabur/cli
```

2. **登入 Zeabur**

```bash
zeabur login
```

3. **初始化專案**

```bash
# 在專案目錄下執行
zeabur init
```

4. **部署**

```bash
zeabur deploy
```

### 部署後設定

#### 自訂域名

1. 在 Zeabur 專案頁面
2. 前往 "Domains" 設定
3. 添加你的自訂域名
4. 按照指示配置 DNS 設定

#### 環境變數（如果需要）

目前這個靜態網站不需要環境變數，但如果有需要：
1. 前往 "Environment Variables"
2. 添加所需的變數

### 更新網站

每次更新後，只需要：

```bash
git add .
git commit -m "Update website"
git push
```

Zeabur 會自動偵測更新並重新部署。

### 常見問題

**Q: 圖片無法顯示？**
- 確認 `image/` 資料夾中的路徑正確
- 檢查 HTML 中的圖片路徑是否為相對路徑

**Q: 404 錯誤？**
- 確認 `index.html` 在根目錄
- 檢查 Zeabur 的 Root Directory 設定

**Q: 樣式沒有載入？**
- 確認 `styles.css` 路徑正確
- 檢查瀏覽器 Console 是否有錯誤

### Zeabur 免費方案限制

- 免費方案包含：
  - 有限的部署次數
  - 自動睡眠（不活動時）
  - 基本功能
- 升級方案可獲得更多功能

## 自訂設定

### 修改顏色

在 `styles.css` 的 `:root` 變數中可以修改顏色：

```css
:root {
    --primary-blue: #0066CC;        /* 主要藍色 */
    --primary-blue-dark: #0052A3;   /* 深藍色 */
    --accent-orange: #FF6B35;       /* 強調橘色 */
    /* ... 其他顏色變數 */
}
```

### 修改字體

在 `styles.css` 中可以修改字體設定：

```css
:root {
    --font-chinese: 'Microsoft JhengHei', 'PingFang TC', -apple-system, sans-serif;
    --font-english: -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
}
```

### 更換 Logo

將新的 Logo 圖片放入 `image/` 資料夾，然後在 `index.html` 中修改路徑：

```html
<img src="image/你的logo檔案名.jpg" alt="晨杏生醫 Logo" class="logo">
```

## SEO 優化

網站已包含以下 SEO 設定：

- ✅ Meta 標題與描述
- ✅ 關鍵字設定
- ✅ 語義化 HTML 標籤
- ✅ Alt 標籤（圖片）
- ✅ 適當的標題層級（H1-H4）

## 注意事項

1. **圖片路徑**：確保所有圖片都在 `image/` 資料夾中，路徑正確
2. **字體載入**：網站使用系統字體，不需要額外載入字體檔案
3. **圖標**：使用 Font Awesome CDN，需要網路連線才能顯示圖標
4. **產品資訊 PDF**：CTA 區域的「下載產品資訊」按鈕連結到 `image/20251022_HQ2 Product Information_Ver 3.pdf`

## 未來擴充建議

- [ ] 添加聯絡表單功能
- [ ] 整合 Google Analytics
- [ ] 添加多語言切換功能
- [ ] 優化圖片載入（懶載入）
- [ ] 添加更多產品圖片展示

## 聯絡資訊

如有任何問題或建議，請聯繫：

**晨杏生醫 Health Quality Square**
- 📍 台北市內湖區中華路一段 59 號 10 樓之 1
- ☎️ Tel: 886-2-2630-9279
- 📠 Fax: 886-2-2630-8758

## 授權

© 2024 晨杏生醫 Health Quality Square. All rights reserved.

---

**專案版本：** 1.0  
**建立日期：** 2024  
**維護者：** 郭柏廷

