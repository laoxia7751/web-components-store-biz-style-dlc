<style lang="scss">
.biz-box{
   height: 50px;
   padding: 0 20px;
   line-height: 50px;
   display: inline-block;
   background-color: rgb(var(--color));
   border-radius: 10px;
   &+.biz-box{
    margin-left: 10px;
   }
}
label{
    display:block;
    margin: 6px 0;
    font-size: 14px;
}
</style>

# 政务蓝风格css配置

<details open>
<summary>展开查看</summary>

```css
:root {
    /* 全局配置 */
    /* 主题色rgb值rgb(0,156,255) */
    --color: 0, 156, 255;
    /* 辅色rgb(0,255,254) */
    --lightColor: 0, 255, 234;
    /* 主题色rgba(0,156,255,1) */
    --primaryColor: rgba(var(--color), 1);
    /* 透明色色rgba(0,156,255,0) */
    --opacityColor: rgba(var(--color), 0);
    /* 辅助色/纯色/1 色rgba(0,156,255,0.5) */
    --primaryColor-1: rgba(var(--color), 0.5);
    /* 辅助色/纯色/2 色rgba(0,156,255,0.3)*/
    --primaryColor-2: rgba(var(--color), 0.3);
    /* 辅助色/纯色/3 色rgba(0,156,255,0.2) */
    --primaryColor-3: rgba(var(--color), 0.2);
    /* 辅助色/纯色/4 色rgba(0,156,255,0.1) */
    --primaryColor-4: rgba(var(--color), 0.1);
    /* 文本色/0 */
    --textColor: #ffffff;
    /* 文本色/主要 */
    --textColor-1: #ebf3ff;
    /* 文本色/次要 */
    --textColor-2: #a3b5cc;
    /* 文本色/正文 */
    --textColor-3: #b2cbeb;
    /* 背景色 #002850 */
    --bgColor: rgb(0, 40, 80);
    /* 前景色 色rgba(0,84,141,1) */
    --fgColor: 0, 81, 141;
    
    /* 背景色-点位弹窗 */
    --dialogBgColor: rgba(0, 12, 26, 0.8);
    /* 阴影-1 */
    --shadow-1: 0px 0px 20px var(--primaryColor);
    /* 内阴影-1 */
    --insetShadow-1: inset 0px 0px 20px var(--primaryColor);
    /* 阴影-2 */
    --shadow-2: 0px 0px 50px var(--bgColor);
    /* 内阴影-2 */
    --insetShadow-2: inset 0px 8px 24px var(--primaryColor-1);
    /* h1 仅用于顶部大标题中的特殊文字 */
    --h1: calc(52 * 1rem / 16);
    /* h2 标题 - 大 */
    --h2: calc(20 * 1rem / 16);
    /* h3 标题 - 中 */
    --h3: calc(18 * 1rem / 16);
    /* h4 标题 - 小 */
    --h4: calc(16 * 1rem / 16);
    /* h5 正文 */
    --h5: calc(14 * 1rem / 16);
    /* h6 (前端预留) */
    --h6: calc(12 * 1rem / 16);
    /* n1 数字 - 大 */
    --n1: calc(36 * 1rem / 16);
    /* n2 数字 - 中 */
    --n2: calc(24 * 1rem / 16);
    /* n3 数字 - 小 */
    --n3: calc(16 * 1rem / 16);
    /* 辅助色/渐变/1 */
    --linearBg1: linear-gradient(180deg, var(--primaryColor) 0%, var(--primaryColor-2) 100%);
    /* 辅助色/渐变/2 */
    --linearBg2: linear-gradient(180deg, var(--primaryColor-1) 0%, var(--primaryColor-4) 100%);
    /* 辅助色/渐变/3 */
    --linearBg3: linear-gradient(180deg, var(--primaryColor-1) 0%, var(--opacityColor) 100%);
    /* 辅助色/渐变/4 */
    --linearBg4: linear-gradient(180deg, var(--primaryColor-2) 0%, var(--primaryColor-4) 100%);
    /* 小间距,用于同组内容的间距 */
    --gap-xs: calc(4 * 1rem / 16);
    --gap-sm: calc(8 * 1rem / 16);
    --gap-md: calc(12 * 1rem / 16);
    --gap-lg: calc(16 * 1rem / 16);
    --gap-xl: calc(20 * 1rem / 16);
    /* 大间距,用于不同组内容的间距 */
    --group-gap-sm: calc(24 * 1rem / 16);
    --group-gap-md: calc(32 * 1rem / 16);
    --group-gap-lg: calc(40 * 1rem / 16);
    /*小圆角,用于数据展示和数据输入等常规组件的圆角*/
    --radius-sm: calc(4 * 1rem / 16);
    /*中圆角,用于图例、弹窗、卡片列表等定制化内容的圆角*/
    --radius-md: calc(10 * 1rem / 16);
    /*大圆角,用于业务组件板的圆角*/
    --radius-lg: calc(20 * 1rem / 16);
    /*全圆角,用于专题导航、弹窗操作按钮和时间切换等组件中，保证的边角始终为圆角*/
    --radius-xl: 50%;

    /* 布局配置 */
    /* 大屏宽度（用于固定宽度的布局） */
    --main-width: 100%;
    /* 头部组件高度 */
    --header-height: calc(80 * 1rem / 16);
    /* 主体内容区域与头部的边距 */
    --main-margin-top: calc(8 * 1rem / 16);
   /* 主体内容区域的底部内边距 */
    --main-padding-bottom: calc(24 * 1rem / 16);
    /* 主体内容区域高度 */
    --main-height: calc(100vh - var(--header-height) - var(--main-margin-top));
    /* 地图左右侧组件与两侧组件之间的间距*/
    --map-components-padding: 0;

    /* 业务组件配置 */
    /* 两侧业务组件之间的行间距 */
    --biz-component-row-gap: calc(20 * 1rem / 16);
    /* 两侧业务组件列之间的间距 */
    --biz-component-column-gap: calc(40 * 1rem / 16);
    /* 两侧业务组件列的内部边距 */
    --biz-component-padding: calc(20 * 1rem / 16);
    /* 两侧业务组件标题高度 */
    --biz-title-height: calc(32 * 1rem / 16);
    /* 两侧业务组件标题颜色 */
    --biz-title-color: var(--textColor-1);
    /* 两侧业务组件标题字体尺寸 */
    --biz-title-font-size: var(--h3);
    /* 两侧业务组件筛选项表单组件高度 */
    --biz-filter-height: calc(28 * 1rem / 16);
    /* 两侧业务组件筛选项文字默认颜色 */
    --biz-filter-color: var(--textColor-2);
    /* 两侧业务组件筛选项文字高亮颜色 */
    --biz-filter-color-active: var(--textColor-1);
    /* 两侧业务组件筛选项文字尺寸 */
    --biz-filter-font-size: var(--h6);
    /* 两侧业务组件内容区和标题之间的上下间隔*/
    --biz-content-padding: calc(16 * 1rem / 16);
    /* 页面列宽 */
    --view-column-width: calc(470 * 1rem / 16);

    /* 两侧业务组件背景色-渐变模式  moduleType='2'*/
    --moduleBgColor: 0, 12, 26;
    /* 两侧业务组件渐变模式的左侧宽度  moduleType='2'*/
    --biz-module-left-width: calc(var(--view-column-width) + var(--biz-component-column-gap) * 2 + 140 * 1rem / 16);
    /* 两侧业务组件渐变模式的右侧宽度  moduleType='2'*/
    --biz-module-right-width: calc(var(--view-column-width) + var(--biz-component-column-gap) * 2 + 140 * 1rem / 16);
    /* 两侧业务组件渐变模式的高度  moduleType='2'*/
    --biz-module-height: calc(100vh + var(--header-height) + var(--main-margin-top));

    /** PC端配置移动端组件可视化 */
    /* 移动端背景色 #06101B */
    --mobileColor: rgb(6, 16, 27);
    /** 头部插槽高度 */
    --mobile-header-height: calc(120 * 1rem / 16);
    /** 底部插槽高度 */
    --mobile-footer-height: calc(88 * 1rem / 16);
    /** 移动端适配最大宽度 */
    /* prettier-ignore */
    --screenMaxWidth: 1366PX;
}

.mobileScreen {
    /** 字号/h1 */
    --h1: calc(40 * 1rem / 28.125);
    /** 字号/h2 */
    --h2: calc(32 * 1rem / 28.125);
    /** 字号/h3 */
    --h3: calc(28 * 1rem / 28.125);
    /** 字号/h4 */
    --h4: calc(24 * 1rem / 28.125);
    /** 字号/h5 */
    --h5: calc(24 * 1rem / 28.125);
    /** 字号/h6 */
    --h6: calc(24 * 1rem / 28.125);
    /* 小间距,用于同组内容的间距 */
    --gap-xs: calc(4 * 1rem / 28.125);
    --gap-sm: calc(8 * 1rem / 28.125);
    --gap-md: calc(12 * 1rem / 28.125);
    --gap-lg: calc(16 * 1rem / 28.125);
    --gap-xl: calc(20 * 1rem / 28.125);
    /* 大间距,用于不同组内容的间距 */
    --group-gap-sm: calc(24 * 1rem / 28.125);
    --group-gap-md: calc(32 * 1rem / 28.125);
    --group-gap-lg: calc(40 * 1rem / 28.125);
    /*小圆角,用于数据展示和数据输入等常规组件的圆角*/
    --radius-sm: calc(4 * 1rem / 28.125);
    /*中圆角,用于图例、弹窗、卡片列表等定制化内容的圆角*/
    --radius-md: calc(8 * 1rem / 28.125);
    /*大圆角,用于业务组件板的圆角*/
    --radius-lg: calc(16 * 1rem / 28.125);
    /* 移动端背景色 #06101B */
    --mobileColor: rgb(6, 16, 27);
    
    /** 移动端业务样式配置 */
    /** 头部插槽高度 */
    --mobile-header-height: calc(120 * 1rem / 28.125);
    /** 底部插槽高度 */
    --mobile-footer-height: calc(88 * 1rem / 28.125);
    /** 移动端适配最大宽度 */
    /* prettier-ignore */
    --screenMaxWidth: 1366PX;
    /** 业务组件标题字体 */
    --biz-title-font-size: var(--h2);
    /** 业务组件之间的行间距 */
    --biz-component-row-gap: calc(32 * 1rem / 28.125);
    /* 业务组件列的内部边距 */
    --biz-component-padding: calc(32 * 1rem / 28.125);
}
```

</details>