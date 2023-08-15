
var github = "https://github.com/iceyear";
var email = 'mailto:mail@iceyear.eu.org';
var blog = 'https://blog.iceyear.eu.org';
var codeberg = 'https://codeberg.org/iceyear';
var matrix = 'https://matrix.to/#/@iceyear:lockey.icu';
var xlog = 'https://iceyear.xlog.app';
var btc= '1ceyearGt2A1HphtR3rieHv5hHT576MLM';
var xmr= '4AiceyearhpAp5dj4ghM5GgnXyf5VAVZB7p4EeGkCsU5imgZPT9WXah48yCV148a7jVvrn6naGw91ZnFvbXBXmH94MUdjAb';
var eth= '0x0000000AcaDA803d53a8eE8FAAFE72CF27576725';
const empty = "&nbsp";

about = [
  "<br>",
  "Hi there, 👋🏽",
  `🔭 I'm Ice Year.`,
  `😀 I love coding, surfing on Internet and making friends.`,
  `📫 You are visiting my homepage right now. My blog is called <a href="${blog}" target="_blank">Ice Yearの位面</a>.`,
  `🎈 You could visit my blog to get more information about me.`,
  `👉 Email me at <a href="${email}" target="_blank">mail@iceyear.eu.org</a>!`,
  `🕊 It is said that feeding pigeons can effectively reduce the probability of pigeons becoming fairies. Type <span class=\"command\">feed</span> command to get the way to feed pigeons.`,
  `😇 If you love my code, please give me a ⭐ on <a href="${github}" target="_blank">Github</a> or <a href="${codeberg}" target="_blank">Codeberg</a>. Thanks a lot!`,
  "<br>",
];

iceyear = [
  "<br>",
  "Il n'y a pas de hasard, il n'y a que des rendez-vous.",
  "<br>",
];

links = [
  // format as table to achieve responsive column layout
  `<table>
   <tr><td>Github</td><td><a href="${github}" target="_blank">github/Ice Year</a></td></tr>
   <tr><td>Blog</td><td><a href="${blog}" target="_blank">blog/Ice Year</a></td></tr>
   <tr><td>Codeberg</td><td><a href="${codeberg}" target="_blank">codeberg/Ice Year</a></td></tr>
   <tr><td>Matrix</td><td><a href="${matrix}" target="_blank">matrix/Ice Year</a></td></tr>
   </table>`,
];

projects = [
  "<br>",
  "正在努力造轮子... 许多项目尚未正式上线，或者还在构想之中^_^",
  "其实还可以看看 Ice Year 的 Codeberg （可通过 links 命令查看），也存放了一些奇思妙想🙃",
  "以下是我在 Github 上的一些项目：",
  "<br>",
  `<div id="repo-box"></div>`,
  repos,
];

BTC = [
  "<br>",
  `<a href="btc://${eth}" target="_blank"><span class=\"command\">Bitcoin Wallet Address</span></a>: ${btc}`,
  "<br>",
]

ETH = [
  "<br>",
  `<a href="eth://${eth}" target="_blank"><span class=\"command\">Ethereum Wallet Address</span></a>: ${eth}`,
  "<br>",
]

XMR = [
  "<br>",
  `<a href="xmr://${xmr}" target="_blank"><span class=\"command\">Monero Wallet Address</span></a>`,
  "<br>",
]

help = [
  "<br>",
  '终端支持的命令如下：',
  // format as table to achieve responsive column layout
  `<table>
  <tr><td><span class="command">about</span></td><td>关于 Ice Year</td></tr>
  <tr><td><span class="command">links</span></td><td>Ice Year 的相关链接</td></tr>
  <tr><td><span class="command">projects</span></td><td>Ice Year 的项目列表</td></tr>
  <tr><td><span class="command">history</span></td><td>命令输入历史记录</td></tr>
  <tr><td><span class="command">help</span></td><td>都看到这些了，别告诉我还不知道是什么意思吧🙃</td></tr>
  <tr><td><span class="command">email</span></td><td>Ice Year 的联系邮箱</td></tr>
  <tr><td><span class="command">uname</span></td><td>查看系统信息</td></tr>
  <tr><td><span class="command">clear</span></td><td>清空命令窗口</td></tr>
  <tr><td><span class="command">banner</span></td><td>显示 ASCII Logo</td></tr>
  <tr><td><span class="command">theme</span></td><td>更换主题</td></tr>
  <tr><td><span class="command">feed</span></td><td>投喂鸽子方法</td></tr>
  <tr><td><span class="command">[tab]</span></td><td>自动补齐快捷键</td></tr>
  </table>`,
  "<br>",
  '（也可以试试你知道的其他命令，说不定有惊喜😆）',
  "<br>",
];

banner = [
  "<br>",
  "████  ████ ████ ██    ██ ████      ██       ████ ",
  "   █    █       █         ██ ██  █           █  █      █    █",
  "   █    █       ████      █      ████    █    █     ████",
  "   █    █       █            █      █         █████    █    █",
  "   █    █       █            █      █        █        █   █     █",
  "████  ████ ████      █      ████ █          █  █      █",   
  "<br>",
];

welcomeMsg = [
  '<span class="color2 terminal-welcome-msg">欢迎来到 Ice Year 引导页！</span>',
  "<span class=\"color2 terminal-welcome-msg\">输入</span> <span class=\"command terminal-welcome-msg\">'help'</span><span class=\"color2 terminal-welcome-msg\"> （然后按回车键）以获取可使用的命令列表。</span>",
  "<br>",
];

allCommands = [
  "help", "about", "links", "projects", "email",  "github", "history", "clear", "banner", "theme",
  "echo", "ls", "cd", "vi", "vim", "emacs", "sudo", "ping", "blog", "iceyear", "codeberg", "matrix",
  "xlog", "feed", "xmr", "btc", "eth", "uname",  
];

themes = {
  "coral": "css/style_coral.css",
  "midnight": "css/style_midnight.css",
  "chocolate": "css/style_chocolate.css",
};

allArgs = [
  "ls", "set", "random", 
];

