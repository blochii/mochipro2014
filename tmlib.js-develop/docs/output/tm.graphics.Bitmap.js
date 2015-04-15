Ext.data.JsonP.tm_graphics_Bitmap({"tagname":"class","name":"tm.graphics.Bitmap","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-tm.graphics.Bitmap","members":{"cfg":[],"property":[{"name":"height","tagname":"property","owner":"tm.graphics.Bitmap","meta":{},"id":"property-height"},{"name":"imageData","tagname":"property","owner":"tm.graphics.Bitmap","meta":{},"id":"property-imageData"},{"name":"length","tagname":"property","owner":"tm.graphics.Bitmap","meta":{},"id":"property-length"},{"name":"width","tagname":"property","owner":"tm.graphics.Bitmap","meta":{},"id":"property-width"}],"method":[{"name":"constructor","tagname":"method","owner":"tm.graphics.Bitmap","meta":{},"id":"method-constructor"},{"name":"_init","tagname":"method","owner":"tm.graphics.Bitmap","meta":{"private":true},"id":"method-_init"},{"name":"applyFilter","tagname":"method","owner":"tm.graphics.Bitmap","meta":{},"id":"method-applyFilter"},{"name":"filter","tagname":"method","owner":"tm.graphics.Bitmap","meta":{"chainable":true},"id":"method-filter"},{"name":"getPixel","tagname":"method","owner":"tm.graphics.Bitmap","meta":{},"id":"method-getPixel"},{"name":"getPixelAsArray","tagname":"method","owner":"tm.graphics.Bitmap","meta":{},"id":"method-getPixelAsArray"},{"name":"getPixelAsNumber","tagname":"method","owner":"tm.graphics.Bitmap","meta":{},"id":"method-getPixelAsNumber"},{"name":"getPixelAsObject","tagname":"method","owner":"tm.graphics.Bitmap","meta":{},"id":"method-getPixelAsObject"},{"name":"getPixelAverage","tagname":"method","owner":"tm.graphics.Bitmap","meta":{},"id":"method-getPixelAverage"},{"name":"getPixelIndex","tagname":"method","owner":"tm.graphics.Bitmap","meta":{},"id":"method-getPixelIndex"},{"name":"getPixelXY","tagname":"method","owner":"tm.graphics.Bitmap","meta":{},"id":"method-getPixelXY"},{"name":"noise","tagname":"method","owner":"tm.graphics.Bitmap","meta":{},"id":"method-noise"},{"name":"posToIndex","tagname":"method","owner":"tm.graphics.Bitmap","meta":{},"id":"method-posToIndex"},{"name":"setPixel","tagname":"method","owner":"tm.graphics.Bitmap","meta":{},"id":"method-setPixel"},{"name":"setPixel32","tagname":"method","owner":"tm.graphics.Bitmap","meta":{},"id":"method-setPixel32"},{"name":"setPixel32FromArray","tagname":"method","owner":"tm.graphics.Bitmap","meta":{},"id":"method-setPixel32FromArray"},{"name":"setPixel32FromNumber","tagname":"method","owner":"tm.graphics.Bitmap","meta":{},"id":"method-setPixel32FromNumber"},{"name":"setPixel32FromObject","tagname":"method","owner":"tm.graphics.Bitmap","meta":{},"id":"method-setPixel32FromObject"},{"name":"setPixel32Index","tagname":"method","owner":"tm.graphics.Bitmap","meta":{"chainable":true},"id":"method-setPixel32Index"},{"name":"setPixel32XY","tagname":"method","owner":"tm.graphics.Bitmap","meta":{},"id":"method-setPixel32XY"},{"name":"setPixelFromArray","tagname":"method","owner":"tm.graphics.Bitmap","meta":{},"id":"method-setPixelFromArray"},{"name":"setPixelFromNumber","tagname":"method","owner":"tm.graphics.Bitmap","meta":{},"id":"method-setPixelFromNumber"},{"name":"setPixelFromObject","tagname":"method","owner":"tm.graphics.Bitmap","meta":{},"id":"method-setPixelFromObject"},{"name":"setPixelFromString","tagname":"method","owner":"tm.graphics.Bitmap","meta":{},"id":"method-setPixelFromString"},{"name":"setPixelIndex","tagname":"method","owner":"tm.graphics.Bitmap","meta":{"chainable":true},"id":"method-setPixelIndex"},{"name":"setPixelXY","tagname":"method","owner":"tm.graphics.Bitmap","meta":{},"id":"method-setPixelXY"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":9,"files":[{"filename":"bitmap.js","href":"bitmap.html#tm-graphics-Bitmap"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/bitmap.html#tm-graphics-Bitmap' target='_blank'>bitmap.js</a></div></pre><div class='doc-contents'><p>ビットマップクラス</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-height' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-property-height' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-property-height' class='name not-expandable'>height</a><span> : Object</span></div><div class='description'><div class='short'><p>高さ</p>\n</div><div class='long'><p>高さ</p>\n</div></div></div><div id='property-imageData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-property-imageData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-property-imageData' class='name not-expandable'>imageData</a><span> : Object</span></div><div class='description'><div class='short'><p>イメージデータ</p>\n</div><div class='long'><p>イメージデータ</p>\n</div></div></div><div id='property-length' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-property-length' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-property-length' class='name not-expandable'>length</a><span> : Object</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-width' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-property-width' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-property-width' class='name not-expandable'>width</a><span> : Object</span></div><div class='description'><div class='short'><p>幅</p>\n</div><div class='long'><p>幅</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/tm.graphics.Bitmap-method-constructor' class='name expandable'>tm.graphics.Bitmap</a>( <span class='pre'></span> ) : <a href=\"#!/api/tm.graphics.Bitmap\" rel=\"tm.graphics.Bitmap\" class=\"docClass\">tm.graphics.Bitmap</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.graphics.Bitmap\" rel=\"tm.graphics.Bitmap\" class=\"docClass\">tm.graphics.Bitmap</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-_init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-_init' class='name expandable'>_init</a>( <span class='pre'>imageData</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>imageData</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-applyFilter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-applyFilter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-applyFilter' class='name expandable'>applyFilter</a>( <span class='pre'>filter</span> )</div><div class='description'><div class='short'>フィルタを適応する\nTODO: 未実装 ...</div><div class='long'><p>フィルタを適応する\nTODO: 未実装</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>filter</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-filter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-filter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-filter' class='name expandable'>filter</a>( <span class='pre'>filter</span> ) : <a href=\"#!/api/tm.graphics.Bitmap\" rel=\"tm.graphics.Bitmap\" class=\"docClass\">tm.graphics.Bitmap</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>フィルター ...</div><div class='long'><p>フィルター</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>filter</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.graphics.Bitmap\" rel=\"tm.graphics.Bitmap\" class=\"docClass\">tm.graphics.Bitmap</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-getPixel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-getPixel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-getPixel' class='name expandable'>getPixel</a>( <span class='pre'>x, y</span> )</div><div class='description'><div class='short'>ピクセル値を取得\n\nMemo\n\n\nindex 指定か x, y 指定にするか検討中\n配列で返すか数値で返すか検討中. ...</div><div class='long'><p>ピクセル値を取得</p>\n\n<h3>Memo</h3>\n\n<ul>\n<li>index 指定か x, y 指定にするか検討中</li>\n<li>配列で返すか数値で返すか検討中. 速度の早いやつを採用する</li>\n</ul>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPixelAsArray' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-getPixelAsArray' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-getPixelAsArray' class='name expandable'>getPixelAsArray</a>( <span class='pre'>index</span> )</div><div class='description'><div class='short'>ピクセルを配列としてゲット ...</div><div class='long'><p>ピクセルを配列としてゲット</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPixelAsNumber' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-getPixelAsNumber' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-getPixelAsNumber' class='name expandable'>getPixelAsNumber</a>( <span class='pre'>index</span> )</div><div class='description'><div class='short'>ピクセルを数値としてゲット ...</div><div class='long'><p>ピクセルを数値としてゲット</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPixelAsObject' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-getPixelAsObject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-getPixelAsObject' class='name expandable'>getPixelAsObject</a>( <span class='pre'>index</span> )</div><div class='description'><div class='short'>ピクセルをオブジェクトとしてゲット ...</div><div class='long'><p>ピクセルをオブジェクトとしてゲット</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPixelAverage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-getPixelAverage' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-getPixelAverage' class='name expandable'>getPixelAverage</a>( <span class='pre'>x, y, width, height</span> )</div><div class='description'><div class='short'>指定した範囲内のピクセル平均値を取得 ...</div><div class='long'><p>指定した範囲内のピクセル平均値を取得</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>width</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>height</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPixelIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-getPixelIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-getPixelIndex' class='name expandable'>getPixelIndex</a>( <span class='pre'>index</span> )</div><div class='description'><div class='short'>index 指定でピクセル値を取得\n最も高速 ...</div><div class='long'><p>index 指定でピクセル値を取得\n最も高速</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPixelXY' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-getPixelXY' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-getPixelXY' class='name expandable'>getPixelXY</a>( <span class='pre'>x, y</span> )</div><div class='description'><div class='short'>x, y 指定でピクセル値を取得 ...</div><div class='long'><p>x, y 指定でピクセル値を取得</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-noise' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-noise' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-noise' class='name expandable'>noise</a>( <span class='pre'>low, high</span> )</div><div class='description'><div class='short'>ノイズ ...</div><div class='long'><p>ノイズ</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>low</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>high</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-posToIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-posToIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-posToIndex' class='name expandable'>posToIndex</a>( <span class='pre'>x, y</span> )</div><div class='description'><div class='short'>位置をインデックスに変換 ...</div><div class='long'><p>位置をインデックスに変換</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setPixel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-setPixel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-setPixel' class='name expandable'>setPixel</a>( <span class='pre'>index, r, g, b</span> )</div><div class='description'><div class='short'>ピクセル値をセット ...</div><div class='long'><p>ピクセル値をセット</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>r</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>g</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>b</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setPixel32' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-setPixel32' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-setPixel32' class='name expandable'>setPixel32</a>( <span class='pre'>x, y, r, g, b, a</span> )</div><div class='description'><div class='short'>32bit セット ...</div><div class='long'><p>32bit セット</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>r</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>g</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>b</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>a</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setPixel32FromArray' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-setPixel32FromArray' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-setPixel32FromArray' class='name expandable'>setPixel32FromArray</a>( <span class='pre'>index, pixel</span> )</div><div class='description'><div class='short'>配列からピクセルをセット ...</div><div class='long'><p>配列からピクセルをセット</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>pixel</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setPixel32FromNumber' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-setPixel32FromNumber' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-setPixel32FromNumber' class='name expandable'>setPixel32FromNumber</a>( <span class='pre'>index, pixel</span> )</div><div class='description'><div class='short'>argb ...</div><div class='long'><p>argb</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>pixel</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setPixel32FromObject' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-setPixel32FromObject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-setPixel32FromObject' class='name expandable'>setPixel32FromObject</a>( <span class='pre'>index, pixel</span> )</div><div class='description'><div class='short'>オブジェクトからピクセルをセット ...</div><div class='long'><p>オブジェクトからピクセルをセット</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>pixel</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setPixel32Index' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-setPixel32Index' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-setPixel32Index' class='name expandable'>setPixel32Index</a>( <span class='pre'>index, r, g, b, a</span> ) : <a href=\"#!/api/tm.graphics.Bitmap\" rel=\"tm.graphics.Bitmap\" class=\"docClass\">tm.graphics.Bitmap</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>32bit セット ...</div><div class='long'><p>32bit セット</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>r</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>g</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>b</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>a</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.graphics.Bitmap\" rel=\"tm.graphics.Bitmap\" class=\"docClass\">tm.graphics.Bitmap</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setPixel32XY' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-setPixel32XY' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-setPixel32XY' class='name expandable'>setPixel32XY</a>( <span class='pre'>x, y, r, g, b, a</span> )</div><div class='description'><div class='short'>32bit セット ...</div><div class='long'><p>32bit セット</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>r</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>g</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>b</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>a</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setPixelFromArray' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-setPixelFromArray' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-setPixelFromArray' class='name expandable'>setPixelFromArray</a>( <span class='pre'>index, pixel</span> )</div><div class='description'><div class='short'>配列からピクセルをセット ...</div><div class='long'><p>配列からピクセルをセット</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>pixel</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setPixelFromNumber' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-setPixelFromNumber' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-setPixelFromNumber' class='name expandable'>setPixelFromNumber</a>( <span class='pre'>index, pixel</span> )</div><div class='description'><div class='short'>argb ...</div><div class='long'><p>argb</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>pixel</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setPixelFromObject' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-setPixelFromObject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-setPixelFromObject' class='name expandable'>setPixelFromObject</a>( <span class='pre'>index, pixel</span> )</div><div class='description'><div class='short'>object ...</div><div class='long'><p>object</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>pixel</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setPixelFromString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-setPixelFromString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-setPixelFromString' class='name expandable'>setPixelFromString</a>( <span class='pre'>index, pixel</span> )</div><div class='description'><div class='short'>string\nrgb, hsl, #... ...</div><div class='long'><p>string\nrgb, hsl, #... #...... などに対応予定</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>pixel</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setPixelIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-setPixelIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-setPixelIndex' class='name expandable'>setPixelIndex</a>( <span class='pre'>index, r, g, b</span> ) : <a href=\"#!/api/tm.graphics.Bitmap\" rel=\"tm.graphics.Bitmap\" class=\"docClass\">tm.graphics.Bitmap</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>index 指定でピクセル値をセット\n最も高速 ...</div><div class='long'><p>index 指定でピクセル値をセット\n最も高速</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>r</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>g</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>b</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.graphics.Bitmap\" rel=\"tm.graphics.Bitmap\" class=\"docClass\">tm.graphics.Bitmap</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setPixelXY' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-setPixelXY' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-setPixelXY' class='name expandable'>setPixelXY</a>( <span class='pre'>x, y, r, g, b</span> )</div><div class='description'><div class='short'>x, y指定でピクセル値をセット ...</div><div class='long'><p>x, y指定でピクセル値をセット</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>r</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>g</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>b</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});