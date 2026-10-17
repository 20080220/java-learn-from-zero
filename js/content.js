/* =====================================================
   从0学Java · 课程内容（第1-3章）
   ===================================================== */
var COURSE = {
  title: "从0学Java",
  totalQuiz: function () {
    return this.chapters.reduce(function (n, ch) { return n + ch.quiz.length; }, 0);
  },
  totalMinutes: function () {
    return this.chapters.reduce(function (n, ch) { return n + ch.minutes; }, 0);
  },
  chapters: [

    /* ================= 第 1 章 ================= */
    {
      id: 1,
      title: "Java 是什么？为什么要学它？",
      icon: "🌱",
      minutes: 8,
      desc: "用大白话认识 Java：它是什么、能做什么、为什么值得学。",
      sections: [
        { type: "h2", text: "先回答一个问题：编程是什么？" },
        { type: "p", text: "电脑本身很笨，只会老老实实执行指令。编程（写代码）就是：用「人能看懂的代码」，告诉电脑「一步一步做什么」。程序员写好的代码，会被翻译成电脑能理解的语言，然后电脑照做。" },
        { type: "p", text: "所以学编程，学的不是「背代码」，而是「学会用代码指挥电脑解决实际问题」——这和学开车很像：先懂规则，再上手练。" },
        { type: "h2", text: "Java 是什么？" },
        { type: "p", text: "Java 是一门编程语言，诞生于 1995 年，至今仍然是世界上最流行的语言之一。它最大的特点是一句话：`一次编写，到处运行`。" },
        { type: "p", text: "什么意思呢？同一份 Java 代码，几乎不需要修改，就能在 Windows、Mac、Linux 甚至手机上运行。这是它当年能火遍全球的绝招。" },
        { type: "h2", text: "为什么 Java 值得学？" },
        { type: "list", items: [
          "语法严谨规范，特别适合零基础的人打地基",
          "大公司都在用：银行、电商、政务系统、安卓 App",
          "工作机会多，是后端开发的主流语言之一",
          "生态成熟，遇到问题随便一搜就有答案"
        ] },
        { type: "h2", text: "学完 Java 能做什么？" },
        { type: "list", items: [
          "安卓 App（Android 系统主要用 Java 或 Kotlin 开发）",
          "网站后端（服务器上处理数据的程序，比如购物网站的下单逻辑）",
          "大型企业系统（银行、保险、政务等，稳字当头）",
          "游戏（著名游戏《我的世界》就是用 Java 写的）"
        ] },
        { type: "h2", text: "学 Java 需要准备什么？" },
        { type: "p", text: "真正开始写代码需要两样东西：`JDK`（让电脑能运行 Java 的软件）和 `IDE`（写代码的软件，比如 IntelliJ IDEA）。" },
        { type: "p", text: "不过你现在**暂时不用急着安装**——本网站第 1~9 章教的是「代码怎么写」，第 10 章会手把手带你安装和运行你的第一个 Java 程序。" },
        { type: "note", kind: "tip", text: "现在你不需要安装任何软件，先专注理解概念就好。就像考驾照之前，先看科目一的教材一样。" },
        { type: "h2", text: "本章小结" },
        { type: "list", items: [
          "编程 = 用代码指挥电脑做事",
          "Java 是一门流行、稳定、用途广泛的语言",
          "Java 的特点是「一次编写，到处运行」",
          "打好 Java 基础，后面学安卓、后端都很顺"
        ] }
      ],
      quiz: [
        { q: "Java 最著名的特点是什么？", options: ["一次编写，到处运行", "只能用来做网页", "不需要安装任何东西", "只能在苹果电脑上运行"], answer: 0, explain: "Java 通过 JVM（Java 虚拟机）让同一份代码能在不同操作系统上运行，这就是「一次编写，到处运行」。" },
        { q: "下面哪一项 Java 做不了？", options: ["安卓 App", "网站后端", "直接控制电饭煲内部的芯片", "大型企业系统"], answer: 2, explain: "直接操作硬件（比如嵌入式芯片）通常用 C/C++ 这类语言，Java 更擅长软件层的开发。" },
        { q: "学编程最该有的心态是？", options: ["把代码全背下来", "理解概念 + 多动手练习", "只看书不动手", "指望一天学会"], answer: 1, explain: "编程是「手艺活」，像游泳一样，光看是学不会的，必须自己动手敲代码。" }
      ]
    },

    /* ================= 第 2 章 ================= */
    {
      id: 2,
      title: "第一个程序：Hello World",
      icon: "👋",
      minutes: 10,
      desc: "写出你人生中第一个 Java 程序，并逐行看懂它。",
      sections: [
        { type: "p", text: "几乎所有学编程的人，第一个程序都是 `Hello World`——让电脑跟你打个招呼。它虽然简单，但意义重大：你写的代码，真的能运行了！" },
        { type: "code", title: "第一个程序", lang: "Java", code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}` },
        { type: "h2", text: "一行一行看懂它" },
        { type: "table", headers: ["代码", "它做了什么"], rows: [
          ["`public class HelloWorld`", "声明一个「类」，名字叫 HelloWorld。Java 程序的最小单位就是类。"],
          ["`{ }`", "花括号把属于这个类的内容「包」起来，成对出现。"],
          ["`public static void main(String[] args)`", "程序入口。Java 运行时从这里开始执行。现在先记住：main 是入口。"],
          ["`System.out.println(\"...\")`", "在屏幕上打印一行字。println = print line（打印一行）。"],
          ["`;`", "分号表示「这句话说完了」。Java 里每条语句结束都要写分号。"]
        ] },
        { type: "note", kind: "warn", text: "注意大小写！Java 区分大小写，`Main` 和 `main` 是两个不同的名字。`System`、`println` 也都有固定写法，写错程序就运行不了。" },
        { type: "note", kind: "info", text: "类名必须和文件名一致。如果类名叫 `HelloWorld`，文件就要保存为 `HelloWorld.java`。这是 Java 的硬性规定。" },
        { type: "h2", text: "动手试试" },
        { type: "task", text: "把类名 `HelloWorld` 改成你的英文名（比如 `XiaoMing`），再把打印的内容改成「你好，我是xxx」。", hint: "改两处：① `class` 后面和文件名对应的类名；② `println` 括号里的文字。注意类名用大写字母开头，文字用双引号包住。" },
        { type: "h2", text: "本章小结" },
        { type: "list", items: [
          "Java 程序由「类」组成，类名要跟文件名一致",
          "`main` 方法是程序的入口，Java 从它开始执行",
          "`System.out.println()` 负责打印一行字",
          "每条语句以分号 `;` 结尾"
        ] }
      ],
      quiz: [
        { q: "Java 程序的执行入口是？", options: ["class 关键字", "main 方法", "println 方法", "System 类"], answer: 1, explain: "Java 运行时从 `main` 方法开始执行，所以它叫「入口」。没有 main，程序就跑不起来。" },
        { q: "想在屏幕上打印一行字，应该用？", options: ["System.out.print()（不换行）", "System.out.println()", "Console.write()", "print.line()"], answer: 1, explain: "`println` = print line，打印内容并换行；`print` 打印但不换行。" },
        { q: "Java 里每条语句结束要写什么？", options: ["句号 .", "分号 ;", "逗号 ,", "什么都不用写"], answer: 1, explain: "分号 `;` 表示一条语句结束。漏写分号是最常见的编译错误。" }
      ]
    },

    /* ================= 第 3 章 ================= */
    {
      id: 3,
      title: "变量和数据类型",
      icon: "📦",
      minutes: 12,
      desc: "学会把数据装进「盒子」里：整数、小数、文字、真假。",
      sections: [
        { type: "p", text: "程序要处理各种数据：名字、年龄、成绩、价格……我们把数据装进「变量」里。可以把变量想象成一个**贴了标签的盒子**：盒子里放数据，标签是名字。" },
        { type: "code", title: "认识五种常用数据类型", lang: "Java", code: `public class VariableDemo {
    public static void main(String[] args) {
        int age = 18;             // 整数
        double price = 9.9;       // 小数
        boolean passed = true;    // 真 / 假
        char grade = 'A';         // 单个字符（单引号）
        String name = "小明";      // 一串文字（双引号）

        System.out.println(name + "今年" + age + "岁");
        System.out.println("这本书卖" + price + "元");
        System.out.println("考试及格了吗？" + passed);
    }
}` },
        { type: "h2", text: "常用数据类型一览" },
        { type: "table", headers: ["类型", "存什么", "例子"], rows: [
          ["`int`", "整数", "`int age = 18;`"],
          ["`double`", "小数", "`double price = 9.9;`"],
          ["`boolean`", "真 / 假", "`boolean ok = true;`"],
          ["`char`", "单个字符，用单引号", "`char c = 'A';`"],
          ["`String`", "一串文字，用双引号", "`String name = \"小明\";`"]
        ] },
        { type: "note", kind: "warn", text: "注意引号！`char` 用单引号 `'A'`，`String` 用双引号 `\"小明\"`。写混了，编译器会立刻报错。" },
        { type: "h2", text: "变量怎么命名" },
        { type: "list", items: [
          "只能由字母、数字、下划线 `_`、美元符号 `$` 组成",
          "不能以数字开头（`2name` 是错的）",
          "不能使用 Java 关键字（比如 `class`、`int`、`if`）",
          "推荐「驼峰命名法」：`myAge`、`studentName`——第一个单词小写，后面每个单词首字母大写"
        ] },
        { type: "h2", text: "变量是可以改变的" },
        { type: "code", title: "重新赋值", lang: "Java", code: `int score = 60;
System.out.println("第一次成绩：" + score);

score = 90;   // 重新赋值：盒子里换了一个数
System.out.println("第二次成绩：" + score);` },
        { type: "note", kind: "info", text: "其实 `String` 不是基本类型，它是一个「类」（第 9 章会详细讲）。但你暂时把它当成最常用的文字类型用，完全没问题。" },
        { type: "task", text: "创建两个变量：一个 `String` 存你的名字，一个 `int` 存你的年龄，然后用 `println` 打印「我叫xxx，今年xx岁」。", hint: "照着变量示例写：`String name = \"你的名字\";` 然后用 `System.out.println(\"我叫\" + name + \"，今年\" + age + \"岁\");`" },
        { type: "h2", text: "本章小结" },
        { type: "list", items: [
          "变量 = 贴了标签的盒子，用来存数据",
          "常用类型：`int` 整数、`double` 小数、`boolean` 真假、`char` 单字符、`String` 文字",
          "`String` 用双引号，`char` 用单引号",
          "变量可以重新赋值，命名用驼峰命名法"
        ] }
      ],
      quiz: [
        { q: "下面哪个能正确声明一个整数变量？", options: ["int age = \"18\";", "int age = 18;", "number age = 18;", "int 18 = age;"], answer: 1, explain: "声明整数变量：类型 `int` + 名字 + `=` + 整数。`\"18\"` 是文字不是整数，`number` 不是 Java 的类型，数字不能当变量名。" },
        { q: "字符串（一串文字）应该用什么符号包起来？", options: ["单引号 ' '", "双引号 \" \"", "方括号 [ ]", "不用符号"], answer: 1, explain: "`String` 用双引号：`\"你好\"`。单引号是给 `char` 用的。" },
        { q: "下面哪个变量名是合法的？", options: ["2name", "my-name", "myAge", "class"], answer: 2, explain: "`myAge` 符合驼峰命名法。`2name` 数字开头、`my-name` 含横线、`class` 是关键字，都不合法。" }
      ]
    }
