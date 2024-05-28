import{_ as a,o as s,c as t,Q as l}from"./chunks/framework.54685c66.js";const i=JSON.parse('{"title":"PointButton 图层点位按钮","description":"","frontmatter":{},"headers":[],"relativePath":"tebian/biz/pointButton.md"}'),d={name:"tebian/biz/pointButton.md"},n=l(`<h1 id="pointbutton-图层点位按钮" tabindex="-1" data-v-a62ed567>PointButton 图层点位按钮 <a class="header-anchor" href="#pointbutton-图层点位按钮" aria-label="Permalink to &quot;PointButton 图层点位按钮&quot;" data-v-a62ed567>​</a></h1><blockquote data-v-a62ed567><p data-v-a62ed567>此样式用于地图图层下方点位按钮</p></blockquote><h2 id="默认样式" tabindex="-1" data-v-a62ed567>默认样式 <a class="header-anchor" href="#默认样式" aria-label="Permalink to &quot;默认样式&quot;" data-v-a62ed567>​</a></h2><div class="example" data-v-a62ed567><div class="biz-point-button" data-v-a62ed567><div class="icon-box" data-v-a62ed567><i class="iconfont icon-close" data-v-a62ed567></i></div><div class="label" data-v-a62ed567>告警</div><div class="value" data-v-a62ed567>6</div></div></div><details open data-v-a62ed567><summary data-v-a62ed567>展开查看</summary><div class="language-vue" data-v-a62ed567><button title="Copy Code" class="copy" data-v-a62ed567></button><span class="lang" data-v-a62ed567>vue</span><pre class="shiki material-theme-palenight" data-v-a62ed567><code data-v-a62ed567><span class="line" data-v-a62ed567><span style="color:#89DDFF;" data-v-a62ed567>&lt;</span><span style="color:#F07178;" data-v-a62ed567>template</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>    </span><span style="color:#89DDFF;" data-v-a62ed567>&lt;</span><span style="color:#F07178;" data-v-a62ed567>div</span><span style="color:#89DDFF;" data-v-a62ed567> </span><span style="color:#C792EA;" data-v-a62ed567>class</span><span style="color:#89DDFF;" data-v-a62ed567>=</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#C3E88D;" data-v-a62ed567>biz-point-button</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>        </span><span style="color:#89DDFF;" data-v-a62ed567>&lt;</span><span style="color:#F07178;" data-v-a62ed567>div</span><span style="color:#89DDFF;" data-v-a62ed567> </span><span style="color:#C792EA;" data-v-a62ed567>class</span><span style="color:#89DDFF;" data-v-a62ed567>=</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#C3E88D;" data-v-a62ed567>icon-box</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>            // 这里icon可以用iconfont、img、svg</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>            </span><span style="color:#89DDFF;" data-v-a62ed567>&lt;</span><span style="color:#F07178;" data-v-a62ed567>i</span><span style="color:#89DDFF;" data-v-a62ed567> </span><span style="color:#C792EA;" data-v-a62ed567>class</span><span style="color:#89DDFF;" data-v-a62ed567>=</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#C3E88D;" data-v-a62ed567>iconfont icon-close</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;&lt;/</span><span style="color:#F07178;" data-v-a62ed567>i</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>        </span><span style="color:#89DDFF;" data-v-a62ed567>&lt;/</span><span style="color:#F07178;" data-v-a62ed567>div</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>        </span><span style="color:#89DDFF;" data-v-a62ed567>&lt;</span><span style="color:#F07178;" data-v-a62ed567>div</span><span style="color:#89DDFF;" data-v-a62ed567> </span><span style="color:#C792EA;" data-v-a62ed567>class</span><span style="color:#89DDFF;" data-v-a62ed567>=</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#C3E88D;" data-v-a62ed567>label</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span><span style="color:#BABED8;" data-v-a62ed567>告警</span><span style="color:#89DDFF;" data-v-a62ed567>&lt;/</span><span style="color:#F07178;" data-v-a62ed567>div</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>        </span><span style="color:#89DDFF;" data-v-a62ed567>&lt;</span><span style="color:#F07178;" data-v-a62ed567>div</span><span style="color:#89DDFF;" data-v-a62ed567> </span><span style="color:#C792EA;" data-v-a62ed567>class</span><span style="color:#89DDFF;" data-v-a62ed567>=</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#C3E88D;" data-v-a62ed567>value</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span><span style="color:#BABED8;" data-v-a62ed567>6</span><span style="color:#89DDFF;" data-v-a62ed567>&lt;/</span><span style="color:#F07178;" data-v-a62ed567>div</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>    </span><span style="color:#89DDFF;" data-v-a62ed567>&lt;/</span><span style="color:#F07178;" data-v-a62ed567>div</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#89DDFF;" data-v-a62ed567>&lt;/</span><span style="color:#F07178;" data-v-a62ed567>template</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567></span></code></pre></div></details><h2 id="按钮样式" tabindex="-1" data-v-a62ed567>按钮样式 <a class="header-anchor" href="#按钮样式" aria-label="Permalink to &quot;按钮样式&quot;" data-v-a62ed567>​</a></h2><div class="example" data-v-a62ed567><label data-v-a62ed567>基础按钮</label><div class="biz-point-button" data-v-a62ed567><div class="icon-box" data-v-a62ed567><i class="iconfont icon-close" data-v-a62ed567></i></div><div class="label" data-v-a62ed567>告警</div><div class="value" data-v-a62ed567>6</div></div><label data-v-a62ed567>按钮激活</label><div class="biz-point-button active" data-v-a62ed567><div class="icon-box" data-v-a62ed567><i class="iconfont icon-close" data-v-a62ed567></i></div><div class="label" data-v-a62ed567>告警</div><div class="value" data-v-a62ed567>6</div></div><label data-v-a62ed567>无数字按钮</label><div class="biz-point-button" data-v-a62ed567><div class="icon-box" data-v-a62ed567><i class="iconfont icon-close" data-v-a62ed567></i></div><div class="label" data-v-a62ed567>告警</div></div><label data-v-a62ed567>无数字按钮激活</label><div class="biz-point-button active" data-v-a62ed567><div class="icon-box" data-v-a62ed567><i class="iconfont icon-close" data-v-a62ed567></i></div><div class="label" data-v-a62ed567>告警</div></div></div><details open data-v-a62ed567><summary data-v-a62ed567>展开查看</summary><div class="language-vue" data-v-a62ed567><button title="Copy Code" class="copy" data-v-a62ed567></button><span class="lang" data-v-a62ed567>vue</span><pre class="shiki material-theme-palenight" data-v-a62ed567><code data-v-a62ed567><span class="line" data-v-a62ed567><span style="color:#89DDFF;" data-v-a62ed567>&lt;</span><span style="color:#F07178;" data-v-a62ed567>template</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>    </span><span style="color:#89DDFF;" data-v-a62ed567>&lt;</span><span style="color:#F07178;" data-v-a62ed567>label</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span><span style="color:#BABED8;" data-v-a62ed567>基础按钮</span><span style="color:#89DDFF;" data-v-a62ed567>&lt;/</span><span style="color:#F07178;" data-v-a62ed567>label</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>    </span><span style="color:#89DDFF;" data-v-a62ed567>&lt;</span><span style="color:#F07178;" data-v-a62ed567>div</span><span style="color:#89DDFF;" data-v-a62ed567> </span><span style="color:#C792EA;" data-v-a62ed567>class</span><span style="color:#89DDFF;" data-v-a62ed567>=</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#C3E88D;" data-v-a62ed567>biz-point-button</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>        </span><span style="color:#89DDFF;" data-v-a62ed567>&lt;</span><span style="color:#F07178;" data-v-a62ed567>div</span><span style="color:#89DDFF;" data-v-a62ed567> </span><span style="color:#C792EA;" data-v-a62ed567>class</span><span style="color:#89DDFF;" data-v-a62ed567>=</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#C3E88D;" data-v-a62ed567>icon-box</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>            </span><span style="color:#89DDFF;" data-v-a62ed567>&lt;</span><span style="color:#F07178;" data-v-a62ed567>i</span><span style="color:#89DDFF;" data-v-a62ed567> </span><span style="color:#C792EA;" data-v-a62ed567>class</span><span style="color:#89DDFF;" data-v-a62ed567>=</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#C3E88D;" data-v-a62ed567>iconfont icon-close</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;&lt;/</span><span style="color:#F07178;" data-v-a62ed567>i</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>        </span><span style="color:#89DDFF;" data-v-a62ed567>&lt;/</span><span style="color:#F07178;" data-v-a62ed567>div</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>        </span><span style="color:#89DDFF;" data-v-a62ed567>&lt;</span><span style="color:#F07178;" data-v-a62ed567>div</span><span style="color:#89DDFF;" data-v-a62ed567> </span><span style="color:#C792EA;" data-v-a62ed567>class</span><span style="color:#89DDFF;" data-v-a62ed567>=</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#C3E88D;" data-v-a62ed567>label</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span><span style="color:#BABED8;" data-v-a62ed567>告警</span><span style="color:#89DDFF;" data-v-a62ed567>&lt;/</span><span style="color:#F07178;" data-v-a62ed567>div</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>        </span><span style="color:#89DDFF;" data-v-a62ed567>&lt;</span><span style="color:#F07178;" data-v-a62ed567>div</span><span style="color:#89DDFF;" data-v-a62ed567> </span><span style="color:#C792EA;" data-v-a62ed567>class</span><span style="color:#89DDFF;" data-v-a62ed567>=</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#C3E88D;" data-v-a62ed567>value</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span><span style="color:#BABED8;" data-v-a62ed567>6</span><span style="color:#89DDFF;" data-v-a62ed567>&lt;/</span><span style="color:#F07178;" data-v-a62ed567>div</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>    </span><span style="color:#89DDFF;" data-v-a62ed567>&lt;/</span><span style="color:#F07178;" data-v-a62ed567>div</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>    </span><span style="color:#89DDFF;" data-v-a62ed567>&lt;</span><span style="color:#F07178;" data-v-a62ed567>label</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span><span style="color:#BABED8;" data-v-a62ed567>按钮激活</span><span style="color:#89DDFF;" data-v-a62ed567>&lt;/</span><span style="color:#F07178;" data-v-a62ed567>label</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>    </span><span style="color:#89DDFF;" data-v-a62ed567>&lt;</span><span style="color:#F07178;" data-v-a62ed567>div</span><span style="color:#89DDFF;" data-v-a62ed567> </span><span style="color:#C792EA;" data-v-a62ed567>class</span><span style="color:#89DDFF;" data-v-a62ed567>=</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#C3E88D;" data-v-a62ed567>biz-point-button active</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>        </span><span style="color:#89DDFF;" data-v-a62ed567>&lt;</span><span style="color:#F07178;" data-v-a62ed567>div</span><span style="color:#89DDFF;" data-v-a62ed567> </span><span style="color:#C792EA;" data-v-a62ed567>class</span><span style="color:#89DDFF;" data-v-a62ed567>=</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#C3E88D;" data-v-a62ed567>icon-box</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>            </span><span style="color:#89DDFF;" data-v-a62ed567>&lt;</span><span style="color:#F07178;" data-v-a62ed567>i</span><span style="color:#89DDFF;" data-v-a62ed567> </span><span style="color:#C792EA;" data-v-a62ed567>class</span><span style="color:#89DDFF;" data-v-a62ed567>=</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#C3E88D;" data-v-a62ed567>iconfont icon-close</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;&lt;/</span><span style="color:#F07178;" data-v-a62ed567>i</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>        </span><span style="color:#89DDFF;" data-v-a62ed567>&lt;/</span><span style="color:#F07178;" data-v-a62ed567>div</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>        </span><span style="color:#89DDFF;" data-v-a62ed567>&lt;</span><span style="color:#F07178;" data-v-a62ed567>div</span><span style="color:#89DDFF;" data-v-a62ed567> </span><span style="color:#C792EA;" data-v-a62ed567>class</span><span style="color:#89DDFF;" data-v-a62ed567>=</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#C3E88D;" data-v-a62ed567>label</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span><span style="color:#BABED8;" data-v-a62ed567>告警</span><span style="color:#89DDFF;" data-v-a62ed567>&lt;/</span><span style="color:#F07178;" data-v-a62ed567>div</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>        </span><span style="color:#89DDFF;" data-v-a62ed567>&lt;</span><span style="color:#F07178;" data-v-a62ed567>div</span><span style="color:#89DDFF;" data-v-a62ed567> </span><span style="color:#C792EA;" data-v-a62ed567>class</span><span style="color:#89DDFF;" data-v-a62ed567>=</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#C3E88D;" data-v-a62ed567>value</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span><span style="color:#BABED8;" data-v-a62ed567>6</span><span style="color:#89DDFF;" data-v-a62ed567>&lt;/</span><span style="color:#F07178;" data-v-a62ed567>div</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>    </span><span style="color:#89DDFF;" data-v-a62ed567>&lt;/</span><span style="color:#F07178;" data-v-a62ed567>div</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>    </span><span style="color:#89DDFF;" data-v-a62ed567>&lt;</span><span style="color:#F07178;" data-v-a62ed567>label</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span><span style="color:#BABED8;" data-v-a62ed567>无数字按钮</span><span style="color:#89DDFF;" data-v-a62ed567>&lt;/</span><span style="color:#F07178;" data-v-a62ed567>label</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>    </span><span style="color:#89DDFF;" data-v-a62ed567>&lt;</span><span style="color:#F07178;" data-v-a62ed567>div</span><span style="color:#89DDFF;" data-v-a62ed567> </span><span style="color:#C792EA;" data-v-a62ed567>class</span><span style="color:#89DDFF;" data-v-a62ed567>=</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#C3E88D;" data-v-a62ed567>biz-point-button</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>        </span><span style="color:#89DDFF;" data-v-a62ed567>&lt;</span><span style="color:#F07178;" data-v-a62ed567>div</span><span style="color:#89DDFF;" data-v-a62ed567> </span><span style="color:#C792EA;" data-v-a62ed567>class</span><span style="color:#89DDFF;" data-v-a62ed567>=</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#C3E88D;" data-v-a62ed567>icon-box</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>            </span><span style="color:#89DDFF;" data-v-a62ed567>&lt;</span><span style="color:#F07178;" data-v-a62ed567>i</span><span style="color:#89DDFF;" data-v-a62ed567> </span><span style="color:#C792EA;" data-v-a62ed567>class</span><span style="color:#89DDFF;" data-v-a62ed567>=</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#C3E88D;" data-v-a62ed567>iconfont icon-close</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;&lt;/</span><span style="color:#F07178;" data-v-a62ed567>i</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>        </span><span style="color:#89DDFF;" data-v-a62ed567>&lt;/</span><span style="color:#F07178;" data-v-a62ed567>div</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>        </span><span style="color:#89DDFF;" data-v-a62ed567>&lt;</span><span style="color:#F07178;" data-v-a62ed567>div</span><span style="color:#89DDFF;" data-v-a62ed567> </span><span style="color:#C792EA;" data-v-a62ed567>class</span><span style="color:#89DDFF;" data-v-a62ed567>=</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#C3E88D;" data-v-a62ed567>label</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span><span style="color:#BABED8;" data-v-a62ed567>告警</span><span style="color:#89DDFF;" data-v-a62ed567>&lt;/</span><span style="color:#F07178;" data-v-a62ed567>div</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>    </span><span style="color:#89DDFF;" data-v-a62ed567>&lt;/</span><span style="color:#F07178;" data-v-a62ed567>div</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>    </span><span style="color:#89DDFF;" data-v-a62ed567>&lt;</span><span style="color:#F07178;" data-v-a62ed567>label</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span><span style="color:#BABED8;" data-v-a62ed567>无数字按钮激活</span><span style="color:#89DDFF;" data-v-a62ed567>&lt;/</span><span style="color:#F07178;" data-v-a62ed567>label</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>    </span><span style="color:#89DDFF;" data-v-a62ed567>&lt;</span><span style="color:#F07178;" data-v-a62ed567>div</span><span style="color:#89DDFF;" data-v-a62ed567> </span><span style="color:#C792EA;" data-v-a62ed567>class</span><span style="color:#89DDFF;" data-v-a62ed567>=</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#C3E88D;" data-v-a62ed567>biz-point-button active</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>        </span><span style="color:#89DDFF;" data-v-a62ed567>&lt;</span><span style="color:#F07178;" data-v-a62ed567>div</span><span style="color:#89DDFF;" data-v-a62ed567> </span><span style="color:#C792EA;" data-v-a62ed567>class</span><span style="color:#89DDFF;" data-v-a62ed567>=</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#C3E88D;" data-v-a62ed567>icon-box</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>            </span><span style="color:#89DDFF;" data-v-a62ed567>&lt;</span><span style="color:#F07178;" data-v-a62ed567>i</span><span style="color:#89DDFF;" data-v-a62ed567> </span><span style="color:#C792EA;" data-v-a62ed567>class</span><span style="color:#89DDFF;" data-v-a62ed567>=</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#C3E88D;" data-v-a62ed567>iconfont icon-close</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;&lt;/</span><span style="color:#F07178;" data-v-a62ed567>i</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>        </span><span style="color:#89DDFF;" data-v-a62ed567>&lt;/</span><span style="color:#F07178;" data-v-a62ed567>div</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>        </span><span style="color:#89DDFF;" data-v-a62ed567>&lt;</span><span style="color:#F07178;" data-v-a62ed567>div</span><span style="color:#89DDFF;" data-v-a62ed567> </span><span style="color:#C792EA;" data-v-a62ed567>class</span><span style="color:#89DDFF;" data-v-a62ed567>=</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#C3E88D;" data-v-a62ed567>label</span><span style="color:#89DDFF;" data-v-a62ed567>&quot;</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span><span style="color:#BABED8;" data-v-a62ed567>告警</span><span style="color:#89DDFF;" data-v-a62ed567>&lt;/</span><span style="color:#F07178;" data-v-a62ed567>div</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#BABED8;" data-v-a62ed567>    </span><span style="color:#89DDFF;" data-v-a62ed567>&lt;/</span><span style="color:#F07178;" data-v-a62ed567>div</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567><span style="color:#89DDFF;" data-v-a62ed567>&lt;/</span><span style="color:#F07178;" data-v-a62ed567>template</span><span style="color:#89DDFF;" data-v-a62ed567>&gt;</span></span>
<span class="line" data-v-a62ed567></span></code></pre></div></details>`,8),e=[n];function o(p,v,c,D,F,r){return s(),t("div",null,e)}const B=a(d,[["render",o],["__scopeId","data-v-a62ed567"]]);export{i as __pageData,B as default};
