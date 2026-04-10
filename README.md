# 牵牛花综合征 · Morning Glory Syndrome

> 一个关于罕见先天性视盘异常——牵牛花综合征（Morning Glory Syndrome, MGS）的医学教育网站，涵盖病因、临床表现、诊断、治疗与近期研究进展。

[![Deploy](https://img.shields.io/github/actions/workflow/status/Raymond1030/morning-glory-syndrome/pages%2Fpages-build-deployment?label=GitHub%20Pages&logo=github)](https://raymond1030.github.io/morning-glory-syndrome/)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fraymond1030.github.io%2Fmorning-glory-syndrome%2F&label=live%20site)](https://raymond1030.github.io/morning-glory-syndrome/)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
[![Language](https://img.shields.io/badge/language-中文%20%7C%20English-blue)](https://raymond1030.github.io/morning-glory-syndrome/)
[![Medical Education](https://img.shields.io/badge/medical-education-teal)](https://raymond1030.github.io/morning-glory-syndrome/)
[![Ophthalmology](https://img.shields.io/badge/field-ophthalmology-0B5345)](https://raymond1030.github.io/morning-glory-syndrome/)
[![Rare Disease](https://img.shields.io/badge/rare%20disease-Orphanet%2035737-E74C3C)](https://www.orpha.net/en/disease/detail/35737)
[![References](https://img.shields.io/badge/references-24%20papers-148F77)](#参考文献)
[![Built with](https://img.shields.io/badge/built%20with-HTML%2FCSS-F39C12)](index.html)

🌐 **在线访问 · Live Demo：** https://raymond1030.github.io/morning-glory-syndrome/

---

## 📖 项目简介

**牵牛花综合征**（Morning Glory Syndrome, MGS）是一种罕见的先天性视盘凹陷性异常，由 Kindler 于 1970 年首次描述。其特征性表现为漏斗状视盘凹陷、中央白色胶质组织和放射状视网膜血管，形似牵牛花（Ipomoea），因此得名。

本项目是一个静态 HTML 综述网站，整合了 1970 年代至 2024 年的 **24 篇核心文献**，以视觉化的方式呈现 MGS 的完整临床图景，面向眼科医师、住院医生、医学生以及希望了解此疾病的患者和家属。

## ✨ 内容亮点

| 模块 | 内容 |
|------|------|
| 🧬 **病因学** | 胚胎学假说 · PAX6/PAX2/MMP19 遗传学 |
| 👁 **临床表现** | 眼部症状 · 特征性眼底表现 · 视盘收缩运动 |
| 🧠 **系统关联** | 脑膨出 · 烟雾病 · 内分泌异常 · 肾脏发育不良 |
| 🔬 **诊断方法** | 眼底镜 · OCT · FFA · MRI/MRA |
| ⚠️ **并发症** | 视网膜脱离四大机制 · 玻璃体切割术流程 |
| 📚 **近期研究** | 2020-2024 年 12 篇代表性文献卡片 |
| 💊 **治疗方案** | 药物 · 手术 · 视觉康复 · 长期随访 |
| ❤️ **患者支持** | 家庭教育 · 心理支持 · 多学科团队（MDT） |
| 📋 **典型病例** | 3 个代表性临床案例 |
| 🛡 **预防策略** | 早期筛查 · 早期干预 · 遗传咨询 |

## 🆕 2024 年新进展

本站点特别整理了 **2024 年 MGS 治疗的三项关键突破**：

- 💊 **口服乙酰唑胺** — 针对非孔源性浆液性视网膜脱离的药物替代方案（*Am J Ophthalmol Case Rep, 2024*）
- 🏥 **C3F8 气体填充替代硅油** — 降低二次手术需求的玻璃体切割新术式（*Front Med, 2024*）
- 🧬 **人羊膜膜片覆盖视盘** — 再生医学在封闭 CSF-视网膜下腔异常通道中的创新应用（*Case Rep Ophthalmol, 2024*）

## 🛠 技术栈

- **前端：** 纯 HTML5 + CSS3（无框架，单文件约 1900 行）
- **字体：** Noto Serif SC / Noto Sans SC（Google Fonts）
- **响应式：** 完整移动端适配（768px / 1024px 断点）
- **部署：** GitHub Pages（主分支根目录）
- **无依赖：** 无 JavaScript 框架、无构建流程

## 📂 项目结构

```
morning-glory-syndrome/
├── index.html                      # 主页面（包含全部 CSS + 内容）
├── images/                         # AI 生成的医学插图
│   ├── mgs_fundus_illustration.png
│   ├── mgs_awareness_banner.png
│   └── mgs_multidisciplinary.png
├── 牵牛花综合征综述论文.md          # 原始综述文稿（Markdown）
├── 牵牛花综合征临床综述.pptx        # 配套幻灯片
├── README.md
└── .gitignore
```

## 🚀 本地预览

```bash
git clone https://github.com/Raymond1030/morning-glory-syndrome.git
cd morning-glory-syndrome
# 任一静态服务器即可
python3 -m http.server 8000
# 或
npx serve .
```

然后访问 http://localhost:8000

## 📊 关键流行病学数据

<div align="center">

| 指标 | 数据 |
|------|------|
| 患病率 | 2.6 / 100,000 |
| 单侧发病 | ~85% |
| 视网膜脱离风险（10 年） | ~33% |
| 合并脑血管异常 | ~45% |
| 其他眼部并发症 | ~86% |
| 典型诊断年龄 | 约 2 岁 |

</div>

## 📚 参考文献

站点共整理 **24 篇文献**，涵盖：

- **经典文献** — Kindler 1970、Pollock 1987、Brodsky 1994、Lenhart 2006 等
- **近期研究（2020-2023）** — Morganti 2023 MGDA-烟雾病队列、Hazlewood 2021 MMP19 突变、Pilotto 2020 OCT 收缩运动记录
- **2024 新进展** — 乙酰唑胺、C3F8 气体填充、人羊膜膜片
- **并发症与机制** — CNV 抗 VEGF 治疗、PHPV 合并、弱视康复

完整文献列表请见站点页脚。

## ⚠️ 免责声明

本网页仅供 **医学教育参考**，不构成任何医疗建议或诊断依据。具体临床决策请咨询持证眼科医师。本站所引用文献版权归原作者/期刊所有。

## 📜 许可协议

本项目以 [**CC BY-NC-SA 4.0**](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh) 协议发布，允许在**非商业**用途下自由分享和修改，但须注明原作者并采用相同协议。

## 🤝 贡献

欢迎通过 Issue 或 Pull Request 贡献：

- 补充最新文献 / 修正错误
- 翻译为英文或其他语言
- 添加临床病例
- 改进设计或无障碍适配

---

<div align="center">

**🌸 牵牛花综合征 · Morning Glory Syndrome · 2026**

用知识守护视力 · *Guarding Vision with Knowledge*

</div>