,    /* ================= 第 4 章 ================= */
    {
      id: 4,
      title: "运算符：让程序会算数",
      icon: "➕",
      minutes: 10,
      desc: "加减乘除、比较大小、逻辑判断——程序怎么「算」。",
      sections: [
        { type: "h2", text: "算术运算符" },
        { type: "table", headers: ["符号", "含义", "例子", "结果"], rows: [
          ["`+`", "加", "`3 + 2`", "5"],
          ["`-`", "减", "`5 - 2`", "3"],
          ["`*`", "乘", "`3 * 4`", "12"],
          ["`/`", "除", "`7 / 2`", "3（整数除法）"],
          ["`%`", "取余", "`7 % 2`", "1"]
        ] },
        { type: "note", kind: "warn", text: "整数相除 `/` 会丢掉小数部分！`7 / 2` 的结果是 `3`，不是 `3.5`。想得到小数，至少让一边是 `double`，比如 `7.0 / 2`。" },
        { type: "code", title: "算术运算符实战", lang: "Java", code: `public class OperatorDemo {
    public static void main(String[] args) {
        int a = 7, b = 2;
        System.out.println(a + b);    // 9
        System.out.println(a - b);    // 5
        System.out.println(a * b);    // 14
        System.out.println(a / b);    // 3（整数除法）
        System.out.println(a % b);    // 1（余数）
        System.out.println(7.0 / 2);  // 3.5（小数除法）
    }
}` },
        { type: "h2", text: "比较运算符（结果只有 true / false）" },
        { type: "table", headers: ["符号", "含义", "例子", "结果"], rows: [
          ["`==`", "等于", "`5 == 5`", "true"],
          ["`!=`", "不等于", "`5 != 3`", "true"],
          ["`>`", "大于", "`5 > 3`", "true"],
          ["`<`", "小于", "`5 < 3`", "false"],
          ["`>=`", "大于等于", "`5 >= 5`", "true"],
          ["`<=`", "小于等于", "`5 <= 3`", "false"]
        ] },
        { type: "note", kind: "warn", text: "判断「相等」要用**两个等号** `==`！一个等号 `=` 是赋值（把值装进变量），两个等号 `==` 才是「是否相等」。这是新手最常犯的错。" },
        { type: "h2", text: "逻辑运算符" },
        { type: "table", headers: ["符号", "含义", "规则"], rows: [
          ["`&&`", "并且", "两边都 true，结果才是 true"],
          ["`||`", "或者", "只要有一边 true，结果就是 true"],
          ["`!`", "取反", "true 变 false，false 变 true"]
        ] },
        { type: "code", title: "逻辑运算符实战", lang: "Java", code: `int age = 20;
boolean adult = age >= 18;          // true
boolean hasTicket = true;
boolean canEnter = adult && hasTicket;  // true（成年 且 有票）
System.out.println("能入场吗？" + canEnter);` },
        { type: "task", text: "先心算：`10 % 3` 等于多少？再写一行代码打印 `(10 > 5) && (10 < 20)` 的结果，猜猜是 true 还是 false，然后运行验证。", hint: "`10 % 3`：10 除以 3 余 1。逻辑表达式：`10 > 5` 是 true，`10 < 20` 也是 true，`true && true` 结果是 true。" },
        { type: "h2", text: "本章小结" },
        { type: "list", items: [
          "算术：`+ - * / %`，整数相除会丢小数",
          "比较：`== != > < >= <=`，结果只有 true/false",
          "逻辑：`&&` 并且、`||` 或者、`!` 取反",
          "`=` 是赋值，`==` 才是判断相等"
        ] }
      ],
      quiz: [
        { q: "`7 / 2` 在 Java 里的结果是？", options: ["3.5", "3", "4", "报错"], answer: 1, explain: "两个整数相除，结果还是整数（丢掉小数部分），所以 `7 / 2` 是 3。" },
        { q: "判断两个数是否相等，用哪个符号？", options: ["=", "==", "===", "!="], answer: 1, explain: "`=` 是赋值，`==` 才是比较是否相等。`===` 是 JavaScript 的写法，Java 里没有。" },
        { q: "`true && false` 的结果是？", options: ["true", "false", "编译错误", "0"], answer: 1, explain: "`&&` 表示「并且」，两边都 true 才为 true，所以 `true && false` 是 false。" }
      ]
    },

    /* ================= 第 5 章 ================= */
    {
      id: 5,
      title: "条件判断：if / else",
      icon: "🔀",
      minutes: 10,
      desc: "让程序学会「看情况办事」：如果...否则...",
      sections: [
        { type: "p", text: "现实里我们经常做选择：「如果下雨就带伞，否则不带」。程序也一样，Java 用 `if / else` 让代码根据条件走不同的路。" },
        { type: "code", title: "成绩等级判断", lang: "Java", code: `public class IfDemo {
    public static void main(String[] args) {
        int score = 85;

        if (score >= 90) {
            System.out.println("优秀！");
        } else if (score >= 60) {
            System.out.println("及格了，继续加油");
        } else {
            System.out.println("不及格，需要努力");
        }
    }
}` },
        { type: "h2", text: "语法拆解" },
        { type: "list", items: [
          "`if (条件)`：条件为 true，就执行后面花括号 `{ }` 里的代码",
          "`else if (条件)`：可以写多个，从上往下检查，命中一个就停止",
          "`else`：表示「以上都不满足时」执行，只能有一个，写在最后",
          "花括号里的代码缩进（前面空几格）是为了好看、好读，不影响运行"
        ] },
        { type: "h2", text: "经典例子：判断奇偶数" },
        { type: "code", title: "奇数还是偶数", lang: "Java", code: `int num = 7;
if (num % 2 == 0) {
    System.out.println(num + " 是偶数");
} else {
    System.out.println(num + " 是奇数");
}` },
        { type: "note", kind: "info", text: "用 `% 2` 取余：余 0 就是偶数，余 1 就是奇数。这是非常常用的技巧，请记住它。" },
        { type: "h2", text: "if 也能嵌套" },
        { type: "code", title: "嵌套 if（if 里面再套 if）", lang: "Java", code: `int age = 22;
if (age >= 18) {
    if (age >= 60) {
        System.out.println("长辈您好");
    } else {
        System.out.println("成年啦");
    }
} else {
    System.out.println("还未成年");
}` },
        { type: "note", kind: "warn", text: "嵌套层数太多会让代码很难读。一般超过 2 层，就想想能不能换个写法（比如用 `else if` 或者后面学到的 `switch`）。" },
        { type: "task", text: "写一个程序：声明一个 `int` 变量存你的成绩，用 if/else 输出——90 分及以上「优秀」、60~89「及格」、60 以下「不及格」。", hint: "三个分支用 `if (score >= 90)` + `else if (score >= 60)` + `else`，参照本章第一个代码示例。" },
        { type: "h2", text: "本章小结" },
        { type: "list", items: [
          "`if` 根据条件（true/false）决定走哪条路",
          "`else if` 检查更多情况，从上往下命中即停",
          "`else` 兜底：以上都不满足时执行",
          "条件里常配合比较运算符 `>=`、`==`、`%` 等"
        ] }
      ],
      quiz: [
        { q: "`if` 后面括号里放什么？", options: ["一段文字", "一个条件（结果是 true 或 false）", "一个方法名", "什么都不放"], answer: 1, explain: "`if (条件)` 里的条件必须能算出 true 或 false，比如 `score >= 60`。" },
        { q: "下面代码会输出什么？`int a = 5; if (a > 10) { ... \"大\" } else { ... \"小\" }`", options: ["大", "小", "两个都输出", "报错"], answer: 1, explain: "`a = 5` 不满足 `a > 10`，所以走 `else` 分支，输出「小」。" },
        { q: "`else if` 的作用是？", options: ["结束程序", "检查更多条件分支", "让代码循环执行", "声明新变量"], answer: 1, explain: "`else if` 用来在第一个条件不满足时，继续检查下一个条件，可以有多个。" }
      ]
    },

    /* ================= 第 6 章 ================= */
    {
      id: 6,
      title: "循环：for / while",
      icon: "🔁",
      minutes: 12,
      desc: "让程序「重复做一件事」，这是电脑最擅长的事。",
      sections: [
        { type: "p", text: "让电脑重复做一件事，是编程里最爽的时刻——你写 3 行代码，电脑能帮你打印 100 遍。这就是「循环」。" },
        { type: "h2", text: "while 循环：先判断，再执行" },
        { type: "code", title: "while 示例", lang: "Java", code: `int i = 1;                  // ① 起点
while (i <= 5) {            // ② 条件：只要 i <= 5 就继续
    System.out.println("第" + i + "次");
    i++;                    // ③ 每次让 i 加 1，走向结束
}` },
        { type: "note", kind: "warn", text: "千万不要忘了让条件「走向结束」的那一行（比如 `i++`），否则会变成**死循环**，程序永远停不下来。" },
        { type: "h2", text: "for 循环：最常用的循环" },
        { type: "code", title: "for 示例", lang: "Java", code: `for (int i = 1; i <= 5; i++) {
    System.out.println("第" + i + "次");
}` },
        { type: "h2", text: "for 的三个部分" },
        { type: "table", headers: ["部分", "作用", "例子"], rows: [
          ["`int i = 1`", "初始化：从哪开始", "从 1 开始"],
          ["`i <= 5`", "条件：满足才继续", "到 5 为止"],
          ["`i++`", "步进：每次变多少", "每次加 1"]
        ] },
        { type: "h2", text: "经典练习：累加求和" },
        { type: "code", title: "计算 1+2+...+100", lang: "Java", code: `int sum = 0;
for (int i = 1; i <= 100; i++) {
    sum = sum + i;    // 把每个 i 累加到 sum 里
}
System.out.println("1+2+...+100 = " + sum);  // 5050` },
        { type: "note", kind: "info", text: "`sum = sum + i` 的意思是：把 `sum` 原来的值和 `i` 相加，再存回 `sum`。这种「累加」模式在编程里出现频率极高。" },
        { type: "h2", text: "break 和 continue" },
        { type: "code", title: "提前结束 / 跳过本次", lang: "Java", code: `// break：遇到 5 就立刻结束整个循环
for (int i = 1; i <= 10; i++) {
    if (i == 5) break;
    System.out.print(i + " ");   // 输出：1 2 3 4
}
System.out.println();

// continue：跳过 3，继续下一次
for (int i = 1; i <= 5; i++) {
    if (i == 3) continue;
    System.out.print(i + " ");   // 输出：1 2 4 5
}` },
        { type: "task", text: "用 for 循环打印 1 到 10 的平方：1、4、9、16……100。", hint: "循环变量从 1 到 10，每次打印 `i * i`。输出格式：`System.out.println(i + \" 的平方是 \" + (i * i));`" },
        { type: "h2", text: "本章小结" },
        { type: "list", items: [
          "`while`：先判断条件，true 才执行",
          "`for`：把「开始、条件、步进」写在一行，最常用",
          "循环里必须有让条件走向结束的语句，否则死循环",
          "`break` 结束整个循环，`continue` 跳过本次"
        ] }
      ],
      quiz: [
        { q: "`for (int i = 1; i <= 3; i++)` 这个循环会执行几次？", options: ["2 次", "3 次", "4 次", "无限次"], answer: 1, explain: "i 从 1 到 3，共 3 次（1、2、3）。i=4 时条件 `4<=3` 为 false，循环停止。" },
        { q: "如果循环里忘了让条件走向结束，会发生什么？", options: ["正常运行", "死循环，程序停不下来", "程序自动跳过循环", "只有一次报错"], answer: 1, explain: "条件永远为 true，循环就永远不结束，这叫死循环。" },
        { q: "`i++` 表示什么？", options: ["i 减 1", "i 加 1", "i 等于 1", "输出 i"], answer: 1, explain: "`i++` 是 `i = i + 1` 的简写，让 i 每次加 1。" }
      ]
    },    /* ================= 第 7 章 ================= */
    {
      id: 7,
      title: "数组：一排整齐的盒子",
      icon: "🗃️",
      minutes: 10,
      desc: "用一个变量装一整组数据，再学会遍历它。",
      sections: [
        { type: "p", text: "变量是一个盒子，数组是**一排整齐的盒子**，用来存一组同类型的数据。比如一个班 40 个人的成绩、一周 7 天的温度。" },
        { type: "code", title: "创建并访问数组", lang: "Java", code: `public class ArrayDemo {
    public static void main(String[] args) {
        int[] scores = {88, 92, 76, 60, 99};   // 5 个整数

        System.out.println("第1个人的成绩：" + scores[0]);  // 88
        System.out.println("第3个人的成绩：" + scores[2]);  // 76

        System.out.println("一共" + scores.length + "个人"); // 5
    }
}` },
        { type: "note", kind: "warn", text: "数组下标（编号）从 **0** 开始！第一个元素是 `scores[0]`，不是 `scores[1]`。这是新手最容易踩的坑，记住：编号从 0 数起。" },
        { type: "h2", text: "遍历数组（和 for 是绝配）" },
        { type: "code", title: "打印所有元素", lang: "Java", code: `int[] scores = {88, 92, 76, 60, 99};
for (int i = 0; i < scores.length; i++) {
    System.out.println("第" + (i + 1) + "个人：" + scores[i]);
}` },
        { type: "h2", text: "经典练习：找最高分" },
        { type: "code", title: "打擂台找最大值", lang: "Java", code: `int[] scores = {88, 92, 76, 60, 99};
int max = scores[0];          // 先假设第一个是最高分

for (int i = 1; i < scores.length; i++) {
    if (scores[i] > max) {    // 发现更大的，就更新
        max = scores[i];
    }
}
System.out.println("最高分是：" + max);  // 99` },
        { type: "note", kind: "info", text: "「先假设第一个是最大，然后挨个比，发现更大的就换」——这叫打擂台思路，找最大值、最小值都用它。" },
        { type: "h2", text: "数组长度" },
        { type: "p", text: "用 `数组名.length` 获取元素个数。注意 `String` 取长度是 `字符串.length()`（带括号），数组是 `scores.length`（不带括号），别搞混。" },
        { type: "task", text: "声明一个数组存 5 个你喜欢的数字，用 for 循环全部打印出来，再算出它们的总和。", hint: "声明：`int[] nums = {7, 3, 9, 1, 5};` 求和：循环里 `sum = sum + nums[i];` 最后打印 sum。" },
        { type: "h2", text: "本章小结" },
        { type: "list", items: [
          "数组 = 一排同类型的盒子，下标从 0 开始",
          "`数组.length` 获取元素个数（不带括号）",
          "用 for + 下标遍历数组是最常用操作",
          "找最大值用「打擂台」思路"
        ] }
      ],
      quiz: [
        { q: "数组的下标从几开始？", options: ["0", "1", "-1", "随机"], answer: 0, explain: "数组第一个元素的下标是 0。`{88,92,76}` 里 `88` 是 `[0]`，`92` 是 `[1]`。" },
        { q: "获取数组的元素个数用哪个？", options: ["scores.size()", "scores.length", "scores.count", "scores.max"], answer: 1, explain: "数组用 `length`（属性，不带括号）。带括号的 `length()` 是字符串的写法。" },
        { q: "`int[] a = {10, 20, 30};` 那么 `a[1]` 是？", options: ["10", "20", "30", "报错"], answer: 1, explain: "下标从 0 开始：`a[0]=10`、`a[1]=20`、`a[2]=30`，所以 `a[1]` 是 20。" }
      ]
    },

    /* ================= 第 8 章 ================= */
    {
      id: 8,
      title: "方法：给代码起个名字",
      icon: "🧩",
      minutes: 12,
      desc: "把一段代码打包成「方法」，想用就调用，代码更整洁。",
      sections: [
        { type: "p", text: "方法 = 给一段代码取个名字，以后想用就「喊它」。它的好处是：代码能复用、主逻辑更清晰、改 bug 更好找。" },
        { type: "code", title: "定义并调用方法", lang: "Java", code: `public class MethodDemo {
    public static void main(String[] args) {
        sayHello("小明");
        sayHello("小红");

        int result = add(3, 5);
        System.out.println("3 + 5 = " + result);
    }

    // 没有返回值的方法
    static void sayHello(String name) {
        System.out.println("你好，" + name + "！");
    }

    // 有返回值的方法
    static int add(int a, int b) {
        return a + b;   // 把结果交回去
    }
}` },
        { type: "h2", text: "方法的结构" },
        { type: "table", headers: ["部分", "说明", "例子"], rows: [
          ["`static`", "先照着写，第 9 章会解释", "`static`"],
          ["返回值类型", "方法结束后交出的数据类型；不需要就写 `void`", "`int` / `void`"],
          ["方法名", "给方法起的名字，用驼峰命名", "`add` / `sayHello`"],
          ["参数列表", "调用时传进去的数据", "`(int a, int b)` / `(String name)`"],
          ["`return`", "把结果交回给调用者", "`return a + b;`"]
        ] },
        { type: "note", kind: "info", text: "`return` 一执行，方法立刻结束。`return` 后面的代码不会运行。" },
        { type: "h2", text: "为什么用方法" },
        { type: "list", items: [
          "同样的逻辑写一次，到处调用，不用复制粘贴",
          "`main` 方法里清爽，程序读起来一目了然",
          "以后想改功能，只改方法内部，别的地方不用动"
        ] },
        { type: "h2", text: "方法的返回值" },
        { type: "code", title: "返回值的两种用法", lang: "Java", code: `// 用法一：把返回值存进变量
int r = add(3, 5);
System.out.println(r);

// 用法二：直接用
System.out.println(add(10, 20));

static int add(int a, int b) {
    return a + b;
}` },
        { type: "task", text: "写一个方法 `max`，接收两个 `int` 参数，返回较大的那个数。然后在 main 里调用它并打印结果。", hint: "方法签名：`static int max(int a, int b)`。里面用 `if (a > b) return a; else return b;` 或 `return a > b ? a : b;`" },
        { type: "h2", text: "本章小结" },
        { type: "list", items: [
          "方法 = 给代码块起名字，用「调用」来使用",
          "返回值类型：有结果写类型（如 `int`），没结果写 `void`",
          "参数是调用时传进去的数据",
          "`return` 交回结果并结束方法"
        ] }
      ],
      quiz: [
        { q: "不需要返回结果的方法，返回值类型写什么？", options: ["int", "void", "null", "empty"], answer: 1, explain: "`void` 表示「没有返回值」。需要返回结果的方法才写具体类型，比如 `int`。" },
        { q: "`return` 的作用是？", options: ["结束整个程序", "把结果交回给调用者并结束方法", "在屏幕上打印", "声明一个变量"], answer: 1, explain: "`return 值` 把结果交回给调用者，同时方法立刻结束。" },
        { q: "调用 `add(3, 5)` 时，`3` 和 `5` 叫做什么？", options: ["返回值", "参数", "变量", "数组"], answer: 1, explain: "调用方法时传进去的数据叫「参数」，方法算完交回来的结果叫「返回值」。" }
      ]
    },

    /* ================= 第 9 章 ================= */
    {
      id: 9,
      title: "面向对象入门：类和对象",
      icon: "🏗️",
      minutes: 14,
      desc: "Java 最重要的思想：用「图纸」造「房子」。",
      sections: [
        { type: "p", text: "前 8 章你写的是「一步一步怎么做」（这叫面向过程）。而 Java 是**面向对象**的语言——它把现实世界抽象成「类」和「对象」。这是 Java 最核心的思想，一定要理解。" },
        { type: "h2", text: "类和对象：图纸和房子" },
        { type: "list", items: [
          "`类`（class）= 图纸：规定了这个东西有哪些属性、能做什么事",
          "`对象`（object）= 按图纸造出来的具体房子",
          "一张图纸能造出无数个房子，每个房子（对象）有自己的数据"
        ] },
        { type: "p", text: "比如「学生」是一个类，它有属性（姓名、年龄、成绩）和行为（学习、考试）。「小明」就是学生类的一个具体对象。" },
        { type: "code", title: "定义一个 Student 类", lang: "Java", code: `public class Student {
    // 属性（成员变量）
    String name;
    int age;

    // 构造方法：创建对象时自动执行
    Student(String n, int a) {
        name = n;
        age = a;
    }

    // 行为（方法）
    void study() {
        System.out.println(name + " 正在学习 Java");
    }
}` },
        { type: "h2", text: "用 new 创建对象" },
        { type: "code", title: "测试 Student 类", lang: "Java", code: `public class TestStudent {
    public static void main(String[] args) {
        // 用「图纸」造出两个具体的「学生」
        Student xiaoming = new Student("小明", 20);
        Student xiaohong = new Student("小红", 19);

        System.out.println(xiaoming.name + "，" + xiaoming.age + "岁");
        xiaoming.study();
        xiaohong.study();
    }
}` },
        { type: "note", kind: "info", text: "`new` 就是「造对象」的关键字。`new Student(\"小明\", 20)` 会调用 Student 的构造方法，把名字和年龄存进新对象里，然后用 `变量名.属性` 或 `变量名.方法()` 来使用它。" },
        { type: "h2", text: "为什么这样设计？" },
        { type: "list", items: [
          "代码更贴近现实：类是「概念」，对象是「具体的人/物」",
          "数据和操作打包在一起，不容易乱",
          "大项目拆成很多类，各管各的，方便多人协作"
        ] },
        { type: "note", kind: "warn", text: "现在看不懂没关系！面向对象需要慢慢「悟」。先照着示例敲一遍，感受一下「类-对象-属性-方法」的节奏，后面学到继承、多态时会越来越明白。" },
        { type: "task", text: "给 Student 类加一个 `double score` 属性，再加一个方法 `void exam()`，打印「xxx 考了 xx 分」。然后创建一个对象调用它。", hint: "照着 `study()` 的样子写：`void exam() { System.out.println(name + \" 考了 \" + score + \" 分\"); }` 记得在构造方法里给 score 赋值。" },
        { type: "h2", text: "本章小结" },
        { type: "list", items: [
          "类 = 图纸，对象 = 按图纸造出来的具体东西",
          "`new` 创建对象，构造方法负责初始化",
          "用 `对象.属性` 和 `对象.方法()` 来使用对象",
          "Java 是面向对象语言，这是它的灵魂"
        ] }
      ],
      quiz: [
        { q: "类和对象的关系，最贴切的比喻是？", options: ["图纸和房子", "电脑和手机", "苹果和香蕉", "数字和文字"], answer: 0, explain: "类是一张「图纸」，定义属性和行为；对象是按图纸造出来的具体实例。" },
        { q: "创建对象要用哪个关键字？", options: ["class", "new", "create", "object"], answer: 1, explain: "`new Student(\"小明\", 20)` 中的 `new` 就是在创建对象。" },
        { q: "构造方法的作用是？", options: ["删除对象", "创建对象时初始化数据", "在屏幕打印", "让代码循环"], answer: 1, explain: "构造方法在 `new` 创建对象时自动执行，用来给属性赋初始值，比如把名字和年龄存进去。" }
      ]
    },

    /* ================= 第 10 章 ================= */
    {
      id: 10,
      title: "学完基础之后怎么办？",
      icon: "🚀",
      minutes: 15,
      desc: "安装工具、跑通第一个程序，然后规划你的进阶路线。",
      sections: [
        { type: "p", text: "恭喜你走到了最后一章！这一章我们不做理论，全部是**行动**：装好工具，把代码跑起来，然后看看接下来往哪走。" },
        { type: "h2", text: "第一步：安装 JDK" },
        { type: "ol", items: [
          "去 Oracle 官网或国内镜像（如华为云、阿里云）下载 JDK，推荐 **JDK 17 或 21**（长期支持版）",
          "一路点「下一步」安装完成（记住安装路径）",
          "打开命令行（Windows 按 `Win + R`，输入 `cmd`），输入 `java -version`",
          "如果能看到版本号（比如 `java version \"17.0.x\"`），恭喜，JDK 装好了！"
        ] },
        { type: "note", kind: "warn", text: "如果提示「不是内部或外部命令」，通常是环境变量没配好。别慌：把报错文字复制到搜索引擎，搜「JDK 环境变量配置」，照着一步步做即可。95% 的报错都能搜到答案。" },
        { type: "h2", text: "第二步：安装 IDE（写代码的软件）" },
        { type: "list", items: [
          "**IntelliJ IDEA**（推荐）：官网下载 Community（社区版），免费",
          "或 **VS Code** + 安装 Java 扩展插件，轻量免费",
          "打开 IDE，新建一个 Java 项目，把第 2 章的 HelloWorld 敲进去，点运行",
          "看到控制台输出 `Hello, World!` 的那一刻，你就正式入门了！"
        ] },
        { type: "h2", text: "接下来学什么（进阶路线图）" },
        { type: "table", headers: ["阶段", "学什么", "能做什么"], rows: [
          ["基础巩固", "本网站 10 章内容反复练，把代码都敲熟", "能看懂并写出简单 Java 程序"],
          ["Java SE 进阶", "集合（ArrayList、HashMap）、异常处理、文件读写", "写小工具、学生成绩管理系统"],
          ["面向对象深入", "继承、多态、接口、抽象类", "写出结构清晰的多类项目"],
          ["数据库", "MySQL、JDBC", "让数据能真正存下来、查出来"],
          ["应用方向", "Spring Boot（后端）或 Android", "做真正的网站后端 / App"]
        ] },
        { type: "h2", text: "学习建议（比任何课程都重要）" },
        { type: "list", items: [
          "**一定动手敲代码**：看 10 遍不如敲 1 遍",
          "故意把代码改坏，看报错信息长什么样，学会「读报错」",
          "遇到问题先自己搜（搜索引擎 / B站），搜不到再问别人",
          "做小项目练手：猜数字、计算器、学生成绩管理",
          "找伙伴一起学，互相讲题，进步最快"
        ] },
        { type: "h2", text: "你的下一步行动" },
        { type: "task", text: "本周目标：① 装好 JDK + IDE；② 把 HelloWorld 跑起来；③ 改 3 个地方（类名、输出文字、再加一行新输出）。完成就奖励自己一杯奶茶！☕", hint: "如果卡在哪一步，记住这句话：把报错信息复制到搜索引擎。你遇到的问题，全球至少有 10 万人问过。" },
        { type: "p", text: "你已经在没有任何基础的情况下，坚持学完了整整 10 章。这已经超过了 90% 想学编程却没行动的人。剩下的路很简单：**动手、动手、再动手**。祝你顺利！☕" }
      ],
      quiz: [
        { q: "装好 JDK 后，在命令行输入什么来验证？", options: ["java -version", "java --hello", "run java", "print java"], answer: 0, explain: "输入 `java -version`，能显示版本号说明 JDK 安装成功。" },
        { q: "学编程最重要的一件事是？", options: ["把代码全部背下来", "动手敲代码 + 学会读报错", "只看视频不动手", "买很多书放着"], answer: 1, explain: "编程是手艺活，必须亲手敲、亲手试错。读报错信息是排查问题的最关键能力。" }
      ]
    }
  ]
};