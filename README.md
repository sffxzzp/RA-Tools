# RA Tool Hub

[中文版本](#中文版本) | [English Version](#english-version)

---

## English Version

### Overview

**RA Tool Hub** is a collection of browser-based tools for Resident Assistants (RAs) supporting residential life at SAIT. It includes a report generator for **Intentional Conversations (IC)**, a window-open report tool, and a userscript that helps enter IC records in SAIT StarRez.

### Features

- **IC Report Generator** (`ic.html`) - Imports community member and Intentional Conversation CSV files, matches responses to residents, and creates copyable, template-based report text for StarRez records. Unmatched responses are flagged for manual review.
- **RA Window Report Tool** (`window.html`) - Generates a report for a window-open check from guided incident details.
- **Tool Hub Dashboard** (`index.html`) - Provides links to the tools.
- **StarRez IC Assistant** (`ic.user.js`) - Adds a helper to the SAIT StarRez contribution directory to fill fields for an Intentional Conversation record.
- **Dark Theme UI** - Dark interfaces for the web tools.

### Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS custom properties and responsive layouts
- **CSV Parsing**: Papa Parse
- **Integration**: SAIT StarRez Housing system (userscript)

### File Structure

```text
RA/
├── index.html          # Main dashboard and tool hub
├── ic.html             # Intentional Conversation report generator
├── window.html         # Window-open report tool
├── ic.user.js          # StarRez form-filling userscript
└── README.md           # This file
```

### Usage

#### 1. Accessing the Tools

- Open `index.html` in a modern browser and select a tool.

#### 2. IC Report Generator

- Load `CM.csv` (community members) and `IC.csv` (Intentional Conversation responses).
- Enter the RA name, building, and attempted-conversation times.
- Customize the report templates if needed, then select **Generate Reports**.
- Review the resident matches and copy the generated report text. Review flagged unmatched responses manually.

The tool reads the CSV files in the browser. It generates copyable report text; it does not export a CSV file.

#### 3. Window Report Tool

- Enter the window-check details in the form.
- Review the generated report and copy it to the clipboard.

#### 4. StarRez IC Assistant (`ic.user.js`)

- Install the userscript in Tampermonkey or another compatible userscript manager.
- On the matched SAIT StarRez contribution-directory page, paste generated IC record text into the helper and select **Auto Fill**.
- Review the filled fields in StarRez before saving the record.

### Key Features

- Configurable report templates and dynamic fields from the IC CSV headers
- Resident matching using names and room information, with unmatched records flagged
- Attempt-history text based on configured attempt times
- Copy generated reports to the clipboard
- Responsive layouts and dark themes

### Browser Requirements

- A modern browser with JavaScript enabled
- The userscript requires a compatible userscript manager and access to the SAIT StarRez site

### Installation & Setup

1. Download the repository files and open `index.html` in a browser. No application backend is required.
2. To use the StarRez assistant, install `ic.user.js` in a userscript manager.

### Customization

The web tools use CSS custom properties for colors and responsive CSS rules for layout. The IC report templates can be edited in `ic.html`.

### Support & Contribution

For issues, suggestions, or contributions, please feel free to:

- Report bugs with steps to reproduce
- Suggest improvements to RA workflows
- Submit pull requests

### License

This project is created for residential life management purposes.

### Author

Created for SAIT residential staff and the RA community.

---

## 中文版本

### 项目简介

**RA工具集（RA Tool Hub）** 是一套面向 SAIT 宿舍管理助理（RA）的浏览器工具，包含 **Intentional Conversations（IC，有意对话）报告生成器**、窗户检查报告工具，以及辅助在 SAIT StarRez 中录入 IC 记录的用户脚本。

### 主要功能

- **IC 报告生成器**（`ic.html`）- 导入社区成员和 IC 回答 CSV，匹配住户，并生成可复制、可自定义模板的 StarRez 记录文本；无法匹配的回答会标记出来供人工核对。
- **窗户检查报告工具**（`window.html`）- 根据引导表单中的检查信息生成窗户打开报告。
- **工具集仪表板**（`index.html`）- 提供各工具的入口。
- **StarRez IC 助手**（`ic.user.js`）- 在 SAIT StarRez 的 contribution directory 页面添加辅助功能，用于填写 Intentional Conversation 记录。
- **深色主题界面** - 网页工具采用深色界面。

### 技术栈

- **前端**：HTML5、CSS3、JavaScript（ES6+）
- **样式**：CSS 自定义属性和响应式布局
- **CSV 解析**：Papa Parse
- **集成**：SAIT StarRez Housing 系统（用户脚本）

### 文件结构

```text
RA/
├── index.html          # 主仪表板和工具集
├── ic.html             # Intentional Conversation 报告生成器
├── window.html         # 窗户打开检查报告工具
├── ic.user.js          # StarRez 表单辅助用户脚本
└── README.md           # 本文件
```

### 使用指南

#### 1. 访问工具

- 在现代浏览器中打开 `index.html`，然后选择所需工具。

#### 2. IC 报告生成器

- 导入 `CM.csv`（社区成员）和 `IC.csv`（Intentional Conversation 回答）。
- 填写 RA 姓名、楼宇和尝试联系住户的时间。
- 按需修改报告模板，然后点击 **Generate Reports**。
- 检查住户匹配结果并复制生成的报告文本；无法匹配的回答需要人工核对。

工具在浏览器中读取 CSV，并生成可复制的报告文本，不会导出 CSV 文件。

#### 3. 窗户检查报告工具

- 在表单中填写窗户检查信息。
- 检查生成的报告并复制到剪贴板。

#### 4. StarRez IC 助手（`ic.user.js`）

- 在 Tampermonkey 或兼容的用户脚本管理器中安装该脚本。
- 打开脚本适用的 SAIT StarRez contribution directory 页面，将生成的 IC 记录文本粘贴到助手中并点击 **Auto Fill**。
- 保存记录前，请检查 StarRez 中已填写的字段。

### 核心特性

- 可自定义报告模板，并使用 IC CSV 表头作为动态字段
- 根据姓名和房间信息匹配住户，并标记无法匹配的记录
- 根据设置的尝试联系时间生成联系记录文本
- 将生成的报告复制到剪贴板
- 响应式布局和深色主题

### 浏览器要求

- 支持 JavaScript 的现代浏览器
- 用户脚本需要兼容的用户脚本管理器，以及 SAIT StarRez 网站的访问权限

### 安装与设置

1. 下载仓库文件，并在浏览器中打开 `index.html`，无需应用后端服务。
2. 如需使用 StarRez 助手，请在用户脚本管理器中安装 `ic.user.js`。

### 自定义

网页工具使用 CSS 自定义属性设置颜色，并通过响应式 CSS 规则调整布局。可在 `ic.html` 中编辑 IC 报告模板。

### 反馈与贡献

如有问题、建议或想要贡献，欢迎：

- 报告问题并提供复现步骤
- 建议改进 RA 工作流程
- 提交拉取请求

### 许可证

本项目用于宿舍生活管理。

### 作者

为 SAIT 宿舍工作人员和 RA 社区创建。
