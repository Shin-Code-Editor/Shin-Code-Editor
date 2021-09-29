ace.define("ace/mode/sql_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,r){"use strict";var i=e("../lib/oop"),n=e("./text_highlight_rules").TextHighlightRules,o=function(){var e="select|insert|update|delete|from|where|and|or|group|by|order|limit|offset|having|as|case|when|then|else|end|type|left|right|join|on|outer|desc|asc|union|create|table|primary|key|if|foreign|not|references|default|null|inner|cross|natural|database|drop|grant",t="true|false",r="avg|count|first|last|max|min|sum|ucase|lcase|mid|len|round|rank|now|format|coalesce|ifnull|isnull|nvl",i="int|numeric|decimal|date|varchar|char|bigint|float|double|bit|binary|text|set|timestamp|money|real|number|integer",n=this.createKeywordMapper({"support.function":r,keyword:e,"constant.language":t,"storage.type":i},"identifier",!0);this.$rules={start:[{token:"comment",regex:"--.*$"},{token:"comment",start:"/\\*",end:"\\*/"},{token:"string",regex:'".*?"'},{token:"string",regex:"'.*?'"},{token:"string",regex:"`.*?`"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:n,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="},{token:"paren.lparen",regex:"[\\(]"},{token:"paren.rparen",regex:"[\\)]"},{token:"text",regex:"\\s+"}]},this.normalizeRules()};i.inherits(o,n),t.SqlHighlightRules=o})),ace.define("ace/mode/sql",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/sql_highlight_rules"],(function(e,t,r){"use strict";var i=e("../lib/oop"),n=e("./text").Mode,o=e("./sql_highlight_rules").SqlHighlightRules,a=function(){this.HighlightRules=o,this.$behaviour=this.$defaultBehaviour};i.inherits(a,n),function(){this.lineCommentStart="--",this.$id="ace/mode/sql",this.snippetFileId="ace/snippets/sql"}.call(a.prototype),t.Mode=a})),function(){ace.require(["ace/mode/sql"],(function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)}))}();