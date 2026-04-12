// ==UserScript==
// @name         SAIT IC Input Assist
// @namespace    https://github.com/sffxzzp
// @version      0.01
// @description  a userscript for myself
// @author       sffxzzp
// @match        https://sait.starrezhousing.com/StarRezWeb/campuslife/contributiondirectory
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // ========================================================
    // 1. 创建浮动 UI (增加防重复机制)
    // ========================================================
    function createUI() {
        // [修复核心]：如果界面上已经存在这个 ID，则不再创建
        if (document.getElementById('reslife-autofill-ui')) {
            return;
        }

        const div = document.createElement('div');
        div.id = 'reslife-autofill-ui'; // 给它一个唯一的 ID

        Object.assign(div.style, {
            position: 'fixed', bottom: '50px', right: '50px', zIndex: '9999999',
            backgroundColor: 'white', border: '2px solid #007bff', padding: '10px',
            borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            display: 'flex', flexDirection: 'column', gap: '8px'
        });

        const textarea = document.createElement('textarea');
        textarea.id = 'auto-fill-input';
        textarea.placeholder = `January 1, 2026 0000HRS
IC #3 - LAST, First (Resident BEG-0000-A)

[Description]

0,0,0,0,0`;
        Object.assign(textarea.style, {
            width: '300px', height: '150px', resize: 'both',
            border: '1px solid #ccc', padding: '5px', fontSize: '12px', fontFamily: 'monospace'
        });

        const btn = document.createElement('button');
        btn.innerText = 'Auto Fill';
        Object.assign(btn.style, {
            backgroundColor: '#007bff', color: 'white', border: 'none',
            padding: '8px', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold'
        });

        btn.onclick = () => parseAndFill(textarea.value);

        div.appendChild(textarea);
        div.appendChild(btn);
        document.body.appendChild(div);
    }

    // ========================================================
    // 2. 日期解析工具
    // ========================================================
    const monthMap = {
        "January": 0, "February": 1, "March": 2, "April": 3, "May": 4, "June": 5,
        "July": 6, "August": 7, "September": 8, "October": 9, "November": 10, "December": 11
    };
    const daysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    function parseDateString(dateLine) {
        try {
            const regex = /([A-Za-z]+)\s+(\d+),\s+(\d{4})\s+(\d{4})HRS/;
            const match = dateLine.match(regex);
            if (!match) return null;

            const d = new Date(parseInt(match[3]), monthMap[match[1]], parseInt(match[2]));
            const timeRaw = match[4];

            const dateStr = `${daysShort[d.getDay()]}, ${String(d.getDate()).padStart(2, '0')} ${monthsShort[d.getMonth()]} ${d.getFullYear()}`;
            const timeStr = `${timeRaw.substring(0, 2)}:${timeRaw.substring(2, 4)}`;

            return { dateStr, timeStr };
        } catch (e) {
            console.error("Date parse error", e);
            return null;
        }
    }

    // ========================================================
    // 3. 核心解析与填充逻辑
    // ========================================================
    function parseAndFill(text) {
        if (!text.trim()) { alert("empty content!"); return; }

        const rawLines = text.trim().split('\n');

        // --- A. 数据提取 ---
        const dateInfo = parseDateString(rawLines[0]);
        if (!dateInfo) { alert("Can't parse date string."); return; }

        const nameLine = rawLines[1] || "";
        let extractedName = "Unknown";
        const nameMatch = nameLine.match(/-\s*(.*?)\s*\(/);
        if (nameMatch && nameMatch[1]) extractedName = nameMatch[1].trim();

        const ratingLine = rawLines[rawLines.length - 1];
        const ratings = ratingLine.includes(',') ? ratingLine.split(',') : [];

        // 描述：保留从第2行开始到倒数第2行的所有内容
        const descriptionBody = rawLines.slice(1, rawLines.length - 1).join('\n').trim();

        // --- B. 基础 DOM 操作 (同步) ---

        // 1. 日期和时间
        setInputValue('input.ui-format-date', dateInfo.dateStr);
        setInputValue('input.ui-format-time', dateInfo.timeStr);
        // 2. 描述
        setInputValue('textarea[name="Description"]', descriptionBody);
        // 3. 分类 Category (固定)
        const catInput = document.querySelector('label[title=Category] + div input');
        if (catInput) {
            catInput.value = 1;
            triggerChange(catInput);
            const catContainer = document.querySelector('label[title=Category] + div > div');
            if(catContainer) {
                catContainer.title = "013 SAIT";
                const cap = catContainer.querySelector('.search-picker-caption');
                if(cap) cap.innerHTML = "013 SAIT";
            }
        }

        // 4. 房间位置
        setSelect('label[title="Room Location"] + div select', 3);
        // 5. 评分填充
        const ratingTitles = ['1.Connectedness', '2.Resourcefulness', '3.Capability', '4.Purpose', '5.Resiliency'];
        ratings.forEach((val, idx) => {
            if(idx < ratingTitles.length) {
                setInputValue(`[title="${ratingTitles[idx]}"] + div input`, val);
            }
        });
        // --- C. 异步/联动 DOM 操作 ---
        // 6. Contribution Type & SubType
        const contribTypeSelect = document.querySelector('select[name=ContributionTypeID]');
        if (contribTypeSelect) {
            contribTypeSelect.value = 1;
            triggerChange(contribTypeSelect);

            setTimeout(() => {
                const subTypeDiv = document.querySelector('div[data-fieldname=ContributionSubTypeID]');
                if(subTypeDiv) {
                    subTypeDiv.classList.remove('disabled', 'ui-disabled');
                    subTypeDiv.removeAttribute('disabled');
                }

                const subTypeSel = document.querySelector('select[name=ContributionSubTypeID]');
                if(subTypeSel) {
                    subTypeSel.classList.remove('disabled', 'ui-disabled');
                    subTypeSel.removeAttribute('disabled');
                    subTypeSel.value = 4;
                    triggerChange(subTypeSel);
                }
            }, 1000);
        }

        // 7. 搜索选人 (最后执行)
        const entryDiv = document.querySelector('div[data-fieldname=EntryID] > div');
        if (entryDiv) {
            entryDiv.click();
            setTimeout(() => {
                setInputValue('input[name=SearchText]', extractedName);
                setSelect('select[name=SearchEnum]', '5|22');
                const searchBtn = document.querySelector('button.ui-searchbtn');
                if (searchBtn) searchBtn.click();
            }, 1500);
        }

        // 8. 增加学期
        setSelect('label[title="Semester of Intentional Conversation"] + div select', 1059);

        // --- D. 收尾 ---
        document.getElementById('auto-fill-input').value = '';
    }
    // ========================================================
    // 4. 通用辅助函数
    // ========================================================
    function triggerChange(el) {
        if (!el) return;
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
        if (typeof el.onchange === 'function') {
            el.onchange();
        }
    }
    function setInputValue(selector, val) {
        const el = document.querySelector(selector);
        if (el) { if (val==0) {el.value = '';} else {el.value = val;} triggerChange(el); }
    }
    function setSelect(selector, val) {
        const el = document.querySelector(selector);
        if (el) { el.value = val; triggerChange(el); }
    }
    // 启动
    window.addEventListener('load', createUI);
    setTimeout(createUI, 1500);
})();
