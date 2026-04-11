const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Raymond";
pres.title = "牵牛花综合征临床综述";

// ========== Color Palette: Medical/Teal Trust ==========
const C = {
  primary: "0B5345",      // deep teal
  secondary: "148F77",    // teal
  accent: "1ABC9C",       // bright teal
  light: "D1F2EB",        // pale teal
  bg: "F8FFFE",           // near white
  dark: "1C2833",         // near black
  white: "FFFFFF",
  gray: "5D6D7E",
  lightGray: "E8ECEF",
  coral: "E74C3C",        // for emphasis
  gold: "F39C12",         // for highlights
};

const FONT_H = "Georgia";
const FONT_B = "Calibri";

// Helper: fresh shadow
const cardShadow = () => ({ type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.12 });

// ================================================================
// SLIDE 1: Title Slide
// ================================================================
let s1 = pres.addSlide();
s1.background = { color: C.primary };

// Decorative shapes
s1.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: C.accent } });
s1.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.545, w: 10, h: 0.08, fill: { color: C.accent } });

// Left accent bar
s1.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.2, w: 0.06, h: 3.2, fill: { color: C.accent } });

s1.addText("牵牛花综合征", {
  x: 1.0, y: 1.2, w: 8.5, h: 1.2,
  fontSize: 44, fontFace: FONT_H, color: C.white, bold: true, margin: 0,
});
s1.addText("Morning Glory Syndrome", {
  x: 1.0, y: 2.3, w: 8.5, h: 0.8,
  fontSize: 28, fontFace: FONT_H, color: C.accent, italic: true, margin: 0,
});
s1.addText("临床特征、诊断与管理综述", {
  x: 1.0, y: 3.2, w: 8.5, h: 0.6,
  fontSize: 20, fontFace: FONT_B, color: C.light, margin: 0,
});

// Bottom info
s1.addShape(pres.shapes.RECTANGLE, { x: 0, y: 4.6, w: 10, h: 0.95, fill: { color: "094136" } });
s1.addText("文献综述报告  |  2026", {
  x: 1.0, y: 4.7, w: 8, h: 0.6,
  fontSize: 14, fontFace: FONT_B, color: C.light,
});

// ================================================================
// SLIDE 2: 目录
// ================================================================
let s2 = pres.addSlide();
s2.background = { color: C.bg };

s2.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 1.0, fill: { color: C.primary } });
s2.addText("目录  CONTENTS", {
  x: 0.8, y: 0.15, w: 8, h: 0.7,
  fontSize: 28, fontFace: FONT_H, color: C.white, bold: true, margin: 0,
});

const tocItems = [
  { num: "01", title: "概述与流行病学", desc: "定义、命名由来与患病率" },
  { num: "02", title: "病因学与发病机制", desc: "胚胎学假说与遗传因素" },
  { num: "03", title: "临床表现", desc: "眼部特征与全身系统关联" },
  { num: "04", title: "诊断方法", desc: "OCT、FFA、MRI等检查手段" },
  { num: "05", title: "鉴别诊断", desc: "与相似疾病的区分" },
  { num: "06", title: "并发症与治疗", desc: "视网膜脱离的处理与多学科管理" },
  { num: "07", title: "预后与预防策略", desc: "早期发现与干预措施" },
  { num: "08", title: "典型病例分析", desc: "临床案例展示" },
];

tocItems.forEach((item, i) => {
  const row = Math.floor(i / 2);
  const col = i % 2;
  const x = 0.6 + col * 4.7;
  const y = 1.3 + row * 1.0;

  // Number circle
  s2.addShape(pres.shapes.OVAL, {
    x: x, y: y + 0.05, w: 0.45, h: 0.45,
    fill: { color: C.secondary },
  });
  s2.addText(item.num, {
    x: x, y: y + 0.05, w: 0.45, h: 0.45,
    fontSize: 14, fontFace: FONT_B, color: C.white, bold: true, align: "center", valign: "middle",
  });

  s2.addText(item.title, {
    x: x + 0.55, y: y, w: 3.8, h: 0.3,
    fontSize: 15, fontFace: FONT_B, color: C.dark, bold: true, margin: 0,
  });
  s2.addText(item.desc, {
    x: x + 0.55, y: y + 0.3, w: 3.8, h: 0.25,
    fontSize: 11, fontFace: FONT_B, color: C.gray, margin: 0,
  });
});

// ================================================================
// SLIDE 3: 概述与流行病学
// ================================================================
let s3 = pres.addSlide();
s3.background = { color: C.bg };
s3.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: C.accent } });
s3.addText("概述与流行病学", {
  x: 0.5, y: 0.25, w: 9, h: 0.6,
  fontSize: 30, fontFace: FONT_H, color: C.primary, bold: true, margin: 0,
});

// Definition card
s3.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.1, w: 9, h: 1.3,
  fill: { color: C.white }, shadow: cardShadow(),
});
s3.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 0.08, h: 1.3, fill: { color: C.accent } });
s3.addText("疾病定义", {
  x: 0.8, y: 1.15, w: 8.5, h: 0.35,
  fontSize: 16, fontFace: FONT_B, color: C.secondary, bold: true, margin: 0,
});
s3.addText("牵牛花综合征（Morning Glory Syndrome, MGS）是一种罕见的先天性视盘凹陷性异常，因眼底镜下视盘形态酷似牵牛花而得名。由Kindler于1970年首次描述，以漏斗状视盘凹陷、中央胶质组织增生及视盘周围色素改变为特征。", {
  x: 0.8, y: 1.5, w: 8.5, h: 0.8,
  fontSize: 13, fontFace: FONT_B, color: C.dark, margin: 0,
});

