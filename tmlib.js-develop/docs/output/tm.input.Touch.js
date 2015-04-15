Ext.data.JsonP.tm_input_Touch({"tagname":"class","name":"tm.input.Touch","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-tm.input.Touch","members":{"cfg":[],"property":[{"name":"_x","tagname":"property","owner":"tm.input.Touch","meta":{"private":true},"id":"property-_x"},{"name":"_y","tagname":"property","owner":"tm.input.Touch","meta":{"private":true},"id":"property-_y"},{"name":"deltaPosition","tagname":"property","owner":"tm.input.Touch","meta":{},"id":"property-deltaPosition"},{"name":"dx","tagname":"property","owner":"tm.input.Touch","meta":{},"id":"property-dx"},{"name":"dy","tagname":"property","owner":"tm.input.Touch","meta":{},"id":"property-dy"},{"name":"element","tagname":"property","owner":"tm.input.Touch","meta":{},"id":"property-element"},{"name":"position","tagname":"property","owner":"tm.input.Touch","meta":{},"id":"property-position"},{"name":"prevPosition","tagname":"property","owner":"tm.input.Touch","meta":{},"id":"property-prevPosition"},{"name":"touched","tagname":"property","owner":"tm.input.Touch","meta":{},"id":"property-touched"},{"name":"x","tagname":"property","owner":"tm.input.Touch","meta":{},"id":"property-x"},{"name":"y","tagname":"property","owner":"tm.input.Touch","meta":{},"id":"property-y"}],"method":[{"name":"constructor","tagname":"method","owner":"tm.input.Touch","meta":{},"id":"method-constructor"},{"name":"_touchmove","tagname":"method","owner":"tm.input.Touch","meta":{"private":true},"id":"method-_touchmove"},{"name":"_touchmoveScale","tagname":"method","owner":"tm.input.Touch","meta":{"private":true},"id":"method-_touchmoveScale"},{"name":"getPointing","tagname":"method","owner":"tm.input.Touch","meta":{},"id":"method-getPointing"},{"name":"getPointingEnd","tagname":"method","owner":"tm.input.Touch","meta":{},"id":"method-getPointingEnd"},{"name":"getPointingStart","tagname":"method","owner":"tm.input.Touch","meta":{},"id":"method-getPointingStart"},{"name":"getTouch","tagname":"method","owner":"tm.input.Touch","meta":{},"id":"method-getTouch"},{"name":"getTouchEnd","tagname":"method","owner":"tm.input.Touch","meta":{},"id":"method-getTouchEnd"},{"name":"getTouchStart","tagname":"method","owner":"tm.input.Touch","meta":{},"id":"method-getTouchStart"},{"name":"run","tagname":"method","owner":"tm.input.Touch","meta":{"chainable":true},"id":"method-run"},{"name":"update","tagname":"method","owner":"tm.input.Touch","meta":{},"id":"method-update"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":10,"files":[{"filename":"touch.js","href":"touch.html#tm-input-Touch"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/touch.html#tm-input-Touch' target='_blank'>touch.js</a></div></pre><div class='doc-contents'><p>タッチクラス</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-_x' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Touch'>tm.input.Touch</span><br/><a href='source/touch.html#tm-input-Touch-property-_x' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Touch-property-_x' class='name not-expandable'>_x</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-_y' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Touch'>tm.input.Touch</span><br/><a href='source/touch.html#tm-input-Touch-property-_y' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Touch-property-_y' class='name not-expandable'>_y</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-deltaPosition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Touch'>tm.input.Touch</span><br/><a href='source/touch.html#tm-input-Touch-property-deltaPosition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Touch-property-deltaPosition' class='name not-expandable'>deltaPosition</a><span> : Object</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-dx' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Touch'>tm.input.Touch</span><br/><a href='source/touch.html#tm-input-Touch-property-dx' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Touch-property-dx' class='name not-expandable'>dx</a><span> : Object</span></div><div class='description'><div class='short'><p>dx値</p>\n</div><div class='long'><p>dx値</p>\n</div></div></div><div id='property-dy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Touch'>tm.input.Touch</span><br/><a href='source/touch.html#tm-input-Touch-property-dy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Touch-property-dy' class='name not-expandable'>dy</a><span> : Object</span></div><div class='description'><div class='short'><p>dy値</p>\n</div><div class='long'><p>dy値</p>\n</div></div></div><div id='property-element' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Touch'>tm.input.Touch</span><br/><a href='source/touch.html#tm-input-Touch-property-element' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Touch-property-element' class='name not-expandable'>element</a><span> : Object</span></div><div class='description'><div class='short'><p>element</p>\n</div><div class='long'><p>element</p>\n</div></div></div><div id='property-position' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Touch'>tm.input.Touch</span><br/><a href='source/touch.html#tm-input-Touch-property-position' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Touch-property-position' class='name not-expandable'>position</a><span> : Object</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-prevPosition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Touch'>tm.input.Touch</span><br/><a href='source/touch.html#tm-input-Touch-property-prevPosition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Touch-property-prevPosition' class='name not-expandable'>prevPosition</a><span> : Object</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-touched' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Touch'>tm.input.Touch</span><br/><a href='source/touch.html#tm-input-Touch-property-touched' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Touch-property-touched' class='name expandable'>touched</a><span> : Boolean</span></div><div class='description'><div class='short'>touched ...</div><div class='long'><p>touched</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-x' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Touch'>tm.input.Touch</span><br/><a href='source/touch.html#tm-input-Touch-property-x' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Touch-property-x' class='name not-expandable'>x</a><span> : Object</span></div><div class='description'><div class='short'><p>x座標値</p>\n</div><div class='long'><p>x座標値</p>\n</div></div></div><div id='property-y' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Touch'>tm.input.Touch</span><br/><a href='source/touch.html#tm-input-Touch-property-y' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Touch-property-y' class='name not-expandable'>y</a><span> : Object</span></div><div class='description'><div class='short'><p>y座標値</p>\n</div><div class='long'><p>y座標値</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Touch'>tm.input.Touch</span><br/><a href='source/touch.html#tm-input-Touch-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/tm.input.Touch-method-constructor' class='name expandable'>tm.input.Touch</a>( <span class='pre'></span> ) : <a href=\"#!/api/tm.input.Touch\" rel=\"tm.input.Touch\" class=\"docClass\">tm.input.Touch</a></div><div class='description'><div class='short'>Test Program. ...</div><div class='long'><p><a href=\"http://tmlib-js.googlecode.com/svn/trunk/test/input/touch-test.html\">Test Program</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.input.Touch\" rel=\"tm.input.Touch\" class=\"docClass\">tm.input.Touch</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_touchmove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Touch'>tm.input.Touch</span><br/><a href='source/touch.html#tm-input-Touch-method-_touchmove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Touch-method-_touchmove' class='name expandable'>_touchmove</a>( <span class='pre'>e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_touchmoveScale' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Touch'>tm.input.Touch</span><br/><a href='source/touch.html#tm-input-Touch-method-_touchmoveScale' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Touch-method-_touchmoveScale' class='name expandable'>_touchmoveScale</a>( <span class='pre'>e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPointing' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Touch'>tm.input.Touch</span><br/><a href='source/touch.html#tm-input-Touch-method-getPointing' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Touch-method-getPointing' class='name expandable'>getPointing</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>ポインティング状態取得(mouse との差異対策) ...</div><div class='long'><p>ポインティング状態取得(mouse との差異対策)</p>\n</div></div></div><div id='method-getPointingEnd' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Touch'>tm.input.Touch</span><br/><a href='source/touch.html#tm-input-Touch-method-getPointingEnd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Touch-method-getPointingEnd' class='name expandable'>getPointingEnd</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>ポインティングを終了したかを取得(mouse との差異対策) ...</div><div class='long'><p>ポインティングを終了したかを取得(mouse との差異対策)</p>\n</div></div></div><div id='method-getPointingStart' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Touch'>tm.input.Touch</span><br/><a href='source/touch.html#tm-input-Touch-method-getPointingStart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Touch-method-getPointingStart' class='name expandable'>getPointingStart</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>ポインティングを開始したかを取得(mouse との差異対策) ...</div><div class='long'><p>ポインティングを開始したかを取得(mouse との差異対策)</p>\n</div></div></div><div id='method-getTouch' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Touch'>tm.input.Touch</span><br/><a href='source/touch.html#tm-input-Touch-method-getTouch' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Touch-method-getTouch' class='name expandable'>getTouch</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>タッチしているかを判定 ...</div><div class='long'><p>タッチしているかを判定</p>\n</div></div></div><div id='method-getTouchEnd' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Touch'>tm.input.Touch</span><br/><a href='source/touch.html#tm-input-Touch-method-getTouchEnd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Touch-method-getTouchEnd' class='name expandable'>getTouchEnd</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>タッチ終了時に true ...</div><div class='long'><p>タッチ終了時に true</p>\n</div></div></div><div id='method-getTouchStart' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Touch'>tm.input.Touch</span><br/><a href='source/touch.html#tm-input-Touch-method-getTouchStart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Touch-method-getTouchStart' class='name expandable'>getTouchStart</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>タッチ開始時に true ...</div><div class='long'><p>タッチ開始時に true</p>\n</div></div></div><div id='method-run' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Touch'>tm.input.Touch</span><br/><a href='source/touch.html#tm-input-Touch-method-run' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Touch-method-run' class='name expandable'>run</a>( <span class='pre'>fps</span> ) : <a href=\"#!/api/tm.input.Touch\" rel=\"tm.input.Touch\" class=\"docClass\">tm.input.Touch</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>run. ...</div><div class='long'><p>run.\n自動でマウス情報を更新したい際に使用する</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fps</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.input.Touch\" rel=\"tm.input.Touch\" class=\"docClass\">tm.input.Touch</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-update' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Touch'>tm.input.Touch</span><br/><a href='source/touch.html#tm-input-Touch-method-update' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Touch-method-update' class='name expandable'>update</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>情報更新処理\nマイフレーム呼んで下さい. ...</div><div class='long'><p>情報更新処理\nマイフレーム呼んで下さい.</p>\n</div></div></div></div></div></div></div>"});