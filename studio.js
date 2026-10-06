/* 321婚姻生活 美圖工作室 1.2.10062300 */
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
return new (P || (P = Promise))(function (resolve, reject) {
function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
step((generator = generator.apply(thisArg, _arguments || [])).next());
});
};
var __generator = (this && this.__generator) || function (thisArg, body) {
var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
function verb(n) { return function (v) { return step([n, v]); }; }
function step(op) {
if (f) throw new TypeError("Generator is already executing.");
while (g && (g = 0, op[0] && (_ = 0)), _) try {
if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
if (y = 0, t) op = [op[0] & 2, t.value];
switch (op[0]) {
case 0: case 1: t = op; break;
case 4: _.label++; return { value: op[1], done: false };
case 5: _.label++; y = op[1]; op = [0]; continue;
case 7: op = _.ops.pop(); _.trys.pop(); continue;
default:
if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
if (t[2]) _.ops.pop();
_.trys.pop(); continue;
}
op = body.call(thisArg, _);
} catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
}
};
var __read = (this && this.__read) || function (o, n) {
var m = typeof Symbol === "function" && o[Symbol.iterator];
if (!m) return o;
var i = m.call(o), r, ar = [], e;
try {
while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
}
catch (error) { e = { error: error }; }
finally {
try {
if (r && !r.done && (m = i["return"])) m.call(i);
}
finally { if (e) throw e.error; }
}
return ar;
};
var __values = (this && this.__values) || function(o) {
var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
if (m) return m.call(o);
if (o && typeof o.length === "number") return {
next: function () {
if (o && i >= o.length) o = void 0;
return { value: o && o[i++], done: !o };
}
};
throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
if (ar || !(i in from)) {
if (!ar) ar = Array.prototype.slice.call(from, 0, i);
ar[i] = from[i];
}
}
return to.concat(ar || Array.prototype.slice.call(from));
};
(function () {
'use strict';
var BR = window.ML_BRIDGE;
(function () { var st = document.createElement('style'); st.textContent = ".ibs{--surface:var(--card);--surface-alt:var(--bg);--ink-soft:var(--mute);--ink-faint:var(--mute);--border:var(--line);--border-strong:var(--line);--accent:var(--acc);--accent-soft:var(--accS);--gold:#B8862F;--gold-soft:var(--accS);--bad:#B4503C;--good:var(--good);--shadow:0 4px 16px rgba(0,0,0,.12);--f-serif:\"Noto Serif TC\",\"Songti TC\",\"STSong\",\"PMingLiU\",Georgia,serif;--f-sans:inherit;color:var(--ink)}\n.hlsheet-mask.ibs{position:fixed;inset:0;background:rgba(0,0,0,.42);z-index:60;display:flex;align-items:flex-end;justify-content:center}\n.hlsheet-maskhtml body .ibs .hlsheet-card{max-width:640px}\nhtml body .ibs .card{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:14px 16px;margin:0 0 6px}\nhtml body .ibs .chtoolbar{display:flex;align-items:center;gap:10px;margin:0 0 12px}\nhtml body .ibs .cardpv{border-radius:14px;overflow:hidden;background:var(--accS);margin:0 0 12px;min-height:120px;display:flex;align-items:center;justify-content:center}\nhtml body .ibs .recdot{display:inline-block;width:9px;height:9px;border-radius:50%;background:#D23C3C;margin-right:6px;animation:fade 1s infinite alternate}\nhtml body .ibs .hitem{border-bottom:1px solid var(--line);padding:12px 0}html body .ibs .hitem:last-child{border-bottom:0}\nhtml body .ibs .hitem .m{display:flex;justify-content:space-between;align-items:center;font-size:.8em;color:var(--mute);margin-top:4px}\nhtml body .ibs .hitem .m button{padding:4px 8px;color:var(--mute)}\nhtml body .ibs .pxgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;min-height:100px}\nhtml body .ibs .pxcell{position:relative;border-radius:10px;overflow:hidden;aspect-ratio:3/4;background:var(--accS);padding:0;border:0}\nhtml body .ibs .pxcell img{width:100%;height:100%;object-fit:cover;display:block}\nhtml body .ibs .pxcell span{position:absolute;left:0;right:0;bottom:0;padding:10px 5px 3px;font-size:9.5px;color:#fff;text-align:left;white-space:nowrap;overflow:hidden;background:linear-gradient(transparent,rgba(0,0,0,.6))}\nhtml body .ibs .pxbar{display:flex;gap:8px;margin-bottom:10px}\nhtml body .ibs .rvacts{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:14px}\nhtml body .ibs .btn{min-height:0;white-space:normal}\nhtml body .ibs .card h3{margin:0 0 6px; font-size:16px;}\nhtml body .ibs .muted{color:var(--ink-soft); font-size:13.5px;}\nhtml body .ibs .btn{display:inline-flex; align-items:center; justify-content:center; gap:6px; border-radius:9px; border:1px solid var(--border-strong); background:var(--surface); color:var(--ink); font-size:14px; font-weight:600; padding:10px 16px; cursor:pointer; text-decoration:none;}\nhtml body .ibs .btn.primary{background:var(--accent); border-color:var(--accent); color:#fff;}\nhtml body .ibs .btn.gold{background:var(--gold); border-color:var(--gold); color:#fff;}\nhtml body .ibs .btn.block{width:100%;}\nhtml body .ibs .btn:active{opacity:.8;}\nhtml body .ibs .btn.sm{padding:7px 12px; font-size:12.5px;}\nhtml body .ibs .section-title{font-size:12px; letter-spacing:.08em; color:var(--gold); font-weight:700; margin:22px 0 8px;}\nhtml body .ibs .section-title:first-child{margin-top:0;}\nhtml body .ibs .empty{text-align:center; padding:40px 20px; color:var(--ink-faint); font-size:14px;}\nhtml body .ibs .chtb-btn{display:inline-flex; align-items:center; justify-content:center; min-width:36px; height:36px; padding:0 10px; border:1px solid var(--border-strong); background:var(--surface); color:var(--ink); border-radius:9px; font-size:15px; text-decoration:none; cursor:pointer;}\nhtml body .ibs .chtb-btn:active{opacity:.75;}\nhtml body .ibs .chtb-btn[data-state=\"loading\"]{opacity:.6;}\nhtml body .ibs .chtb-btn[data-state=\"playing\"]{background:var(--accent); border-color:var(--accent); color:#fff;}\nhtml body .ibs .chtb-btn[data-state=\"paused\"]{background:var(--gold); border-color:var(--gold); color:#fff;}\nhtml body .ibs .chtb-btn.on{background:var(--gold); border-color:var(--gold); color:#fff;}\nhtml body .ibs .chtb-btn:disabled{opacity:.32; pointer-events:none;}\nhtml body .ibs .chtb-spacer{flex:1;}\nhtml body .ibs .chfoot .btn{flex:1;}\nhtml body .ibs .hl-hint{background:var(--gold-soft); color:var(--gold); border-radius:8px; padding:9px 12px; font-size:12.5px; line-height:1.6; margin-bottom:14px;}\nhtml body .ibs .hlsheet-card{background:var(--surface); width:100%; max-height:86vh; overflow-y:auto; border-radius:18px 18px 0 0; padding:18px 18px calc(18px + env(safe-area-inset-bottom)); box-shadow:0 -8px 30px rgba(0,0,0,.25);}\nhtml body .ibs .hlsheet-title{font-size:16px; font-weight:800; color:var(--ink); margin-bottom:10px;}\nhtml body .ibs .hlsheet-quote{display:block; background:var(--gold-soft); color:var(--ink); border-radius:8px; padding:10px 12px; font-size:14px; line-height:1.8; margin-bottom:12px; font-family:var(--f-serif);}\nhtml body .ibs .hlsheet-colorrow{display:flex; align-items:center; gap:10px; margin-bottom:14px;}\nhtml body .ibs .hlsheet-colorlabel{font-size:12.5px; color:var(--ink-soft); white-space:nowrap;}\nhtml body .ibs .hlsheet-colors{display:flex; gap:10px; flex-wrap:wrap;}\nhtml body .ibs .hlsheet-ta{width:100%; border:1px solid var(--border-strong); border-radius:10px; padding:10px 12px; font-size:16px; font-family:inherit; resize:vertical; background:var(--surface-alt); color:var(--ink); min-height:84px; margin-bottom:12px;}\nhtml body .ibs .hlsheet-acts{display:flex; gap:10px; margin-bottom:8px;}\nhtml body .ibs .hlsheet-acts .btn{flex:1;}\nhtml body .ibs .hlsheet-acts2{display:flex; gap:8px; flex-wrap:wrap;}\nhtml body .ibs .hlsheet-acts2 .btn{flex:1 1 auto; padding:8px 10px; font-size:12.5px;}\nhtml body .ibs .hlsheet-acts2 .btn.danger{color:var(--bad); border-color:var(--bad);}\nhtml body .ibs .btn.danger{color:var(--bad); border-color:var(--bad);}\nhtml body .ibs .holdpv{border-radius:12px; overflow:hidden; background:var(--surface-alt); text-align:center;}\nhtml body .ibs .cardrow{display:flex; align-items:flex-start; gap:10px; margin-bottom:10px;}\nhtml body .ibs .cardlabel{font-size:12.5px; color:var(--ink-soft); white-space:nowrap; padding-top:7px;}\nhtml body .ibs .cardchips{display:flex; gap:6px; flex-wrap:wrap; flex:1;}\nhtml body .ibs .cardchips button.on{background:var(--accent); border-color:var(--accent); color:#fff;}\nhtml body .ibs .hymnrow{display:flex; align-items:center; gap:10px; padding:11px 0; border-bottom:1px solid var(--border); cursor:pointer;}\nhtml body .ibs .hymnrow:last-child{border-bottom:none;}\nhtml body .ibs .hymnrow .meta{flex:1; min-width:0;}\nhtml body .ibs .hymnrow .meta .t{font-weight:600; font-size:14.5px;}\nhtml body .ibs .hymnrow .meta .s{font-size:12px; color:var(--ink-faint);}\nhtml body .ibs .hymnrow .chev{color:var(--ink-faint);}\nhtml body .ibs .hymnplay:active{background:var(--accent-soft);}\nhtml body .ibs .rvbox{background:#000; border-radius:14px; overflow:hidden; margin-top:4px;}\nhtml body .ibs .rvbox audio{background:var(--surface-2,transparent); display:block;}\nhtml body .ibs .rvbox:has(audio){background:transparent; padding:6px 0;}\nhtml body .ibs .rvacts{display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-top:12px;}\nhtml body .ibs .rvacts .btn{margin:0; padding:12px 8px; font-size:14px;}\nhtml body .ibs .rvacts .btn.danger{color:var(--bad); border-color:var(--bad);}\nhtml body .ibs .pxbar{display:flex; gap:8px; margin-bottom:10px;}\nhtml body .ibs .pxbar .cardinput{flex:1;}\nhtml body .ibs .pxchips{margin-bottom:12px; max-height:92px; overflow-y:auto;}\nhtml body .ibs .pxgrid{display:grid; grid-template-columns:repeat(3,1fr); gap:8px; min-height:120px;}\nhtml body .ibs .pxcell img{width:100%; height:100%; object-fit:cover; display:block;}\nhtml body .ibs .pxcell.on{border-color:var(--gold); opacity:.6;}\nhtml body .ibs .pxgrid{grid-template-columns:repeat(4,1fr);}\nhtml body .ibs .hitem{border-bottom:1px solid var(--border); padding:12px 0;}\nhtml body .ibs .hitem:last-child{border-bottom:none;}\nhtml body .ibs .hitem .q{font-size:14.5px; line-height:1.85; font-family:var(--f-serif); margin-bottom:6px;}\nhtml body .ibs .hitem .n{font-size:13px; color:var(--ink); background:var(--surface-alt); border-left:3px solid var(--gold); border-radius:6px; padding:7px 10px; margin-bottom:6px; white-space:pre-wrap;}\nhtml body .ibs .hitem .m{font-size:11.5px; color:var(--ink-faint); display:flex; align-items:center; justify-content:space-between; gap:8px;}\nhtml body .ibs .hitem .m button{border:none; background:transparent; color:var(--ink-faint); font-size:12.5px; padding:2px 6px; cursor:pointer;}"; document.head.appendChild(st); })();
var API = { chat: BR.API.chat };
var PEXELS_KEY = BR.PEXELS_KEY;
var VERSION = BR.APPVER;
var CHAT_RETRY = [900, 1800];
var MUSIC_HOME = BR.MUSIC_HOME;
var $ = function (s, r) { return (r || document).querySelector(s); };
var $$ = function (s, r) { return Array.from((r || document).querySelectorAll(s)); };
var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]); }); };
function toast(msg, ms) { BR.toast(msg, ms); }
var state = {
get lang() { return BR.LG(); },
get cardTpl() { return BR.S().card.tpl; }, set cardTpl(v) { BR.S().card.tpl = v; },
get cardSize() { return BR.S().card.size; }, set cardSize(v) { BR.S().card.size = v; },
get cardBorder() { return BR.S().card.border; }, set cardBorder(v) { BR.S().card.border = v; },
get cardFs() { return BR.S().card.fs; }, set cardFs(v) { BR.S().card.fs = v; },
get cardTop() { return BR.S().card.top; }, set cardTop(v) { BR.S().card.top = v; },
get cardSign() { return BR.S().card.sign; }, set cardSign(v) { BR.S().card.sign = v; },
get cardTo() { return BR.S().card.to; }, set cardTo(v) { BR.S().card.to = v; },
get beauty() { return BR.S().card.beauty !== false; }, set beauty(v) { BR.S().card.beauty = !!v; }
};
function saveState() { BR.save(); }
function extractReply(d) {
if (!d)
return '';
if (typeof d === 'string')
return d;
if (Array.isArray(d.content) && d.content[0] && d.content[0].text)
return d.content[0].text;
if (d.reply)
return d.reply;
if (d.text)
return d.text;
if (d.message)
return d.message;
if (d.choices && d.choices[0] && d.choices[0].message)
return d.choices[0].message.content;
return '';
}
function cardRef(h) { return (h && h.ref) || ''; }
var DEF_TOP = function () { return BR.T('fellowship'); };
var DEF_SIGN = function () { return BR.T('cardSign'); };
var I18N = {
zh: { app: '321互動聖經', today: '今日', books: '經卷', search: '搜尋', companion: '小智', companionFull: '小智AI屬靈同伴', me: '我的',
ot: '舊約', nt: '新約', ch: '章', chapter: function (n) { return "\u7B2C ".concat(n, " \u7AE0"); }, verses: '節', bookUnit: '卷',
cont: '繼續閱讀', start: '開始讀經', daily: '今日默想', progress: '讀經進度',
prev: '上一章', next: '下一章', toc: '目錄', pure: '閱讀方式', note: '註釋', back: '返回',
modes: ['分章', '整卷連讀'], onoff: ['顯示', '隱藏'],
shCh: '顯示章', shV: '顯示節',
shChHint: ['每章開頭有淡雅的章題', '看不到章題'],
shVHint: ['每一節前面有金色小節號', '看不到節號，純粹的經文'],
modeHint: ['一章一章讀，讀完按下一章', '整卷接成一篇，一口氣讀完'],
prevBk: '上一卷', nextBk: '下一卷', bookDone: '已讀完這一卷',
bm: '書籤', bmAdd: '已加書籤', bmDel: '已移除書籤', myBm: '我的書籤',
emptyBm: '還沒有書籤。在閱讀器按 🔖 進入書籤模式，點一下讀到的那一句就記下來。',
bmHint: '書籤模式：點一下讀到的那一句就加書籤，再點一下移除。按 🔖 結束。',
bmModeOn: '書籤模式開啟', bmModeOff: '書籤模式結束',
resume: '從上次的地方繼續',
read: '讀這一章', done: '已讀完本章', markRead: '標記已讀',
searchPH: '輸入要找的字句…', searchHint: '輸入兩個字以上開始搜尋', noResult: '找不到相符的經文',
found: function (n) { return "\u627E\u5230 ".concat(n, " \u7BC0"); }, loading: '載入中…',
hlTitle: '這一句', hlColor: '顏色', hlNote: '寫下默想…', save: '儲存', ask: '問小智', del: '刪除畫線', close: '關閉',
ttsFrom: '🔊 從這裡開始朗讀', ttsPlay: '開始朗讀', ttsPause: '暫停朗讀', ttsStop: '停止朗讀',
hlSpan: '範圍', spanUnit: function (n) { return "".concat(n, " \u53E5"); }, spanV: '整節', spanP: '整段',
spanHint: '按 ＋ 往下多畫一句，畫線就不只一句，可以連成一整段。',
spanIsV: '這一節已經整節畫起來了', spanIsP: '這一段已經整段畫起來了',
spanDoneV: function (n) { return "\u5DF2\u756B\u6574\u7BC0\uFF0C\u5171 ".concat(n, " \u53E5"); }, spanDoneP: function (n) { return "\u5DF2\u756B\u6574\u6BB5\uFF0C\u5171 ".concat(n, " \u53E5"); },
team: '團隊', myHl: '我的畫線', myFav: '我的收藏', settings: '設定', font: '字級大小', theme: '主題',
fonts: ['標準', '大', '特大', '超大'], themes: ['自動', '日', '夜', '羊皮紙'],
voice: '朗讀聲音', ttsAutoNext: '讀完自動接下一章',
ttsAutoNextHint: ['一章朗讀完會自動翻到下一章繼續唸', '讀完這一章就停下來，不會自動翻頁'],
langLabel: '語言', stats: ['已讀章數', '畫線', '書籤'],
diag: '連線測試', diagRun: '測試小智與朗讀', diagBusy: '測試中…',
upd: '版本更新', updCheck: '檢查更新', updChecking: '檢查中…', updLatest: '已經是最新版本',
updFound: '找到新版本，下載中…', updReadyBar: '有新版本，點一下立即更新 ↻', updFail: '檢查失敗，請稍後再試',
updApplying: '更新中…',
card: '做成美圖', cardTitle: '做成美圖分享', cardStyle: '版型', cardSize: '尺寸',
cardBorder: '邊框', cardFsL: '內文字級', cardFsHint: '團體名稱、稱呼、內文與署名都會跟著放大，經文本身維持不變。',
cardText: '卡片內文', bless: '請小智寫祝福', blessing: '小智寫作中…', blessDone: '小智寫好了',
blessHint: '可以自己寫，也可以請小智照這節經文寫一段關懷祝福；改完卡片會立刻跟著變。',
useMine: '用我的領受', clearText: '不要內文',
cardLines: '卡片上下的署名', cardTopL: '上面（團體名）', cardSignL: '下面（署名）',
cardToL: '稱呼（這張圖寫給誰）', cardToPH: '例：親愛的珍姐',
cardLinesHint: '留空就用預設。例如下面改成「愛你的財哥、珍姐　敬上」。',
cardShare: '分享', cardSave: '存到相簿',
cardHint: '按「分享」可直接選 LINE／IG／FB 傳出去；也可以長按上面的圖片存起來。',
cardSaved: '已下載，請從相簿分享',
saveIOS: '請在選單裡選「儲存影像」，圖就會進相簿',
savedFile: '已下載到「檔案」App 的下載項目',
holdT: '長按下面這張圖', holdS: '選「加入照片」或「儲存影像」，就會存進相簿。',
photo: '加一張相片（選用）', photoPick: '從相簿選相片', photoSwap: '從相簿換一張', photoDel: '移除相片',
photoBg: ['作背景', '作背景'], photoStk: ['貼在卡片上', '贴在卡片上'],
photoHint: '可以當卡片背景，也可以像貼紙貼上去，大小與位置都能調。',
photoBad: '這張相片讀不出來，換一張試試',
stkShape: '相片形狀', stkSize: '相片大小', stkPos: '相片位置',
bgm: '背景音樂（選用）', bgmPick: '從檔案選音樂', bgmSwap: '換一首', bgmDel: '移除音樂',
bgmVol: '音樂音量', bgmNote: '錄製時會自動循環，混進影片或錄音裡。',
bgmHint: '選一首詩歌或輕音樂；若一時找不到，按選擇視窗左下角「瀏覽」，再到 iCloud 雲碟或「我的 iPhone」裡找。',
bgmBad: '這不是音樂檔，請選 mp3、m4a、wav 等音檔', bgmBig: '音檔太大（超過 25MB），請選短一點的',
bgmAdded: '已加入背景音樂', bgmNeed: '請先選一首背景音樂',
recSec: '錄成影片', recVoice: '🎙 只有聲音', recCard: '🖼 卡片畫面', recSelfie: '📷 自拍畫面',
recVoiceD: '只錄你的聲音，存成語音檔',
recCardD: '卡片＋你的聲音，合成一支影片',
recSelfieD: '卡片＋你的臉＋聲音，合成一支影片',
recIntro: '按下開始，對著手機把這段經文與領受讀出來。可以只錄聲音，也可以把卡片、自拍合成一支影片直接傳出去。',
recIntroA: '這台裝置不支援合成影片，會先錄成語音；播放時可用手機「螢幕錄影」錄成影片。',
recReady: '按下開始，把想說的話錄進去', recStartV: '開始錄影片', recStartS: '開始自拍錄影',
recStartA: '開始錄音', recStop: '停止並完成', recing: '錄影中…', recingA: '錄音中…',
recTip: '建議 30～60 秒：先讀經文，再說這段話對你的意思。',
recDoneV: '影片做好了！可以分享出去', recDoneA: '錄好了！可以播放或分享',
rvTitleV: '錄好了，先看一下', rvTitleA: '錄好了，先聽一下',
rvHint: '滿意就存起來；不滿意可以重錄一次，或直接刪掉不留。',
rvSave: '儲存到作品庫', rvShare: '分享出去', rvAgain: '重錄一次', rvDrop: '刪掉不留',
rvDropAsk: '這一段就不留了？', rvDropped: '已刪掉，沒有存下來', rvSaving: '存檔中…',
rvNote: '這一段還沒存起來', rvLeaveAsk: '還沒存起來，關掉就不見了，確定嗎？',
recNo: '這台裝置不支援錄音', vidNo: '這台裝置不支援自動合成影片',
micDeny: '無法使用麥克風，請允許權限', camDeny: '無法使用相機，請允許權限',
selfieHint: '你的臉會以圓形貼在卡片右下角，錄影時同步合成。',
beauty: '美顏', beautyOn: '柔膚', beautyOff: '原圖',
beautyHint: ['已經柔化膚質、稍微提亮，自拍看起來更好看。', '使用鏡頭原始畫面，不做任何處理。'],
mcLen: '音樂卡片長度', mcStart: '不錄音，只配音樂', mcing: '音樂卡片製作中…',
mcHint: '卡片配上背景音樂做成影片，不必開口。選 15 或 30 秒很快就好，選「整首」要等音樂播完。',
works: '我的作品', noWorks: '還沒有作品。錄一段話或配一首音樂，就會出現在這裡。',
delAsk: '刪除這個作品？', deleted: '已刪除',
emptyHl: '還沒有畫線。在經文上點一下就能畫線、寫默想。',
emptyFav: '還沒有收藏小智的回答。',
chatPH: '就這段經文提問…', send: '送出', examples: '範例問題',
ctx: function (b, c) { return "\u76EE\u524D\u7D93\u6587\uFF1A".concat(b, " \u7B2C ").concat(c, " \u7AE0"); }, thinking: '小智思想中…',
ttsFallback: '改用裝置內建語音朗讀', ttsErr: '朗讀服務連不上',
chatErr: '小智連不上，請稍後再試。',
plan: '讀經計畫', planTitle: '選一個讀經計畫', planDaysUnit: '天',
planStart: '開始這個計畫', planSwitch: '換一個計畫', planRestart: '重新開始',
planRestartAsk: '要重新開始這個計畫嗎？之前打勾的進度都會清空。',
planGoRead: '前往閱讀', planDone: '已讀', planMarkDone: '標記今天已讀',
planDay: function (n) { return "\u7B2C ".concat(n, " \u5929"); }, planWeek: function (n) { return "\u7B2C ".concat(n, " \u9031"); },
chapterRange: function (a, b) { return "\u7B2C ".concat(a, "\u2013").concat(b, " \u7AE0"); }, psalmRange: function (a, b) { return "\u7B2C ".concat(a, "\u2013").concat(b, " \u7BC7"); },
planEmpty: '還沒有開始讀經計畫。選一個計畫，就會從第一天開始為你排好進度。',
planRemind: '每日提醒',
planRemindHint: ['已開啟：今天的進度還沒讀完的話，晚上8點左右手機會跳通知提醒你。', '關閉：不會有提醒通知。'],
planRemindDenied: '手機／瀏覽器封鎖了通知權限，請到系統設定裡開啟本App的通知權限',
planRemindUnsupported: '這個瀏覽器不支援通知功能（iPhone 請先把App「加入主畫面」後再開啟）',
planRemindTitle: '321互動聖經．讀經提醒',
planRemindBody: function (b, r) { return "\u4ECA\u5929\u9084\u6C92\u8B80".concat(b).concat(r, "\uFF0C\u627E\u500B\u6642\u9593\u8B80\u4E00\u4E0B\u5427\uFF01"); },
planAutoDoneToast: '讀完了！今天的進度已經自動幫你打勾' },
zs: { app: '321互动圣经', today: '今日', books: '经卷', search: '搜索', companion: '小智', companionFull: '小智AI属灵同伴', me: '我的',
ot: '旧约', nt: '新约', ch: '章', chapter: function (n) { return "\u7B2C ".concat(n, " \u7AE0"); }, verses: '节', bookUnit: '卷',
cont: '继续阅读', start: '开始读经', daily: '今日默想', progress: '读经进度',
prev: '上一章', next: '下一章', toc: '目录', pure: '阅读方式', note: '注释', back: '返回',
modes: ['分章', '整卷连读'], onoff: ['显示', '隐藏'],
shCh: '显示章', shV: '显示节',
shChHint: ['每章开头有淡雅的章题', '看不到章题'],
shVHint: ['每一节前面有金色小节号', '看不到节号，纯粹的经文'],
modeHint: ['一章一章读，读完按下一章', '整卷接成一篇，一口气读完'],
prevBk: '上一卷', nextBk: '下一卷', bookDone: '已读完这一卷',
bm: '书签', bmAdd: '已加书签', bmDel: '已移除书签', myBm: '我的书签',
emptyBm: '还没有书签。在阅读器按 🔖 进入书签模式，点一下读到的那一句就记下来。',
bmHint: '书签模式：点一下读到的那一句就加书签，再点一下移除。按 🔖 结束。',
bmModeOn: '书签模式开启', bmModeOff: '书签模式结束',
resume: '从上次的地方继续',
read: '读这一章', done: '已读完本章', markRead: '标记已读',
searchPH: '输入要找的字句…', searchHint: '输入两个字以上开始搜索', noResult: '找不到相符的经文',
found: function (n) { return "\u627E\u5230 ".concat(n, " \u8282"); }, loading: '载入中…',
hlTitle: '这一句', hlColor: '颜色', hlNote: '写下默想…', save: '保存', ask: '问小智', del: '删除划线', close: '关闭',
ttsFrom: '🔊 从这里开始朗读', ttsPlay: '开始朗读', ttsPause: '暂停朗读', ttsStop: '停止朗读',
hlSpan: '范围', spanUnit: function (n) { return "".concat(n, " \u53E5"); }, spanV: '整节', spanP: '整段',
spanHint: '按 ＋ 往下多划一句，划线就不只一句，可以连成一整段。',
spanIsV: '这一节已经整节划起来了', spanIsP: '这一段已经整段划起来了',
spanDoneV: function (n) { return "\u5DF2\u5212\u6574\u8282\uFF0C\u5171 ".concat(n, " \u53E5"); }, spanDoneP: function (n) { return "\u5DF2\u5212\u6574\u6BB5\uFF0C\u5171 ".concat(n, " \u53E5"); },
team: '团队', myHl: '我的划线', myFav: '我的收藏', settings: '设置', font: '字级大小', theme: '主题',
fonts: ['标准', '大', '特大', '超大'], themes: ['自动', '日', '夜', '羊皮纸'],
voice: '朗读声音', ttsAutoNext: '读完自动接下一章',
ttsAutoNextHint: ['一章朗读完会自动翻到下一章继续念', '读完这一章就停下来，不会自动翻页'],
langLabel: '语言', stats: ['已读章数', '划线', '书签'],
diag: '连线测试', diagRun: '测试小智与朗读', diagBusy: '测试中…',
upd: '版本更新', updCheck: '检查更新', updChecking: '检查中…', updLatest: '已经是最新版本',
updFound: '找到新版本，下载中…', updReadyBar: '有新版本，点一下立即更新 ↻', updFail: '检查失败，请稍后再试',
updApplying: '更新中…',
card: '做成美图', cardTitle: '做成美图分享', cardStyle: '版型', cardSize: '尺寸',
cardBorder: '边框', cardFsL: '内文字级', cardFsHint: '团体名称、称呼、内文与署名都会跟着放大，经文本身维持不变。',
cardText: '卡片内文', bless: '请小智写祝福', blessing: '小智写作中…', blessDone: '小智写好了',
blessHint: '可以自己写，也可以请小智照这节经文写一段关怀祝福；改完卡片会立刻跟着变。',
useMine: '用我的领受', clearText: '不要内文',
cardLines: '卡片上下的署名', cardTopL: '上面（团体名）', cardSignL: '下面（署名）',
cardToL: '称呼（这张图写给谁）', cardToPH: '例：亲爱的珍姐',
cardLinesHint: '留空就用预设。例如下面改成“爱你的财哥、珍姐　敬上”。',
cardShare: '分享', cardSave: '存到相册',
cardHint: '按“分享”可直接选 LINE／IG／FB 传出去；也可以长按上面的图片存起来。',
cardSaved: '已下载，请从相册分享',
saveIOS: '请在菜单里选“存储图像”，图就会进相册',
savedFile: '已下载到“文件”App 的下载项目',
holdT: '长按下面这张图', holdS: '选“加入照片”或“存储图像”，就会存进相册。',
photo: '加一张相片（选用）', photoPick: '从相册选相片', photoSwap: '从相册换一张', photoDel: '移除相片',
photoBg: ['作背景', '作背景'], photoStk: ['贴在卡片上', '贴在卡片上'],
photoHint: '可以当卡片背景，也可以像贴纸贴上去，大小与位置都能调。',
photoBad: '这张相片读不出来，换一张试试',
stkShape: '相片形状', stkSize: '相片大小', stkPos: '相片位置',
bgm: '背景音乐（选用）', bgmPick: '从文件选音乐', bgmSwap: '换一首', bgmDel: '移除音乐',
bgmVol: '音乐音量', bgmNote: '录制时会自动循环，混进视频或录音里。',
bgmHint: '选一首诗歌或轻音乐；若一时找不到，按选择窗口左下角“浏览”，再到 iCloud 云碟或“我的 iPhone”里找。',
bgmBad: '这不是音乐文件，请选 mp3、m4a、wav 等音频', bgmBig: '音频太大（超过 25MB），请选短一点的',
bgmAdded: '已加入背景音乐', bgmNeed: '请先选一首背景音乐',
recSec: '录成视频', recVoice: '🎙 只有声音', recCard: '🖼 卡片画面', recSelfie: '📷 自拍画面',
recVoiceD: '只录你的声音，存成语音档',
recCardD: '卡片＋你的声音，合成一支视频',
recSelfieD: '卡片＋你的脸＋声音，合成一支视频',
recIntro: '按下开始，对着手机把这段经文与领受读出来。可以只录声音，也可以把卡片、自拍合成一支视频直接传出去。',
recIntroA: '这台设备不支持合成视频，会先录成语音；播放时可用手机“录屏”录成视频。',
recReady: '按下开始，把想说的话录进去', recStartV: '开始录视频', recStartS: '开始自拍录像',
recStartA: '开始录音', recStop: '停止并完成', recing: '录像中…', recingA: '录音中…',
recTip: '建议 30～60 秒：先读经文，再说这段话对你的意思。',
recDoneV: '视频做好了！可以分享出去', recDoneA: '录好了！可以播放或分享',
rvTitleV: '录好了，先看一下', rvTitleA: '录好了，先听一下',
rvHint: '满意就存起来；不满意可以重录一次，或直接删掉不留。',
rvSave: '保存到作品库', rvShare: '分享出去', rvAgain: '重录一次', rvDrop: '删掉不留',
rvDropAsk: '这一段就不留了？', rvDropped: '已删掉，没有存下来', rvSaving: '保存中…',
rvNote: '这一段还没存起来', rvLeaveAsk: '还没存起来，关掉就不见了，确定吗？',
recNo: '这台设备不支持录音', vidNo: '这台设备不支持自动合成视频',
micDeny: '无法使用麦克风，请允许权限', camDeny: '无法使用相机，请允许权限',
selfieHint: '你的脸会以圆形贴在卡片右下角，录像时同步合成。',
beauty: '美颜', beautyOn: '柔肤', beautyOff: '原图',
beautyHint: ['已经柔化肤质、稍微提亮，自拍看起来更好看。', '使用镜头原始画面，不做任何处理。'],
mcLen: '音乐卡片长度', mcStart: '不录音，只配音乐', mcing: '音乐卡片制作中…',
mcHint: '卡片配上背景音乐做成视频，不必开口。选 15 或 30 秒很快就好，选“整首”要等音乐播完。',
works: '我的作品', noWorks: '还没有作品。录一段话或配一首音乐，就会出现在这里。',
delAsk: '删除这个作品？', deleted: '已删除',
emptyHl: '还没有划线。在经文上点一下就能划线、写默想。',
emptyFav: '还没有收藏小智的回答。',
chatPH: '就这段经文提问…', send: '发送', examples: '范例问题',
ctx: function (b, c) { return "\u5F53\u524D\u7ECF\u6587\uFF1A".concat(b, " \u7B2C ").concat(c, " \u7AE0"); }, thinking: '小智思想中…',
ttsFallback: '改用设备内置语音朗读', ttsErr: '朗读服务连不上',
chatErr: '小智连不上，请稍后再试。',
plan: '读经计划', planTitle: '选一个读经计划', planDaysUnit: '天',
planStart: '开始这个计划', planSwitch: '换一个计划', planRestart: '重新开始',
planRestartAsk: '要重新开始这个计划吗？之前打勾的进度都会清空。',
planGoRead: '前往阅读', planDone: '已读', planMarkDone: '标记今天已读',
planDay: function (n) { return "\u7B2C ".concat(n, " \u5929"); }, planWeek: function (n) { return "\u7B2C ".concat(n, " \u5468"); },
chapterRange: function (a, b) { return "\u7B2C ".concat(a, "\u2013").concat(b, " \u7AE0"); }, psalmRange: function (a, b) { return "\u7B2C ".concat(a, "\u2013").concat(b, " \u7BC7"); },
planEmpty: '还没有开始读经计划。选一个计划，就会从第一天开始为你排好进度。',
planRemind: '每日提醒',
planRemindHint: ['已开启：今天的进度还没读完的话，晚上8点左右手机会跳通知提醒你。', '关闭：不会有提醒通知。'],
planRemindDenied: '手机／浏览器封锁了通知权限，请到系统设置里开启本App的通知权限',
planRemindUnsupported: '这个浏览器不支持通知功能（iPhone 请先把App「添加到主屏幕」后再开启）',
planRemindTitle: '321互动圣经．读经提醒',
planRemindBody: function (b, r) { return "\u4ECA\u5929\u8FD8\u6CA1\u8BFB".concat(b).concat(r, "\uFF0C\u627E\u4E2A\u65F6\u95F4\u8BFB\u4E00\u4E0B\u5427\uFF01"); },
planAutoDoneToast: '读完了！今天的进度已经自动帮你打勾' },
en: { app: '321 Interactive Bible', today: 'Today', books: 'Books', search: 'Search', companion: 'Xiaozhi',
companionFull: 'Xiaozhi — AI Companion', me: 'Me',
ot: 'Old Testament', nt: 'New Testament', ch: 'ch', chapter: function (n) { return "Chapter ".concat(n); }, verses: 'verses', bookUnit: 'books',
cont: 'Continue reading', start: 'Start reading', daily: "Today's meditation", progress: 'Reading progress',
prev: 'Previous', next: 'Next', toc: 'Contents', pure: 'Reading mode', note: 'Notes', back: 'Back',
modes: ['By chapter', 'Whole book'], onoff: ['Show', 'Hide'],
shCh: 'Chapter headings', shV: 'Verse numbers',
shChHint: ['A quiet heading at the start of each chapter', 'No chapter headings'],
shVHint: ['A small gold number before each verse', 'No numbers — just the text'],
modeHint: ['One chapter at a time', 'The whole book as one flowing text'],
prevBk: 'Previous book', nextBk: 'Next book', bookDone: 'You have finished this book',
bm: 'Bookmark', bmAdd: 'Bookmarked', bmDel: 'Bookmark removed', myBm: 'My bookmarks',
emptyBm: 'No bookmarks yet. Tap 🔖 in the reader, then tap the sentence you have reached.',
bmHint: 'Bookmark mode: tap a sentence to bookmark it, tap again to remove. Tap 🔖 to finish.',
bmModeOn: 'Bookmark mode on', bmModeOff: 'Bookmark mode off',
resume: 'Pick up where you left off',
read: 'Read this chapter', done: 'Chapter finished', markRead: 'Mark as read',
searchPH: 'Search the Bible…', searchHint: 'Type at least two letters', noResult: 'Nothing found',
found: function (n) { return "".concat(n, " verse").concat(n === 1 ? '' : 's', " found"); }, loading: 'Loading…',
hlTitle: 'This sentence', hlColor: 'Colour', hlNote: 'Write your reflection…', save: 'Save',
ask: 'Ask Xiaozhi', del: 'Remove highlight', close: 'Close',
ttsFrom: '🔊 Read from here', ttsPlay: 'Play', ttsPause: 'Pause', ttsStop: 'Stop',
hlSpan: 'Range', spanUnit: function (n) { return "".concat(n, " sentence").concat(n === 1 ? '' : 's'); }, spanV: 'Whole verse', spanP: 'Whole paragraph',
spanHint: 'Tap ＋ to take in the next sentence, so a highlight can cover a whole passage.',
spanIsV: 'The whole verse is already highlighted', spanIsP: 'The whole paragraph is already highlighted',
spanDoneV: function (n) { return "Whole verse \u2014 ".concat(n, " sentence").concat(n === 1 ? '' : 's'); }, spanDoneP: function (n) { return "Whole paragraph \u2014 ".concat(n, " sentence").concat(n === 1 ? '' : 's'); },
team: 'Team', myHl: 'My highlights', myFav: 'My saved replies', settings: 'Settings', font: 'Text size', theme: 'Theme',
fonts: ['Normal', 'Large', 'Larger', 'Largest'], themes: ['Auto', 'Day', 'Night', 'Parchment'],
voice: 'Reading voice', ttsAutoNext: 'Auto-continue to next chapter',
ttsAutoNextHint: ['When a chapter finishes reading aloud, automatically move on to the next one', 'Stop when this chapter ends — no automatic page turn'],
langLabel: 'Language', stats: ['Chapters read', 'Highlights', 'Bookmarks'],
diag: 'Connection test', diagRun: 'Test Xiaozhi and read-aloud', diagBusy: 'Testing…',
upd: 'Updates', updCheck: 'Check for updates', updChecking: 'Checking…', updLatest: 'You have the latest version',
updFound: 'Update found, downloading…', updReadyBar: 'A new version is ready — tap to update ↻', updFail: 'Check failed, please try again later',
updApplying: 'Updating…',
card: 'Make an image', cardTitle: 'Make an image to share', cardStyle: 'Style', cardSize: 'Size',
cardBorder: 'Border', cardFsL: 'Body text size', cardFsHint: 'The group name, greeting, body text and signature all scale together; the verse itself stays as it is.',
cardText: 'Card text', bless: 'Ask Xiaozhi to write', blessing: 'Xiaozhi is writing…', blessDone: 'Xiaozhi has written it',
blessHint: 'Write it yourself, or let Xiaozhi write a short blessing from this verse. The card updates as you type.',
useMine: 'Use my reflection', clearText: 'No body text',
cardLines: 'Lines above and below', cardTopL: 'Top (your fellowship)', cardSignL: 'Bottom (signature)',
cardToL: 'To (who this card is for)', cardToPH: 'e.g. Dear Joy',
cardLinesHint: 'Leave blank for the default — for example, “With love, Alex & Joy”.',
cardShare: 'Share', cardSave: 'Save to photos',
cardHint: 'Tap Share to send it straight to LINE, Instagram or Facebook — or press and hold the image to save it.',
cardSaved: 'Downloaded — share it from your photos',
saveIOS: 'Choose “Save Image” in the menu and it goes to your photos',
savedFile: 'Downloaded to the Files app',
holdT: 'Press and hold the image below', holdS: 'Choose “Add to Photos” or “Save Image” to keep it.',
photo: 'Add a photo (optional)', photoPick: 'Choose a photo', photoSwap: 'Choose from album', photoDel: 'Remove photo',
photoBg: ['As background', 'As background'], photoStk: ['As a sticker', 'As a sticker'],
photoHint: 'Use it as the card background, or stick it on like a polaroid. Size and position are adjustable.',
photoBad: "That photo could not be read — try another one",
stkShape: 'Photo shape', stkSize: 'Photo size', stkPos: 'Photo position',
bgm: 'Background music (optional)', bgmPick: 'Choose music', bgmSwap: 'Change music', bgmDel: 'Remove music',
bgmVol: 'Music volume', bgmNote: 'It loops quietly under your voice while you record.',
bgmHint: 'Pick a hymn or something gentle. If you cannot find it, tap Browse at the bottom left and look in iCloud Drive or On My iPhone.',
bgmBad: 'That is not an audio file — choose an mp3, m4a or wav', bgmBig: 'That file is too large (over 25MB) — choose a shorter one',
bgmAdded: 'Music added', bgmNeed: 'Choose some background music first',
recSec: 'Record a video', recVoice: '🎙 Voice only', recCard: '🖼 Card video', recSelfie: '📷 With selfie',
recVoiceD: 'Your voice alone, saved as an audio file',
recCardD: 'The card plus your voice, made into a video',
recSelfieD: 'The card, your face and your voice, made into a video',
recIntro: 'Tap start and read the verse aloud. Record your voice alone, or add the card and your face, and it becomes a video you can send straight to anyone.',
recIntroA: 'This device cannot build a video, so it will record audio only. You can use Screen Recording while it plays.',
recReady: 'Tap start and say what is on your heart', recStartV: 'Start recording', recStartS: 'Start selfie recording',
recStartA: 'Start recording', recStop: 'Stop and finish', recing: 'Recording…', recingA: 'Recording…',
recTip: '30–60 seconds works well: read the verse, then say what it means to you.',
recDoneV: 'Your video is ready to share', recDoneA: 'Recorded — you can play it or share it',
rvTitleV: 'Here it is — take a look', rvTitleA: 'Here it is — have a listen',
rvHint: 'Keep it if you are happy with it, record it again, or delete it without saving.',
rvSave: 'Save to my recordings', rvShare: 'Share', rvAgain: 'Record again', rvDrop: 'Delete',
rvDropAsk: 'Delete this without saving?', rvDropped: 'Deleted — nothing was saved', rvSaving: 'Saving…',
rvNote: 'Not saved yet', rvLeaveAsk: 'This has not been saved yet — close anyway?',
recNo: 'This device cannot record audio', vidNo: 'This device cannot build a video',
micDeny: 'Microphone not available — please allow access', camDeny: 'Camera not available — please allow access',
selfieHint: 'Your face appears in a circle at the bottom right, composed in as you record.',
beauty: 'Beauty', beautyOn: 'Smooth', beautyOff: 'Original',
beautyHint: ['Skin is softened and slightly brightened for a more flattering selfie.', 'Uses the raw camera image, unprocessed.'],
mcLen: 'Music card length', mcStart: 'No talking — just music', mcing: 'Building your music card…',
mcHint: 'The card set to music, no need to speak. 15 or 30 seconds is quick; “Whole track” waits for the music to finish.',
works: 'My recordings', noWorks: 'Nothing yet. Record a few words, or set the card to music.',
delAsk: 'Delete this recording?', deleted: 'Deleted',
emptyHl: 'No highlights yet. Tap any sentence to highlight it and write a reflection.',
emptyFav: "You have not saved any of Xiaozhi's replies yet.",
chatPH: 'Ask about this passage…', send: 'Send', examples: 'Example questions',
ctx: function (b, c) { return "Reading: ".concat(b, " ").concat(c); }, thinking: 'Xiaozhi is thinking…',
ttsFallback: "Using this device's built-in voice", ttsErr: 'Read-aloud service unavailable',
chatErr: 'Xiaozhi is unreachable. Please try again shortly.',
plan: 'Reading Plan', planTitle: 'Choose a reading plan', planDaysUnit: 'days',
planStart: 'Start this plan', planSwitch: 'Change plan', planRestart: 'Restart',
planRestartAsk: 'Restart this plan? All progress checked off so far will be cleared.',
planGoRead: 'Go read', planDone: 'Done', planMarkDone: "Mark today's reading done",
planDay: function (n) { return "Day ".concat(n); }, planWeek: function (n) { return "Week ".concat(n); },
chapterRange: function (a, b) { return "Chapters ".concat(a, "-").concat(b); }, psalmRange: function (a, b) { return "Psalms ".concat(a, "-").concat(b); },
planEmpty: "You haven't started a reading plan yet. Pick one and it will lay out a day-by-day pace for you, starting from day one.",
planRemind: 'Daily reminder',
planRemindHint: ["On: if today's reading isn't finished yet, you'll get a notification around 8 PM.", "Off: no reminder notifications."],
planRemindDenied: 'Notifications are blocked for this app. Please enable notification permission in your device settings.',
planRemindUnsupported: 'This browser does not support notifications (on iPhone, add this app to your Home Screen first).',
planRemindTitle: '321 Interactive Bible — Reading Reminder',
planRemindBody: function (b, r) { return "You haven't read ".concat(b, " ").concat(r, " yet today \u2014 take a few minutes when you can!"); },
planAutoDoneToast: "Nice! Today's reading has been checked off automatically" }
};
var PX_API = 'https://api.pexels.com/v1/';
var PX_PER = 24;
var PIC_L = {
zh: { lib: '免費圖庫', libBtn: '🖼 從免費圖庫選', title: 'Pexels 免費圖庫',
ph: '想找什麼樣的畫面…', search: '搜尋', more: '再多一些', loading: '載入中…',
noKey: '還沒設定 Pexels 金鑰。到 pexels.com/api 免費申請一把，貼進 app.js 最上面的 PEXELS_KEY 就可以用了。',
err: '連不上圖庫，請稍後再試', none: '找不到相符的照片，換個字試試',
by: '攝影：', picked: '已選好這張照片', loadingPic: '下載照片中…',
hint: '照片來自 Pexels，免費可商用。挑一張當卡片背景，字會自動壓上一層遮罩。',
presets: [['風景', 'landscape'], ['日出', 'sunrise'], ['天空', 'sky'], ['海', 'ocean'],
['山', 'mountain'], ['花', 'flowers'], ['光', 'light rays'], ['樹', 'tree'],
['小路', 'path'], ['麥田', 'wheat field'], ['水', 'calm water'], ['雲', 'clouds'],
['晨霧', 'morning mist'], ['星空', 'starry sky'], ['教堂', 'church'], ['十字架', 'cross']] },
zs: { lib: '免费图库', libBtn: '🖼 从免费图库选', title: 'Pexels 免费图库',
ph: '想找什么样的画面…', search: '搜索', more: '再多一些', loading: '载入中…',
noKey: '还没设定 Pexels 密钥。到 pexels.com/api 免费申请一把，贴进 app.js 最上面的 PEXELS_KEY 就可以用了。',
err: '连不上图库，请稍后再试', none: '找不到相符的照片，换个字试试',
by: '摄影：', picked: '已选好这张照片', loadingPic: '下载照片中…',
hint: '照片来自 Pexels，免费可商用。挑一张当卡片背景，字会自动压上一层遮罩。',
presets: [['风景', 'landscape'], ['日出', 'sunrise'], ['天空', 'sky'], ['海', 'ocean'],
['山', 'mountain'], ['花', 'flowers'], ['光', 'light rays'], ['树', 'tree'],
['小路', 'path'], ['麦田', 'wheat field'], ['水', 'calm water'], ['云', 'clouds'],
['晨雾', 'morning mist'], ['星空', 'starry sky'], ['教堂', 'church'], ['十字架', 'cross']] },
en: { lib: 'Free photo library', libBtn: '🖼 Pick a free photo', title: 'Pexels free photos',
ph: 'What kind of scene…', search: 'Search', more: 'Load more', loading: 'Loading…',
noKey: 'No Pexels key yet. Get a free one at pexels.com/api and paste it into PEXELS_KEY at the top of app.js.',
err: 'Cannot reach the photo library — try again later', none: 'Nothing found — try another word',
by: 'Photo: ', picked: 'Photo chosen', loadingPic: 'Downloading the photo…',
hint: 'Photos from Pexels — free to use. Pick one as the card background; the text gets a soft overlay automatically.',
presets: [['Landscape', 'landscape'], ['Sunrise', 'sunrise'], ['Sky', 'sky'], ['Ocean', 'ocean'],
['Mountain', 'mountain'], ['Flowers', 'flowers'], ['Light', 'light rays'], ['Tree', 'tree'],
['Path', 'path'], ['Wheat', 'wheat field'], ['Water', 'calm water'], ['Clouds', 'clouds'],
['Mist', 'morning mist'], ['Stars', 'starry sky'], ['Church', 'church'], ['Cross', 'cross']] }
};
var pl = function () { return PIC_L[state.lang] || PIC_L.zh; };
var pxState = { q: '', page: 1, items: [], busy: false, end: false };
var photoBy = '';
function pxOrient() {
var s = cardSize();
return s === 'w' ? 'landscape' : (s === 's' ? 'square' : 'portrait');
}
function pxFetch(reset) {
return __awaiter(this, void 0, void 0, function () {
var q, url, r, d, got, e_1;
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
if (!PEXELS_KEY) {
toast(pl().noKey, 6000);
return [2, false];
}
if (pxState.busy)
return [2, false];
pxState.busy = true;
if (reset) {
pxState.page = 1;
pxState.items = [];
pxState.end = false;
}
q = pxState.q.trim();
url = (q ? "".concat(PX_API, "search?query=").concat(encodeURIComponent(q), "&orientation=").concat(pxOrient(), "&")
: "".concat(PX_API, "curated?"))
+ "per_page=".concat(PX_PER, "&page=").concat(pxState.page);
_a.label = 1;
case 1:
_a.trys.push([1, 4, 5, 6]);
return [4, fetch(url, { headers: { Authorization: PEXELS_KEY } })];
case 2:
r = _a.sent();
if (!r.ok)
throw new Error('http ' + r.status);
return [4, r.json()];
case 3:
d = _a.sent();
got = (d && d.photos) || [];
pxState.items = pxState.items.concat(got);
pxState.end = got.length < PX_PER;
pxState.page++;
return [2, true];
case 4:
e_1 = _a.sent();
toast(pl().err + '（' + (e_1.message || 'network') + '）', 4000);
return [2, false];
case 5:
pxState.busy = false;
return [7];
case 6: return [2];
}
});
});
}
function pxLoad(photo) {
return __awaiter(this, void 0, void 0, function () {
var url, r, blob, obj, im;
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
url = (photo.src && (photo.src.large2x || photo.src.large || photo.src.original)) || '';
if (!url)
return [2, false];
return [4, fetch(url, { mode: 'cors' })];
case 1:
r = _a.sent();
if (!r.ok)
throw new Error('http ' + r.status);
return [4, r.blob()];
case 2:
blob = _a.sent();
obj = URL.createObjectURL(blob);
_a.label = 3;
case 3:
_a.trys.push([3, , 5, 6]);
return [4, new Promise(function (res, rej) {
var i = new Image();
i.onload = function () { return res(i); };
i.onerror = function () { return rej(new Error('decode')); };
i.src = obj;
})];
case 4:
im = _a.sent();
photoImg = im;
photoBy = photo.photographer || '';
if (!photoMode)
photoMode = 'bg';
return [2, true];
case 5:
setTimeout(function () { try {
URL.revokeObjectURL(obj);
}
catch (_) { } }, 30000);
return [7];
case 6: return [2];
}
});
});
}
function openPexels() {
var _this = this;
var L = pl();
var mask = document.createElement('div');
mask.className = 'hlsheet-mask ibs';
mask.innerHTML = "<div class=\"hlsheet-card pxsheet\">\n    <div class=\"hlsheet-title\">".concat(esc(L.title), "</div>\n    <div class=\"pxbar\">\n      <input class=\"cardinput\" id=\"pxQ\" placeholder=\"").concat(esc(L.ph), "\" value=\"").concat(esc(pxState.q), "\">\n      <button class=\"btn sm primary\" id=\"pxGo\">").concat(esc(L.search), "</button>\n    </div>\n    <div class=\"cardchips pxchips\" id=\"pxPre\">\n      ").concat(L.presets.map(function (_a) {
var _b = __read(_a, 2), n = _b[0], q = _b[1];
return "<button data-q=\"".concat(esc(q), "\">").concat(esc(n), "</button>");
}).join(''), "\n    </div>\n    <div class=\"pxgrid\" id=\"pxGrid\"></div>\n    <div class=\"hlsheet-acts2\" style=\"margin-top:12px\">\n      <button class=\"btn sm\" id=\"pxMore\">").concat(esc(L.more), "</button>\n      <button class=\"btn sm\" id=\"pxClose\">").concat(esc(t().close), "</button>\n    </div>\n    <div class=\"muted\" style=\"font-size:12px;margin-top:10px\">").concat(esc(L.hint), "</div>\n  </div>");
document.body.appendChild(mask);
mask.onclick = function (e) { if (e.target === mask)
mask.remove(); };
$('#pxClose', mask).onclick = function () { return mask.remove(); };
var grid = $('#pxGrid', mask);
var paint = function () {
if (!pxState.items.length) {
grid.innerHTML = "<div class=\"empty\" style=\"grid-column:1/-1;padding:24px\">".concat(esc(pxState.busy ? L.loading : L.none), "</div>");
return;
}
grid.innerHTML = pxState.items.map(function (p, i) { return "\n      <button class=\"pxcell\" data-i=\"".concat(i, "\">\n        <img src=\"").concat(esc((p.src && (p.src.tiny || p.src.small)) || ''), "\" alt=\"\" loading=\"lazy\">\n        <span>").concat(esc(p.photographer || ''), "</span>\n      </button>"); }).join('');
$$('.pxcell', grid).forEach(function (b) { return b.onclick = function () { return __awaiter(_this, void 0, void 0, function () {
var p, e_2;
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
p = pxState.items[+b.dataset.i];
if (!p)
return [2];
b.classList.add('on');
toast(L.loadingPic);
_a.label = 1;
case 1:
_a.trys.push([1, 4, , 5]);
return [4, pxLoad(p)];
case 2:
_a.sent();
mask.remove();
toast(L.picked);
return [4, studioRefresh()];
case 3:
_a.sent();
return [3, 5];
case 4:
e_2 = _a.sent();
b.classList.remove('on');
toast(t().photoBad, 4000);
return [3, 5];
case 5: return [2];
}
});
}); }; });
};
var run = function (reset) { return __awaiter(_this, void 0, void 0, function () {
var mb;
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
grid.innerHTML = "<div class=\"empty\" style=\"grid-column:1/-1;padding:24px\">".concat(esc(L.loading), "</div>");
return [4, pxFetch(reset)];
case 1:
_a.sent();
paint();
mb = $('#pxMore', mask);
if (mb)
mb.hidden = pxState.end || !pxState.items.length;
return [2];
}
});
}); };
$('#pxGo', mask).onclick = function () { pxState.q = $('#pxQ', mask).value; run(true); };
$('#pxQ', mask).onkeydown = function (e) { if (e.key === 'Enter') {
pxState.q = e.target.value;
run(true);
} };
$$('#pxPre button', mask).forEach(function (b) { return b.onclick = function () {
pxState.q = b.dataset.q;
$('#pxQ', mask).value = b.dataset.q;
run(true);
}; });
$('#pxMore', mask).onclick = function () { return run(false); };
run(true);
}
var MUSIC_JSON = MUSIC_HOME + 'music.json';
var MUSIC_DIR = MUSIC_HOME + 'music/';
var MUSIC_ALT = MUSIC_HOME;
var HYM_L = {
zh: { lib: '詩歌庫', btn: '🎵 從詩歌庫選', title: '詩歌庫', ph: '找歌名…',
loading: '載入中…', close: '關閉', all: '全部', play: '試聽', stop: '停止',
none: '找不到這首，換個字試試', picked: '已選好這首詩歌', getting: '載入詩歌中…',
noList: '還沒有建立詩歌庫。把 mp3 放進網站的 music/ 資料夾，並在 music.json 加上清單，這裡就會出現。',
bad: '這首載入失敗，換一首試試', credit: '詩歌：', srcT: '出處：',
e404a: '找不到 ', e404b: '（根目錄也找過了）　這個音檔還沒上傳到網站上',
eNet: '連不到音檔（網路或離線）：', eEmpty: '　這個檔是空的，請重新上傳',
eHtml: '　抓回來的不是音檔，是網頁（多半是 404 頁面）', again: '找到音檔了，請再按一次 ▶',
hint: '詩歌放在自己的網站上，錄影片時混得進去。下載與使用請遵守各詩歌的授權規定。' },
zs: { lib: '诗歌库', btn: '🎵 从诗歌库选', title: '诗歌库', ph: '找歌名…',
loading: '载入中…', close: '关闭', all: '全部', play: '试听', stop: '停止',
none: '找不到这首，换个字试试', picked: '已选好这首诗歌', getting: '载入诗歌中…',
noList: '还没有建立诗歌库。把 mp3 放进网站的 music/ 文件夹，并在 music.json 加上清单，这里就会出现。',
bad: '这首载入失败，换一首试试', credit: '诗歌：', srcT: '出处：',
e404a: '找不到 ', e404b: '（根目录也找过了）　这个音档还没上传到网站上',
eNet: '连不到音档（网络或离线）：', eEmpty: '　这个档是空的，请重新上传',
eHtml: '　抓回来的不是音档，是网页（多半是 404 页面）', again: '找到音档了，请再按一次 ▶',
hint: '诗歌放在自己的网站上，录视频时混得进去。下载与使用请遵守各诗歌的授权规定。' },
en: { lib: 'Hymn library', btn: '🎵 Pick a hymn', title: 'Hymn library', ph: 'Find a hymn…',
loading: 'Loading…', close: 'Close', all: 'All', play: 'Preview', stop: 'Stop',
none: 'Not found — try another word', picked: 'Hymn selected', getting: 'Loading the hymn…',
noList: 'No hymn library yet. Put mp3 files in the site’s music/ folder and list them in music.json.',
bad: 'That hymn could not be loaded — try another', credit: 'Hymn: ', srcT: 'Source: ',
e404a: 'Not found: ', e404b: ' (the site root was checked too) — this file has not been uploaded yet',
eNet: 'Cannot reach the audio file (offline?): ', eEmpty: ' — the file is empty, please re-upload',
eHtml: ' — what came back is a web page, not audio (usually a 404 page)', again: 'Found it — tap ▶ once more',
hint: 'Hymns are hosted on this site, so they mix into recordings properly. Please respect each hymn’s licence.' }
};
var hl_ = function () { return HYM_L[state.lang] || HYM_L.zh; };
var songName = function (s) { return (isEN() ? (s.ne || s.n) : (isZS() ? (s.ns || s.n) : s.n)) || s.f || ''; };
var hymnList = null;
var bgmCredit = '';
var hymnPrev = null;
var hymnEl = null;
function hymnAudio() {
if (hymnEl)
return hymnEl;
hymnEl = document.createElement('audio');
hymnEl.preload = 'auto';
hymnEl.playsInline = true;
['playsinline', 'webkit-playsinline'].forEach(function (a) { return hymnEl.setAttribute(a, ''); });
hymnEl.style.cssText = 'position:absolute;width:1px;height:1px;opacity:0;pointer-events:none';
document.body.appendChild(hymnEl);
return hymnEl;
}
function musicProbe(list) {
return __awaiter(this, void 0, void 0, function () {
var max, i, name_1, _a, _b, b, r, e_3, e_4_1;
var e_4, _c;
return __generator(this, function (_d) {
switch (_d.label) {
case 0:
if (musicBase !== null || !list || !list.length)
return [2];
max = Math.min(list.length, 12);
i = 0;
_d.label = 1;
case 1:
if (!(i < max)) return [3, 12];
name_1 = encodeURIComponent(list[i].f);
_d.label = 2;
case 2:
_d.trys.push([2, 9, 10, 11]);
_a = (e_4 = void 0, __values([MUSIC_DIR, MUSIC_ALT])), _b = _a.next();
_d.label = 3;
case 3:
if (!!_b.done) return [3, 8];
b = _b.value;
_d.label = 4;
case 4:
_d.trys.push([4, 6, , 7]);
return [4, fetch(b + name_1 + '?v=' + VERSION, { method: 'HEAD' })];
case 5:
r = _d.sent();
if (r.ok) {
musicBase = b;
return [2];
}
return [3, 7];
case 6:
e_3 = _d.sent();
return [3, 7];
case 7:
_b = _a.next();
return [3, 3];
case 8: return [3, 11];
case 9:
e_4_1 = _d.sent();
e_4 = { error: e_4_1 };
return [3, 11];
case 10:
try {
if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
}
finally { if (e_4) throw e_4.error; }
return [7];
case 11:
i++;
return [3, 1];
case 12: return [2];
}
});
});
}
function hymnLoadList() {
return __awaiter(this, void 0, void 0, function () {
var r, d;
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
if (hymnList)
return [2, hymnList];
return [4, fetch(MUSIC_JSON + '?v=' + VERSION)];
case 1:
r = _a.sent();
if (!r.ok)
throw new Error('http ' + r.status);
return [4, r.json()];
case 2:
d = _a.sent();
hymnList = Array.isArray(d) ? d : ((d && d.songs) || []);
return [2, hymnList];
}
});
});
}
function hymnStopPrev() {
if (hymnEl) {
try {
hymnEl.pause();
}
catch (e) { }
}
hymnPrev = null;
$$('.hymnrow .hymnplay').forEach(function (b) { return b.textContent = '▶'; });
}
var musicBase = null;
function hymnFetch(s) {
return __awaiter(this, void 0, void 0, function () {
var name, tries, why, tries_1, tries_1_1, b, path, r, e_5, blob, e_6_1;
var e_6, _a;
return __generator(this, function (_b) {
switch (_b.label) {
case 0:
name = encodeURIComponent(s.f);
tries = (musicBase !== null) ? [musicBase] : [MUSIC_DIR, MUSIC_ALT];
why = '';
_b.label = 1;
case 1:
_b.trys.push([1, 10, 11, 12]);
tries_1 = __values(tries), tries_1_1 = tries_1.next();
_b.label = 2;
case 2:
if (!!tries_1_1.done) return [3, 9];
b = tries_1_1.value;
path = b + name;
r = void 0;
_b.label = 3;
case 3:
_b.trys.push([3, 5, , 6]);
return [4, fetch(path + '?v=' + VERSION)];
case 4:
r = _b.sent();
return [3, 6];
case 5:
e_5 = _b.sent();
why = hl_().eNet + path;
return [3, 8];
case 6:
if (r.status === 404) {
why = why || (hl_().e404a + MUSIC_DIR + name + hl_().e404b);
return [3, 8];
}
if (!r.ok) {
why = path + '：HTTP ' + r.status;
return [3, 8];
}
return [4, r.blob()];
case 7:
blob = _b.sent();
if (!blob.size) {
why = path + hl_().eEmpty;
return [3, 8];
}
if (/(^|,)text\/html/.test(blob.type || '')) {
why = path + hl_().eHtml;
return [3, 8];
}
musicBase = b;
return [2, blob];
case 8:
tries_1_1 = tries_1.next();
return [3, 2];
case 9: return [3, 12];
case 10:
e_6_1 = _b.sent();
e_6 = { error: e_6_1 };
return [3, 12];
case 11:
try {
if (tries_1_1 && !tries_1_1.done && (_a = tries_1.return)) _a.call(tries_1);
}
finally { if (e_6) throw e_6.error; }
return [7];
case 12: throw new Error(why || hl_().bad);
}
});
});
}
function hymnPick(s) {
return __awaiter(this, void 0, void 0, function () {
return __generator(this, function (_a) {
switch (_a.label) {
case 0: return [4, hymnFetch(s)];
case 1:
bgmBlob = _a.sent();
bgmName = songName(s);
bgmCredit = hl_().credit + songName(s) + (s.by ? '／' + s.by : '');
return [2];
}
});
});
}
function openHymns() {
var _this = this;
var L = hl_(), Lb = t();
var mask = document.createElement('div');
mask.className = 'hlsheet-mask ibs';
mask.innerHTML = "<div class=\"hlsheet-card hymnsheet\">\n    <div class=\"hlsheet-title\">".concat(esc(L.title), "</div>\n    <div class=\"pxbar\">\n      <input class=\"cardinput\" id=\"hyQ\" placeholder=\"").concat(esc(L.ph), "\">\n    </div>\n    <div class=\"cardchips\" id=\"hyTags\"></div>\n    <div id=\"hyList\"></div>\n    <div class=\"hlsheet-acts\" style=\"margin-top:12px\">\n      <button class=\"btn\" id=\"hyClose\">").concat(esc(L.close), "</button>\n    </div>\n    <div class=\"muted\" style=\"font-size:12px;margin-top:10px\">").concat(esc(L.hint), "</div>\n  </div>");
document.body.appendChild(mask);
var shut = function () { hymnStopPrev(); mask.remove(); };
mask.onclick = function (e) { if (e.target === mask)
shut(); };
$('#hyClose', mask).onclick = shut;
var box = $('#hyList', mask), tagBox = $('#hyTags', mask), inp = $('#hyQ', mask);
var tag = '';
box.innerHTML = "<div class=\"empty\">".concat(esc(L.loading), "</div>");
var paint = function () {
var q = (inp.value || '').trim().toLowerCase();
var list = (hymnList || []).filter(function (s) {
if (tag && (s.tag || '') !== tag)
return false;
if (!q)
return true;
return (songName(s) + ' ' + (s.n || '') + ' ' + (s.ne || '') + ' ' + (s.by || ''))
.toLowerCase().indexOf(q) >= 0;
});
if (!list.length) {
box.innerHTML = "<div class=\"empty\">".concat(esc(L.none), "</div>");
return;
}
box.innerHTML = list.map(function (s) {
var i = hymnList.indexOf(s);
return "<div class=\"hymnrow\" data-i=\"".concat(i, "\">\n        <button class=\"hymnplay\" data-p=\"").concat(i, "\">\u25B6</button>\n        <div class=\"meta\"><div class=\"t\">").concat(esc(songName(s)), "</div>\n        <div class=\"s\">").concat(esc([s.by, s.tag].filter(Boolean).join('　·　')), "</div></div>\n        <div class=\"chev\">\u203A</div></div>");
}).join('');
$$('.hymnrow', box).forEach(function (row) {
row.onclick = function (e) { return __awaiter(_this, void 0, void 0, function () {
var s, err_1;
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
if (e.target.closest('.hymnplay'))
return [2];
s = hymnList[+row.dataset.i];
if (!s)
return [2];
hymnStopPrev();
toast(L.getting, 8000);
_a.label = 1;
case 1:
_a.trys.push([1, 4, , 5]);
return [4, hymnPick(s)];
case 2:
_a.sent();
shut();
toast(L.picked);
return [4, studioRefresh()];
case 3:
_a.sent();
return [3, 5];
case 4:
err_1 = _a.sent();
toast((err_1 && err_1.message) ? err_1.message : L.bad, 7000);
return [3, 5];
case 5: return [2];
}
});
}); };
});
$$('.hymnplay', box).forEach(function (b) {
b.onclick = function () {
var s = hymnList[+b.dataset.p];
if (!s)
return;
var playing = hymnPrev === b;
hymnStopPrev();
if (playing)
return;
var a = hymnAudio();
var src = (musicBase !== null ? musicBase : MUSIC_DIR) + encodeURIComponent(s.f);
try {
if (a.src && a.src.indexOf('blob:') === 0)
URL.revokeObjectURL(a.src);
}
catch (e) { }
a.onended = hymnStopPrev;
a.onerror = null;
a.src = src;
hymnPrev = b;
b.textContent = '⏸';
var q = a.play();
if (q && q.catch)
q.catch(function () {
hymnStopPrev();
hymnFetch(s).then(function () { toast(L.again, 5000); })
.catch(function (err) { toast((err && err.message) || L.bad, 7000); });
});
};
});
};
hymnLoadList().then(function (list) {
return __awaiter(this, void 0, void 0, function () {
var tags;
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
if (!list.length) {
box.innerHTML = "<div class=\"empty\">".concat(esc(L.noList), "</div>");
return [2];
}
return [4, musicProbe(list)];
case 1:
_a.sent();
tags = [];
list.forEach(function (s) { if (s.tag && tags.indexOf(s.tag) < 0)
tags.push(s.tag); });
if (tags.length > 1) {
tagBox.innerHTML = "<button class=\"on\" data-t=\"\">".concat(esc(L.all), "</button>")
+ tags.map(function (x) { return "<button data-t=\"".concat(esc(x), "\">").concat(esc(x), "</button>"); }).join('');
$$('#hyTags button', mask).forEach(function (b) { return b.onclick = function () {
tag = b.dataset.t;
$$('#hyTags button', mask).forEach(function (x) { return x.classList.toggle('on', x === b); });
paint();
}; });
}
inp.oninput = paint;
paint();
return [2];
}
});
});
}).catch(function () {
box.innerHTML = "<div class=\"empty\">".concat(esc(L.noList), "</div>");
});
}
var CARD_TPL = {
navy: { n: ['深藍聖夜', '深蓝圣夜'], bg: ['#123F92', '#0D3988', '#071A42'], glow: 'rgba(212,166,91,.30)',
ink: '#F2ECDD', accent: '#F7EFDC', gold: '#D4A65B', sub: '#BBA98A', frame: 'rgba(212,166,91,.42)' },
paper: { n: ['素樸信箋', '素朴信笺'], bg: ['#FBF8F1', '#F4EFE3', '#EDE6D6'], glow: 'rgba(212,166,91,.45)',
ink: '#3A3122', accent: '#23211C', gold: '#A9762F', sub: '#8A7C63', frame: 'rgba(169,118,47,.34)' },
dawn: { n: ['晨曦盼望', '晨曦盼望'], bg: ['#FFF6EC', '#FBE9D2', '#F6D9B8'], glow: 'rgba(255,214,150,.6)',
ink: '#3A2A1A', accent: '#8A4B16', gold: '#C97A22', sub: '#8A6A4A', frame: 'rgba(181,101,29,.30)' },
grace: { n: ['青草安歇', '青草安歇'], bg: ['#F2F7F1', '#E4EFE6', '#D6E7DA'], glow: 'rgba(160,200,170,.5)',
ink: '#1C2E26', accent: '#255943', gold: '#3C8A64', sub: '#5C7A6A', frame: 'rgba(46,106,80,.28)' },
rose: { n: ['溫柔玫瑰', '温柔玫瑰'], bg: ['#FCF5F3', '#F6E7E3', '#EFD8D2'], glow: 'rgba(220,160,150,.45)',
ink: '#33221E', accent: '#8A3D2E', gold: '#B36A54', sub: '#8A6A62', frame: 'rgba(154,74,58,.28)' },
sky: { n: ['平安晴空', '平安晴空'], bg: ['#F1F7FB', '#DFEEF6', '#CFE4F0'], glow: 'rgba(150,200,230,.5)',
ink: '#1B2A33', accent: '#1E5270', gold: '#2E7DA0', sub: '#5A7684', frame: 'rgba(37,96,128,.28)' },
linen: { n: ['素雅棉麻', '素雅棉麻'], bg: ['#F7F4EE', '#EFEAE0', '#E6DFD2'], glow: 'rgba(200,190,170,.4)',
ink: '#2A2620', accent: '#4A4234', gold: '#8A7A5A', sub: '#7A7263', frame: 'rgba(90,80,64,.26)' },
night: { n: ['深夜星光', '深夜星光'], bg: ['#101E1B', '#16302A', '#0E2420'], glow: 'rgba(232,201,122,.26)',
ink: '#EDEAE0', accent: '#E8C97A', gold: '#E8C97A', sub: '#9FB0AA', frame: 'rgba(232,201,122,.34)' },
plain: { n: ['純白簡潔', '纯白简洁'], bg: ['#FFFFFF', '#FFFFFF', '#FFFFFF'], glow: 'rgba(0,0,0,0)',
ink: '#23211C', accent: '#0D3988', gold: '#A9762F', sub: '#6B6255', frame: 'rgba(13,57,136,.22)' }
};
var CARD_ORDER = ['navy', 'paper', 'dawn', 'grace', 'rose', 'sky', 'linen', 'night', 'plain'];
var CARD_SIZES = { p: [1080, 1920, ['直式 9:16', '直式 9:16']],
t: [1080, 1350, ['直式 4:5', '直式 4:5']],
s: [1080, 1080, ['方形', '方形']],
w: [1920, 1080, ['橫式', '横式']] };
var CARD_BORDERS = [['classic', ['古典雙框', '古典双框']], ['corner', ['雅緻角飾', '雅致角饰']],
['inline', ['內斂細線', '内敛细线']], ['dots', ['珠鏈點框', '珠链点框']],
['ornate', ['華麗花角', '华丽花角']], ['none', ['無邊框', '无边框']]];
var CARD_FS = [[0.9, ['小一點', '小一点']], [1, ['標準', '标准']], [1.2, ['大', '大']],
[1.45, ['特大', '特大']], [1.7, ['超大', '超大']]];
var cardImg = null;
var cardTpl = function () { return CARD_TPL[state.cardTpl] ? state.cardTpl : 'navy'; };
var cardSize = function () { return CARD_SIZES[state.cardSize] ? state.cardSize : 't'; };
var cardBorder = function () { return CARD_BORDERS.some(function (b) { return b[0] === state.cardBorder; }) ? state.cardBorder : 'classic'; };
var cardFs = function () { return Math.min(1.8, Math.max(.85, +state.cardFs || 1)); };
var photoImg = null, photoMode = 'bg', suppressSticker = false, selfieLayout = false;
var stkSize = 0.30, stkPos = 'br', stkShape = 'p';
var STK_SIZES = [[0.22, ['小張', '小张']], [0.30, ['中等', '中等']], [0.38, ['大張', '大张']],
[0.46, ['滿版', '满版']], [0.62, ['超大', '超大']], [0.84, ['整排', '整排']]];
var STK_POS = [['bl', ['左下', '左下']], ['bc', ['正下', '正下']], ['br', ['右下', '右下']],
['tl', ['左上', '左上']], ['tr', ['右上', '右上']]];
var STK_SHAPES = [['p', ['直式', '直式']], ['w', ['橫式 16:9', '横式 16:9']], ['s', ['方形', '方形']]];
var stkRatio = function () { return stkShape === 'w' ? 0.72 : (stkShape === 's' ? 1.06 : 1.12); };
function pickPhoto(inp) {
var f = inp && inp.files && inp.files[0];
if (!f)
return;
var rd = new FileReader();
rd.onload = function () {
var im = new Image();
im.onload = function () { photoImg = im; photoBy = ''; if (!photoMode)
photoMode = 'bg'; studioRefresh(); };
im.onerror = function () { return toast(t().photoBad); };
im.src = rd.result;
};
rd.onerror = function () { return toast(t().photoBad); };
rd.readAsDataURL(f);
}
function coverDraw(ctx, img, x, y, w, h) {
var ir = img.width / img.height, r = w / h;
var sw, sh, sx, sy;
if (ir > r) {
sh = img.height;
sw = sh * r;
sx = (img.width - sw) / 2;
sy = 0;
}
else {
sw = img.width;
sh = sw / r;
sx = 0;
sy = (img.height - sh) / 2;
}
ctx.drawImage(img, sx, sy, sw, sh, x, y, w, h);
}
var bgmBlob = null, bgmName = '', bgmVol = 0.22, mcLen = 30;
var MC_LENS = [[15, ['15 秒', '15 秒']], [30, ['30 秒', '30 秒']], [60, ['1 分鐘', '1 分钟']], [0, ['整首', '整首']]];
var BGM_VOLS = [[0.12, ['小聲', '小声']], [0.22, ['適中', '适中']], [0.38, ['明顯', '明显']]];
var AUD_EXT = /\.(mp3|m4a|aac|wav|aif|aiff|caf|flac|ogg|opus|mp4|mov|webm|wma)$/i;
function pickBgm(inp) {
var f = inp && inp.files && inp.files[0];
if (!f)
return;
var ok = (f.type && (f.type.indexOf('audio') === 0 || f.type.indexOf('video') === 0)) || AUD_EXT.test(f.name || '');
if (!ok) {
toast(t().bgmBad);
return;
}
if (f.size > 25 * 1024 * 1024) {
toast(t().bgmBig);
return;
}
bgmBlob = f;
bgmName = f.name || '背景音樂';
bgmCredit = '';
studioRefresh();
toast(t().bgmAdded);
}
function rr(ctx, x, y, w, h, r) {
ctx.beginPath();
ctx.moveTo(x + r, y);
ctx.arcTo(x + w, y, x + w, y + h, r);
ctx.arcTo(x + w, y + h, x, y + h, r);
ctx.arcTo(x, y + h, x, y, r);
ctx.arcTo(x, y, x + w, y, r);
ctx.closePath();
}
var NO_START = '，。、；：？！）」』】》〉·…—％‰';
var NO_END = '（「『【《〈';
function wrapTextEN(ctx, text, maxW) {
var out = [];
(text || '').split('\n').forEach(function (par) {
if (!par) {
out.push('');
return;
}
var line = '';
par.split(/\s+/).forEach(function (w) {
if (!w)
return;
var probe = line ? line + ' ' + w : w;
if (ctx.measureText(probe).width > maxW && line) {
out.push(line);
line = w;
}
else
line = probe;
});
if (line)
out.push(line);
});
return out;
}
function wrapText(ctx, text, maxW) {
if (isEN())
return wrapTextEN(ctx, text, maxW);
var out = [];
(text || '').split('\n').forEach(function (par) {
var e_7, _a;
if (!par) {
out.push('');
return;
}
var line = '';
try {
for (var par_1 = __values(par), par_1_1 = par_1.next(); !par_1_1.done; par_1_1 = par_1.next()) {
var ch = par_1_1.value;
if (ctx.measureText(line + ch).width > maxW && line) {
if (NO_START.indexOf(ch) >= 0) {
line += ch;
continue;
}
var carry = '';
while (line.length > 1 && NO_END.indexOf(line[line.length - 1]) >= 0) {
carry = line[line.length - 1] + carry;
line = line.slice(0, -1);
}
out.push(line);
line = carry + ch;
}
else
line += ch;
}
}
catch (e_7_1) { e_7 = { error: e_7_1 }; }
finally {
try {
if (par_1_1 && !par_1_1.done && (_a = par_1.return)) _a.call(par_1);
}
finally { if (e_7) throw e_7.error; }
}
out.push(line);
});
return out;
}
function drawCardBorder(ctx, W, H, pad, F, T) {
var B = cardBorder();
if (B === 'none')
return;
var line = T.frame, line2 = T.frame.replace(/[\d.]+\)$/, '0.55)'), gold = T.gold;
var m = pad * .5, x = m, y = m, w = W - m * 2, h = H - m * 2, R = Math.round(18 * F);
if (B === 'classic') {
ctx.strokeStyle = line;
ctx.lineWidth = Math.max(2, W * .0022);
rr(ctx, x, y, w, h, R);
ctx.stroke();
ctx.strokeStyle = line2;
ctx.lineWidth = Math.max(1, W * .0009);
rr(ctx, x + 9 * F, y + 9 * F, w - 18 * F, h - 18 * F, Math.round(12 * F));
ctx.stroke();
ctx.fillStyle = gold;
[[x, y], [x + w, y], [x, y + h], [x + w, y + h]].forEach(function (_a) {
var _b = __read(_a, 2), cx = _b[0], cy = _b[1];
ctx.beginPath();
ctx.arc(cx, cy, Math.round(5 * F), 0, 7);
ctx.fill();
});
}
else if (B === 'corner') {
ctx.strokeStyle = gold;
ctx.lineWidth = Math.max(2, W * .003);
ctx.lineCap = 'round';
var L_1 = Math.round(56 * F);
var seg = function (cx, cy, dx, dy) {
ctx.beginPath();
ctx.moveTo(cx, cy);
ctx.lineTo(cx + dx * L_1, cy);
ctx.moveTo(cx, cy);
ctx.lineTo(cx, cy + dy * L_1);
ctx.stroke();
};
seg(x, y, 1, 1);
seg(x + w, y, -1, 1);
seg(x, y + h, 1, -1);
seg(x + w, y + h, -1, -1);
ctx.lineCap = 'butt';
}
else if (B === 'inline') {
ctx.strokeStyle = line2;
ctx.lineWidth = Math.max(1, W * .0013);
rr(ctx, x + 6 * F, y + 6 * F, w - 12 * F, h - 12 * F, Math.round(14 * F));
ctx.stroke();
}
else if (B === 'dots') {
ctx.fillStyle = line2;
var r0_1 = Math.max(2, W * .0026), gap = Math.round(26 * F);
var ex = x + 6 * F, ey = y + 6 * F, ew = w - 12 * F, eh = h - 12 * F;
var dot = function (px, py) { ctx.beginPath(); ctx.arc(px, py, r0_1, 0, 7); ctx.fill(); };
for (var px = ex; px <= ex + ew; px += gap) {
dot(px, ey);
dot(px, ey + eh);
}
for (var py = ey; py <= ey + eh; py += gap) {
dot(ex, py);
dot(ex + ew, py);
}
}
else if (B === 'ornate') {
ctx.strokeStyle = line;
ctx.lineWidth = Math.max(2, W * .0022);
rr(ctx, x, y, w, h, R);
ctx.stroke();
ctx.strokeStyle = gold;
ctx.lineWidth = Math.max(1.5, W * .0016);
ctx.lineCap = 'round';
var L_2 = Math.round(34 * F), o_1 = Math.round(16 * F);
var flo = function (cx, cy, dx, dy) {
ctx.beginPath();
ctx.moveTo(cx + dx * o_1, cy + dy * o_1);
ctx.lineTo(cx + dx * (o_1 + L_2), cy + dy * o_1);
ctx.moveTo(cx + dx * o_1, cy + dy * o_1);
ctx.lineTo(cx + dx * o_1, cy + dy * (o_1 + L_2));
ctx.stroke();
ctx.fillStyle = gold;
ctx.beginPath();
ctx.arc(cx + dx * o_1, cy + dy * o_1, Math.round(4.5 * F), 0, 7);
ctx.fill();
};
flo(x, y, 1, 1);
flo(x + w, y, -1, 1);
flo(x, y + h, 1, -1);
flo(x + w, y + h, -1, -1);
ctx.lineCap = 'butt';
}
}
function drawSelfieCircle(cx, vid, W, H, F) {
if (!vid || !vid.videoWidth)
return;
var pad = Math.round(W * .085), R = Math.round(Math.min(W, H) * 0.115);
var cxx = W - pad - R + 4 * F, cyy = H - pad - R + 4 * F;
cx.save();
cx.shadowColor = 'rgba(0,0,0,.28)';
cx.shadowBlur = Math.round(22 * F);
cx.shadowOffsetY = Math.round(8 * F);
cx.beginPath();
cx.arc(cxx, cyy, R, 0, 7);
cx.fillStyle = '#000';
cx.fill();
cx.restore();
cx.save();
cx.beginPath();
cx.arc(cxx, cyy, R, 0, 7);
cx.clip();
var vw = vid.videoWidth, vh = vid.videoHeight, side = Math.min(vw, vh);
cx.translate(cxx, cyy);
cx.scale(-1, 1);
var sx = (vw - side) / 2, sy = (vh - side) / 2;
if (state.beauty)
drawBeautyFace(cx, vid, sx, sy, side, R);
else
cx.drawImage(vid, sx, sy, side, side, -R, -R, R * 2, R * 2);
cx.restore();
cx.beginPath();
cx.arc(cxx, cyy, R, 0, 7);
cx.lineWidth = Math.max(3, W * .006);
cx.strokeStyle = '#F4EFE3';
cx.stroke();
cx.beginPath();
cx.arc(cxx, cyy, R + 4 * F, 0, 7);
cx.lineWidth = Math.max(2, W * .003);
cx.strokeStyle = 'rgba(212,166,91,.85)';
cx.stroke();
}
function drawBeautyFace(cx, vid, sx, sy, side, R) {
cx.filter = 'brightness(1.06) saturate(1.08) contrast(0.97)';
cx.drawImage(vid, sx, sy, side, side, -R, -R, R * 2, R * 2);
cx.filter = 'none';
cx.save();
cx.globalAlpha = 0.55;
cx.globalCompositeOperation = 'soft-light';
cx.filter = "blur(".concat(Math.max(2, Math.round(R * 0.06)), "px) brightness(1.08)");
cx.drawImage(vid, sx, sy, side, side, -R, -R, R * 2, R * 2);
cx.restore();
cx.filter = 'none';
}
var CARD_SERIF = function () { return isZS()
? '"Noto Serif SC","Source Han Serif SC","Songti SC","STSong","SimSun",Georgia,serif'
: (isEN() ? 'Georgia,"Times New Roman",serif'
: '"Noto Serif TC","Songti TC","STSong","PMingLiU",Georgia,serif'); };
var CARD_SANS = function () { return isZS()
? '"Noto Sans SC","PingFang SC","Microsoft YaHei","Heiti SC",sans-serif'
: (isEN() ? '-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif'
: '"Noto Sans TC","PingFang TC","Microsoft JhengHei",sans-serif'); };
function drawVerseCard(cv, h, W, H) {
var ctx = cv.getContext('2d');
cv.width = W;
cv.height = H;
var T = CARD_TPL[cardTpl()];
var F = W / 1080, pad = Math.round(W * .085), iw = W - pad * 2;
var sans = CARD_SANS(), serif = CARD_SERIF();
var FB = cardFs();
var g = ctx.createLinearGradient(0, 0, W * .3, H);
g.addColorStop(0, T.bg[0]);
g.addColorStop(.55, T.bg[1]);
g.addColorStop(1, T.bg[2]);
ctx.fillStyle = g;
ctx.fillRect(0, 0, W, H);
if (photoImg && photoMode === 'bg') {
coverDraw(ctx, photoImg, 0, 0, W, H);
var hx = T.bg[1].replace('#', '');
var R0 = parseInt(hx.slice(0, 2), 16), G0 = parseInt(hx.slice(2, 4), 16), B0 = parseInt(hx.slice(4, 6), 16);
var sc = ctx.createLinearGradient(0, 0, 0, H);
sc.addColorStop(0, "rgba(".concat(R0, ",").concat(G0, ",").concat(B0, ",0.46)"));
sc.addColorStop(.5, "rgba(".concat(R0, ",").concat(G0, ",").concat(B0, ",0.66)"));
sc.addColorStop(1, "rgba(".concat(R0, ",").concat(G0, ",").concat(B0, ",0.56)"));
ctx.fillStyle = sc;
ctx.fillRect(0, 0, W, H);
}
var rg = ctx.createRadialGradient(W * .84, H * .10, 10, W * .84, H * .10, W * .75);
rg.addColorStop(0, T.glow);
rg.addColorStop(1, 'rgba(0,0,0,0)');
ctx.fillStyle = rg;
ctx.fillRect(0, 0, W, H);
drawCardBorder(ctx, W, H, pad, F, T);
var grp = (state.cardTop || '').trim() || DEF_TOP();
var grpSz = Math.round(27 * F * FB), grpY = pad + Math.round(42 * F);
ctx.textAlign = 'center';
ctx.fillStyle = T.sub;
ctx.font = "600 ".concat(grpSz, "px ").concat(sans);
var gw = ctx.measureText(grp).width;
ctx.fillText(grp, W / 2, grpY);
ctx.strokeStyle = T.frame.replace(/[\d.]+\)$/, '0.6)');
ctx.lineWidth = Math.max(1, 1.5 * F);
[[W / 2 - gw / 2 - 28 * F, -1], [W / 2 + gw / 2 + 28 * F, 1]].forEach(function (_a) {
var _b = __read(_a, 2), x0 = _b[0], d = _b[1];
ctx.beginPath();
ctx.moveTo(x0, grpY - 9 * F);
ctx.lineTo(x0 + d * 30 * F, grpY - 9 * F);
ctx.stroke();
});
var toName = (state.cardTo || '').trim();
if (toName) {
var ts2 = Math.round(40 * F * FB);
ctx.textAlign = 'center';
ctx.fillStyle = T.ink;
while (ts2 > Math.round(22 * F * FB)) {
ctx.font = "600 ".concat(ts2, "px ").concat(serif);
if (ctx.measureText(toName).width <= iw)
break;
ts2 -= Math.round(2 * F);
}
ctx.font = "600 ".concat(ts2, "px ").concat(serif);
ctx.fillText(toName, W / 2, pad + Math.round(132 * F));
}
var hasSticker = photoImg && photoMode === 'sticker' && !suppressSticker;
var stkBottom = hasSticker && stkPos !== 'tl' && stkPos !== 'tr';
var liftRoom = stkBottom ? Math.round(W * stkSize * stkRatio()) + Math.round(30 * F) : 0;
var topRoom = pad + Math.round((toName ? 176 : 100) * F), botRoom = pad + Math.round(70 * F) + liftRoom;
var room = H - topRoom - botRoom;
var raw = (h.t || '')
.replace(/〔[^〕]*〕/g, '').replace(/\[[^\]]*\]/g, '')
.replace(/\s+/g, ' ').replace(/\s+([,.;:!?”’])/g, '$1')
.trim().replace(/[，、；：,;]+$/, '');
var verse = isEN()
? ((/^[“"']/.test(raw) ? '' : '\u201c') + raw + (/[”"']$/.test(raw) ? '' : '\u201d'))
: ((/^[「『]/.test(raw) ? '' : '「') + raw + (/[」』]$/.test(raw) ? '' : '」'));
var note = (studioNote != null ? studioNote : (h.n || '')).trim();
var vs = Math.round(58 * F), vl;
while (true) {
ctx.font = "600 ".concat(vs, "px ").concat(serif);
vl = wrapText(ctx, verse, iw);
if (vl.length <= (isEN() ? 9 : 7) || vs <= Math.round(28 * F))
break;
vs -= Math.round(3 * F);
}
var fixed = vs * .9 + vl.length * vs * 1.52 + Math.round(64 * F) + (note ? Math.round(86 * F) : 0);
var ns = Math.round(38 * F * FB), nl = [];
if (note) {
while (true) {
ctx.font = "".concat(ns, "px ").concat(sans);
nl = wrapText(ctx, note, iw);
if (fixed + nl.length * ns * 1.76 <= room || ns <= Math.round(21 * F))
break;
ns -= Math.round(2 * F);
}
}
var total = fixed + (note ? nl.length * ns * 1.76 : 0);
var y = topRoom + Math.max(0, (room - total) / 2);
ctx.fillStyle = T.accent;
ctx.font = "600 ".concat(vs, "px ").concat(serif);
y += vs * .9;
vl.forEach(function (l) { ctx.fillText(l, W / 2, y); y += vs * 1.52; });
ctx.font = "".concat(Math.round(30 * F), "px ").concat(sans);
ctx.fillStyle = T.accent;
ctx.fillText(cardRef(h), W / 2, y);
y += Math.round(64 * F);
if (note) {
ctx.fillStyle = T.gold;
ctx.beginPath();
ctx.arc(W / 2, y, Math.round(5 * F), 0, 7);
ctx.fill();
ctx.strokeStyle = T.gold;
ctx.lineWidth = 2.5 * F;
ctx.beginPath();
ctx.moveTo(W / 2 - 52 * F, y);
ctx.lineTo(W / 2 - 16 * F, y);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(W / 2 + 16 * F, y);
ctx.lineTo(W / 2 + 52 * F, y);
ctx.stroke();
y += Math.round(86 * F);
ctx.textAlign = 'left';
ctx.fillStyle = T.ink;
ctx.font = "".concat(ns, "px ").concat(sans);
nl.forEach(function (l) { ctx.fillText(l, pad, y); y += ns * 1.76; });
ctx.textAlign = 'center';
}
var lift = stkBottom ? Math.round(W * stkSize * stkRatio()) + Math.round(16 * F) : 0;
ctx.textAlign = 'center';
ctx.fillStyle = T.sub;
ctx.font = "600 ".concat(Math.round(25 * F * FB), "px ").concat(sans);
var sign = (state.cardSign || '').trim()
|| DEF_SIGN();
var ss = Math.round(25 * F * FB);
while (ss > Math.round(15 * F * FB)) {
ctx.font = "600 ".concat(ss, "px ").concat(sans);
if (ctx.measureText(sign).width <= iw)
break;
ss -= 2;
}
ctx.fillText(sign, W / 2, H - pad * .72 - Math.round(24 * F) - lift);
if (hasSticker) {
var sw = Math.round(W * stkSize), sh = Math.round(sw * stkRatio());
var top_1 = stkPos === 'tl' || stkPos === 'tr';
var bx = (stkPos === 'bl' || stkPos === 'tl') ? pad - 4 * F
: (stkPos === 'bc') ? Math.round((W - sw) / 2)
: W - pad - sw + 4 * F;
var by = top_1 ? pad + Math.round(70 * F) : H - pad - sh + 4 * F;
ctx.save();
ctx.translate(bx + sw / 2, by + sh / 2);
ctx.rotate((stkShape === 'w' ? -1.4 : -3) * Math.PI / 180);
ctx.shadowColor = 'rgba(0,0,0,.30)';
ctx.shadowBlur = Math.round(24 * F);
ctx.shadowOffsetY = Math.round(9 * F);
var fr = Math.round(10 * F), pb = (stkShape === 'p') ? Math.round(26 * F) : fr;
rr(ctx, -sw / 2, -sh / 2, sw, sh, Math.round(10 * F));
ctx.fillStyle = '#FDFBF6';
ctx.fill();
ctx.shadowColor = 'transparent';
var iw2 = sw - fr * 2, ih2 = sh - fr - pb;
ctx.save();
rr(ctx, -sw / 2 + fr, -sh / 2 + fr, iw2, ih2, Math.round(4 * F));
ctx.clip();
coverDraw(ctx, photoImg, -sw / 2 + fr, -sh / 2 + fr, iw2, ih2);
ctx.restore();
ctx.restore();
}
}
function cardBlob(url) {
var b = atob(url.split(',')[1]), a = new Uint8Array(b.length);
for (var i = 0; i < b.length; i++)
a[i] = b.charCodeAt(i);
return new Blob([a], { type: 'image/png' });
}
function renderCard(h) {
var _a = __read(CARD_SIZES[cardSize()], 2), W = _a[0], H = _a[1];
var cv = document.createElement('canvas');
drawVerseCard(cv, h, W, H);
cardImg = cv.toDataURL('image/png');
var box = $('#cardPv');
if (box)
box.innerHTML = "<img src=\"".concat(cardImg, "\" alt=\"\">");
}
var isIOS = function () { return /iPad|iPhone|iPod/.test(navigator.userAgent)
|| (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1); };
function openHoldSave(src) {
var L = t();
var mask = document.createElement('div');
mask.className = 'hlsheet-mask ibs';
mask.innerHTML = "<div class=\"hlsheet-card\">\n    <div class=\"hlsheet-title\">".concat(esc(L.holdT), "</div>\n    <div class=\"hl-hint\">").concat(esc(L.holdS), "</div>\n    <div class=\"holdpv\"><img src=\"").concat(src, "\" alt=\"\"></div>\n    <div class=\"hlsheet-acts\" style=\"margin-top:12px\">\n      <button class=\"btn\" id=\"hsClose\">").concat(esc(L.close), "</button>\n    </div></div>");
document.body.appendChild(mask);
mask.onclick = function (e) { if (e.target === mask)
mask.remove(); };
$('#hsClose', mask).onclick = function () { return mask.remove(); };
}
function cardDownload() {
return __awaiter(this, void 0, void 0, function () {
var name, f, e_8, a;
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
if (!cardImg)
return [2];
name = '321marriage-' + Date.now() + '.png';
if (!isIOS()) return [3, 5];
f = new File([cardBlob(cardImg)], name, { type: 'image/png' });
if (!(navigator.canShare && navigator.canShare({ files: [f] }))) return [3, 4];
toast(t().saveIOS, 5000);
_a.label = 1;
case 1:
_a.trys.push([1, 3, , 4]);
return [4, navigator.share({ files: [f], title: t().app })];
case 2:
_a.sent();
return [2];
case 3:
e_8 = _a.sent();
if (e_8 && e_8.name === 'AbortError')
return [2];
return [3, 4];
case 4:
openHoldSave(cardImg);
return [2];
case 5:
a = document.createElement('a');
a.href = cardImg;
a.download = name;
a.click();
toast(t().savedFile, 3200);
return [2];
}
});
});
}
function cardShare() {
return __awaiter(this, void 0, void 0, function () {
var f, e_9;
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
if (!cardImg)
return [2];
f = new File([cardBlob(cardImg)], '321marriage.png', { type: 'image/png' });
if (!(navigator.canShare && navigator.canShare({ files: [f] }))) return [3, 4];
_a.label = 1;
case 1:
_a.trys.push([1, 3, , 4]);
return [4, navigator.share({ files: [f], title: t().app })];
case 2:
_a.sent();
return [2];
case 3:
e_9 = _a.sent();
if (e_9 && e_9.name === 'AbortError')
return [2];
return [3, 4];
case 4:
cardDownload();
return [2];
}
});
});
}
function mx_u32(b, p) { return b[p] * 16777216 + b[p + 1] * 65536 + b[p + 2] * 256 + b[p + 3]; }
function mx_i32(b, p) { var v = mx_u32(b, p); return v >= 2147483648 ? v - 4294967296 : v; }
function mx_u64(b, p) { return mx_u32(b, p) * 4294967296 + mx_u32(b, p + 4); }
function mx_typ(b, p) { return String.fromCharCode(b[p], b[p + 1], b[p + 2], b[p + 3]); }
function mx_boxes(b, start, end) {
var out = [];
var p = start;
while (p + 8 <= end) {
var size = mx_u32(b, p), hs = 8;
if (size === 1) {
size = mx_u64(b, p + 8);
hs = 16;
}
else if (size === 0)
size = end - p;
if (size < 8 || p + size > end)
break;
out.push({ type: mx_typ(b, p + 4), start: p, size: size, hs: hs, body: p + hs, end: p + size });
p += size;
}
return out;
}
function mx_find(list, t) { return list.filter(function (x) { return x.type === t; }); }
function mx_one(list, t) { var r = mx_find(list, t); return r.length ? r[0] : null; }
function mx_children(b, mx_box) { return mx_boxes(b, mx_box.body, mx_box.end); }
function mx_parseTrun(b, tr, tfhd, baseOffset) {
var flags = mx_u32(b, tr.body) & 0xffffff;
var cnt = mx_u32(b, tr.body + 4);
var p = tr.body + 8;
var dataOff = 0;
if (flags & 0x1) {
dataOff = mx_i32(b, p);
p += 4;
}
var firstFlags = null;
if (flags & 0x4) {
firstFlags = mx_u32(b, p);
p += 4;
}
var samples = [];
var off = baseOffset + dataOff;
for (var i = 0; i < cnt; i++) {
var dur = tfhd.defDur, size = tfhd.defSize, fl = tfhd.defFlags, cto = 0;
if (flags & 0x100) {
dur = mx_u32(b, p);
p += 4;
}
if (flags & 0x200) {
size = mx_u32(b, p);
p += 4;
}
if (flags & 0x400) {
fl = mx_u32(b, p);
p += 4;
}
if (flags & 0x800) {
cto = mx_i32(b, p);
p += 4;
}
if (i === 0 && firstFlags !== null)
fl = firstFlags;
samples.push({ off: off, size: size, dur: dur, cto: cto, sync: !(fl & 0x10000) });
off += size;
}
return { samples: samples, dataOff: dataOff };
}
function mx_parseTfhd(b, mx_box) {
var flags = mx_u32(b, mx_box.body) & 0xffffff;
var trackId = mx_u32(b, mx_box.body + 4);
var p = mx_box.body + 8;
var base = null;
if (flags & 0x1) {
base = mx_u64(b, p);
p += 8;
}
if (flags & 0x2) {
p += 4;
}
var defDur = 0, defSize = 0, defFlags = 0;
if (flags & 0x8) {
defDur = mx_u32(b, p);
p += 4;
}
if (flags & 0x10) {
defSize = mx_u32(b, p);
p += 4;
}
if (flags & 0x20) {
defFlags = mx_u32(b, p);
p += 4;
}
return { trackId: trackId, base: base, defDur: defDur, defSize: defSize, defFlags: defFlags,
defaultBaseIsMoof: !!(flags & 0x020000), hasBase: !!(flags & 0x1) };
}
function mx_box(type) {
var parts = [];
for (var _i = 1; _i < arguments.length; _i++) {
parts[_i - 1] = arguments[_i];
}
var len = 8;
parts.forEach(function (p) { return len += p.length; });
var head = new Uint8Array(8);
head[0] = (len >>> 24) & 255;
head[1] = (len >>> 16) & 255;
head[2] = (len >>> 8) & 255;
head[3] = len & 255;
for (var i = 0; i < 4; i++)
head[4 + i] = type.charCodeAt(i);
var out = new Uint8Array(len);
out.set(head, 0);
var p = 8;
parts.forEach(function (x) { out.set(x, p); p += x.length; });
return out;
}
function mx_b32(v) { return new Uint8Array([(v >>> 24) & 255, (v >>> 16) & 255, (v >>> 8) & 255, v & 255]); }
function mx_b64(v) {
var hi = Math.floor(v / 4294967296), lo = v >>> 0;
return new Uint8Array([(hi >>> 24) & 255, (hi >>> 16) & 255, (hi >>> 8) & 255, hi & 255,
(lo >>> 24) & 255, (lo >>> 16) & 255, (lo >>> 8) & 255, lo & 255]);
}
function mx_cat(arr) {
var n = 0;
arr.forEach(function (a) { return n += a.length; });
var o = new Uint8Array(n);
var p = 0;
arr.forEach(function (a) { o.set(a, p); p += a.length; });
return o;
}
function mx_remux(bytes) {
var b = bytes;
var top = mx_boxes(b, 0, b.length);
var ftyp = mx_one(top, "ftyp");
var moov = mx_one(top, "moov");
if (!moov)
throw new Error("no moov");
var moofs = mx_find(top, "moof");
if (!moofs.length)
return null;
var mvBoxes = mx_children(b, moov);
var mvhd = mx_one(mvBoxes, "mvhd");
var mvTimescale = mx_u32(b, mvhd.body + (b[mvhd.body] === 1 ? 20 : 12));
var traks = mx_find(mvBoxes, "trak");
var tracks = {};
traks.forEach(function (tk) {
var tkhd = mx_one(mx_children(b, tk), "tkhd");
var v = b[tkhd.body];
var id = mx_u32(b, tkhd.body + (v === 1 ? 20 : 12));
tracks[id] = { trak: tk, samples: [] };
});
moofs.forEach(function (mf) {
var trafs = mx_find(mx_children(b, mf), "traf");
trafs.forEach(function (tf) {
var tfc = mx_children(b, tf);
var tfhdBox = mx_one(tfc, "tfhd");
if (!tfhdBox)
return;
var tfhd = mx_parseTfhd(b, tfhdBox);
var t = tracks[tfhd.trackId];
if (!t)
return;
var base = tfhd.hasBase ? tfhd.base : mf.start;
var running = null;
mx_find(tfc, "trun").forEach(function (tr) {
var flags = mx_u32(b, tr.body) & 0xffffff;
var hasOff = !!(flags & 0x1);
var r = mx_parseTrun(b, tr, tfhd, hasOff ? base : (running === null ? base : running));
r.samples.forEach(function (s) { return t.samples.push(s); });
if (r.samples.length) {
var last = r.samples[r.samples.length - 1];
running = last.off + last.size;
}
});
});
});
var order = [];
Object.keys(tracks).forEach(function (id) {
tracks[id].samples.forEach(function (s, i) { return order.push({ id: +id, i: i, off: s.off, size: s.size }); });
});
order.sort(function (a, b2) { return a.off - b2.off; });
var mdatSize = 0;
order.forEach(function (o) { return mdatSize += o.size; });
var newOff = {};
var cur = 0;
order.forEach(function (o) {
if (!newOff[o.id])
newOff[o.id] = [];
newOff[o.id][o.i] = cur;
cur += o.size;
});
function buildStbl(id, stblOld, mediaTimescale) {
var ss = tracks[id].samples;
var offs = newOff[id] || [];
var old = mx_children(b, stblOld);
var keep = [];
["stsd"].forEach(function (t) { var x = mx_one(old, t); if (x)
keep.push(b.slice(x.start, x.end)); });
var stts = [];
var runDur = -1, runCnt = 0;
ss.forEach(function (s) {
if (s.dur === runDur) {
runCnt++;
}
else {
if (runCnt)
stts.push([runCnt, runDur]);
runDur = s.dur;
runCnt = 1;
}
});
if (runCnt)
stts.push([runCnt, runDur]);
var sttsBody = [mx_b32(0), mx_b32(stts.length)];
stts.forEach(function (e) { sttsBody.push(mx_b32(e[0])); sttsBody.push(mx_b32(e[1])); });
keep.push(mx_box("stts", mx_cat(sttsBody)));
if (ss.some(function (s) { return s.cto !== 0; })) {
var ctts_1 = [];
var rv_1 = null, rc_1 = 0;
ss.forEach(function (s) { if (s.cto === rv_1) {
rc_1++;
}
else {
if (rc_1)
ctts_1.push([rc_1, rv_1]);
rv_1 = s.cto;
rc_1 = 1;
} });
if (rc_1)
ctts_1.push([rc_1, rv_1]);
var body_1 = [new Uint8Array([1, 0, 0, 0]), mx_b32(ctts_1.length)];
ctts_1.forEach(function (e) { body_1.push(mx_b32(e[0])); body_1.push(mx_b32(e[1] >>> 0)); });
keep.push(mx_box("ctts", mx_cat(body_1)));
}
var syncs = [];
ss.forEach(function (s, i) { if (s.sync)
syncs.push(i + 1); });
if (syncs.length && syncs.length !== ss.length) {
var body_2 = [mx_b32(0), mx_b32(syncs.length)];
syncs.forEach(function (v) { return body_2.push(mx_b32(v)); });
keep.push(mx_box("stss", mx_cat(body_2)));
}
keep.push(mx_box("stsc", mx_cat([mx_b32(0), mx_b32(1), mx_b32(1), mx_b32(1), mx_b32(1)])));
var szBody = [mx_b32(0), mx_b32(0), mx_b32(ss.length)];
ss.forEach(function (s) { return szBody.push(mx_b32(s.size)); });
keep.push(mx_box("stsz", mx_cat(szBody)));
var coBody = [mx_b32(0), mx_b32(ss.length)];
ss.forEach(function (s, i) { return coBody.push(mx_b64(offs[i] || 0)); });
keep.push({ __co: true, data: mx_cat(coBody), count: ss.length });
return keep;
}
function assemble(mdatStart) {
var newTraks = [];
traks.forEach(function (tk) {
var tkc = mx_children(b, tk);
var tkhd = mx_one(tkc, "tkhd");
var v = b[tkhd.body];
var id = mx_u32(b, tkhd.body + (v === 1 ? 20 : 12));
var mdia = mx_one(tkc, "mdia");
var mdc = mx_children(b, mdia);
var mdhd = mx_one(mdc, "mdhd");
var mv = b[mdhd.body];
var mts = mx_u32(b, mdhd.body + (mv === 1 ? 20 : 12));
var ss = tracks[id].samples;
var dur = 0;
ss.forEach(function (s) { return dur += s.dur; });
var tkhdBuf = b.slice(tkhd.start, tkhd.end);
var mvDur = Math.round(dur / mts * mvTimescale);
if (v === 1)
writeU64(tkhdBuf, tkhd.body - tkhd.start + 28, mvDur);
else
writeU32(tkhdBuf, tkhd.body - tkhd.start + 20, mvDur);
var mdhdBuf = b.slice(mdhd.start, mdhd.end);
if (mv === 1)
writeU64(mdhdBuf, mdhd.body - mdhd.start + 24, dur);
else
writeU32(mdhdBuf, mdhd.body - mdhd.start + 16, dur);
var minf = mx_one(mdc, "minf");
var mic = mx_children(b, minf);
var stbl = mx_one(mic, "stbl");
var parts = buildStbl(id, stbl, mts);
var stblParts = parts.map(function (x) { return x.__co ? mx_box("co64", x.data) : x; });
var newStbl = mx_box.apply(void 0, __spreadArray(["stbl"], __read(stblParts), false));
var minfParts = mic.map(function (x) { return x.type === "stbl" ? newStbl : b.slice(x.start, x.end); });
var newMinf = mx_box.apply(void 0, __spreadArray(["minf"], __read(minfParts), false));
var mdiaParts = mdc.map(function (x) { return x.type === "minf" ? newMinf : (x.type === "mdhd" ? mdhdBuf : b.slice(x.start, x.end)); });
var newMdia = mx_box.apply(void 0, __spreadArray(["mdia"], __read(mdiaParts), false));
var trakParts = tkc.filter(function (x) { return x.type !== "edts"; }).map(function (x) {
return x.type === "mdia" ? newMdia : (x.type === "tkhd" ? tkhdBuf : b.slice(x.start, x.end));
});
newTraks.push(mx_box.apply(void 0, __spreadArray(["trak"], __read(trakParts), false)));
});
var maxDur = 0;
Object.keys(tracks).forEach(function (id) {
var tk = tracks[id];
var trak = tk.trak;
var mdhd = mx_one(mx_children(b, mx_one(mx_children(b, trak), "mdia")), "mdhd");
var mv = b[mdhd.body];
var mts = mx_u32(b, mdhd.body + (mv === 1 ? 20 : 12));
var d = 0;
tk.samples.forEach(function (s) { return d += s.dur; });
maxDur = Math.max(maxDur, Math.round(d / mts * mvTimescale));
});
var mvhdBuf = b.slice(mvhd.start, mvhd.end);
if (b[mvhd.body] === 1)
writeU64(mvhdBuf, mvhd.body - mvhd.start + 24, maxDur);
else
writeU32(mvhdBuf, mvhd.body - mvhd.start + 16, maxDur);
return mx_box.apply(void 0, __spreadArray(["moov", mvhdBuf], __read(newTraks), false));
}
function writeU32(buf, p, v) { buf[p] = (v >>> 24) & 255; buf[p + 1] = (v >>> 16) & 255; buf[p + 2] = (v >>> 8) & 255; buf[p + 3] = v & 255; }
function writeU64(buf, p, v) {
var hi = Math.floor(v / 4294967296), lo = v >>> 0;
writeU32(buf, p, hi);
writeU32(buf, p + 4, lo);
}
var ftypBuf = ftyp ? b.slice(ftyp.start, ftyp.end)
: mx_box("ftyp", mx_strBytes("isom"), mx_b32(512), mx_strBytes("isomiso2avc1mp41"));
var pass1 = assemble(0);
var mdatStart = ftypBuf.length + pass1.length + 16;
Object.keys(newOff).forEach(function (id) {
newOff[id] = newOff[id].map(function (v) { return v + mdatStart; });
});
var moovNew = assemble(mdatStart);
var mdatHead = new Uint8Array(16);
mdatHead[3] = 1;
"mdat".split("").forEach(function (c, i) { return mdatHead[4 + i] = c.charCodeAt(0); });
var total = mdatSize + 16;
var hi = Math.floor(total / 4294967296), lo = total >>> 0;
writeU32(mdatHead, 8, hi);
writeU32(mdatHead, 12, lo);
var out = new Uint8Array(ftypBuf.length + moovNew.length + 16 + mdatSize);
var p = 0;
out.set(ftypBuf, p);
p += ftypBuf.length;
out.set(moovNew, p);
p += moovNew.length;
out.set(mdatHead, p);
p += 16;
order.forEach(function (o) { out.set(b.subarray(o.off, o.off + o.size), p); p += o.size; });
return out;
}
function mx_strBytes(s) { var a = new Uint8Array(s.length); for (var i = 0; i < s.length; i++)
a[i] = s.charCodeAt(i); return a; }
function fixVideoBlob(blob, mime) {
return __awaiter(this, void 0, void 0, function () {
var buf, _a, out, e_10;
return __generator(this, function (_b) {
switch (_b.label) {
case 0:
_b.trys.push([0, 2, , 3]);
if (!blob || !/mp4/i.test(mime || blob.type || ''))
return [2, blob];
_a = Uint8Array.bind;
return [4, blob.arrayBuffer()];
case 1:
buf = new (_a.apply(Uint8Array, [void 0, _b.sent()]))();
out = mx_remux(buf);
if (!out || !out.length)
return [2, blob];
return [2, new Blob([out], { type: 'video/mp4' })];
case 2:
e_10 = _b.sent();
return [2, blob];
case 3: return [2];
}
});
});
}
var wdb = null;
function openWDB() {
return new Promise(function (r) {
try {
var q = indexedDB.open('ml_works', 1);
q.onupgradeneeded = function (e) { e.target.result.createObjectStore('rec', { keyPath: 'id' }); };
q.onsuccess = function (e) { wdb = e.target.result; r(wdb); };
q.onerror = function () { return r(null); };
}
catch (e) {
r(null);
}
});
}
function wtx(mode) { return wdb.transaction('rec', mode).objectStore('rec'); }
function putRec(o) { return new Promise(function (r) { var q = wtx('readwrite').put(o); q.onsuccess = function () { return r(1); }; q.onerror = function () { return r(0); }; }); }
function allRec() { return new Promise(function (r) { if (!wdb)
return r([]); var q = wtx('readonly').getAll(); q.onsuccess = function () { return r(q.result || []); }; q.onerror = function () { return r([]); }; }); }
function delRec(id) { return new Promise(function (r) { var q = wtx('readwrite').delete(id); q.onsuccess = function () { return r(1); }; q.onerror = function () { return r(0); }; }); }
var uid = function () { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); };
var mr = null, chunks = [], recTimer = null, recSec = 0, recAnim = 0;
var recMode = 'c', selfieStream = null, __mcGain = null;
var isSelfie = function () { return recMode === 's'; };
var sup = function (m) { try {
return window.MediaRecorder && MediaRecorder.isTypeSupported(m);
}
catch (e) {
return false;
} };
var vidMime = function () { return ['video/mp4;codecs=avc1.42E01E,mp4a.40.2', 'video/mp4',
'video/webm;codecs=vp9,opus', 'video/webm;codecs=vp8,opus', 'video/webm'].find(sup) || ''; };
var audMime = function () { return ['audio/mp4', 'audio/webm;codecs=opus', 'audio/webm'].find(sup) || ''; };
var canVideo = function () { return !!(vidMime() && HTMLCanvasElement.prototype.captureStream); };
var extOf = function (m) { return (m || '').indexOf('mp4') >= 0 ? (m.indexOf('video') === 0 ? '.mp4' : '.m4a')
: (m.indexOf('video') === 0 ? '.webm' : '.webm'); };
function attachSelfie() {
var el = $('#selfiePrev');
if (!el || !selfieStream)
return;
el.muted = true;
el.defaultMuted = true;
el.playsInline = true;
['playsinline', 'webkit-playsinline', 'muted', 'autoplay'].forEach(function (a) { return el.setAttribute(a, ''); });
if (el.srcObject !== selfieStream)
el.srcObject = selfieStream;
var go2 = function () { var q = el.play(); if (q && q.catch)
q.catch(function () { }); };
el.onloadedmetadata = go2;
go2();
[80, 300, 800, 1600].forEach(function (ms) { return setTimeout(go2, ms); });
}
function stopSelfie() {
try {
if (selfieStream)
selfieStream.getTracks().forEach(function (tr) { return tr.stop(); });
}
catch (e) { }
var el = $('#selfiePrev');
if (el) {
try {
el.pause();
}
catch (e) { }
el.srcObject = null;
}
selfieStream = null;
}
function setRecMode(m) {
return __awaiter(this, void 0, void 0, function () {
var e_11;
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
if (mr && mr.state === 'recording') {
toast(L3('錄製中不能換，先按「停止並完成」', '录制中不能换，先按“停止并完成”', 'Stop the recording first'), 2400);
return [2];
}
recMode = m;
if (!(m !== 's')) return [3, 2];
stopSelfie();
return [4, studioRefresh()];
case 1:
_a.sent();
toast(t()[m === 'a' ? 'recVoiceD' : 'recCardD'], 2200);
return [2];
case 2:
_a.trys.push([2, 4, , 5]);
return [4, navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' }, audio: false })];
case 3:
selfieStream = _a.sent();
return [3, 5];
case 4:
e_11 = _a.sent();
recMode = 'c';
toast(t().camDeny);
return [3, 5];
case 5: return [4, studioRefresh()];
case 6:
_a.sent();
if (recMode === 's') {
setTimeout(attachSelfie, 60);
toast(t().recSelfieD, 2200);
}
return [2];
}
});
});
}
function liveCanvas(W, H, withSelfie) {
var base = document.createElement('canvas');
selfieLayout = !!withSelfie;
suppressSticker = !!withSelfie;
drawVerseCard(base, studioItem, W, H);
selfieLayout = false;
suppressSticker = false;
var cv = document.createElement('canvas');
cv.width = W;
cv.height = H;
var cx = cv.getContext('2d'), t0 = performance.now(), F = W / 1080;
var svid = $('#selfiePrev');
var loop = function () {
var el = (performance.now() - t0) / 1000;
cx.drawImage(base, 0, 0);
var gx = W * (0.12 + 0.76 * (((el / 16) % 2 > 1) ? 2 - (el / 16) % 2 : (el / 16) % 2));
var rg = cx.createRadialGradient(gx, H * .12, 10, gx, H * .12, W * .55);
rg.addColorStop(0, 'rgba(255,255,255,.10)');
rg.addColorStop(1, 'rgba(255,255,255,0)');
cx.fillStyle = rg;
cx.fillRect(0, 0, W, H);
if (withSelfie)
drawSelfieCircle(cx, svid, W, H, F);
if (bgmCredit) {
cx.textAlign = 'center';
cx.font = "".concat(Math.round(19 * F), "px ").concat(CARD_SANS());
cx.fillStyle = 'rgba(255,255,255,.62)';
cx.shadowColor = 'rgba(0,0,0,.55)';
cx.shadowBlur = Math.round(6 * F);
cx.fillText(bgmCredit, W / 2, H - Math.round(22 * F));
cx.shadowColor = 'transparent';
}
recAnim = requestAnimationFrame(loop);
};
loop();
var lb = $('#liveBox');
if (lb) {
cv.style.cssText = 'width:100%;max-width:300px;border-radius:14px;display:block;margin:0 auto;box-shadow:0 6px 20px rgba(0,0,0,.14)';
lb.innerHTML = '';
lb.appendChild(cv);
lb.hidden = false;
var sw = $('#selfieWrap');
if (sw) {
if (withSelfie)
sw.style.cssText = 'position:absolute;width:2px;height:2px;opacity:.01;overflow:hidden;pointer-events:none;z-index:-1';
else
sw.style.display = 'none';
}
}
return cv;
}
function recTick(label) {
var st = $('#recSt');
if (st)
st.innerHTML = '<span class="recdot"></span>' + label;
recTimer = setInterval(function () {
recSec++;
var e = $('#recTm');
if (e)
e.textContent = String(Math.floor(recSec / 60)).padStart(2, '0') + ':' + String(recSec % 60).padStart(2, '0');
}, 1000);
}
function finishRec(blob, type, kind) {
return __awaiter(this, void 0, void 0, function () {
var dur, e_12;
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
mr = null;
dur = recSec;
_a.label = 1;
case 1:
_a.trys.push([1, 4, , 5]);
if (!(kind === 'video')) return [3, 3];
return [4, fixVideoBlob(blob, type)];
case 2:
blob = _a.sent();
_a.label = 3;
case 3: return [3, 5];
case 4:
e_12 = _a.sent();
console.error('fix', e_12);
return [3, 5];
case 5: return [4, studioRefresh()];
case 6:
_a.sent();
openReview(blob, blob.type || type, kind, dur);
return [2];
}
});
});
}
function saveWork(blob, type, kind, dur) {
return __awaiter(this, void 0, void 0, function () {
var e_13;
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
_a.trys.push([0, 5, , 6]);
if (!!wdb) return [3, 2];
return [4, openWDB()];
case 1:
_a.sent();
_a.label = 2;
case 2:
if (!wdb)
throw new Error('IndexedDB 打不開');
return [4, putRec({ id: uid(), ts: Date.now(), blob: blob, mime: blob.type || type, kind: kind, dur: dur || 0,
v: studioItem.t, r: cardRef(studioItem), n: studioItem.n || '' })];
case 3:
_a.sent();
return [4, studioRefresh()];
case 4:
_a.sent();
toast(kind === 'video' ? t().recDoneV : t().recDoneA, 3600);
return [2, true];
case 5:
e_13 = _a.sent();
console.error('saveWork', e_13);
toast('存檔失敗：' + (e_13 && e_13.message || e_13), 4000);
return [2, false];
case 6: return [2];
}
});
});
}
function shareBlob(blob, mime, kind) {
return __awaiter(this, void 0, void 0, function () {
var name, f, e_14, u, a;
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
name = '321marriage-' + (kind === 'video' ? 'video' : 'voice') + extOf(mime);
f = new File([blob], name, { type: mime });
if (!(navigator.canShare && navigator.canShare({ files: [f] }))) return [3, 4];
if (isIOS())
toast(t().saveIOS, 5000);
_a.label = 1;
case 1:
_a.trys.push([1, 3, , 4]);
return [4, navigator.share({ files: [f], title: t().app })];
case 2:
_a.sent();
return [2];
case 3:
e_14 = _a.sent();
if (e_14 && e_14.name === 'AbortError')
return [2];
return [3, 4];
case 4:
u = URL.createObjectURL(blob), a = document.createElement('a');
a.href = u;
a.download = name;
a.click();
setTimeout(function () { return URL.revokeObjectURL(u); }, 6000);
toast(t().savedFile, 3200);
return [2];
}
});
});
}
var rvURL = null;
function openReview(blob, mime, kind, dur) {
var _this = this;
var L = t();
if (rvURL) {
try {
URL.revokeObjectURL(rvURL);
}
catch (e) { }
}
rvURL = URL.createObjectURL(blob);
var kept = false;
var mask = document.createElement('div');
mask.className = 'hlsheet-mask ibs';
mask.innerHTML = "<div class=\"hlsheet-card rvsheet\">\n    <div class=\"hlsheet-title\">".concat(esc(kind === 'video' ? L.rvTitleV : L.rvTitleA), "</div>\n    <div class=\"rvbox\">").concat(kind === 'video'
? "<video id=\"rvMedia\" src=\"".concat(rvURL, "\" controls playsinline webkit-playsinline autoplay\n           style=\"width:100%;border-radius:14px;display:block;background:#000\"></video>")
: "<audio id=\"rvMedia\" src=\"".concat(rvURL, "\" controls autoplay style=\"width:100%\"></audio>"), "</div>\n    <div class=\"muted\" style=\"font-size:12px;margin:10px 0 0\">").concat(esc(L.rvHint), "</div>\n    <div class=\"rvacts\">\n      <button class=\"btn primary block\" id=\"rvSave\">").concat(esc(L.rvSave), "</button>\n      <button class=\"btn gold block\" id=\"rvShare\">\u2197 ").concat(esc(L.rvShare), "</button>\n      <button class=\"btn block\" id=\"rvAgain\">").concat(esc(L.rvAgain), "</button>\n      <button class=\"btn danger block\" id=\"rvDrop\">").concat(esc(L.rvDrop), "</button>\n    </div>\n  </div>");
document.body.appendChild(mask);
var shut = function () {
var m = $('#rvMedia', mask);
try {
if (m) {
m.pause();
m.src = '';
}
}
catch (e) { }
mask.remove();
if (rvURL) {
try {
URL.revokeObjectURL(rvURL);
}
catch (e) { }
rvURL = null;
}
};
mask.onclick = function (e) { if (e.target === mask && (kept || confirm(L.rvLeaveAsk)))
shut(); };
$('#rvSave', mask).onclick = function () { return __awaiter(_this, void 0, void 0, function () {
var b, ok;
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
b = $('#rvSave', mask);
b.disabled = true;
b.textContent = L.rvSaving;
return [4, saveWork(blob, mime, kind, dur)];
case 1:
ok = _a.sent();
if (ok) {
kept = true;
shut();
}
else {
b.disabled = false;
b.textContent = L.rvSave;
}
return [2];
}
});
}); };
$('#rvShare', mask).onclick = function () { return shareBlob(blob, mime, kind); };
$('#rvAgain', mask).onclick = function () { return __awaiter(_this, void 0, void 0, function () {
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
shut();
if (!(recMode === 's')) return [3, 3];
return [4, setRecMode('s')];
case 1:
_a.sent();
return [4, new Promise(function (r) { return setTimeout(r, 450); })];
case 2:
_a.sent();
_a.label = 3;
case 3:
toggleRec();
return [2];
}
});
}); };
$('#rvDrop', mask).onclick = function () {
if (!confirm(L.rvDropAsk))
return;
shut();
toast(L.rvDropped, 2600);
};
}
var REC_WARMUP = 380;
var REC_FADEIN = 0.28;
var BGM_FADEIN = 0.9;
function fadeIn(g, ac, to, sec) {
if (!g || !ac)
return;
try {
var t0 = ac.currentTime;
g.gain.cancelScheduledValues(t0);
g.gain.setValueAtTime(0.0001, t0);
g.gain.linearRampToValueAtTime(to, t0 + sec);
}
catch (e) {
try {
g.gain.value = to;
}
catch (_) { }
}
}
function toggleRec() {
return __awaiter(this, void 0, void 0, function () {
var e_15, mic, e_16, e2_1, svid, useSelfie, ac, bgmEl, bgmURL, audioStream, micGain, bgmGain, _1, dst, e_17, stream, kind, mime, _a, W, H, cv, _2, bt;
var _this = this;
return __generator(this, function (_b) {
switch (_b.label) {
case 0:
if (mr && mr.state === 'recording') {
mr.stop();
return [2];
}
if (!studioItem)
return [2];
if (!(recMode === 's' && (!selfieStream || !selfieStream.active))) return [3, 7];
_b.label = 1;
case 1:
_b.trys.push([1, 3, , 5]);
return [4, navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' }, audio: false })];
case 2:
selfieStream = _b.sent();
return [3, 5];
case 3:
e_15 = _b.sent();
recMode = 'c';
toast(t().camDeny);
return [4, studioRefresh()];
case 4:
_b.sent();
return [3, 5];
case 5:
if (!(recMode === 's')) return [3, 7];
attachSelfie();
return [4, new Promise(function (r) { return setTimeout(r, 500); })];
case 6:
_b.sent();
_b.label = 7;
case 7:
_b.trys.push([7, 9, , 14]);
return [4, navigator.mediaDevices.getUserMedia({
audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true }
})];
case 8:
mic = _b.sent();
return [3, 14];
case 9:
e_16 = _b.sent();
_b.label = 10;
case 10:
_b.trys.push([10, 12, , 13]);
return [4, navigator.mediaDevices.getUserMedia({ audio: true })];
case 11:
mic = _b.sent();
return [3, 13];
case 12:
e2_1 = _b.sent();
toast(t().micDeny);
return [2];
case 13: return [3, 14];
case 14:
svid = $('#selfiePrev');
useSelfie = isSelfie() && svid && svid.videoWidth;
ac = null, bgmEl = null, bgmURL = null, audioStream = mic, micGain = null, bgmGain = null;
_b.label = 15;
case 15:
_b.trys.push([15, 20, , 21]);
ac = new (window.AudioContext || window.webkitAudioContext)();
_b.label = 16;
case 16:
_b.trys.push([16, 18, , 19]);
return [4, ac.resume()];
case 17:
_b.sent();
return [3, 19];
case 18:
_1 = _b.sent();
return [3, 19];
case 19:
dst = ac.createMediaStreamDestination();
micGain = ac.createGain();
micGain.gain.value = 0.0001;
ac.createMediaStreamSource(mic).connect(micGain).connect(dst);
if (bgmBlob) {
bgmURL = URL.createObjectURL(bgmBlob);
bgmEl = new Audio();
bgmEl.src = bgmURL;
bgmEl.loop = true;
bgmEl.crossOrigin = 'anonymous';
bgmGain = ac.createGain();
bgmGain.gain.value = 0.0001;
ac.createMediaElementSource(bgmEl).connect(bgmGain).connect(dst);
}
audioStream = dst.stream;
return [3, 21];
case 20:
e_17 = _b.sent();
try {
if (ac)
ac.close();
}
catch (_) { }
ac = null;
bgmEl = null;
bgmGain = null;
micGain = null;
audioStream = mic;
return [3, 21];
case 21:
stream = audioStream, kind = 'audio', mime = audMime();
if (recMode !== 'a' && canVideo()) {
try {
_a = __read(CARD_SIZES[cardSize()], 2), W = _a[0], H = _a[1];
cv = liveCanvas(W, H, useSelfie);
stream = new MediaStream(__spreadArray(__spreadArray([], __read(cv.captureStream(24).getVideoTracks()), false), __read(audioStream.getAudioTracks()), false));
kind = 'video';
mime = vidMime();
}
catch (e) {
cancelAnimationFrame(recAnim);
stream = mic;
kind = 'audio';
mime = audMime();
}
}
try {
mr = new MediaRecorder(stream, Object.assign(mime ? { mimeType: mime } : {}, kind === 'video' ? { videoBitsPerSecond: 2200000 } : {}));
}
catch (e) {
cancelAnimationFrame(recAnim);
try {
mr = new MediaRecorder(mic);
kind = 'audio';
}
catch (e2) {
toast(t().recNo);
return [2];
}
}
chunks = [];
recSec = 0;
mr.ondataavailable = function (e) { if (e.data.size)
chunks.push(e.data); };
mr.onstop = function () { return __awaiter(_this, void 0, void 0, function () {
var type;
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
clearInterval(recTimer);
cancelAnimationFrame(recAnim);
mic.getTracks().forEach(function (tr) { return tr.stop(); });
stopSelfie();
try {
if (bgmEl) {
bgmEl.pause();
bgmEl.src = '';
}
}
catch (_) { }
try {
if (bgmURL)
URL.revokeObjectURL(bgmURL);
}
catch (_) { }
try {
if (ac)
ac.close();
}
catch (_) { }
type = mr.mimeType || mime || (kind === 'video' ? 'video/webm' : 'audio/webm');
return [4, finishRec(new Blob(chunks, { type: type }), type, kind)];
case 1:
_a.sent();
return [2];
}
});
}); };
return [4, new Promise(function (r) { return setTimeout(r, REC_WARMUP); })];
case 22:
_b.sent();
if (!mr)
return [2];
mr.start(1000);
fadeIn(micGain, ac, 1, REC_FADEIN);
if (!bgmEl) return [3, 27];
_b.label = 23;
case 23:
_b.trys.push([23, 25, , 26]);
return [4, bgmEl.play()];
case 24:
_b.sent();
return [3, 26];
case 25:
_2 = _b.sent();
return [3, 26];
case 26:
fadeIn(bgmGain, ac, bgmVol, BGM_FADEIN);
_b.label = 27;
case 27:
bt = $('#recBtn');
if (bt) {
bt.textContent = t().recStop;
bt.classList.add('danger');
}
recTick((kind === 'video' ? t().recing : t().recingA) + (bgmBlob ? '　♪' : ''));
return [2];
}
});
});
}
function musicRec() {
return __awaiter(this, void 0, void 0, function () {
var ac, bgmEl, bgmURL, audioStream, _3, gain, dst, e_18, _a, W, H, cv, mime, stream, e_19, lim, bt;
var _this = this;
return __generator(this, function (_b) {
switch (_b.label) {
case 0:
if (mr && mr.state === 'recording') {
mr.stop();
return [2];
}
if (!studioItem || !bgmBlob) {
toast(t().bgmNeed);
return [2];
}
if (!canVideo()) {
toast(t().vidNo);
return [2];
}
_b.label = 1;
case 1:
_b.trys.push([1, 6, , 7]);
ac = new (window.AudioContext || window.webkitAudioContext)();
_b.label = 2;
case 2:
_b.trys.push([2, 4, , 5]);
return [4, ac.resume()];
case 3:
_b.sent();
return [3, 5];
case 4:
_3 = _b.sent();
return [3, 5];
case 5:
bgmURL = URL.createObjectURL(bgmBlob);
bgmEl = new Audio();
bgmEl.src = bgmURL;
bgmEl.loop = false;
bgmEl.crossOrigin = 'anonymous';
gain = ac.createGain();
gain.gain.value = 0.0001;
__mcGain = gain;
dst = ac.createMediaStreamDestination();
ac.createMediaElementSource(bgmEl).connect(gain).connect(dst);
audioStream = dst.stream;
return [3, 7];
case 6:
e_18 = _b.sent();
toast(t().bgmBad);
return [2];
case 7:
_a = __read(CARD_SIZES[cardSize()], 2), W = _a[0], H = _a[1];
cv = liveCanvas(W, H, false);
mime = vidMime();
stream = new MediaStream(__spreadArray(__spreadArray([], __read(cv.captureStream(24).getVideoTracks()), false), __read(audioStream.getAudioTracks()), false));
try {
mr = new MediaRecorder(stream, Object.assign(mime ? { mimeType: mime } : {}, { videoBitsPerSecond: 2200000 }));
}
catch (e) {
cancelAnimationFrame(recAnim);
toast(t().vidNo);
return [2];
}
chunks = [];
recSec = 0;
mr.ondataavailable = function (e) { if (e.data.size)
chunks.push(e.data); };
mr.onstop = function () { return __awaiter(_this, void 0, void 0, function () {
var type;
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
clearInterval(recTimer);
cancelAnimationFrame(recAnim);
try {
if (bgmEl) {
bgmEl.pause();
bgmEl.src = '';
}
}
catch (_) { }
try {
if (bgmURL)
URL.revokeObjectURL(bgmURL);
}
catch (_) { }
try {
if (ac)
ac.close();
}
catch (_) { }
type = mr.mimeType || mime || 'video/webm';
return [4, finishRec(new Blob(chunks, { type: type }), type, 'video')];
case 1:
_a.sent();
return [2];
}
});
}); };
mr.start(1000);
_b.label = 8;
case 8:
_b.trys.push([8, 10, , 11]);
return [4, bgmEl.play()];
case 9:
_b.sent();
return [3, 11];
case 10:
e_19 = _b.sent();
return [3, 11];
case 11:
fadeIn(__mcGain, ac, 1, 0.6);
bgmEl.onended = function () { if (mr && mr.state === 'recording')
mr.stop(); };
lim = mcLen > 0 ? mcLen : 8 * 60;
if (mcLen > 0) {
setTimeout(function () { try {
__mcGain && __mcGain.gain.linearRampToValueAtTime(0, ac.currentTime + 1.8);
}
catch (_) { } }, Math.max(0, lim - 2) * 1000);
}
setTimeout(function () { if (mr && mr.state === 'recording')
mr.stop(); }, lim * 1000);
bt = $('#mcBtn');
if (bt) {
bt.textContent = t().recStop;
bt.classList.add('danger');
}
recTick(t().mcing + '　♪');
return [2];
}
});
});
}
function getRec(id) {
return __awaiter(this, void 0, void 0, function () { var a; return __generator(this, function (_a) {
switch (_a.label) {
case 0: return [4, allRec()];
case 1:
a = _a.sent();
return [2, a.find(function (x) { return x.id === id; })];
}
}); });
}
function readyBlob(r) {
return __awaiter(this, void 0, void 0, function () {
var fixed, e_20;
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
if (r.kind !== 'video')
return [2, r.blob];
return [4, fixVideoBlob(r.blob, r.mime)];
case 1:
fixed = _a.sent();
if (!(fixed !== r.blob)) return [3, 5];
_a.label = 2;
case 2:
_a.trys.push([2, 4, , 5]);
return [4, putRec(Object.assign({}, r, { blob: fixed, mime: 'video/mp4' }))];
case 3:
_a.sent();
return [3, 5];
case 4:
e_20 = _a.sent();
return [3, 5];
case 5: return [2, fixed];
}
});
});
}
function dlRec(id) {
return __awaiter(this, void 0, void 0, function () {
var r, blob, mime, name, f, e_21, u, a;
return __generator(this, function (_a) {
switch (_a.label) {
case 0: return [4, getRec(id)];
case 1:
r = _a.sent();
if (!r)
return [2];
return [4, readyBlob(r)];
case 2:
blob = _a.sent();
mime = (r.kind === 'video' && blob !== r.blob) ? 'video/mp4' : r.mime;
name = '321marriage-' + (r.kind === 'video' ? 'video' : 'voice') + extOf(mime);
if (!isIOS()) return [3, 6];
f = new File([blob], name, { type: mime });
if (!(navigator.canShare && navigator.canShare({ files: [f] }))) return [3, 6];
toast(t().saveIOS, 5000);
_a.label = 3;
case 3:
_a.trys.push([3, 5, , 6]);
return [4, navigator.share({ files: [f], title: t().app })];
case 4:
_a.sent();
return [2];
case 5:
e_21 = _a.sent();
if (e_21 && e_21.name === 'AbortError')
return [2];
return [3, 6];
case 6:
u = URL.createObjectURL(blob), a = document.createElement('a');
a.href = u;
a.download = name;
a.click();
setTimeout(function () { return URL.revokeObjectURL(u); }, 6000);
toast(t().savedFile, 3200);
return [2];
}
});
});
}
function shareRec(id) {
return __awaiter(this, void 0, void 0, function () {
var r, blob, mime, f, e_22;
return __generator(this, function (_a) {
switch (_a.label) {
case 0: return [4, getRec(id)];
case 1:
r = _a.sent();
if (!r)
return [2];
return [4, readyBlob(r)];
case 2:
blob = _a.sent();
mime = (r.kind === 'video' && blob !== r.blob) ? 'video/mp4' : r.mime;
f = new File([blob], '321marriage' + extOf(mime), { type: mime });
if (!(navigator.canShare && navigator.canShare({ files: [f] }))) return [3, 6];
_a.label = 3;
case 3:
_a.trys.push([3, 5, , 6]);
return [4, navigator.share({ files: [f], title: t().app })];
case 4:
_a.sent();
return [2];
case 5:
e_22 = _a.sent();
if (e_22 && e_22.name === 'AbortError')
return [2];
return [3, 6];
case 6:
dlRec(id);
return [2];
}
});
});
}
function rmRec(id) {
return __awaiter(this, void 0, void 0, function () {
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
if (!confirm(t().delAsk))
return [2];
return [4, delRec(id)];
case 1:
_a.sent();
studioRefresh();
toast(t().deleted);
return [2];
}
});
});
}
var playURL = null;
function playRec(id) {
return __awaiter(this, void 0, void 0, function () {
var r, box;
return __generator(this, function (_a) {
switch (_a.label) {
case 0: return [4, getRec(id)];
case 1:
r = _a.sent();
if (!r)
return [2];
if (playURL)
URL.revokeObjectURL(playURL);
playURL = URL.createObjectURL(r.blob);
box = $('#play_' + id);
if (!box)
return [2];
box.innerHTML = r.kind === 'video'
? "<video src=\"".concat(playURL, "\" controls playsinline autoplay style=\"width:100%;border-radius:12px;display:block\"></video>")
: "<audio src=\"".concat(playURL, "\" controls autoplay style=\"width:100%\"></audio>");
return [2];
}
});
});
}
var studioItem = null, studioNote = null, blessBusy = false;
function aiOnce(sys, ask) {
return __awaiter(this, void 0, void 0, function () {
var out, why, _loop_1, a, state_1;
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
out = '', why = '';
_loop_1 = function (a) {
var r, _b, e_23;
return __generator(this, function (_c) {
switch (_c.label) {
case 0:
_c.trys.push([0, 3, , 5]);
return [4, fetch(API.chat, { method: 'POST', headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ system: sys, messages: [{ role: 'user', content: ask }] }) })];
case 1:
r = _c.sent();
if (!r.ok)
throw new Error('http ' + r.status);
_b = extractReply;
return [4, r.json().catch(function () { return null; })];
case 2:
out = _b.apply(void 0, [_c.sent()]);
if (!out)
why = L3('回覆是空的', '回复是空的', 'empty reply');
return [2, "break"];
case 3:
e_23 = _c.sent();
why = (e_23 && e_23.message) ? String(e_23.message) : 'network';
if (a === CHAT_RETRY.length)
return [2, "break"];
return [4, new Promise(function (rs) { return setTimeout(rs, CHAT_RETRY[a]); })];
case 4:
_c.sent();
return [3, 5];
case 5: return [2];
}
});
};
a = 0;
_a.label = 1;
case 1:
if (!(a <= CHAT_RETRY.length)) return [3, 4];
return [5, _loop_1(a)];
case 2:
state_1 = _a.sent();
if (state_1 === "break")
return [3, 4];
_a.label = 3;
case 3:
a++;
return [3, 1];
case 4: return [2, { out: out ? out.replace(/[*#>`]/g, '').replace(/^「|」$/g, '').trim() : '', why: why }];
}
});
});
}
function whoLine() {
var who = (state.cardTo || '').trim();
return who ? L3("\n\u9019\u6BB5\u8A71\u662F\u5BEB\u7D66\u300C".concat(who, "\u300D\u7684\uFF0C\u8ACB\u76F4\u63A5\u5C0D\u4ED6\u8AAA\u8A71\uFF0C\u4F46\u4E0D\u8981\u518D\u5BEB\u4E00\u6B21\u7A31\u547C\u3002"), "\n\u8FD9\u6BB5\u8BDD\u662F\u5199\u7ED9\u201C".concat(who, "\u201D\u7684\uFF0C\u8BF7\u76F4\u63A5\u5BF9\u4ED6\u8BF4\u8BDD\uFF0C\u4F46\u4E0D\u8981\u518D\u5199\u4E00\u6B21\u79F0\u547C\u3002"), "\nThis is written for \"".concat(who, "\" \u2014 speak directly to them, but do not repeat the greeting.")) : '';
}
var TWEAK_L = {
zh: { btn: '✨ 改一改', title: '要怎麼改？', ph: '或者自己說，例如：加一句為他的工作禱告',
go: '改好給我', close: '關閉', busy: '小智修改中…', done: '改好了',
need: '卡片內文還是空的——先自己寫一段，或請小智寫一段再來改。',
picks: ['短一點', '長一點', '更溫暖', '口語一點', '更有力', '換個說法'] },
zs: { btn: '✨ 改一改', title: '要怎么改？', ph: '或者自己说，例如：加一句为他的工作祷告',
go: '改好给我', close: '关闭', busy: '小智修改中…', done: '改好了',
need: '卡片内文还是空的——先自己写一段，或请小智写一段再来改。',
picks: ['短一点', '长一点', '更温暖', '口语一点', '更有力', '换个说法'] },
en: { btn: '✨ Revise', title: 'How should it change?', ph: 'Or say it yourself, e.g. add a line praying for their work',
go: 'Rewrite it', close: 'Close', busy: 'Xiaozhi is rewriting…', done: 'Rewritten',
need: 'The card text is still empty — write something first, or ask Xiaozhi to write it.',
picks: ['Shorter', 'Longer', 'Warmer', 'More everyday', 'Stronger', 'Say it another way'] }
};
var tw_ = function () { return TWEAK_L[state.lang] || TWEAK_L.zh; };
function curNote() {
return String(studioNote != null ? studioNote : (studioItem && studioItem.n) || '').trim();
}
function noteRewrite(instr, mask) {
return __awaiter(this, void 0, void 0, function () {
var cur, go, sys, ask, r;
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
if (blessBusy || !studioItem)
return [2];
cur = curNote();
if (!cur) {
toast(tw_().need, 4200);
return [2];
}
blessBusy = true;
go = mask && $('#twGo', mask);
if (go) {
go.disabled = true;
go.textContent = tw_().busy;
}
sys = isEN()
? 'You are Xiaozhi from Kingdom 321 Fellowship. Rewrite the short blessing the user gives you, following their instruction. Return ONLY the rewritten text — no explanation, no heading, no bullet points, no quotation marks, and do not quote the verse again. Keep it warm and spoken, never preachy. If it reads as a prayer, close it with "in the name of the Lord Jesus we pray, Amen" — never "in Jesus\' name we ask, Amen."'
: isZS()
? '你是「小智」，国度321空中团契的属灵同伴。请照使用者的要求，修改他给你的这段祝福。只回传改好的内文本身——不要解释、不要标题、不要条列、不要引号、不要再抄一次经文。保持温暖、口语、不说教。若结尾写成祷告，要用「奉主耶稣的名祷告，阿们」，不要用「奉耶稣的名求」。'
: '你是「小智」，國度321空中團契的屬靈同伴。請照使用者的要求，修改他給你的這段祝福。只回傳改好的內文本身——不要解釋、不要標題、不要條列、不要引號、不要再抄一次經文。保持溫暖、口語、不說教。若結尾寫成禱告，要用「奉主耶穌的名禱告，阿們」，不要用「奉耶穌的名求」。';
ask = L3('經文：', '经文：', 'Verse: ') + studioItem.t + '（' + cardRef(studioItem) + '）'
+ whoLine()
+ L3('\n\n目前的內文：\n', '\n\n目前的内文：\n', '\n\nCurrent text:\n') + cur
+ L3('\n\n要怎麼改：', '\n\n要怎么改：', '\n\nHow to change it: ') + instr;
return [4, aiOnce(sys, ask)];
case 1:
r = _a.sent();
blessBusy = false;
if (!r.out) return [3, 3];
studioNote = r.out;
if (mask)
mask.remove();
return [4, studioRefresh()];
case 2:
_a.sent();
toast(tw_().done);
return [3, 4];
case 3:
if (go) {
go.disabled = false;
go.textContent = tw_().go;
}
toast(t().chatErr + (r.why ? '（' + r.why + '）' : ''), 4000);
_a.label = 4;
case 4: return [2];
}
});
});
}
function openTweak() {
if (!studioItem)
return;
if (!curNote()) {
toast(tw_().need, 4200);
return;
}
var L = tw_();
var mask = document.createElement('div');
mask.className = 'hlsheet-mask ibs';
mask.innerHTML = "<div class=\"hlsheet-card\">\n    <div class=\"hlsheet-title\">".concat(esc(L.title), "</div>\n    <div class=\"cardchips\" id=\"twPick\">").concat(L.picks.map(function (p) { return "<button data-q=\"".concat(esc(p), "\">").concat(esc(p), "</button>"); }).join(''), "</div>\n    <input class=\"cardinput\" id=\"twOwn\" placeholder=\"").concat(esc(L.ph), "\" style=\"margin-top:10px\">\n    <div class=\"hlsheet-acts\" style=\"margin-top:12px\">\n      <button class=\"btn primary\" id=\"twGo\">").concat(esc(L.go), "</button>\n      <button class=\"btn\" id=\"twClose\">").concat(esc(L.close), "</button>\n    </div></div>");
document.body.appendChild(mask);
mask.onclick = function (e) { if (e.target === mask && !blessBusy)
mask.remove(); };
$('#twClose', mask).onclick = function () { if (!blessBusy)
mask.remove(); };
var own = $('#twOwn', mask);
$$('#twPick button', mask).forEach(function (b) { return b.onclick = function () {
$$('#twPick button', mask).forEach(function (x) { return x.classList.toggle('on', x === b); });
own.value = '';
}; });
$('#twGo', mask).onclick = function () {
var picked = $('#twPick button.on', mask);
var instr = (own.value || '').trim() || (picked ? picked.dataset.q : L.picks[0]);
noteRewrite(instr, mask);
};
}
function blessWrite() {
return __awaiter(this, void 0, void 0, function () {
var btn, sys, ask, rr_, out, why;
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
if (blessBusy || !studioItem)
return [2];
blessBusy = true;
btn = $('#blessBtn');
if (btn) {
btn.disabled = true;
btn.textContent = t().blessing;
}
sys = isEN()
? 'You are Xiaozhi, a spiritual companion from Kingdom 321 Fellowship. From the verse the user gives you, write a short, warm word of encouragement for a brother or sister. First name in one or two sentences what this verse shows of God\'s heart, then one sentence that touches ordinary daily life, then close with a blessing. Three to four sentences, under 60 words. Warm and spoken, never preachy. No headings, no bullet points, no quotation marks, and do not quote the verse again. If it reads as a prayer, close it with "in the name of the Lord Jesus we pray, Amen" — never "in Jesus\' name we ask, Amen."'
: state.lang === 'zs'
? '你是「小智」，国度321空中团契的属灵同伴。请照使用者给的这节经文，写一段温暖的关怀祝福，送给弟兄姊妹。要求：先用一两句点出这节经文里神的心意，再写一句贴近生活的祝福，最后用一句祝福收尾。总共三到四句、120 字以内，口语、温暖、不说教，不要标题、不要条列、不要引号、不要再抄一次经文。若结尾写成祷告，要用「奉主耶稣的名祷告，阿们」，不要用「奉耶稣的名求」。'
: '你是「小智」，國度321空中團契的屬靈同伴。請照使用者給的這節經文，寫一段溫暖的關懷祝福，送給弟兄姊妹。要求：先用一兩句點出這節經文裡神的心意，再寫一句貼近生活的祝福，最後用一句祝福收尾。總共三到四句、120 字以內，口語、溫暖、不說教，不要標題、不要條列、不要引號、不要再抄一次經文。若結尾寫成禱告，要用「奉主耶穌的名禱告，阿們」，不要用「奉耶穌的名求」。';
ask = L3('經文：', '经文：', 'Verse: ') + studioItem.t + ' (' + cardRef(studioItem) + ')' + whoLine();
return [4, aiOnce(sys, ask)];
case 1:
rr_ = _a.sent();
out = rr_.out, why = rr_.why;
blessBusy = false;
if (!out) return [3, 3];
studioNote = out;
return [4, studioRefresh()];
case 2:
_a.sent();
toast(t().blessDone);
return [3, 4];
case 3:
if (btn) {
btn.disabled = false;
btn.textContent = '✍️ ' + t().bless;
}
toast(t().chatErr + (why ? '（' + why + '）' : ''), 4000);
_a.label = 4;
case 4: return [2];
}
});
});
}
var pick2 = function (a) { return a[isEN() ? (a.length > 2 ? 2 : 0) : (isZS() ? 1 : 0)]; };
function chips(id, items, cur, attr) {
return "<div class=\"cardchips\" id=\"".concat(id, "\">").concat(items.map(function (_a) {
var _b = __read(_a, 2), v = _b[0], n = _b[1];
return "<button class=\"".concat(String(cur) === String(v) ? 'on' : '', "\" data-").concat(attr, "=\"").concat(v, "\">").concat(esc(pick2(n)), "</button>");
}).join(''), "</div>");
}
function studioRefresh() {
return __awaiter(this, void 0, void 0, function () {
var v, ov, y;
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
v = document.getElementById('ibsView');
if (!v)
return [2];
ov = document.getElementById('ov'), y = ov ? ov.scrollTop : 0;
return [4, viewStudio(v)];
case 1:
_a.sent();
if (ov)
ov.scrollTop = y;
return [2];
}
});
});
}
function viewStudio(v) {
return __awaiter(this, void 0, void 0, function () {
var L, works, _a, vOK, bind, pd, pl2, bd, blb, nt, tmr_1, bindInput, mb;
return __generator(this, function (_b) {
switch (_b.label) {
case 0:
L = t();
if (!studioItem) {
BR.closeOv();
return [2];
}
if (!wdb) return [3, 2];
return [4, allRec()];
case 1:
_a = (_b.sent()).sort(function (a, b) { return b.ts - a.ts; });
return [3, 3];
case 2:
_a = [];
_b.label = 3;
case 3:
works = _a;
vOK = canVideo();
v.innerHTML = "\n    <div class=\"chtoolbar\">\n      <button class=\"chtb-btn\" id=\"stBack\">\u2039</button>\n      <div class=\"chtb-spacer\"></div>\n      <div class=\"muted\" style=\"font-size:12.5px\">".concat(esc(cardRef(studioItem)), "</div>\n    </div>\n    <div class=\"cardpv\" id=\"cardPv\"></div>\n    <div class=\"hlsheet-acts\" style=\"margin:0 0 6px\">\n      <button class=\"btn primary\" id=\"btShare\">").concat(esc(L.cardShare), "</button>\n      <button class=\"btn\" id=\"btSave\">").concat(esc(L.cardSave), "</button>\n    </div>\n    <div class=\"hl-hint\" style=\"margin:8px 0 18px\">").concat(esc(L.cardHint), "</div>\n\n    <div class=\"section-title\">").concat(esc(L.cardText), "</div>\n    <div class=\"card\">\n      <textarea class=\"hlsheet-ta\" id=\"cardNote\" placeholder=\"").concat(esc(L.hlNote), "\">").concat(esc(studioNote != null ? studioNote : (studioItem.n || '')), "</textarea>\n      <div class=\"hlsheet-acts2\">\n        <button class=\"btn sm gold\" id=\"blessBtn\">\u270D\uFE0F ").concat(esc(L.bless), "</button>\n        <button class=\"btn sm gold\" id=\"tweakBtn\">").concat(esc(tw_().btn), "</button>\n        <button class=\"btn sm\" id=\"noteMine\">").concat(esc(L.useMine), "</button>\n        <button class=\"btn sm\" id=\"noteClear\">").concat(esc(L.clearText), "</button>\n      </div>\n      <div class=\"muted\" style=\"font-size:12px;margin-top:8px\">").concat(esc(L.blessHint), "</div>\n    </div>\n\n    <div class=\"section-title\">").concat(esc(L.cardLines), "</div>\n    <div class=\"card\">\n      <div class=\"muted\" style=\"font-size:12px;margin-bottom:6px\">").concat(esc(L.cardToL), "</div>\n      <input class=\"cardinput\" id=\"cardTo\" value=\"").concat(esc(state.cardTo || ''), "\"\n             placeholder=\"").concat(esc(L.cardToPH), "\">\n      <div class=\"muted\" style=\"font-size:12px;margin:12px 0 6px\">").concat(esc(L.cardTopL), "</div>\n      <input class=\"cardinput\" id=\"cardTop\" value=\"").concat(esc(state.cardTop || ''), "\"\n             placeholder=\"").concat(esc(DEF_TOP()), "\">\n      <div class=\"muted\" style=\"font-size:12px;margin:12px 0 6px\">").concat(esc(L.cardSignL), "</div>\n      <input class=\"cardinput\" id=\"cardSign\" value=\"").concat(esc(state.cardSign || ''), "\"\n             placeholder=\"").concat(esc(DEF_SIGN()), "\">\n      <div class=\"muted\" style=\"font-size:12px;margin-top:8px\">").concat(esc(L.cardLinesHint), "</div>\n    </div>\n\n    <div class=\"section-title\">").concat(esc(L.cardStyle), "</div>\n    ").concat(chips('cTpl', CARD_ORDER.map(function (k) { return [k, CARD_TPL[k].n]; }), cardTpl(), 't'), "\n    <div class=\"section-title\">").concat(esc(L.cardBorder), "</div>\n    ").concat(chips('cBrd', CARD_BORDERS, cardBorder(), 'b'), "\n    <div class=\"section-title\">").concat(esc(L.cardSize), "</div>\n    ").concat(chips('cSz', Object.keys(CARD_SIZES).map(function (k) { return [k, CARD_SIZES[k][2]]; }), cardSize(), 'z'), "\n    <div class=\"section-title\">").concat(esc(L.cardFsL), "</div>\n    ").concat(chips('cFs', CARD_FS, cardFs(), 'f'), "\n    <div class=\"muted\" style=\"font-size:12px;margin-top:6px\">").concat(esc(L.cardFsHint), "</div>\n\n    <div class=\"section-title\">").concat(esc(L.photo), "</div>\n    <div class=\"card\">").concat(photoImg ? "\n      ".concat(chips('pMode', [['bg', L.photoBg], ['sticker', L.photoStk]], photoMode, 'm'), "\n      ").concat(photoMode === 'sticker' ? "\n        <div class=\"muted\" style=\"font-size:12px;margin:12px 0 6px\">".concat(esc(L.stkShape), "</div>\n        ").concat(chips('pShape', STK_SHAPES, stkShape, 'v'), "\n        <div class=\"muted\" style=\"font-size:12px;margin:12px 0 6px\">").concat(esc(L.stkSize), "</div>\n        ").concat(chips('pSize', STK_SIZES, stkSize, 'v'), "\n        <div class=\"muted\" style=\"font-size:12px;margin:12px 0 6px\">").concat(esc(L.stkPos), "</div>\n        ").concat(chips('pPos', STK_POS, stkPos, 'v')) : '', "\n      ").concat(photoBy ? "<div class=\"muted\" style=\"font-size:11.5px;margin-top:10px\">".concat(esc(pl().by + photoBy), "</div>") : '', "\n      <div class=\"hlsheet-acts2\" style=\"margin-top:12px\">\n        <label class=\"btn sm\" style=\"cursor:pointer\">").concat(esc(L.photoSwap), "<input type=\"file\" accept=\"image/*\" hidden id=\"pRe\"></label>\n        <button class=\"btn sm gold\" id=\"pLib\">").concat(esc(pl().libBtn), "</button>\n        <button class=\"btn sm danger\" id=\"pDel\">").concat(esc(L.photoDel), "</button>\n      </div>") : "\n      <button class=\"btn block gold\" id=\"pLib\">".concat(esc(pl().libBtn), "</button>\n      <label class=\"btn block\" style=\"cursor:pointer;margin-top:8px\">").concat(esc(L.photoPick), "<input type=\"file\" accept=\"image/*\" hidden id=\"pNew\"></label>\n      <div class=\"muted\" style=\"font-size:12px;margin-top:8px\">").concat(esc(L.photoHint), "</div>"), "\n    </div>\n\n    <div class=\"section-title\">").concat(esc(L.bgm), "</div>\n    <div class=\"card\">").concat(bgmBlob ? "\n      <div style=\"font-weight:700;font-size:14px\">\u266A ".concat(esc(bgmName), "</div>\n      ").concat(bgmCredit ? "<div class=\"muted\" style=\"font-size:11.5px;margin-top:3px\">".concat(esc(bgmCredit), "</div>") : '', "\n      <div class=\"muted\" style=\"font-size:12px;margin:4px 0 10px\">").concat(esc(L.bgmNote), "</div>\n      <div class=\"muted\" style=\"font-size:12px;margin-bottom:6px\">").concat(esc(L.bgmVol), "</div>\n      ").concat(chips('bVol', BGM_VOLS, bgmVol, 'v'), "\n      <div class=\"hlsheet-acts2\" style=\"margin-top:12px\">\n        <button class=\"btn sm gold\" id=\"bLib\">").concat(esc(hl_().btn), "</button>\n        <label class=\"btn sm\" style=\"cursor:pointer\">").concat(esc(L.bgmSwap), "<input type=\"file\" hidden id=\"bRe\"></label>\n        <button class=\"btn sm danger\" id=\"bDel\">").concat(esc(L.bgmDel), "</button>\n      </div>") : "\n      <button class=\"btn block gold\" id=\"bLib\">".concat(esc(hl_().btn), "</button>\n      <label class=\"btn block\" style=\"cursor:pointer;margin-top:8px\">").concat(esc(L.bgmPick), "<input type=\"file\" hidden id=\"bNew\"></label>\n      <div class=\"muted\" style=\"font-size:12px;margin-top:8px\">").concat(esc(L.bgmHint), "</div>"), "\n    </div>\n\n    <div class=\"section-title\">").concat(esc(L.recSec), "</div>\n    <div class=\"card\" style=\"text-align:center\">\n      <div class=\"muted\" style=\"font-size:12.5px;text-align:left;margin-bottom:10px\">").concat(esc(vOK ? L.recIntro : L.recIntroA), "</div>\n      ").concat(vOK ? "<div class=\"cardchips\" id=\"rMode\" style=\"justify-content:center;margin-bottom:6px\">\n        <button class=\"".concat(recMode === 'a' ? 'on' : '', "\" data-s=\"a\">").concat(esc(L.recVoice), "</button>\n        <button class=\"").concat(recMode === 'c' ? 'on' : '', "\" data-s=\"c\">").concat(esc(L.recCard), "</button>\n        <button class=\"").concat(recMode === 's' ? 'on' : '', "\" data-s=\"s\">").concat(esc(L.recSelfie), "</button></div>\n      <div class=\"muted\" style=\"font-size:12px;margin-bottom:12px\">").concat(esc(recMode === 'a' ? L.recVoiceD : recMode === 's' ? L.recSelfieD : L.recCardD), "</div>") : '', "\n      <div id=\"recSt\" class=\"muted\" style=\"font-size:12.5px\">").concat(esc(L.recReady), "</div>\n      <div id=\"recTm\" style=\"font-family:var(--f-serif);font-size:30px;margin:6px 0\">00:00</div>\n      <button class=\"btn primary block\" id=\"recBtn\">").concat(esc(!vOK || recMode === 'a' ? L.recStartA
: recMode === 's' ? '📷 ' + L.recStartS : L.recStartV), "</button>\n      <div class=\"muted\" style=\"font-size:12px;margin-top:8px\">").concat(esc(L.recTip), "</div>\n      ").concat((vOK && bgmBlob) ? "\n        <div class=\"muted\" style=\"font-size:12px;margin:14px 0 6px\">".concat(esc(L.mcLen), "</div>\n        ").concat(chips('mLen', MC_LENS, mcLen, 'v'), "\n        <button class=\"btn gold block\" id=\"mcBtn\" style=\"margin-top:10px\">\uD83C\uDFB5 ").concat(esc(L.mcStart), "</button>\n        <div class=\"muted\" style=\"font-size:12px;margin-top:8px\">").concat(esc(L.mcHint), "</div>") : '', "\n      <div id=\"selfieWrap\" style=\"").concat(isSelfie() ? '' : 'display:none', ";margin-top:14px\">\n        <video id=\"selfiePrev\" playsinline webkit-playsinline muted autoplay\n          style=\"width:150px;height:150px;border-radius:50%;object-fit:cover;transform:scaleX(-1);border:3px solid var(--gold);background:#000\"></video>\n        <div class=\"muted\" style=\"font-size:12px;margin-top:6px\">").concat(esc(L.selfieHint), "</div>\n        <div class=\"muted\" style=\"font-size:12px;margin:12px 0 6px\">").concat(esc(L.beauty), "</div>\n        ").concat(chips('rBeauty', [[1, L.beautyOn], [0, L.beautyOff]], state.beauty ? 1 : 0, 'v'), "\n        <div class=\"muted\" style=\"font-size:11.5px;margin-top:6px\">").concat(esc(L.beautyHint[state.beauty ? 0 : 1]), "</div>\n      </div>\n      <div id=\"liveBox\" hidden style=\"margin-top:14px\"></div>\n    </div>\n\n    <div class=\"section-title\">").concat(esc(L.works), "\uFF08").concat(works.length, "\uFF09</div>\n    <div class=\"card\" style=\"padding:4px 16px\">").concat(works.length ? works.map(function (w) { return "\n      <div class=\"hitem\">\n        <div class=\"q\" style=\"font-size:14px\">".concat(esc(w.v || ''), "</div>\n        <div class=\"m\"><span>").concat(esc(w.r || ''), "\u3000").concat(w.kind === 'video' ? '🎬' : '🎙', " ").concat(w.dur || 0, "s</span>\n          <span><button data-play=\"").concat(w.id, "\">\u25B6</button><button data-sh=\"").concat(w.id, "\">\u2197</button><button data-rm=\"").concat(w.id, "\">\u2715</button></span></div>\n        <div id=\"play_").concat(w.id, "\" style=\"margin-top:8px\"></div>\n      </div>"); }).join('') : "<div class=\"empty\">".concat(esc(L.noWorks), "</div>"), "</div>");
renderCard(studioItem);
if (isSelfie())
setTimeout(attachSelfie, 60);
$('#stBack').onclick = function () { closeStudio(); };
$('#btShare').onclick = cardShare;
$('#btSave').onclick = cardDownload;
bind = function (sel, fn) { return $$(sel, v).forEach(function (b) { return b.onclick = function () { fn(b); }; }); };
bind('#cTpl button', function (b) { state.cardTpl = b.dataset.t; saveState(); studioRefresh(); });
bind('#cBrd button', function (b) { state.cardBorder = b.dataset.b; saveState(); studioRefresh(); });
bind('#cSz  button', function (b) { state.cardSize = b.dataset.z; saveState(); studioRefresh(); });
bind('#cFs  button', function (b) { state.cardFs = +b.dataset.f; saveState(); studioRefresh(); });
bind('#pMode button', function (b) { photoMode = b.dataset.m; studioRefresh(); });
bind('#pShape button', function (b) { stkShape = b.dataset.v; if (stkShape === 'w' && stkSize < .38)
stkSize = .46; studioRefresh(); });
bind('#pSize button', function (b) { stkSize = +b.dataset.v; studioRefresh(); });
bind('#pPos button', function (b) { stkPos = b.dataset.v; studioRefresh(); });
bind('#bVol button', function (b) { bgmVol = +b.dataset.v; studioRefresh(); });
bind('#mLen button', function (b) { mcLen = +b.dataset.v; studioRefresh(); });
bind('#rBeauty button', function (b) { state.beauty = b.dataset.v === '1'; saveState(); studioRefresh(); });
bind('#rMode button', function (b) { return setRecMode(b.dataset.s); });
pd = $('#pDel');
if (pd)
pd.onclick = function () { photoImg = null; photoBy = ''; studioRefresh(); };
pl2 = $('#pLib');
if (pl2)
pl2.onclick = openPexels;
bd = $('#bDel');
if (bd)
bd.onclick = function () { bgmBlob = null; bgmName = ''; bgmCredit = ''; studioRefresh(); };
blb = $('#bLib');
if (blb)
blb.onclick = openHymns;
['pNew', 'pRe'].forEach(function (id) { var e = $('#' + id); if (e)
e.onchange = function () { return pickPhoto(e); }; });
['bNew', 'bRe'].forEach(function (id) { var e = $('#' + id); if (e)
e.onchange = function () { return pickBgm(e); }; });
nt = $('#cardNote');
if (nt) {
tmr_1 = null;
nt.oninput = function () { clearTimeout(tmr_1); tmr_1 = setTimeout(function () { studioNote = nt.value; renderCard(studioItem); }, 400); };
}
$('#blessBtn').onclick = blessWrite;
$('#tweakBtn').onclick = openTweak;
$('#noteMine').onclick = function () { studioNote = studioItem.n || ''; studioRefresh(); };
$('#noteClear').onclick = function () { studioNote = ''; studioRefresh(); };
bindInput = function (id, key) {
var e = $('#' + id);
if (!e)
return;
var tm = null;
e.oninput = function () { clearTimeout(tm); tm = setTimeout(function () { state[key] = e.value; saveState(); renderCard(studioItem); }, 400); };
};
bindInput('cardTo', 'cardTo');
bindInput('cardTop', 'cardTop');
bindInput('cardSign', 'cardSign');
$('#recBtn').onclick = toggleRec;
mb = $('#mcBtn');
if (mb)
mb.onclick = musicRec;
bind('[data-play]', function (b) { return playRec(b.dataset.play); });
bind('[data-sh]', function (b) { return shareRec(b.dataset.sh); });
bind('[data-rm]', function (b) { return rmRec(b.dataset.rm); });
return [2];
}
});
});
}
function openStudio(h) {
studioItem = h;
studioNote = h.n || '';
if (!wdb)
openWDB().then(function () { return studioRefresh(); });
BR.openOv('<div class="ibs" id="ibsView" style="max-width:640px;margin:0 auto;padding:calc(10px + env(safe-area-inset-top)) 16px 60px"></div>');
studioRefresh();
}
function closeStudio() {
try {
if (mr && mr.state === 'recording')
mr.stop();
}
catch (e) { }
stopSelfie();
hymnStopPrev();
BR.closeOv();
}
var isEN = function () { return state.lang === 'en'; };
var isZS = function () { return state.lang === 'zs'; };
var L3 = function (zh, zs, en) { return isEN() ? en : (isZS() ? zs : zh); };
var t = function () {
var base = I18N[state.lang] || I18N.zh;
if (!base.__ml) {
base.app = BR.T('app');
base.__ml = 1;
}
return base;
};
window.ML_STUDIO = { open: openStudio, close: closeStudio };
})();