// Stats cards
const stats = [
  { value: "2.6/10万", label: "患病率", color: C.secondary },
  { value: "1:2", label: "男女比例", color: C.accent },
  { value: "85%", label: "单侧发病", color: C.primary },
  { value: "~2岁", label: "典型诊断年龄", color: C.gold },
];

stats.forEach((st, i) => {
  const x = 0.5 + i * 2.3;
  s3.addShape(pres.shapes.RECTANGLE, {
    x: x, y: 2.7, w: 2.1, h: 1.5,
    fill: { color: C.white }, shadow: cardShadow(),
  });
  s3.addShape(pres.shapes.RECTANGLE, { x: x, y: 2.7, w: 2.1, h: 0.06, fill: { color: st.color } });
  s3.addText(st.value, {
    x: x, y: 2.9, w: 2.1, h: 0.7,
    fontSize: 28, fontFace: FONT_H, color: st.color, bold: true, align: "center", valign: "middle",
  });
  s3.addText(st.label, {
    x: x, y: 3.6, w: 2.1, h: 0.4,
    fontSize: 13, fontFace: FONT_B, color: C.gray, align: "center",
  });
});

// Bottom note
s3.addText([
  { text: "特殊人群：", options: { bold: true } },
  { text: "非裔人群中较少见；家族性CODA约65%为双侧受累" },
], {
  x: 0.5, y: 4.5, w: 9, h: 0.4,
  fontSize: 12, fontFace: FONT_B, color: C.gray,
});

// ================================================================
// SLIDE 4: 病因学与发病机制
// ================================================================
let s4 = pres.addSlide();
s4.background = { color: C.bg };
s4.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: C.accent } });
s4.addText("病因学与发病机制", {
  x: 0.5, y: 0.25, w: 9, h: 0.6,
  fontSize: 30, fontFace: FONT_H, color: C.primary, bold: true, margin: 0,
});

// Three hypothesis cards
const hypotheses = [
  {
    title: "胚裂闭合不全假说",
    text: "视杯裂闭合异常导致视盘结构发育不完整。但MGS表现为中央凹陷而非下方缺损，与典型缺损不同。",
  },
  {
    title: "中胚层分化异常假说",
    text: "原始中胚层异常分化，导致后巩膜壁闭合不全和筛板发育不完整（Pollock, 1968）。",
  },
  {
    title: "神经外胚层发育不良假说",
    text: "视盘区域神经外胚层发育异常，导致胶质组织异常增生和视网膜血管走行异常。",
  },
];

hypotheses.forEach((h, i) => {
  const y = 1.1 + i * 1.2;
  s4.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: y, w: 5.5, h: 1.0,
    fill: { color: C.white }, shadow: cardShadow(),
  });
  s4.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.08, h: 1.0, fill: { color: C.accent } });
  s4.addText(h.title, {
    x: 0.8, y: y + 0.05, w: 5, h: 0.3,
    fontSize: 14, fontFace: FONT_B, color: C.secondary, bold: true, margin: 0,
  });
  s4.addText(h.text, {
    x: 0.8, y: y + 0.35, w: 5, h: 0.6,
    fontSize: 11, fontFace: FONT_B, color: C.dark, margin: 0,
  });
});

// Genetics card on the right
s4.addShape(pres.shapes.RECTANGLE, {
  x: 6.3, y: 1.1, w: 3.3, h: 3.5,
  fill: { color: C.primary }, shadow: cardShadow(),
});
s4.addText("遗传学因素", {
  x: 6.5, y: 1.3, w: 3.0, h: 0.4,
  fontSize: 16, fontFace: FONT_B, color: C.accent, bold: true, margin: 0,
});
s4.addText([
  { text: "PAX6基因", options: { bold: true, breakLine: true, color: C.white } },
  { text: "部分MGS病例相关，非一致性发现", options: { breakLine: true, color: C.light } },
  { text: "", options: { breakLine: true, fontSize: 6 } },
  { text: "PAX2基因", options: { bold: true, breakLine: true, color: C.white } },
  { text: "与肾-视盘综合征相关，表型重叠", options: { breakLine: true, color: C.light } },
  { text: "", options: { breakLine: true, fontSize: 6 } },
  { text: "MMP19基因", options: { bold: true, breakLine: true, color: C.white } },
  { text: "空洞性视盘异常(CODA)家系中发现", options: { color: C.light } },
], {
  x: 6.5, y: 1.8, w: 3.0, h: 2.5,
  fontSize: 12, fontFace: FONT_B, margin: 0,
});

s4.addText("大多数病例为散发性，但已有家族性病例报告", {
  x: 0.5, y: 4.6, w: 9, h: 0.4,
  fontSize: 12, fontFace: FONT_B, color: C.gray, italic: true,
});

