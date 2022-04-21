ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(t,f,p){"use strict";var h=t("../lib/oop"),d=t("./text_highlight_rules").TextHighlightRules,a=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},a.getTagRule(),{defaultToken:"comment.doc",caseInsensitive:!0}]}};h.inherits(a,d),a.getTagRule=function(i){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},a.getStartRule=function(i){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:i}},a.getEndRule=function(i){return{token:"comment.doc",regex:"\\*\\/",next:i}},f.DocCommentHighlightRules=a}),ace.define("ace/mode/c_cpp_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(t,f,p){"use strict";var h=t("../lib/oop"),d=t("./doc_comment_highlight_rules").DocCommentHighlightRules,a=t("./text_highlight_rules").TextHighlightRules,i=f.cFunctions="\\b(?:hypot(?:f|l)?|s(?:scanf|ystem|nprintf|ca(?:nf|lb(?:n(?:f|l)?|ln(?:f|l)?))|i(?:n(?:h(?:f|l)?|f|l)?|gn(?:al|bit))|tr(?:s(?:tr|pn)|nc(?:py|at|mp)|c(?:spn|hr|oll|py|at|mp)|to(?:imax|d|u(?:l(?:l)?|max)|k|f|l(?:d|l)?)|error|pbrk|ftime|len|rchr|xfrm)|printf|et(?:jmp|vbuf|locale|buf)|qrt(?:f|l)?|w(?:scanf|printf)|rand)|n(?:e(?:arbyint(?:f|l)?|xt(?:toward(?:f|l)?|after(?:f|l)?))|an(?:f|l)?)|c(?:s(?:in(?:h(?:f|l)?|f|l)?|qrt(?:f|l)?)|cos(?:h(?:f)?|f|l)?|imag(?:f|l)?|t(?:ime|an(?:h(?:f|l)?|f|l)?)|o(?:s(?:h(?:f|l)?|f|l)?|nj(?:f|l)?|pysign(?:f|l)?)|p(?:ow(?:f|l)?|roj(?:f|l)?)|e(?:il(?:f|l)?|xp(?:f|l)?)|l(?:o(?:ck|g(?:f|l)?)|earerr)|a(?:sin(?:h(?:f|l)?|f|l)?|cos(?:h(?:f|l)?|f|l)?|tan(?:h(?:f|l)?|f|l)?|lloc|rg(?:f|l)?|bs(?:f|l)?)|real(?:f|l)?|brt(?:f|l)?)|t(?:ime|o(?:upper|lower)|an(?:h(?:f|l)?|f|l)?|runc(?:f|l)?|gamma(?:f|l)?|mp(?:nam|file))|i(?:s(?:space|n(?:ormal|an)|cntrl|inf|digit|u(?:nordered|pper)|p(?:unct|rint)|finite|w(?:space|c(?:ntrl|type)|digit|upper|p(?:unct|rint)|lower|al(?:num|pha)|graph|xdigit|blank)|l(?:ower|ess(?:equal|greater)?)|al(?:num|pha)|gr(?:eater(?:equal)?|aph)|xdigit|blank)|logb(?:f|l)?|max(?:div|abs))|di(?:v|fftime)|_Exit|unget(?:c|wc)|p(?:ow(?:f|l)?|ut(?:s|c(?:har)?|wc(?:har)?)|error|rintf)|e(?:rf(?:c(?:f|l)?|f|l)?|x(?:it|p(?:2(?:f|l)?|f|l|m1(?:f|l)?)?))|v(?:s(?:scanf|nprintf|canf|printf|w(?:scanf|printf))|printf|f(?:scanf|printf|w(?:scanf|printf))|w(?:scanf|printf)|a_(?:start|copy|end|arg))|qsort|f(?:s(?:canf|e(?:tpos|ek))|close|tell|open|dim(?:f|l)?|p(?:classify|ut(?:s|c|w(?:s|c))|rintf)|e(?:holdexcept|set(?:e(?:nv|xceptflag)|round)|clearexcept|testexcept|of|updateenv|r(?:aiseexcept|ror)|get(?:e(?:nv|xceptflag)|round))|flush|w(?:scanf|ide|printf|rite)|loor(?:f|l)?|abs(?:f|l)?|get(?:s|c|pos|w(?:s|c))|re(?:open|e|ad|xp(?:f|l)?)|m(?:in(?:f|l)?|od(?:f|l)?|a(?:f|l|x(?:f|l)?)?))|l(?:d(?:iv|exp(?:f|l)?)|o(?:ngjmp|cal(?:time|econv)|g(?:1(?:p(?:f|l)?|0(?:f|l)?)|2(?:f|l)?|f|l|b(?:f|l)?)?)|abs|l(?:div|abs|r(?:int(?:f|l)?|ound(?:f|l)?))|r(?:int(?:f|l)?|ound(?:f|l)?)|gamma(?:f|l)?)|w(?:scanf|c(?:s(?:s(?:tr|pn)|nc(?:py|at|mp)|c(?:spn|hr|oll|py|at|mp)|to(?:imax|d|u(?:l(?:l)?|max)|k|f|l(?:d|l)?|mbs)|pbrk|ftime|len|r(?:chr|tombs)|xfrm)|to(?:b|mb)|rtomb)|printf|mem(?:set|c(?:hr|py|mp)|move))|a(?:s(?:sert|ctime|in(?:h(?:f|l)?|f|l)?)|cos(?:h(?:f|l)?|f|l)?|t(?:o(?:i|f|l(?:l)?)|exit|an(?:h(?:f|l)?|2(?:f|l)?|f|l)?)|b(?:s|ort))|g(?:et(?:s|c(?:har)?|env|wc(?:har)?)|mtime)|r(?:int(?:f|l)?|ound(?:f|l)?|e(?:name|alloc|wind|m(?:ove|quo(?:f|l)?|ainder(?:f|l)?))|a(?:nd|ise))|b(?:search|towc)|m(?:odf(?:f|l)?|em(?:set|c(?:hr|py|mp)|move)|ktime|alloc|b(?:s(?:init|towcs|rtowcs)|towc|len|r(?:towc|len))))\\b",e=function(){var n="break|case|continue|default|do|else|for|goto|if|_Pragma|return|switch|while|catch|operator|try|throw|using",r="asm|__asm__|auto|bool|_Bool|char|_Complex|double|enum|float|_Imaginary|int|long|short|signed|struct|typedef|union|unsigned|void|class|wchar_t|template|char16_t|char32_t",s="const|extern|register|restrict|static|volatile|inline|private|protected|public|friend|explicit|virtual|export|mutable|typename|constexpr|new|delete|alignas|alignof|decltype|noexcept|thread_local",l="and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eq|const_cast|dynamic_cast|reinterpret_cast|static_cast|sizeof|namespace",o="NULL|true|false|TRUE|FALSE|nullptr",g=this.$keywords=this.createKeywordMapper({"keyword.control":n,"storage.type":r,"storage.modifier":s,"keyword.operator":l,"variable.language":"this","constant.language":o},"identifier"),c="[a-zA-Z\\$_\xA1-\uFFFF][a-zA-Z\\d\\$_\xA1-\uFFFF]*\\b",m=/\\(?:['"?\\abfnrtv]|[0-7]{1,3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}U[a-fA-F\d]{8}|.)/.source,u="%"+/(\d+\$)?/.source+/[#0\- +']*/.source+/[,;:_]?/.source+/((-?\d+)|\*(-?\d+\$)?)?/.source+/(\.((-?\d+)|\*(-?\d+\$)?)?)?/.source+/(hh|h|ll|l|j|t|z|q|L|vh|vl|v|hv|hl)?/.source+/(\[[^"\]]+\]|[diouxXDOUeEfFgGaACcSspn%])/.source;this.$rules={start:[{token:"comment",regex:"//$",next:"start"},{token:"comment",regex:"//",next:"singleLineComment"},d.getStartRule("doc-start"),{token:"comment",regex:"\\/\\*",next:"comment"},{token:"string",regex:"'(?:"+m+"|.)?'"},{token:"string.start",regex:'"',stateName:"qqstring",next:[{token:"string",regex:/\\\s*$/,next:"qqstring"},{token:"constant.language.escape",regex:m},{token:"constant.language.escape",regex:u},{token:"string.end",regex:'"|$',next:"start"},{defaultToken:"string"}]},{token:"string.start",regex:'R"\\(',stateName:"rawString",next:[{token:"string.end",regex:'\\)"',next:"start"},{defaultToken:"string"}]},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"},{token:"keyword",regex:"#\\s*(?:include|import|pragma|line|define|undef)\\b",next:"directive"},{token:"keyword",regex:"#\\s*(?:endif|if|ifdef|else|elif|ifndef)\\b"},{token:"support.function.C99.c",regex:i},{token:g,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*"},{token:"keyword.operator",regex:/--|\+\+|<<=|>>=|>>>=|<>|&&|\|\||\?:|[*%\/+\-&\^|~!<>=]=?/},{token:"punctuation.operator",regex:"\\?|\\:|\\,|\\;|\\."},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],singleLineComment:[{token:"comment",regex:/\\$/,next:"singleLineComment"},{token:"comment",regex:/$/,next:"start"},{defaultToken:"comment"}],directive:[{token:"constant.other.multiline",regex:/\\/},{token:"constant.other.multiline",regex:/.*\\/},{token:"constant.other",regex:"\\s*<.+?>",next:"start"},{token:"constant.other",regex:'\\s*["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]',next:"start"},{token:"constant.other",regex:"\\s*['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']",next:"start"},{token:"constant.other",regex:/[^\\\/]+/,next:"start"}]},this.embedRules(d,"doc-",[d.getEndRule("start")]),this.normalizeRules()};h.inherits(e,a),f.c_cppHighlightRules=e}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(t,f,p){"use strict";var h=t("../range").Range,d=function(){};(function(){this.checkOutdent=function(a,i){return/^\s+$/.test(a)?/^\s*\}/.test(i):!1},this.autoOutdent=function(a,i){var e=a.getLine(i),n=e.match(/^(\s*\})/);if(!n)return 0;var r=n[1].length,s=a.findMatchingBracket({row:i,column:r});if(!s||s.row==i)return 0;var l=this.$getIndent(a.getLine(s.row));a.replace(new h(i,0,i,r-1),l)},this.$getIndent=function(a){return a.match(/^\s*/)[0]}}).call(d.prototype),f.MatchingBraceOutdent=d}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(t,f,p){"use strict";var h=t("../../lib/oop"),d=t("../../range").Range,a=t("./fold_mode").FoldMode,i=f.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};h.inherits(i,a),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,n,r){var s=e.getLine(r);if(this.singleLineBlockCommentRe.test(s)&&!this.startRegionRe.test(s)&&!this.tripleStarBlockCommentRe.test(s))return"";var l=this._getFoldWidgetBase(e,n,r);return!l&&this.startRegionRe.test(s)?"start":l},this.getFoldWidgetRange=function(e,n,r,s){var l=e.getLine(r);if(this.startRegionRe.test(l))return this.getCommentRegionBlock(e,l,r);var o=l.match(this.foldingStartMarker);if(o){var g=o.index;if(o[1])return this.openingBracketBlock(e,o[1],r,g);var c=e.getCommentFoldRange(r,g+o[0].length,1);return c&&!c.isMultiLine()&&(s?c=this.getSectionRange(e,r):n!="all"&&(c=null)),c}if(n!=="markbegin"){var o=l.match(this.foldingStopMarker);if(o){var g=o.index+o[0].length;return o[1]?this.closingBracketBlock(e,o[1],r,g):e.getCommentFoldRange(r,g,-1)}}},this.getSectionRange=function(e,n){var r=e.getLine(n),s=r.search(/\S/),l=n,o=r.length;n=n+1;for(var g=n,c=e.getLength();++n<c;){r=e.getLine(n);var m=r.search(/\S/);if(m!==-1){if(s>m)break;var u=this.getFoldWidgetRange(e,"all",n);if(u){if(u.start.row<=l)break;if(u.isMultiLine())n=u.end.row;else if(s==m)break}g=n}}return new d(l,o,g,e.getLine(g).length)},this.getCommentRegionBlock=function(e,n,r){for(var s=n.search(/\s*$/),l=e.getLength(),o=r,g=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,c=1;++r<l;){n=e.getLine(r);var m=g.exec(n);if(!!m&&(m[1]?c--:c++,!c))break}var u=r;if(u>o)return new d(o,s,u,n.length)}}.call(i.prototype)}),ace.define("ace/mode/c_cpp",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/c_cpp_highlight_rules","ace/mode/matching_brace_outdent","ace/range","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],function(t,f,p){"use strict";var h=t("../lib/oop"),d=t("./text").Mode,a=t("./c_cpp_highlight_rules").c_cppHighlightRules,i=t("./matching_brace_outdent").MatchingBraceOutdent,e=t("../range").Range,n=t("./behaviour/cstyle").CstyleBehaviour,r=t("./folding/cstyle").FoldMode,s=function(){this.HighlightRules=a,this.$outdent=new i,this.$behaviour=new n,this.foldingRules=new r};h.inherits(s,d),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(l,o,g){var c=this.$getIndent(o),m=this.getTokenizer().getLineTokens(o,l),u=m.tokens,k=m.state;if(u.length&&u[u.length-1].type=="comment")return c;if(l=="start"){var x=o.match(/^.*[\{\(\[]\s*$/);x&&(c+=g)}else if(l=="doc-start"){if(k=="start")return"";var x=o.match(/^\s*(\/?)\*/);x&&(x[1]&&(c+=" "),c+="* ")}return c},this.checkOutdent=function(l,o,g){return this.$outdent.checkOutdent(o,g)},this.autoOutdent=function(l,o,g){this.$outdent.autoOutdent(o,g)},this.$id="ace/mode/c_cpp",this.snippetFileId="ace/snippets/c_cpp"}.call(s.prototype),f.Mode=s}),ace.define("ace/mode/dart_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(t,f,p){"use strict";var h=t("../lib/oop"),d=t("./doc_comment_highlight_rules").DocCommentHighlightRules,a=t("./text_highlight_rules").TextHighlightRules,i=function(){var e="true|false|null",n="this|super",r="try|catch|finally|throw|rethrow|assert|break|case|continue|default|do|else|for|if|in|return|switch|while|new|deferred|async|await",s="abstract|class|extends|external|factory|implements|get|native|operator|set|typedef|with|enum",l="static|final|const",o="void|bool|num|int|double|dynamic|var|String",g=this.createKeywordMapper({"constant.language.dart":e,"variable.language.dart":n,"keyword.control.dart":r,"keyword.declaration.dart":s,"storage.modifier.dart":l,"storage.type.primitive.dart":o},"identifier"),c=[{token:"constant.language.escape",regex:/\\./},{token:"text",regex:/\$(?:\w+|{[^"'}]+})?/},{defaultToken:"string"}];this.$rules={start:[{token:"comment",regex:/\/\/.*$/},d.getStartRule("doc-start"),{token:"comment",regex:/\/\*/,next:"comment"},{token:["meta.preprocessor.script.dart"],regex:"^(#!.*)$"},{token:"keyword.other.import.dart",regex:"(?:\\b)(?:library|import|export|part|of|show|hide)(?:\\b)"},{token:["keyword.other.import.dart","text"],regex:"(?:\\b)(prefix)(\\s*:)"},{regex:"\\bas\\b",token:"keyword.cast.dart"},{regex:"\\?|:",token:"keyword.control.ternary.dart"},{regex:"(?:\\b)(is\\!?)(?:\\b)",token:["keyword.operator.dart"]},{regex:"(<<|>>>?|~|\\^|\\||&)",token:["keyword.operator.bitwise.dart"]},{regex:"((?:&|\\^|\\||<<|>>>?)=)",token:["keyword.operator.assignment.bitwise.dart"]},{regex:"(===?|!==?|<=?|>=?)",token:["keyword.operator.comparison.dart"]},{regex:"((?:[+*/%-]|\\~)=)",token:["keyword.operator.assignment.arithmetic.dart"]},{regex:"=",token:"keyword.operator.assignment.dart"},{token:"string",regex:"'''",next:"qdoc"},{token:"string",regex:'"""',next:"qqdoc"},{token:"string",regex:"'",next:"qstring"},{token:"string",regex:'"',next:"qqstring"},{regex:"(\\-\\-|\\+\\+)",token:["keyword.operator.increment-decrement.dart"]},{regex:"(\\-|\\+|\\*|\\/|\\~\\/|%)",token:["keyword.operator.arithmetic.dart"]},{regex:"(!|&&|\\|\\|)",token:["keyword.operator.logical.dart"]},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:g,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],qdoc:[{token:"string",regex:"'''",next:"start"}].concat(c),qqdoc:[{token:"string",regex:'"""',next:"start"}].concat(c),qstring:[{token:"string",regex:"'|$",next:"start"}].concat(c),qqstring:[{token:"string",regex:'"|$',next:"start"}].concat(c)},this.embedRules(d,"doc-",[d.getEndRule("start")])};h.inherits(i,a),f.DartHighlightRules=i}),ace.define("ace/mode/dart",["require","exports","module","ace/lib/oop","ace/mode/c_cpp","ace/mode/dart_highlight_rules","ace/mode/folding/cstyle"],function(t,f,p){"use strict";var h=t("../lib/oop"),d=t("./c_cpp").Mode,a=t("./dart_highlight_rules").DartHighlightRules,i=t("./folding/cstyle").FoldMode,e=function(){d.call(this),this.HighlightRules=a,this.foldingRules=new i};h.inherits(e,d),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.$id="ace/mode/dart",this.snippetFileId="ace/snippets/dart"}.call(e.prototype),f.Mode=e}),function(){ace.require(["ace/mode/dart"],function(t){typeof module=="object"&&typeof exports=="object"&&module&&(module.exports=t)})}();