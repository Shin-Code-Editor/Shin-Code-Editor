ace.define("ace/mode/properties_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,i,l){"use strict";var r=e("../lib/oop"),s=e("./text_highlight_rules").TextHighlightRules,o=function(){var t=/\\u[0-9a-fA-F]{4}|\\/;this.$rules={start:[{token:"comment",regex:/[!#].*$/},{token:"keyword",regex:/[=:]$/},{token:"keyword",regex:/[=:]/,next:"value"},{token:"constant.language.escape",regex:t},{defaultToken:"variable"}],value:[{regex:/\\$/,token:"string",next:"value"},{regex:/$/,token:"string",next:"start"},{token:"constant.language.escape",regex:t},{defaultToken:"string"}]}};r.inherits(o,s),i.PropertiesHighlightRules=o}),ace.define("ace/mode/properties",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/properties_highlight_rules"],function(e,i,l){"use strict";var r=e("../lib/oop"),s=e("./text").Mode,o=e("./properties_highlight_rules").PropertiesHighlightRules,t=function(){this.HighlightRules=o,this.$behaviour=this.$defaultBehaviour};r.inherits(t,s),function(){this.$id="ace/mode/properties"}.call(t.prototype),i.Mode=t}),function(){ace.require(["ace/mode/properties"],function(e){typeof module=="object"&&typeof exports=="object"&&module&&(module.exports=e)})}();