// ================================================================
// SLIDE 5: 眼部临床表现
// ================================================================
let s5 = pres.addSlide();
s5.background = { color: C.bg };
s5.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: C.accent } });
s5.addText("眼部临床表现", {
  x: 0.5, y: 0.25, w: 9, h: 0.6,
  fontSize: 30, fontFace: FONT_H, color: C.primary, bold: true, margin: 0,
});

// Symptoms section
s5.addText("主要症状", {
  x: 0.5, y: 1.0, w: 4.2, h: 0.35,
  fontSize: 16, fontFace: FONT_B, color: C.secondary, bold: true, margin: 0,
});
s5.addText([
  { text: "视力下降", options: { bold: true, breakLine: true } },
  { text: "  最常见首发症状，通常数指~20/200", options: { breakLine: true } },
  { text: "斜视", options: { bold: true, breakLine: true } },
  { text: "  约80%患者出现，常为就诊原因", options: { breakLine: true } },
  { text: "白瞳症", options: { bold: true, breakLine: true } },
  { text: "  瞳孔区异常反光", options: { breakLine: true } },
  { text: "眼球震颤", options: { bold: true, breakLine: true } },
  { text: "  严重病例可出现", options: {} },
], {
  x: 0.5, y: 1.4, w: 4.2, h: 3.0,
  fontSize: 12, fontFace: FONT_B, color: C.dark, margin: 0, paraSpaceAfter: 4,
});

// Fundus features table
s5.addText("特征性眼底表现", {
  x: 5.0, y: 1.0, w: 4.5, h: 0.35,
  fontSize: 16, fontFace: FONT_B, color: C.secondary, bold: true, margin: 0,
});

const fundusData = [
  [
    { text: "特征", options: { fill: { color: C.secondary }, color: C.white, bold: true, fontSize: 11, fontFace: FONT_B } },
    { text: "描述", options: { fill: { color: C.secondary }, color: C.white, bold: true, fontSize: 11, fontFace: FONT_B } },
  ],
  [{ text: "视盘扩大", options: { fontSize: 10, fontFace: FONT_B } }, { text: "直径明显增大", options: { fontSize: 10, fontFace: FONT_B } }],
  [{ text: "漏斗状凹陷", options: { fontSize: 10, fontFace: FONT_B } }, { text: "后极部球壁锥形凹陷", options: { fontSize: 10, fontFace: FONT_B } }],
  [{ text: "中央胶质", options: { fontSize: 10, fontFace: FONT_B } }, { text: "白色蓬松状胶质团块", options: { fontSize: 10, fontFace: FONT_B } }],
  [{ text: "色素环", options: { fontSize: 10, fontFace: FONT_B } }, { text: "视盘周围环状色素改变", options: { fontSize: 10, fontFace: FONT_B } }],
  [{ text: "放射状血管", options: { fontSize: 10, fontFace: FONT_B } }, { text: "血管从边缘放射状走行", options: { fontSize: 10, fontFace: FONT_B } }],
  [{ text: "黄斑牵引", options: { fontSize: 10, fontFace: FONT_B } }, { text: "黄斑可被纳入凹陷", options: { fontSize: 10, fontFace: FONT_B } }],
];

s5.addTable(fundusData, {
  x: 5.0, y: 1.4, w: 4.5,
  border: { pt: 0.5, color: C.lightGray },
  rowH: [0.35, 0.32, 0.32, 0.32, 0.32, 0.32, 0.32],
  colW: [1.5, 3.0],
  autoPage: false,
});

// Unique feature callout
s5.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 4.5, w: 9, h: 0.8,
  fill: { color: C.light },
});
s5.addText([
  { text: "独特表现：视盘收缩运动 — ", options: { bold: true, color: C.primary } },
  { text: "视盘每分钟2-3次、每次4-5秒的节律性收缩，与视盘内平滑肌细胞有关", options: { color: C.dark } },
], {
  x: 0.7, y: 4.55, w: 8.6, h: 0.7,
  fontSize: 12, fontFace: FONT_B, margin: 0, valign: "middle",
});

// ================================================================
// SLIDE 6: 全身系统关联
// ================================================================
let s6 = pres.addSlide();
s6.background = { color: C.bg };
s6.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: C.accent } });
s6.addText("全身系统关联", {
  x: 0.5, y: 0.25, w: 9, h: 0.6,
  fontSize: 30, fontFace: FONT_H, color: C.primary, bold: true, margin: 0,
});

// 4 system cards in 2x2 grid
const systems = [
  {
    title: "中枢神经系统",
    items: "• 经蝶基底脑膨出\n• 胼胝体发育不全\n• Chiari I型畸形\n• 烟雾病（可致卒中）",
    color: C.coral,
  },
  {
    title: "内分泌系统",
    items: "• 垂体发育异常/垂体柄重复\n• 尿崩症\n• 催乳素、TSH异常\n• 生长激素水平异常",
    color: C.gold,
  },
  {
    title: "肾脏系统",
    items: "• 肾-视盘综合征(PAX2相关)\n• 肾发育不良\n• 继发性高血压\n• 慢性肾病风险",
    color: C.secondary,
  },
  {
    title: "颅面部异常",
    items: "• 毛细血管瘤\n• 眼距增宽\n• 唇裂/腭裂\n• 中线面部畸形",
    color: C.accent,
  },
];

