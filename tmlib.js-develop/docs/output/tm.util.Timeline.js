Ext.data.JsonP.tm_util_Timeline({"tagname":"class","name":"tm.util.Timeline","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-tm.util.Timeline","members":{"cfg":[],"property":[{"name":"fps","tagname":"property","owner":"tm.util.Timeline","meta":{},"id":"property-fps"},{"name":"target","tagname":"property","owner":"tm.util.Timeline","meta":{},"id":"property-target"},{"name":"tasks","tagname":"property","owner":"tm.util.Timeline","meta":{},"id":"property-tasks"}],"method":[{"name":"constructor","tagname":"method","owner":"tm.util.Timeline","meta":{},"id":"method-constructor"},{"name":"_nextTime","tagname":"method","owner":"tm.util.Timeline","meta":{"private":true},"id":"method-_nextTime"},{"name":"_resumeTime","tagname":"method","owner":"tm.util.Timeline","meta":{"private":true},"id":"method-_resumeTime"},{"name":"_startTime","tagname":"method","owner":"tm.util.Timeline","meta":{"private":true},"id":"method-_startTime"},{"name":"_updateTime","tagname":"method","owner":"tm.util.Timeline","meta":{"private":true},"id":"method-_updateTime"},{"name":"after","tagname":"method","owner":"tm.util.Timeline","meta":{"chainable":true},"id":"method-after"},{"name":"at","tagname":"method","owner":"tm.util.Timeline","meta":{"chainable":true},"id":"method-at"},{"name":"clear","tagname":"method","owner":"tm.util.Timeline","meta":{"chainable":true},"id":"method-clear"},{"name":"removeAction","tagname":"method","owner":"tm.util.Timeline","meta":{},"id":"method-removeAction"},{"name":"removeTime","tagname":"method","owner":"tm.util.Timeline","meta":{},"id":"method-removeTime"},{"name":"resume","tagname":"method","owner":"tm.util.Timeline","meta":{},"id":"method-resume"},{"name":"rewind","tagname":"method","owner":"tm.util.Timeline","meta":{},"id":"method-rewind"},{"name":"start","tagname":"method","owner":"tm.util.Timeline","meta":{},"id":"method-start"},{"name":"stop","tagname":"method","owner":"tm.util.Timeline","meta":{},"id":"method-stop"},{"name":"update","tagname":"method","owner":"tm.util.Timeline","meta":{},"id":"method-update"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":10,"files":[{"filename":"timeline.js","href":"timeline2.html#tm-util-Timeline"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/timeline2.html#tm-util-Timeline' target='_blank'>timeline.js</a></div></pre><div class='doc-contents'><p>タイムラインクラス</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-fps' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.util.Timeline'>tm.util.Timeline</span><br/><a href='source/timeline2.html#tm-util-Timeline-property-fps' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.util.Timeline-property-fps' class='name expandable'>fps</a><span> : Number</span></div><div class='description'><div class='short'>fps ...</div><div class='long'><p>fps</p>\n<p>Defaults to: <code>30</code></p></div></div></div><div id='property-target' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.util.Timeline'>tm.util.Timeline</span><br/><a href='source/timeline2.html#tm-util-Timeline-property-target' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.util.Timeline-property-target' class='name not-expandable'>target</a><span> : Object</span></div><div class='description'><div class='short'><p>target</p>\n</div><div class='long'><p>target</p>\n</div></div></div><div id='property-tasks' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.util.Timeline'>tm.util.Timeline</span><br/><a href='source/timeline2.html#tm-util-Timeline-property-tasks' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.util.Timeline-property-tasks' class='name not-expandable'>tasks</a><span> : Object</span></div><div class='description'><div class='short'><p>tasks</p>\n</div><div class='long'><p>tasks</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.util.Timeline'>tm.util.Timeline</span><br/><a href='source/timeline2.html#tm-util-Timeline-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/tm.util.Timeline-method-constructor' class='name expandable'>tm.util.Timeline</a>( <span class='pre'></span> ) : <a href=\"#!/api/tm.util.Timeline\" rel=\"tm.util.Timeline\" class=\"docClass\">tm.util.Timeline</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.util.Timeline\" rel=\"tm.util.Timeline\" class=\"docClass\">tm.util.Timeline</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_nextTime' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.util.Timeline'>tm.util.Timeline</span><br/><a href='source/timeline2.html#tm-util-Timeline-method-_nextTime' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.util.Timeline-method-_nextTime' class='name expandable'>_nextTime</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-_resumeTime' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.util.Timeline'>tm.util.Timeline</span><br/><a href='source/timeline2.html#tm-util-Timeline-method-_resumeTime' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.util.Timeline-method-_resumeTime' class='name expandable'>_resumeTime</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-_startTime' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.util.Timeline'>tm.util.Timeline</span><br/><a href='source/timeline2.html#tm-util-Timeline-method-_startTime' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.util.Timeline-method-_startTime' class='name expandable'>_startTime</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-_updateTime' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.util.Timeline'>tm.util.Timeline</span><br/><a href='source/timeline2.html#tm-util-Timeline-method-_updateTime' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.util.Timeline-method-_updateTime' class='name expandable'>_updateTime</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-after' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.util.Timeline'>tm.util.Timeline</span><br/><a href='source/timeline2.html#tm-util-Timeline-method-after' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.util.Timeline-method-after' class='name expandable'>after</a>( <span class='pre'>time, action</span> ) : <a href=\"#!/api/tm.util.Timeline\" rel=\"tm.util.Timeline\" class=\"docClass\">tm.util.Timeline</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>アフター ...</div><div class='long'><p>アフター</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>time</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>action</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.util.Timeline\" rel=\"tm.util.Timeline\" class=\"docClass\">tm.util.Timeline</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-at' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.util.Timeline'>tm.util.Timeline</span><br/><a href='source/timeline2.html#tm-util-Timeline-method-at' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.util.Timeline-method-at' class='name expandable'>at</a>( <span class='pre'>time, action</span> ) : <a href=\"#!/api/tm.util.Timeline\" rel=\"tm.util.Timeline\" class=\"docClass\">tm.util.Timeline</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>アット ...</div><div class='long'><p>アット</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>time</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>action</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.util.Timeline\" rel=\"tm.util.Timeline\" class=\"docClass\">tm.util.Timeline</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-clear' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.util.Timeline'>tm.util.Timeline</span><br/><a href='source/timeline2.html#tm-util-Timeline-method-clear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.util.Timeline-method-clear' class='name expandable'>clear</a>( <span class='pre'></span> ) : <a href=\"#!/api/tm.util.Timeline\" rel=\"tm.util.Timeline\" class=\"docClass\">tm.util.Timeline</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>クリア ...</div><div class='long'><p>クリア</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.util.Timeline\" rel=\"tm.util.Timeline\" class=\"docClass\">tm.util.Timeline</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-removeAction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.util.Timeline'>tm.util.Timeline</span><br/><a href='source/timeline2.html#tm-util-Timeline-method-removeAction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.util.Timeline-method-removeAction' class='name expandable'>removeAction</a>( <span class='pre'>action</span> )</div><div class='description'><div class='short'>リムーブアクション ...</div><div class='long'><p>リムーブアクション</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>action</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeTime' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.util.Timeline'>tm.util.Timeline</span><br/><a href='source/timeline2.html#tm-util-Timeline-method-removeTime' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.util.Timeline-method-removeTime' class='name expandable'>removeTime</a>( <span class='pre'>time</span> )</div><div class='description'><div class='short'>リムーブタイム ...</div><div class='long'><p>リムーブタイム</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>time</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-resume' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.util.Timeline'>tm.util.Timeline</span><br/><a href='source/timeline2.html#tm-util-Timeline-method-resume' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.util.Timeline-method-resume' class='name expandable'>resume</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>レジューム ...</div><div class='long'><p>レジューム</p>\n</div></div></div><div id='method-rewind' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.util.Timeline'>tm.util.Timeline</span><br/><a href='source/timeline2.html#tm-util-Timeline-method-rewind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.util.Timeline-method-rewind' class='name expandable'>rewind</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>レウィンド ...</div><div class='long'><p>レウィンド</p>\n</div></div></div><div id='method-start' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.util.Timeline'>tm.util.Timeline</span><br/><a href='source/timeline2.html#tm-util-Timeline-method-start' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.util.Timeline-method-start' class='name expandable'>start</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>スタート ...</div><div class='long'><p>スタート</p>\n</div></div></div><div id='method-stop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.util.Timeline'>tm.util.Timeline</span><br/><a href='source/timeline2.html#tm-util-Timeline-method-stop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.util.Timeline-method-stop' class='name expandable'>stop</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>ストップ ...</div><div class='long'><p>ストップ</p>\n</div></div></div><div id='method-update' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.util.Timeline'>tm.util.Timeline</span><br/><a href='source/timeline2.html#tm-util-Timeline-method-update' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.util.Timeline-method-update' class='name expandable'>update</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>更新 ...</div><div class='long'><p>更新</p>\n</div></div></div></div></div></div></div>"});