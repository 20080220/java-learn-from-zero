/* =====================================================
   从0学Java · 应用逻辑
   ===================================================== */
(function () {
  "use strict";

  /* ---------- 数据 ---------- */
  var STORE_KEY = "java-learn-progress-v1";
  var store = loadStore();

  function defaultStore() {
    return { done: [], quiz: {} };
  }
  function loadStore() {
    try {
      var s = JSON.parse(localStorage.getItem(STORE_KEY));
      if (s && typeof s === "object") {
        if (!Array.isArray(s.done)) s.done = [];
        if (!s.quiz || typeof s.quiz !== "object") s.quiz = {};
        return s;
      }
    } catch (e) {}
    return defaultStore();
  }
  function saveStore() {
    localStorage.setItem(STORE_KEY, JSON.stringify(store));
    renderProgress();
    renderSidebar();
    if (currentChapter) renderQuizArea(currentChapter);
  }

  /* ---------- DOM ---------- */
  function $(sel) { return document.querySelector(sel); }
  var view = $("#view");
  var currentChapter = null;

  /* ---------- 工具 ---------- */
  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* 把段落里的 `代码` 渲染成行内代码 */
  function inlineCode(text) {
    return esc(text).replace(/`([^`]+)`/g, '<code class="ic">$1</code>');
  }

  /* ---------- Java 语法高亮 ---------- */
  function highlightJava(code) {
    var keywords =
      "public|private|protected|class|interface|enum|static|final|void|if|else|for|while|do|switch|case|default|break|continue|return|new|this|super|null|true|false|try|catch|finally|throw|throws|extends|implements|abstract|instanceof|import|package";
    var types = "int|double|float|long|byte|short|boolean|char|String";
    var re = new RegExp(
      "(\\/\\/[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/)" +          // 注释
      "|(\"(?:[^\"\\\\]|\\\\.)*\")" +                      // 字符串
      "|\\b(" + keywords + ")\\b" +                        // 关键字
      "|\\b(" + types + ")\\b" +                           // 类型
      "|\\b(\\d+(?:\\.\\d+)?)\\b" +                        // 数字
      "|\\b([A-Za-z_][A-Za-z0-9_]*)(?=\\s*\\()",           // 方法名
      "g"
    );
    return esc(code).replace(re, function (m, com, str, k, t, num, fn) {
      if (com) return '<span class="tok-com">' + com + "</span>";
      if (str) return '<span class="tok-str">' + str + "</span>";
      if (k) return '<span class="tok-kw">' + k + "</span>";
      if (t) return '<span class="tok-type">' + t + "</span>";
      if (num) return '<span class="tok-num">' + num + "</span>";
      if (fn) return '<span class="tok-fn">' + fn + "</span>";
      return m;
    });
  }

  /* ---------- 进度 ---------- */
  function renderProgress() {
    var total = COURSE.chapters.length;
    var doneCount = store.done.length;
    var pct = total ? Math.round((doneCount / total) * 100) : 0;
    $("#progressFill").style.width = pct + "%";
    $("#progressText").textContent = pct + "%";
  }

  function isDone(chId) { return store.done.indexOf(chId) !== -1; }

  function markDone(chId) {
    if (!isDone(chId)) {
      store.done.push(chId);
      saveStore();
      celebrate();
      renderChapter(chId);
    }
  }

  /* ---------- 侧边栏 ---------- */
  function renderSidebar() {
    var list = $("#chapterList");
    list.innerHTML = COURSE.chapters
      .map(function (ch) {
        var active = currentChapter && currentChapter.id === ch.id;
        var done = isDone(ch.id);
        return (
          '<a class="ch-item ' + (active ? "active" : "") + (done ? " done" : "") +
          '" href="#/ch/' + ch.id + '">' +
          '<span class="ch-num">' + ch.id + "</span>" +
          '<span class="ch-name">' + esc(ch.title) + "</span>" +
          '<span class="ch-state">' + (done ? "✅" : "") + "</span></a>"
        );
      })
      .join("");
  }

  /* ---------- 渲染：首页 ---------- */
  function renderHome() {
    currentChapter = null;
    var total = COURSE.chapters.length;
    var doneCount = store.done.length;
    var firstNotDone = COURSE.chapters.find(function (ch) { return !isDone(ch.id); });

    var cards = COURSE.chapters
      .map(function (ch) {
        var done = isDone(ch.id);
        return (
          '<a class="ch-card ' + (done ? "done-card" : "") + '" href="#/ch/' + ch.id + '">' +
          '<span class="ch-ic">' + ch.icon + "</span>" +
          "<h3>" + esc(ch.title) +
          '<span class="ch-no">第' + ch.id + "章</span></h3>" +
          "<p>" + esc(ch.desc) + "</p>" +
          '<div class="ch-meta"><span>⏱ ' + ch.minutes + " 分钟</span>" +
          (done ? '<span class="done-tag">✅ 已完成</span>' : "<span>" + ch.quiz.length + " 道测验</span>") +
          "</div></a>"
        );
      })
      .join("");

    var continueHtml = "";
    if (firstNotDone) {
      continueHtml =
        '<div class="continue-box"><div><div class="cb-text">继续学习 → 第' + firstNotDone.id + "章 " + esc(firstNotDone.title) + '</div>' +
        '<div class="cb-sub">你已完成 ' + doneCount + " / " + total + " 章，加油！</div></div>" +
        '<a class="btn btn-primary" href="#/ch/' + firstNotDone.id + '">继续学习</a></div>';
    } else if (total > 0) {
      continueHtml =
        '<div class="continue-box"><div class="cb-text">🎉 恭喜！你已经完成了全部 ' + total + " 章！记得复习和动手练习哦。</div>" +
        '<a class="btn btn-primary" href="#/ch/1">从头复习</a></div>';
    }

    view.innerHTML =
      '<section class="hero">' +
      '<span class="hero-badge">📖 零基础 · 完全免费 · 适合小白</span>' +
      "<h1>从 0 开始，学会 Java 入门</h1>" +
      "<p>这不是一本枯燥的教材，而是一个会陪你一步步走完的学习网站。每章都有大白话讲解、能跑通的代码示例、小测验和动手练习。学完这 " + total + " 章，你就入门 Java 了。</p>" +
      '<div class="hero-actions">' +
      '<a class="btn btn-primary" href="#/ch/1">🚀 开始第一课</a>' +
      '<a class="btn btn-ghost" href="#roadmap">🗺 查看学习路线</a></div></section>' +

      '<div class="stats-row">' +
      '<div class="stat"><b>' + total + "</b><span>章节课程</span></div>" +
      '<div class="stat"><b>' + COURSE.totalQuiz() + "</b><span>道测验题</span></div>" +
      '<div class="stat"><b>' + COURSE.totalMinutes() + "</b><span>分钟总时长</span></div>" +
      '<div class="stat"><b>' + doneCount + "/" + total + "</b><span>已完成</span></div></div>" +

      '<h2 id="roadmap" class="roadmap-title">🗺 学习路线</h2>' +
      '<p class="roadmap-sub">按顺序学习，每章都是下一章的基础。跟着做，别跳章。</p>' +
      '<div class="roadmap-grid">' + cards + "</div>" +
      continueHtml +
      '<p class="footer-note">☕ 从0学Java · 为完全没接触过编程的你而做</p>';
  }

  /* ---------- 渲染：章节 ---------- */
  function renderChapter(id) {
    var ch = COURSE.chapters.find(function (c) { return c.id === id; });
    if (!ch) { renderHome(); return; }
    currentChapter = ch;

    var secHtml = ch.sections.map(renderSection).join("");
    var quizHtml = renderQuiz(ch);
    var done = isDone(ch.id);
    var doneBanner = done
      ? '<div class="done-banner show"><span class="banner-ic">🎉</span> 恭喜完成本章！你已经掌握「' + esc(ch.title) + '」</div>'
      : '<div class="done-banner"><span class="banner-ic">🎉</span> 完成下面的小测验，本章就算通关啦！</div>';

    var idx = COURSE.chapters.indexOf(ch);
    var prev = COURSE.chapters[idx - 1];
    var next = COURSE.chapters[idx + 1];
    var nav =
      (prev ? '<a class="btn btn-prev" href="#/ch/' + prev.id + '">← ' + esc(prev.title) + "</a>" : '<span class="btn btn-prev" style="opacity:.35">← 没有了</span>') +
      (next ? '<a class="btn btn-next" href="#/ch/' + next.id + '">下一章：' + esc(next.title) + " →</a>" : '<span class="btn btn-next" style="opacity:.6">🎉 你已经到最后一章了</span>');

    view.innerHTML =
      '<header class="chapter-header">' +
      '<span class="ch-kicker">' + ch.icon + " 第 " + ch.id + " 章</span>" +
      "<h1>" + esc(ch.title) + "</h1>" +
      "<p class=\"ch-desc\">" + esc(ch.desc) + "</p>" +
      '<div class="ch-meta">' +
      '<span class="chip">⏱ 约 ' + ch.minutes + " 分钟</span>" +
      '<span class="chip">📝 ' + ch.quiz.length + " 道测验</span>" +
      (done ? '<span class="chip" style="color:#1d6b34;background:#e9f8ee;border-color:#bfe6cc">✅ 已完成</span>' : "") +
      "</div></header>" +
      '<div class="sec">' + secHtml + "</div>" +
      doneBanner +
      '<section class="quiz-section" id="quiz">' +
      '<h2 class="quiz-title">📝 本章小测验</h2>' +
      '<p class="quiz-sub">检验一下自己有没有真的学会。答对本章全部题目即可通关。</p>' +
      '<div id="quizArea">' + quizHtml + "</div></section>" +
      '<div class="nav-btns">' + nav + "</div>" +
      '<p class="footer-note">☕ 从0学Java · 慢慢来，比较快</p>';

    renderProgress();
    renderSidebar();
    window.scrollTo(0, 0);
  }

  /* ---------- 渲染：区块 ---------- */
  function renderSection(s) {
    switch (s.type) {
      case "h2":
        return '<h2 class="sec-heading">' + inlineCode(s.text) + "</h2>";
      case "p":
        return "<p>" + inlineCode(s.text) + "</p>";
      case "note":
        var icon = s.kind === "warn" ? "⚠️" : s.kind === "tip" ? "💡" : "📌";
        return '<div class="note ' + (s.kind || "info") + '"><span class="note-ic">' + icon + "</span><div>" + inlineCode(s.text) + "</div></div>";
      case "list":
        return "<ul>" + s.items.map(function (i) { return "<li>" + inlineCode(i) + "</li>"; }).join("") + "</ul>";
      case "ol":
        return "<ol>" + s.items.map(function (i) { return "<li>" + inlineCode(i) + "</li>"; }).join("") + "</ol>";
      case "table":
        return (
          '<div style="overflow-x:auto"><table>' +
          "<thead><tr>" + s.headers.map(function (h) { return "<th>" + inlineCode(h) + "</th>"; }).join("") + "</tr></thead>" +
          "<tbody>" + s.rows.map(function (r) {
            return "<tr>" + r.map(function (c) { return "<td>" + inlineCode(c) + "</td>"; }).join("") + "</tr>";
          }).join("") + "</tbody></table></div>"
        );
      case "code":
        var out = s.output ? '<div class="code-output">' + esc(s.output) + "</div>" : "";
        return (
          '<div class="code-block">' +
          '<div class="code-head"><span class="lang-tag">' + (s.lang || "Java") + "</span>" +
          '<button class="copy-btn" type="button">📋 复制代码</button></div>' +
          "<pre>" + highlightJava(s.code) + "</pre>" + out + "</div>"
        );
      case "task":
        var hint = s.hint ? '<div class="task-hint">💡 提示：' + inlineCode(s.hint) + "</div>" : "";
        return (
          '<div class="task"><div class="task-ic">🛠️</div>' +
          "<h3>动手练习：</h3>" + (s.text ? "<p>" + inlineCode(s.text) + "</p>" : "") +
          (s.code ? renderSection({ type: "code", code: s.code, lang: s.lang || "Java" }) : "") +
          hint + "</div>"
        );
      default:
        return "";
    }
  }

  /* ---------- 渲染：测验 ---------- */
  function renderQuiz(ch) {
    var answers = store.quiz[ch.id] || {};
    return ch.quiz.map(function (q, qi) {
      var chosen = answers[qi];
      var opts = q.options
        .map(function (opt, oi) {
          var cls = "";
          var disabled = "";
          if (chosen !== undefined) {
            disabled = "disabled";
            if (oi === q.answer) cls = "correct";
            else if (oi === chosen) cls = "wrong";
          }
          return '<button class="quiz-opt ' + cls + '" type="button" data-q="' + qi + '" data-o="' + oi + '" ' + disabled + ">" +
            String.fromCharCode(65 + oi) + ". " + esc(opt) + "</button>";
        })
        .join("");
      var explain = "";
      if (chosen !== undefined) {
        var right = chosen === q.answer;
        explain =
          '<div class="quiz-explain show"><b class="' + (right ? "" : "no") + '">' +
          (right ? "✅ 答对了！" : "❌ 答错了。") + "</b> " + inlineCode(q.explain) + "</div>";
      }
      return (
        '<div class="quiz-card">' +
        '<div class="quiz-q"><span class="q-no">第 ' + (qi + 1) + " 题</span>" + inlineCode(q.q) + "</div>" +
        '<div class="quiz-options">' + opts + "</div>" + explain + "</div>"
      );
    }).join("");
  }

  function renderQuizArea(ch) {
    var area = $("#quizArea");
    if (area) area.innerHTML = renderQuiz(ch);
    var banner = document.querySelector(".done-banner");
    if (banner) {
      if (isDone(ch.id)) {
        banner.classList.add("show");
        banner.innerHTML = '<span class="banner-ic">🎉</span> 恭喜完成本章！你已经掌握「' + esc(ch.title) + "」";
      } else if (chapterQuizComplete(ch)) {
        markDone(ch.id);
        return;
      } else {
        banner.innerHTML = '<span class="banner-ic">🎉</span> 完成下面的小测验，本章就算通关啦！';
      }
    }
  }

  function chapterQuizComplete(ch) {
    var answers = store.quiz[ch.id] || {};
    return ch.quiz.length > 0 && ch.quiz.every(function (q, i) {
      return answers[i] !== undefined && answers[i] === q.answer;
    });
  }

  /* ---------- 交互事件 ---------- */
  view.addEventListener("click", function (e) {
    // 复制代码
    var copyBtn = e.target.closest(".copy-btn");
    if (copyBtn) {
      var pre = copyBtn.closest(".code-block").querySelector("pre");
      var code = pre.textContent;
      doCopy(code, copyBtn);
      return;
    }
    // 答题
    var opt = e.target.closest(".quiz-opt");
    if (opt && !opt.disabled && currentChapter) {
      var qi = +opt.getAttribute("data-q");
      var oi = +opt.getAttribute("data-o");
      var ans = store.quiz[currentChapter.id] || {};
      ans[qi] = oi;
      store.quiz[currentChapter.id] = ans;
      saveStore();
      if (chapterQuizComplete(currentChapter)) markDone(currentChapter.id);
    }
  });

  function doCopy(text, btn) {
    function ok() {
      btn.textContent = "✅ 已复制";
      btn.classList.add("copied");
      setTimeout(function () {
        btn.textContent = "📋 复制代码";
        btn.classList.remove("copied");
      }, 1600);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(ok, function () { fallbackCopy(text, ok); });
    } else {
      fallbackCopy(text, ok);
    }
  }
  function fallbackCopy(text, ok) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); ok(); } catch (e) {}
    document.body.removeChild(ta);
  }

  /* ---------- 庆祝彩带 ---------- */
  function celebrate() {
    var colors = ["#f08a24", "#ffb45c", "#3b5bdb", "#2f9e44", "#ff6b6b", "#ffd93d", "#c792ea"];
    for (var i = 0; i < 46; i++) {
      var el = document.createElement("div");
      el.className = "confetti";
      el.style.left = Math.random() * 100 + "vw";
      el.style.background = colors[Math.floor(Math.random() * colors.length)];
      el.style.width = 6 + Math.random() * 8 + "px";
      el.style.height = 8 + Math.random() * 8 + "px";
      el.style.animationDuration = 1.6 + Math.random() * 1.6 + "s";
      el.style.animationDelay = Math.random() * 0.5 + "s";
      document.body.appendChild(el);
      (function (node) { setTimeout(function () { node.remove(); }, 3600); })(el);
    }
  }

  /* ---------- 路由 ---------- */
  function route() {
    var hash = location.hash || "#/";
    if (hash === "#/" || hash === "#") {
      renderHome();
    } else {
      var m = hash.match(/^#\/ch\/(\d+)$/);
      if (m) renderChapter(+m[1]);
      else renderHome();
    }
    closeMenu();
  }

  /* ---------- 移动端菜单 ---------- */
  function openMenu() {
    $("#sidebar").classList.add("open");
    $("#overlay").classList.add("show");
  }
  function closeMenu() {
    $("#sidebar").classList.remove("open");
    $("#overlay").classList.remove("show");
  }

  /* ---------- 初始化 ---------- */
  function init() {
    renderProgress();
    renderSidebar();
    route();
    window.addEventListener("hashchange", route);

    $("#menuBtn").addEventListener("click", function () {
      if ($("#sidebar").classList.contains("open")) closeMenu();
      else openMenu();
    });
    $("#overlay").addEventListener("click", closeMenu);
    $("#chapterList").addEventListener("click", function (e) {
      if (e.target.closest(".ch-item")) closeMenu();
    });

    $("#resetBtn").addEventListener("click", function () {
      if (confirm("确定要清空所有学习进度吗？")) {
        store = defaultStore();
        saveStore();
        route();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();