systems.forEach((sys, i) => {
  const col = i % 2;
  const row = Math.floor(i / 2);
  const x = 0.5 + col * 4.7;
  const y = 1.1 + row * 2.1;

  s6.addShape(pres.shapes.RECTANGLE, {
    x: x, y: y, w: 4.4, h: 1.9,
    fill: { color: C.white }, shadow: cardShadow(),
  });
  // Color top bar
  s6.addShape(pres.shapes.RECTANGLE, { x: x, y: y, w: 4.4, h: 0.06, fill: { color: sys.color } });

  s6.addText(sys.title, {
    x: x + 0.2, y: y + 0.15, w: 4.0, h: 0.35,
    fontSize: 16, fontFace: FONT_B, color: sys.color, bold: true, margin: 0,
  });
  s6.addText(sys.items, {
    x: x + 0.2, y: y + 0.55, w: 4.0, h: 1.2,
    fontSize: 12, fontFace: FONT_B, color: C.dark, margin: 0,
  });
});

// ================================================================
// SLIDE 7: 诊断方法
// ================================================================
let s7 = pres.addSlide();
s7.background = { color: C.bg };
s7.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: C.accent } });
s7.addText("诊断方法", {
  x: 0.5, y: 0.25, w: 9, h: 0.6,
  fontSize: 30, fontFace: FONT_H, color: C.primary, bold: true, margin: 0,
});

const diagMethods = [
  {
    title: "眼底镜检查",
    desc: "基础诊断方法，直接观察特征性视盘改变",
    details: "漏斗状凹陷 + 中央胶质 + 色素环 + 放射状血管",
  },
  {
    title: "OCT（光学相干断层扫描）",
    desc: "核心影像学工具",
    details: "视盘形态 | 视网膜前膜 | 视盘收缩 | 微小裂孔 | 浅层脱离",
  },
  {
    title: "荧光素血管造影（FFA）",
    desc: "评估视网膜血管状态",
    details: "周边无灌注区 | 灌注边界渗漏 | 纤维血管增生 | AV交通",
  },
  {
    title: "MRI / MRA",
    desc: "全身关联异常评估关键",
    details: "视盘漏斗形态 | 视神经异常 | 巩膜壁不连续 | 排查烟雾病/脑膨出",
  },
];

diagMethods.forEach((dm, i) => {
  const y = 1.1 + i * 1.1;
  // Card
  s7.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: y, w: 9, h: 0.9,
    fill: { color: C.white }, shadow: cardShadow(),
  });
  // Number
  s7.addShape(pres.shapes.OVAL, {
    x: 0.7, y: y + 0.2, w: 0.5, h: 0.5,
    fill: { color: C.secondary },
  });
  s7.addText(String(i + 1), {
    x: 0.7, y: y + 0.2, w: 0.5, h: 0.5,
    fontSize: 16, fontFace: FONT_B, color: C.white, bold: true, align: "center", valign: "middle",
  });

  s7.addText(dm.title, {
    x: 1.4, y: y + 0.08, w: 3.5, h: 0.35,
    fontSize: 15, fontFace: FONT_B, color: C.primary, bold: true, margin: 0,
  });
  s7.addText(dm.desc, {
    x: 1.4, y: y + 0.4, w: 3.5, h: 0.35,
    fontSize: 11, fontFace: FONT_B, color: C.gray, margin: 0,
  });
  s7.addText(dm.details, {
    x: 5.2, y: y + 0.1, w: 4.1, h: 0.7,
    fontSize: 11, fontFace: FONT_B, color: C.dark, margin: 0, valign: "middle",
  });
});

// ================================================================
// SLIDE 8: 鉴别诊断
// ================================================================
let s8 = pres.addSlide();
s8.background = { color: C.bg };
s8.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: C.accent } });
s8.addText("鉴别诊断", {
  x: 0.5, y: 0.25, w: 9, h: 0.6,
  fontSize: 30, fontFace: FONT_H, color: C.primary, bold: true, margin: 0,
});

