Ext.data.JsonP.tm_display_CanvasRenderer({"tagname":"class","name":"tm.display.CanvasRenderer","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-tm.display.CanvasRenderer","members":{"cfg":[],"property":[{"name":"","tagname":"property","owner":"tm.display.CanvasRenderer","meta":{"private":true},"id":"property-"},{"name":"canvas","tagname":"property","owner":"tm.display.CanvasRenderer","meta":{},"id":"property-canvas"}],"method":[{"name":"constructor","tagname":"method","owner":"tm.display.CanvasRenderer","meta":{},"id":"method-constructor"},{"name":"_checkRenderable","tagname":"method","owner":"tm.display.CanvasRenderer","meta":{"private":true},"id":"method-_checkRenderable"},{"name":"_setRenderFunction","tagname":"method","owner":"tm.display.CanvasRenderer","meta":{"private":true},"id":"method-_setRenderFunction"},{"name":"render","tagname":"method","owner":"tm.display.CanvasRenderer","meta":{},"id":"method-render"},{"name":"renderObject","tagname":"method","owner":"tm.display.CanvasRenderer","meta":{},"id":"method-renderObject"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":8,"files":[{"filename":"renderer.js","href":"renderer.html#tm-display-CanvasRenderer"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":["tm.display.BoundingRectRenderer"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/tm.display.BoundingRectRenderer' rel='tm.display.BoundingRectRenderer' class='docClass'>tm.display.BoundingRectRenderer</a></div><h4>Files</h4><div class='dependency'><a href='source/renderer.html#tm-display-CanvasRenderer' target='_blank'>renderer.js</a></div></pre><div class='doc-contents'><p>キャンバス描画クラス</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.display.CanvasRenderer'>tm.display.CanvasRenderer</span><br/><a href='source/renderer.html#tm-display-CanvasRenderer-property-' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.display.CanvasRenderer-property-' class='name not-expandable'></a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'><p>_context     コンテキスト</p>\n</div><div class='long'><p>_context     コンテキスト</p>\n</div></div></div><div id='property-canvas' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.display.CanvasRenderer'>tm.display.CanvasRenderer</span><br/><a href='source/renderer.html#tm-display-CanvasRenderer-property-canvas' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.display.CanvasRenderer-property-canvas' class='name not-expandable'>canvas</a><span> : Object</span></div><div class='description'><div class='short'><p>キャンバス</p>\n</div><div class='long'><p>キャンバス</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.display.CanvasRenderer'>tm.display.CanvasRenderer</span><br/><a href='source/renderer.html#tm-display-CanvasRenderer-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/tm.display.CanvasRenderer-method-constructor' class='name expandable'>tm.display.CanvasRenderer</a>( <span class='pre'></span> ) : <a href=\"#!/api/tm.display.CanvasRenderer\" rel=\"tm.display.CanvasRenderer\" class=\"docClass\">tm.display.CanvasRenderer</a></div><div class='description'><div class='short'>コンストラクタ ...</div><div class='long'><p>コンストラクタ</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.display.CanvasRenderer\" rel=\"tm.display.CanvasRenderer\" class=\"docClass\">tm.display.CanvasRenderer</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_checkRenderable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.display.CanvasRenderer'>tm.display.CanvasRenderer</span><br/><a href='source/renderer.html#tm-display-CanvasRenderer-method-_checkRenderable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.display.CanvasRenderer-method-_checkRenderable' class='name expandable'>_checkRenderable</a>( <span class='pre'>obj</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_setRenderFunction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.display.CanvasRenderer'>tm.display.CanvasRenderer</span><br/><a href='source/renderer.html#tm-display-CanvasRenderer-method-_setRenderFunction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.display.CanvasRenderer-method-_setRenderFunction' class='name expandable'>_setRenderFunction</a>( <span class='pre'>obj</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-render' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.display.CanvasRenderer'>tm.display.CanvasRenderer</span><br/><a href='source/renderer.html#tm-display-CanvasRenderer-method-render' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.display.CanvasRenderer-method-render' class='name expandable'>render</a>( <span class='pre'>root</span> )</div><div class='description'><div class='short'>描画 ...</div><div class='long'><p>描画</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>root</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-renderObject' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.display.CanvasRenderer'>tm.display.CanvasRenderer</span><br/><a href='source/renderer.html#tm-display-CanvasRenderer-method-renderObject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.display.CanvasRenderer-method-renderObject' class='name expandable'>renderObject</a>( <span class='pre'>obj</span> )</div><div class='description'><div class='short'>オブジェクトを描画 ...</div><div class='long'><p>オブジェクトを描画</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});