# RA Tool Hub

[中文版本](#中文版本) | [English Version](#english-version)

---

## English Version

### Overview

**RA Tool Hub** is a comprehensive suite of web-based tools designed to assist Resident Assistants (RAs) in managing residential life operations efficiently. The toolkit includes utilities for generating incident reports, managing IC (Incident Contribution) records, and handling window maintenance reports with an intuitive user interface.

### Features

- **IC Report Generator** (`ic.html`) - A powerful tool for creating and managing Incident Contribution reports with CSV import/export capabilities
- **RA Incident Reporter** (`window.html`) - Streamlined form for generating window open incident reports
- **Tool Hub Dashboard** (`index.html`) - Central hub interface providing quick access to all RA utilities
- **UserScript Assistant** (`ic.user.js`) - Browser userscript for automating IC form filling on SAIT Housing portal
- **Dark Theme UI** - Professional dark mode interface optimized for extended use

### Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Custom Properties, Responsive Design
- **Data Processing**: Papa Parse (CSV handling)
- **Browser Compatibility**: Modern browsers with JavaScript support
- **Integration**: SAIT StarRez Housing system support

### File Structure

``` plaintext
RA/
├── index.html          # Main dashboard and tool hub
├── ic.html            # IC Report Generator interface
├── window.html        # RA Window Report Tool
├── ic.user.js         # Userscript for automated IC input
└── README.md          # This file
```

### Usage

#### 1. Accessing the Tools

- Open `index.html` in a web browser to access the RA Tool Hub dashboard
- Navigate to desired tool from the main interface
- Each tool features an intuitive form-based interface

#### 2. IC Report Generator

- Import/export data via CSV format
- Generate formatted incident reports
- Track contribution records with validation

#### 3. Window Report Tool

- Fill in incident details through guided form
- Auto-generate formatted reports
- Copy to clipboard for easy sharing

#### 4. UserScript Installation (ic.user.js)

- Install in Tampermonkey, Greasemonkey, or similar userscript manager
- Automatically adds input assistance to SAIT Housing portal
- Reduces manual data entry for IC records

### Key Features

- **Auto-fill Functionality**: Reduce repetitive data entry
- **CSV Support**: Import and export incident data
- **Real-time Preview**: See formatted reports as you type
- **Responsive Design**: Works on desktop and tablet devices
- **Dark Mode**: Eye-friendly interface for long work sessions
- **Copy to Clipboard**: Quick sharing of generated reports

### Browser Requirements

- Modern browser with ES6 JavaScript support
- JavaScript must be enabled
- Cookies enabled for data persistence (recommended)

### Installation & Setup

1. Clone or download this repository
2. No backend server required - all tools run locally in the browser
3. For userscript functionality, install a userscript manager:
   - [Tampermonkey](https://www.tampermonkey.net/) (Chrome, Firefox, Safari)
   - [Greasemonkey](https://www.greasespot.net/) (Firefox)

### Customization

All styling uses CSS custom properties (variables) for easy theme customization:

- Modify color scheme in `:root` CSS variables
- Adjust responsive breakpoints in `@media` queries
- Customize form fields and button behaviors

### Support & Contribution

For issues, suggestions, or contributions, please feel free to:

- Report bugs with detailed steps to reproduce
- Suggest new features for RA workflows
- Submit pull requests with improvements

### License

This project is created for residential life management purposes.

### Author

Created for SAIT residential staff and RA community.

---

## 中文版本

### 项目简介

**RA工具集（RA Tool Hub）** 是一套为宿舍管理助理（RA）设计的网页工具集合。该工具套件帮助RAs高效管理宿舍生活运营，包含事件报告生成、IC记录管理和窗户维护报告等功能，提供直观的用户界面。

### 主要功能

- **IC报告生成器** (`ic.html`) - 功能强大的事件贡献报告生成工具，支持CSV导入/导出
- **RA事件报告器** (`window.html`) - 用于生成窗户打开事件报告的流畅表单
- **工具集仪表板** (`index.html`) - 中央枢纽界面，提供所有RA工具的快速访问
- **用户脚本助手** (`ic.user.js`) - 浏览器用户脚本，用于在SAIT学生住房门户自动填充IC表单
- **深色主题UI** - 专业的深色模式界面，适合长时间使用

### 技术栈

- **前端**: HTML5、CSS3、JavaScript (ES6+)
- **样式**: CSS自定义属性、响应式设计
- **数据处理**: Papa Parse (CSV处理)
- **浏览器兼容性**: 支持JavaScript的现代浏览器
- **集成**: SAIT StarRez学生住房系统支持

### 文件结构

``` plaintext
RA/
├── index.html          # 主仪表板和工具集
├── ic.html            # IC报告生成器界面
├── window.html        # RA窗户报告工具
├── ic.user.js         # 自动化IC输入用户脚本
└── README.md          # 本文件
```

### 使用指南

#### 1. 访问工具

- 在网页浏览器中打开 `index.html` 进入RA工具集仪表板
- 从主界面导航到所需工具
- 每个工具都提供直观的表单界面

#### 2. IC报告生成器

- 通过CSV格式导入/导出数据
- 生成格式化的事件报告
- 通过验证跟踪贡献记录

#### 3. 窗户报告工具

- 通过引导表单填写事件详情
- 自动生成格式化报告
- 复制到剪贴板便于分享

#### 4. 用户脚本安装 (ic.user.js)

- 在Tampermonkey、Greasemonkey或类似用户脚本管理器中安装
- 自动在SAIT学生住房门户添加输入辅助
- 减少IC记录的手动数据输入

### 核心特性

- **自动填充功能**: 减少重复数据输入
- **CSV支持**: 导入和导出事件数据
- **实时预览**: 输入时实时查看格式化报告
- **响应式设计**: 在桌面和平板设备上运行
- **深色模式**: 长工作时间眼睛友好的界面
- **复制到剪贴板**: 快速分享生成的报告

### 浏览器要求

- 支持ES6 JavaScript的现代浏览器
- JavaScript必须启用
- 建议启用Cookie以保持数据持久化

### 安装与设置

1. 克隆或下载此仓库
2. 无需后端服务器 - 所有工具在浏览器本地运行
3. 对于用户脚本功能，请安装用户脚本管理器：
   - [Tampermonkey](https://www.tampermonkey.net/) (Chrome、Firefox、Safari)
   - [Greasemonkey](https://www.greasespot.net/) (Firefox)

### 自定义

所有样式使用CSS自定义属性（变量）便于主题定制：

- 在 `:root` CSS变量中修改配色方案
- 在 `@media` 查询中调整响应式断点
- 自定义表单字段和按钮行为

### 反馈与贡献

如有问题、建议或想要贡献，欢迎：

- 报告BUG并提供详细复现步骤
- 建议新增RA工作流相关功能
- 提交改进的拉取请求

### 许可证

本项目为宿舍生活管理目的创建。

### 作者

为SAIT宿舍管理员和RA社区创建。