const ddxData = [
  [
    { text: "疾病", options: { fill: { color: C.primary }, color: C.white, bold: true, fontSize: 12, fontFace: FONT_B } },
    { text: "鉴别要点", options: { fill: { color: C.primary }, color: C.white, bold: true, fontSize: 12, fontFace: FONT_B } },
    { text: "关联综合征", options: { fill: { color: C.primary }, color: C.white, bold: true, fontSize: 12, fontFace: FONT_B } },
  ],
  [
    { text: "视盘缺损", options: { bold: true, fontSize: 11, fontFace: FONT_B } },
    { text: "凹陷偏心于下方，上方缘正常\n缺乏中央胶质组织", options: { fontSize: 10, fontFace: FONT_B } },
    { text: "CHARGE、Walker-Warburg、Aicardi", options: { fontSize: 10, fontFace: FONT_B } },
  ],
  [
    { text: "视盘小凹", options: { bold: true, fontSize: 11, fontFace: FONT_B } },
    { text: "单个卵圆形灰白色凹陷\n颞下象限，1/8~1/4视盘大小", options: { fontSize: 10, fontFace: FONT_B } },
    { text: "通常无系统关联", options: { fontSize: 10, fontFace: FONT_B } },
  ],
  [
    { text: "视乳头周围葡萄肿", options: { bold: true, fontSize: 11, fontFace: FONT_B } },
    { text: "正常视盘位于深凹陷底部\n缺乏异常血管和胶质", options: { fontSize: 10, fontFace: FONT_B } },
    { text: "不伴先天性缺陷", options: { fontSize: 10, fontFace: FONT_B } },
  ],
  [
    { text: "晚期青光眼", options: { bold: true, fontSize: 11, fontFace: FONT_B } },
    { text: "杯盘比≥0.9，缘变薄\n血管鼻侧化，有眼压升高史", options: { fontSize: 10, fontFace: FONT_B } },
    { text: "—", options: { fontSize: 10, fontFace: FONT_B } },
  ],
  [
    { text: "外伤性视神经撕脱", options: { bold: true, fontSize: 11, fontFace: FONT_B } },
    { text: "明确外伤史\n凹陷内充满血液", options: { fontSize: 10, fontFace: FONT_B } },
    { text: "—", options: { fontSize: 10, fontFace: FONT_B } },
  ],
];

s8.addTable(ddxData, {
  x: 0.5, y: 1.0, w: 9,
  border: { pt: 0.5, color: C.lightGray },
  colW: [2.0, 4.0, 3.0],
  rowH: [0.4, 0.65, 0.65, 0.65, 0.65, 0.65],
  autoPage: false,
});

// ================================================================
// SLIDE 9: 并发症 — 视网膜脱离
// ================================================================
let s9 = pres.addSlide();
s9.background = { color: C.bg };
s9.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: C.accent } });
s9.addText("主要并发症 — 视网膜脱离", {
  x: 0.5, y: 0.25, w: 9, h: 0.6,
  fontSize: 30, fontFace: FONT_H, color: C.primary, bold: true, margin: 0,
});

// Big stat
s9.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.0, w: 2.5, h: 1.8,
  fill: { color: C.coral },
});
s9.addText("30-38%", {
  x: 0.5, y: 1.1, w: 2.5, h: 1.0,
  fontSize: 36, fontFace: FONT_H, color: C.white, bold: true, align: "center", valign: "middle",
});
s9.addText("患者发生\n视网膜脱离", {
  x: 0.5, y: 2.0, w: 2.5, h: 0.7,
  fontSize: 13, fontFace: FONT_B, color: C.white, align: "center",
});

// Mechanisms
s9.addText("发生机制", {
  x: 3.3, y: 1.0, w: 6.2, h: 0.35,
  fontSize: 16, fontFace: FONT_B, color: C.secondary, bold: true, margin: 0,
});

const mechanisms = [
  { name: "脑脊液渗漏", desc: "蛛网膜下腔与视网膜下腔异常通道，CSF渗入" },
  { name: "孔源性机制", desc: "视盘边缘裂隙样裂孔使玻璃体腔与视网膜下腔相通" },
  { name: "牵引性机制", desc: "胶质组织收缩牵拉/周边无灌注纤维血管增生" },
  { name: "渗出性机制", desc: "少见，新生血管形成与渗出相关" },
];

mechanisms.forEach((m, i) => {
  const y = 1.5 + i * 0.55;
  s9.addShape(pres.shapes.OVAL, {
    x: 3.3, y: y + 0.05, w: 0.3, h: 0.3,
    fill: { color: C.secondary },
  });
  s9.addText(String(i + 1), {
    x: 3.3, y: y + 0.05, w: 0.3, h: 0.3,
    fontSize: 11, fontFace: FONT_B, color: C.white, bold: true, align: "center", valign: "middle",
  });
  s9.addText([
    { text: m.name + "：", options: { bold: true } },
    { text: m.desc },
  ], {
    x: 3.8, y: y, w: 5.7, h: 0.4,
    fontSize: 12, fontFace: FONT_B, color: C.dark, margin: 0, valign: "middle",
  });
});

// Treatment box (moved down to avoid overlap with last mechanism item)
s9.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 3.65, w: 9, h: 1.7,
  fill: { color: C.white }, shadow: cardShadow(),
});
s9.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.65, w: 9, h: 0.06, fill: { color: C.primary } });
s9.addText("手术治疗方案（玻璃体切割术）", {
  x: 0.7, y: 3.78, w: 8.6, h: 0.35,
  fontSize: 15, fontFace: FONT_B, color: C.primary, bold: true, margin: 0,
});

const surgerySteps = [
  "经睫状体平坦部玻璃体切割（PPV）",
  "曲安奈德辅助后玻璃体脱离",
  "视网膜前膜/内界膜剥除",
  "液气交换 + 视网膜下液引流",
  "裂孔周围激光光凝",
  "硅油或长效气体填充",
];

s9.addText(surgerySteps.map((step, i) => ({
  text: `${i + 1}. ${step}`,
  options: { breakLine: i < surgerySteps.length - 1 },
})), {
  x: 0.7, y: 4.15, w: 8.6, h: 1.1,
  fontSize: 12, fontFace: FONT_B, color: C.dark, margin: 0, paraSpaceAfter: 3,
});

