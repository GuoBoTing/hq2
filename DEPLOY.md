# 🚀 部署到 Zeabur 完整指南

## 前置準備

### 1. 準備 Git 倉庫

如果還沒有 Git 倉庫，請先在 GitHub/GitLab/Bitbucket 建立一個：

#### 使用 GitHub（推薦）

1. 前往 [GitHub](https://github.com) 並登入
2. 點擊右上角 "+" → "New repository"
3. 輸入倉庫名稱（例如：`hq2-website`）
4. 選擇 Public 或 Private
5. **不要**勾選 "Initialize this repository with a README"
6. 點擊 "Create repository"

#### 上傳專案到 GitHub

```bash
# 在專案目錄下執行這些命令
cd /Users/guobaiting/Desktop/Hq2

# 初始化 Git（如果還沒初始化）
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: HQ2 website"

# 連接到 GitHub 倉庫（替換成你的倉庫網址）
git remote add origin https://github.com/你的用戶名/hq2-website.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

**或者使用 GitHub Desktop：**
1. 下載安裝 [GitHub Desktop](https://desktop.github.com)
2. 開啟 GitHub Desktop
3. File → Add Local Repository
4. 選擇專案資料夾
5. Publish repository

---

## 部署步驟

### 步驟 1：註冊/登入 Zeabur

1. 前往 [https://zeabur.com](https://zeabur.com)
2. 點擊 "Sign Up" 或 "Login"
3. 使用 GitHub 帳號登入（推薦，可自動連接倉庫）

### 步驟 2：創建新專案

1. 登入後，點擊右上角 "New Project"
2. 輸入專案名稱（例如：`hq2-website`）
3. 點擊 "Create"

### 步驟 3：導入 Git 倉庫

1. 在專案頁面，點擊 "Import Project" 或 "+ New Service"
2. 選擇 "Import from Git"
3. 選擇你的 Git 提供商（GitHub/GitLab/Bitbucket）
4. 如果第一次使用，需要授權 Zeabur 存取你的倉庫
5. 選擇剛才建立的倉庫（`hq2-website`）

### 步驟 4：配置部署設定

Zeabur 會自動偵測專案類型，對於靜態網站：

1. **Framework Preset**: 選擇 "Static" 或 "Other"
2. **Root Directory**: 留空或輸入 `.`（根目錄）
3. **Build Command**: 留空（靜態網站不需要構建）
4. **Output Directory**: 留空或輸入 `.`（輸出目錄就是根目錄）
5. **Node Version**: 不需要（靜態網站）
6. **Install Command**: 留空

### 步驟 5：開始部署

1. 檢查設定無誤後，點擊 "Deploy" 或 "Create"
2. 等待部署完成（通常 1-2 分鐘）
3. 部署過程中可以看到日誌輸出

### 步驟 6：取得網址

部署完成後：

1. 你會看到一個自動生成的網址
   - 格式：`https://你的專案名稱.zeabur.app`
   - 例如：`https://hq2-website-xxx.zeabur.app`

2. 點擊網址測試網站是否正常運作

---

## 自訂域名（可選）

### 步驟 1：添加域名

1. 在專案頁面，找到 "Domains" 或 "Settings" → "Domains"
2. 點擊 "Add Domain" 或 "+"
3. 輸入你的域名（例如：`www.yourcompany.com`）

### 步驟 2：配置 DNS

Zeabur 會提供 CNAME 記錄，例如：
- **Type**: CNAME
- **Name**: www（或 @）
- **Value**: `你的專案名稱.zeabur.app`

在你的域名註冊商（例如 GoDaddy、Namecheap）配置：

1. 登入域名管理面板
2. 找到 DNS 設定
3. 添加 CNAME 記錄
4. 等待 DNS 傳播（通常 5-30 分鐘）

### 步驟 3：SSL 憑證

Zeabur 會自動為你的域名配置免費 SSL 憑證（HTTPS）

---

## 更新網站

每次更新網站內容：

```bash
# 修改文件後
git add .
git commit -m "描述你的更新內容"
git push
```

Zeabur 會自動偵測推送並重新部署（通常需要 1-2 分鐘）

---

## 專案檔案結構確認

部署前確認以下結構：

```
Hq2/
├── index.html          ← 入口文件（必須在根目錄）
├── styles.css          ← 樣式文件
├── script.js           ← JavaScript 文件
├── image/              ← 圖片資源資料夾
│   ├── logo.jpg
│   ├── Favicon.jpg
│   ├── laboratory.png
│   └── ...
├── README.md
└── zeabur.json         ← Zeabur 配置（可選）
```

**重要**：確保 `index.html` 在根目錄！

---

## 常見問題排除

### ❌ 問題 1：圖片無法顯示

**解決方法：**
- 檢查 HTML 中的圖片路徑是否為相對路徑
- 確認 `image/` 資料夾有被推送到 Git
- 檢查大小寫是否正確（Linux 系統區分大小寫）

### ❌ 問題 2：404 錯誤

**解決方法：**
- 確認 `index.html` 在根目錄
- 檢查 Zeabur 的 Root Directory 設定是否為 `.`
- 確認檔案名稱大小寫正確

### ❌ 問題 3：樣式/腳本沒有載入

**解決方法：**
- 檢查 HTML 中的 CSS/JS 路徑
- 確認 `styles.css` 和 `script.js` 已推送到 Git
- 檢查瀏覽器 Console 是否有錯誤訊息

### ❌ 問題 4：部署失敗

**解決方法：**
- 檢查部署日誌中的錯誤訊息
- 確認所有必要的文件都已推送到 Git
- 檢查檔案大小是否超過限制

### ❌ 問題 5：網站顯示舊內容

**解決方法：**
- 清除瀏覽器快取（Ctrl+F5 或 Cmd+Shift+R）
- 確認最新的 commit 已推送到 Git
- 檢查 Zeabur 部署日誌確認是否部署成功

---

## 監控和維護

### 查看部署狀態

1. 在 Zeabur 專案頁面可以查看：
   - 部署歷史
   - 部署日誌
   - 運行狀態
   - 訪問統計

### 回滾到舊版本

1. 在 "Deployments" 頁面
2. 找到之前的部署版本
3. 點擊 "Redeploy" 可以重新部署該版本

---

## Zeabur 免費方案

- ✅ 免費 HTTPS（SSL 憑證）
- ✅ 自動部署（Git 推送觸發）
- ✅ 基本監控和日誌
- ⚠️ 可能有睡眠機制（不活動時）
- ⚠️ 部署次數限制

如需更多功能，可以考慮升級到付費方案。

---

## 需要幫助？

- Zeabur 文檔：https://zeabur.com/docs
- Zeabur Discord：https://discord.gg/zeabur
- 檢查本專案的 `README.md` 獲取更多資訊

