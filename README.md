# 北京市第一六六中学（非正式网站）

纯静态资料整理站点（HTML + CSS + 原生 JS），无构建步骤，可直接部署到 GitHub Pages。

> 本站为非官方网站，不代表北京市第一六六中学或任何教育行政部门。页面内容仅整理自公开资料，发布日期和来源均以“资料来源”标注；不得将本站当作校务通知、招生公告或联系方式的官方发布渠道。

## 目录结构

```
├── index.html          首页（轮播、通知公告跑马灯、三栏、图片新闻）
├── about.html          学校概况（简介、办学情况、领导班子、机构设置）
├── news.html           新闻中心（列表页）
├── news-1.html ~ news-8.html   8篇新闻详情
├── policy.html         教育方针
├── disclosure.html     信息公示（收费、招生、校务公开、食谱）
├── culture.html        校园文化（校史、一训三风、校园风光）
├── contact.html        联系我们
├── styles.css          全站样式（保留政企布局，改为“一六六蓝”蓝白主题）
├── main.js             轮播 / 日期 / 搜索演示
├── images/             10 张随压缩包提供的 AI 示意图 + school-emblem.jpg 公开校徽图样
├── sources.html        页面资料来源、核验日期与使用边界（GitHub Pages 可直接打开）
└── SOURCES.md          同步保留的 Markdown 来源清单
```

## 部署到 GitHub Pages

方式一：仓库根目录部署（推荐）

1. 在 GitHub 新建公开仓库，例如 `bj166-demo`。
2. 将本目录中**所有内容**（含 index.html、images 等，不要多套一层文件夹）推送到 `main` 分支：

   ```bash
   git init
   git add .
   git commit -m "Initial commit: school website demo"
   git branch -M main
   git remote add origin https://github.com/<你的用户名>/bj166-demo.git
   git push -u origin main
   ```

3. 仓库页面 → **Settings → Pages** → Source 选择 **Deploy from a branch** → Branch 选 `main` / 目录选 `/(root)` → Save。
4. 等待约 1 分钟，访问 `https://<你的用户名>.github.io/bj166-demo/`。

方式二：使用 `<你的用户名>.github.io` 主页仓库

- 仓库名必须正好为 `<你的用户名>.github.io`，同样把文件推到根目录，无需额外设置，访问 `https://<你的用户名>.github.io/` 即可。

## 本地预览

直接双击 `index.html` 即可；或起一个本地服务：

```bash
npx serve .
# 或
python -m http.server 8000
```

## 说明

- 公开政务地图可核验灯市口校区地址、邮编、电话和 1864 年创办日期；2024 年度决算材料还披露了年末学生人数、教职工编制和两个校址。页面只使用这些带日期的公开记录，不自行推算当前规模。
- 百度百科关联的百度图片结果中可见蓝银色圆形校徽，本次已将公开图片作为页首图样，并据其蓝色调整站点主题；该图片仅作非官方网站的资料展示，正式校务或品牌使用仍应取得学校授权。
- 近期动态采用东教印象、北京市政府网站、首都教育等公开报道的摘要，避免把同学原稿中的虚构姓名、通知、统计数字当作事实。
- 图片为压缩包随附的 AI 生成示意图（PNG 内容、`.jpg` 扩展名），不得用于暗示官方摄影或官方授权。