// ================================================================
// SLIDE 10: 治疗与多学科管理
// ================================================================
let s10 = pres.addSlide();
s10.background = { color: C.bg };
s10.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: C.accent } });
s10.addText("治疗与多学科管理", {
  x: 0.5, y: 0.25, w: 9, h: 0.6,
  fontSize: 30, fontFace: FONT_H, color: C.primary, bold: true, margin: 0,
});

// Treatment areas
const treatments = [
  {
    title: "屈光矫正与弱视治疗",
    items: "完整睫状肌麻痹验光 → 配镜\n遮盖健眼治疗弱视\n早期干预改善视力预后",
    color: C.secondary,
  },
  {
    title: "斜视矫正",
    items: "严重斜视手术矫正\n改善外观与双眼视功能\n术前充分评估眼位",
    color: C.accent,
  },
  {
    title: "视网膜脱离手术",
    items: "PPV为主要治疗方法\n硅油/气体填充\n术后密切随访",
    color: C.coral,
  },
];

treatments.forEach((t, i) => {
  const x = 0.5 + i * 3.15;
  s10.addShape(pres.shapes.RECTANGLE, {
    x: x, y: 1.0, w: 2.9, h: 2.0,
    fill: { color: C.white }, shadow: cardShadow(),
  });
  s10.addShape(pres.shapes.RECTANGLE, { x: x, y: 1.0, w: 2.9, h: 0.06, fill: { color: t.color } });
  s10.addText(t.title, {
    x: x + 0.15, y: 1.15, w: 2.6, h: 0.4,
    fontSize: 14, fontFace: FONT_B, color: t.color, bold: true, margin: 0,
  });
  s10.addText(t.items, {
    x: x + 0.15, y: 1.6, w: 2.6, h: 1.2,
    fontSize: 11, fontFace: FONT_B, color: C.dark, margin: 0,
  });
});

// Multidisciplinary management
s10.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 3.3, w: 9, h: 2.0,
  fill: { color: C.primary },
});
s10.addText("多学科协作管理", {
  x: 0.7, y: 3.45, w: 8.6, h: 0.4,
  fontSize: 18, fontFace: FONT_B, color: C.accent, bold: true, margin: 0,
});

const multiDisc = [
  { dept: "神经影像学", task: "脑MRI/MRA排除脑膨出和烟雾病" },
  { dept: "内分泌科", task: "垂体功能评估" },
  { dept: "肾脏科", task: "肾脏超声和肾功能检查" },
  { dept: "定期随访", task: "散瞳眼底检查 + 对侧眼监测 + 神经系统评估" },
];

multiDisc.forEach((md, i) => {
  const col = i % 2;
  const row = Math.floor(i / 2);
  const x = 0.7 + col * 4.3;
  const y = 3.95 + row * 0.6;

  s10.addText([
    { text: md.dept + "：", options: { bold: true, color: C.accent } },
    { text: md.task, options: { color: C.white } },
  ], {
    x: x, y: y, w: 4.1, h: 0.5,
    fontSize: 12, fontFace: FONT_B, margin: 0,
  });
});

// ================================================================
// SLIDE 11: 预后与预防策略
// ================================================================
let s11 = pres.addSlide();
s11.background = { color: C.bg };
s11.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: C.accent } });
s11.addText("预后与预防策略", {
  x: 0.5, y: 0.25, w: 9, h: 0.6,
  fontSize: 30, fontFace: FONT_H, color: C.primary, bold: true, margin: 0,
});

// Prognosis - left column
s11.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 1.0, w: 4.4, h: 4.2,
  fill: { color: C.white }, shadow: cardShadow(),
});
s11.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.0, w: 4.4, h: 0.06, fill: { color: C.coral } });
s11.addText("预后因素", {
  x: 0.7, y: 1.2, w: 4.0, h: 0.35,
  fontSize: 16, fontFace: FONT_B, color: C.coral, bold: true, margin: 0,
});
s11.addText([
  { text: "视力预后总体较差", options: { bold: true, breakLine: true, color: C.coral } },
  { text: "", options: { breakLine: true, fontSize: 4 } },
  { text: "• 视力通常 ≤ 20/200", options: { breakLine: true } },
  { text: "• 高度屈光不正+斜视致弱视常抵抗治疗", options: { breakLine: true } },
  { text: "• 30-38%视网膜脱离风险", options: { breakLine: true } },
  { text: "• 长期视网膜劈裂致萎缩性改变", options: { breakLine: true } },
  { text: "• 许多患儿发现时已有慢性视网膜脱离", options: { breakLine: true } },
  { text: "", options: { breakLine: true, fontSize: 6 } },
  { text: "积极管理可改善整体预后", options: { bold: true, color: C.secondary, breakLine: true } },
  { text: "• 屈光矫正最大化残余视功能", options: { breakLine: true } },
  { text: "• 定期监测早期发现视网膜脱离", options: { breakLine: true } },
  { text: "• 全身筛查管理系统异常", options: {} },
], {
  x: 0.7, y: 1.6, w: 4.0, h: 3.4,
  fontSize: 12, fontFace: FONT_B, color: C.dark, margin: 0, paraSpaceAfter: 3,
});

