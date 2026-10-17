# 从 0 学 Java

一个面向零基础学习者的 Java 入门教程网站，包含 10 章课程、29 道测验题和约 113 分钟的学习内容。网站使用纯 HTML、CSS 和 JavaScript 构建，不需要后端或构建工具。

## 在线访问

- Netlify：https://statuesque-licorice-054cc6.netlify.app
- GitHub Pages：https://20080220.github.io/java-learn-from-zero/

## 功能

- 10 章节的 Java 基础教程
- 29 道章节测验题，答题后即时显示解析
- 学习路线与章节导航
- 自动记录章节完成进度
- 学习进度保存在浏览器本地
- 代码语法高亮与一键复制
- 响应式布局，支持桌面和移动端
- 无登录、无广告、无统计脚本、无外部网络请求

## 项目结构

```text
java-learn/
├─ index.html
├─ css/
│  └─ style.css
├─ js/
│  ├─ app.js       页面逻辑与学习进度
│  └─ content.js   课程正文和测验内容
├─ README.md
├─ LICENSE         代码许可证
└─ CONTENT_LICENSE.md
```

## 本地运行

直接双击 `index.html` 即可打开。

也可以启动本地静态服务器：

```powershell
python -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

## 数据与隐私

网站不使用后端、账号、Cookie 或第三方统计服务。学习进度只保存在当前浏览器的 `localStorage` 中，不会上传到服务器。

清除浏览器数据或点击“重置学习进度”会删除本地进度。

## 部署到 GitHub Pages

1. 将仓库默认分支设为 `main`。
2. 打开 **Settings → Pages**。
3. 在 **Build and deployment** 中选择 **Deploy from a branch**。
4. Branch 选择 `main`，目录选择 `/ (root)`。
5. 点击 **Save**。

GitHub Pages 会通过仓库中的 `.nojekyll` 直接发布静态文件。

## 修改课程内容

课程正文和题目都位于 `js/content.js`。修改后刷新页面即可看到变化。

## 许可证

- HTML、CSS 和 JavaScript 代码：MIT，详见 `LICENSE`
- 课程正文、测验题目和原创文字内容：CC BY 4.0，详见 `CONTENT_LICENSE.md`

项目中的系统 Emoji 由访问者设备字体提供，不包含在仓库中。