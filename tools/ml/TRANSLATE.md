# 婚姻生活 ko/ja/id/ceb 續譯流程（第 3–52 週）

目標：把 en-sN.json 的每週英文內容翻成 ko、ja、id、ceb，放進 `{lang}-s{階段}.json`。
階段：s1=第1–8週、s2=9–21、s3=22–30、s4=31–44、s5=45–52。已完成：第 1、2 週（四語）。

每週流程（在 tools/ml 目錄）：
1. `python3 wk_dump.py N > wk/N.src.txt` 取得該週英文（每行 `索引<TAB>文字`，約 91 行，順序固定）。
2. 為 ja、ko、id、ceb 各寫 `wk/<lang>/N.txt`，行數與索引完全一致（`索引<TAB>譯文`）。風格參考 wk/*/1.txt、2.txt（口吻溫暖、保留「321 Light」概念與「自己掌權／倒空自己」用語）。
3. 經文引用：`BIBLE=<聖經資料夾> python3 vq.py <lang> Genesis.2.18 ...` 取得該語言經文（ko 개역한글、ja 口語訳、id AYT、ceb Door43/Biblica）。需先用 add_repo 取得 spch321-sudo/bible 並指定 BIBLE 路徑（bible.{lang}.{law,hist,poet,proph,nt}.json）。書卷名用英文全名（Genesis、1Samuel…）。
4. `python3 wk_asm.py N`（腳本內 STG 要改成該週所屬階段，預設 1）→ 寫入 `../../{lang}-s{STG}.json`。
5. index.html 的 `var XW={ko:[1,2],...}` 加入該週；index.html、sw.js、version.json 的版本尾碼（`-ml1127b`）一起遞增。
6. 本機 `python3 -m http.server`，Playwright 切換四種語言確認無 pageerror；commit（含 Co-Authored-By 與 Claude-Session 行）並 push。