// Prevention - right column
s11.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 1.0, w: 4.4, h: 4.2,
  fill: { color: C.white }, shadow: cardShadow(),
});
s11.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 1.0, w: 4.4, h: 0.06, fill: { color: C.secondary } });
s11.addText("早期发现策略", {
  x: 5.4, y: 1.2, w: 4.0, h: 0.35,
  fontSize: 16, fontFace: FONT_B, color: C.secondary, bold: true, margin: 0,
});

const prevention = [
  { title: "新生儿筛查", desc: "红光反射检查，筛查异常" },
  { title: "高危监测", desc: "家族史者详细眼底检查" },
  { title: "儿童视力筛查", desc: "3-5岁常规视力检测" },
  { title: "早期干预", desc: "确诊即开始屈光矫正+弱视治疗" },
  { title: "影像排查", desc: "尽早脑MRI/MRA排除颅内异常" },
  { title: "遗传咨询", desc: "PAX2/PAX6基因检测评估风险" },
];

prevention.forEach((p, i) => {
  const y = 1.65 + i * 0.55;
  s11.addShape(pres.shapes.OVAL, {
    x: 5.4, y: y + 0.05, w: 0.3, h: 0.3,
    fill: { color: C.secondary },
  });
  s11.addText(String(i + 1), {
    x: 5.4, y: y + 0.05, w: 0.3, h: 0.3,
    fontSize: 11, fontFace: FONT_B, color: C.white, bold: true, align: "center", valign: "middle",
  });
  s11.addText([
    { text: p.title + "：", options: { bold: true } },
    { text: p.desc },
  ], {
    x: 5.85, y: y, w: 3.5, h: 0.4,
    fontSize: 12, fontFace: FONT_B, color: C.dark, margin: 0, valign: "middle",
  });
});

// ================================================================
// SLIDE 12: 典型病例分析
// ================================================================
let s12 = pres.addSlide();
s12.background = { color: C.bg };
s12.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: C.accent } });
s12.addText("典型病例分析", {
  x: 0.5, y: 0.25, w: 9, h: 0.6,
  fontSize: 30, fontFace: FONT_H, color: C.primary, bold: true, margin: 0,
});

const cases = [
  {
    title: "病例1：MGS合并视网膜脱离",
    patient: "女，5岁",
    chief: "右眼视力差1年",
    findings: "右眼视盘扩大漏斗状凹陷，中央白色胶质，视盘周围色素紊乱，放射状血管。OCT示后极部浅层视网膜脱离。",
    treatment: "玻璃体切割术 + 硅油填充",
    outcome: "视网膜复位，视力改善至0.1",
  },
  {
    title: "病例2：MGS合并烟雾病",
    patient: "男，8岁",
    chief: "左眼视力差伴反复头痛",
    findings: "左眼视力CF/50cm，典型MGS眼底。MRA示双侧颈内动脉远端进行性狭窄伴异常血管网。",
    treatment: "神经外科血管重建 + 屈光矫正 + 弱视治疗",
    outcome: "多学科协作管理",
  },
  {
    title: "病例3：MGS合并基底脑膨出",
    patient: "女，3岁",
    chief: "眼距增宽、鼻根扁平、右眼白瞳",
    findings: "右眼MGS改变。MRI示经蝶基底脑膨出（含视交叉、下丘脑），胼胝体发育不全。生长激素缺乏。",
    treatment: "多学科协作管理",
    outcome: "内分泌替代治疗 + 眼科随访",
  },
];

cases.forEach((c, i) => {
  const y = 0.95 + i * 1.55;
  s12.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: y, w: 9, h: 1.4,
    fill: { color: C.white }, shadow: cardShadow(),
  });
  // Color bar
  const colors = [C.secondary, C.coral, C.gold];
  s12.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.08, h: 1.4, fill: { color: colors[i] } });

  s12.addText(c.title, {
    x: 0.8, y: y + 0.05, w: 5, h: 0.3,
    fontSize: 14, fontFace: FONT_B, color: colors[i], bold: true, margin: 0,
  });
  s12.addText([
    { text: `患者：${c.patient}  |  主诉：${c.chief}`, options: { breakLine: true, color: C.gray } },
    { text: `检查：${c.findings}`, options: { breakLine: true } },
    { text: `治疗：${c.treatment}  →  ${c.outcome}`, options: { bold: true, color: C.primary } },
  ], {
    x: 0.8, y: y + 0.35, w: 8.5, h: 1.0,
    fontSize: 11, fontFace: FONT_B, color: C.dark, margin: 0, paraSpaceAfter: 2,
  });
});

// ================================================================
// SLIDE 13: 总结与展望
// ================================================================
let s13 = pres.addSlide();
s13.background = { color: C.primary };
s13.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: C.accent } });
s13.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.545, w: 10, h: 0.08, fill: { color: C.accent } });

s13.addText("总结与展望", {
  x: 0.8, y: 0.4, w: 8.4, h: 0.7,
  fontSize: 34, fontFace: FONT_H, color: C.white, bold: true, margin: 0,
});

// Key takeaways
const takeaways = [
  "MGS是罕见先天性视盘异常，特征性眼底表现为漏斗状凹陷+中央胶质+色素环+放射状血管",
  "不仅影响视功能，还常合并CNS、内分泌、肾脏等多系统异常",
  "视网膜脱离是最重要并发症（30-38%），需定期监测",
  "多学科团队协作是优化管理的关键",
  "早期诊断和积极干预可显著改善整体预后",
];

takeaways.forEach((t, i) => {
  const baseY = 1.3 + i * 0.55;
  s13.addShape(pres.shapes.OVAL, {
    x: 0.8, y: baseY + 0.05, w: 0.3, h: 0.3,
    fill: { color: C.accent },
  });
  s13.addText(String(i + 1), {
    x: 0.8, y: baseY + 0.05, w: 0.3, h: 0.3,
    fontSize: 12, fontFace: FONT_B, color: C.white, bold: true, align: "center", valign: "middle",
  });
  s13.addText(t, {
    x: 1.3, y: baseY, w: 8.2, h: 0.4,
    fontSize: 13, fontFace: FONT_B, color: C.light, margin: 0, valign: "middle",
  });
});

// Future directions (with 0.15" gap after last takeaway)
s13.addShape(pres.shapes.RECTANGLE, {
  x: 0.8, y: 4.2, w: 8.4, h: 1.1,
  fill: { color: "094136" },
});
s13.addText("未来研究方向", {
  x: 1.0, y: 4.3, w: 8.0, h: 0.3,
  fontSize: 14, fontFace: FONT_B, color: C.accent, bold: true, margin: 0,
});
s13.addText("深入探索遗传学基础  |  开发更有效的视网膜脱离防治策略  |  建立多中心注册研究", {
  x: 1.0, y: 4.65, w: 8.0, h: 0.5,
  fontSize: 12, fontFace: FONT_B, color: C.light, margin: 0,
});

// ================================================================
// SLIDE 14: 参考文献
// ================================================================
let s14 = pres.addSlide();
s14.background = { color: C.bg };
s14.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: C.accent } });
s14.addText("参考文献", {
  x: 0.5, y: 0.25, w: 9, h: 0.6,
  fontSize: 30, fontFace: FONT_H, color: C.primary, bold: true, margin: 0,
});

const refs = [
  "[1] Kindler P. Am J Ophthalmol. 1970;69(3):376-384.",
  "[2] Ceynowa DJ, et al. Acta Ophthalmol. 2015;93(2):154-158.",
  "[3] Pollock S. Doc Ophthalmol. 1987;65(4):439-460.",
  "[4] Ellika S, et al. AJNR Am J Neuroradiol. 2013;34(10):2010-2014.",
  "[5] Traboulsi EI, et al. J Pediatr Ophthalmol Strabismus. 1988;25(2):93-98.",
  "[6] Hazlewood RJ, et al. Ophthalmology. 2021;128(11):1630-1638.",
  "[7] Haik BG, et al. Ophthalmology. 1984;91(12):1638-1647.",
  "[8] Chang S, et al. Eye (Lond). 2012;26(4):494-500.",
  "[9] Brodsky MC. Surv Ophthalmol. 1994;39(2):89-112.",
  "[10] Lenhart PD, et al. Am J Ophthalmol. 2006;142(4):644-650.",
  "[11] Parsa CF, et al. J Neuroophthalmol. 2013;33(2):170-173.",
  "[12] Lee BJ, et al. Ophthalmic Genet. 2008;29(2):47-52.",
  "[13] Cennamo G, et al. Ophthalmology. 2010;117(6):1269-1273.",
  "[14] Ho CL, et al. Int Ophthalmol. 2002;24(1):21-24.",
];

s14.addText(refs.map((r, i) => ({
  text: r,
  options: { breakLine: i < refs.length - 1, fontSize: 10.5 },
})), {
  x: 0.5, y: 1.0, w: 9, h: 4.2,
  fontFace: FONT_B, color: C.dark, margin: 0, paraSpaceAfter: 5,
});

// ================================================================
// SLIDE 15: Thank You
// ================================================================
let s15 = pres.addSlide();
s15.background = { color: C.primary };
s15.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: C.accent } });
s15.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.545, w: 10, h: 0.08, fill: { color: C.accent } });

s15.addShape(pres.shapes.RECTANGLE, { x: 3.5, y: 1.5, w: 3, h: 0.06, fill: { color: C.accent } });
s15.addText("感谢聆听", {
  x: 1, y: 1.8, w: 8, h: 1.2,
  fontSize: 48, fontFace: FONT_H, color: C.white, bold: true, align: "center",
});
s15.addText("Thank You", {
  x: 1, y: 2.9, w: 8, h: 0.8,
  fontSize: 28, fontFace: FONT_H, color: C.accent, italic: true, align: "center",
});
s15.addShape(pres.shapes.RECTANGLE, { x: 3.5, y: 3.8, w: 3, h: 0.06, fill: { color: C.accent } });

s15.addText("欢迎提问与讨论", {
  x: 1, y: 4.2, w: 8, h: 0.6,
  fontSize: 16, fontFace: FONT_B, color: C.light, align: "center",
});

// ================================================================
// Generate file
// ================================================================
pres.writeFile({ fileName: "/Users/raymond/Documents/牵牛花综合征/牵牛花综合征临床综述.pptx" })
  .then(() => console.log("PPT created successfully!"))
  .catch(err => console.error("Error:", err));
