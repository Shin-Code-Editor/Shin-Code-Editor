ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(t,d,p){"use strict";var h=t("../lib/oop"),g=t("./text_highlight_rules").TextHighlightRules,i=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},i.getTagRule(),{defaultToken:"comment.doc",caseInsensitive:!0}]}};h.inherits(i,g),i.getTagRule=function(a){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},i.getStartRule=function(a){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:a}},i.getEndRule=function(a){return{token:"comment.doc",regex:"\\*\\/",next:a}},d.DocCommentHighlightRules=i}),ace.define("ace/mode/c_cpp_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(t,d,p){"use strict";var h=t("../lib/oop"),g=t("./doc_comment_highlight_rules").DocCommentHighlightRules,i=t("./text_highlight_rules").TextHighlightRules,a=d.cFunctions="\\b(?:hypot(?:f|l)?|s(?:scanf|ystem|nprintf|ca(?:nf|lb(?:n(?:f|l)?|ln(?:f|l)?))|i(?:n(?:h(?:f|l)?|f|l)?|gn(?:al|bit))|tr(?:s(?:tr|pn)|nc(?:py|at|mp)|c(?:spn|hr|oll|py|at|mp)|to(?:imax|d|u(?:l(?:l)?|max)|k|f|l(?:d|l)?)|error|pbrk|ftime|len|rchr|xfrm)|printf|et(?:jmp|vbuf|locale|buf)|qrt(?:f|l)?|w(?:scanf|printf)|rand)|n(?:e(?:arbyint(?:f|l)?|xt(?:toward(?:f|l)?|after(?:f|l)?))|an(?:f|l)?)|c(?:s(?:in(?:h(?:f|l)?|f|l)?|qrt(?:f|l)?)|cos(?:h(?:f)?|f|l)?|imag(?:f|l)?|t(?:ime|an(?:h(?:f|l)?|f|l)?)|o(?:s(?:h(?:f|l)?|f|l)?|nj(?:f|l)?|pysign(?:f|l)?)|p(?:ow(?:f|l)?|roj(?:f|l)?)|e(?:il(?:f|l)?|xp(?:f|l)?)|l(?:o(?:ck|g(?:f|l)?)|earerr)|a(?:sin(?:h(?:f|l)?|f|l)?|cos(?:h(?:f|l)?|f|l)?|tan(?:h(?:f|l)?|f|l)?|lloc|rg(?:f|l)?|bs(?:f|l)?)|real(?:f|l)?|brt(?:f|l)?)|t(?:ime|o(?:upper|lower)|an(?:h(?:f|l)?|f|l)?|runc(?:f|l)?|gamma(?:f|l)?|mp(?:nam|file))|i(?:s(?:space|n(?:ormal|an)|cntrl|inf|digit|u(?:nordered|pper)|p(?:unct|rint)|finite|w(?:space|c(?:ntrl|type)|digit|upper|p(?:unct|rint)|lower|al(?:num|pha)|graph|xdigit|blank)|l(?:ower|ess(?:equal|greater)?)|al(?:num|pha)|gr(?:eater(?:equal)?|aph)|xdigit|blank)|logb(?:f|l)?|max(?:div|abs))|di(?:v|fftime)|_Exit|unget(?:c|wc)|p(?:ow(?:f|l)?|ut(?:s|c(?:har)?|wc(?:har)?)|error|rintf)|e(?:rf(?:c(?:f|l)?|f|l)?|x(?:it|p(?:2(?:f|l)?|f|l|m1(?:f|l)?)?))|v(?:s(?:scanf|nprintf|canf|printf|w(?:scanf|printf))|printf|f(?:scanf|printf|w(?:scanf|printf))|w(?:scanf|printf)|a_(?:start|copy|end|arg))|qsort|f(?:s(?:canf|e(?:tpos|ek))|close|tell|open|dim(?:f|l)?|p(?:classify|ut(?:s|c|w(?:s|c))|rintf)|e(?:holdexcept|set(?:e(?:nv|xceptflag)|round)|clearexcept|testexcept|of|updateenv|r(?:aiseexcept|ror)|get(?:e(?:nv|xceptflag)|round))|flush|w(?:scanf|ide|printf|rite)|loor(?:f|l)?|abs(?:f|l)?|get(?:s|c|pos|w(?:s|c))|re(?:open|e|ad|xp(?:f|l)?)|m(?:in(?:f|l)?|od(?:f|l)?|a(?:f|l|x(?:f|l)?)?))|l(?:d(?:iv|exp(?:f|l)?)|o(?:ngjmp|cal(?:time|econv)|g(?:1(?:p(?:f|l)?|0(?:f|l)?)|2(?:f|l)?|f|l|b(?:f|l)?)?)|abs|l(?:div|abs|r(?:int(?:f|l)?|ound(?:f|l)?))|r(?:int(?:f|l)?|ound(?:f|l)?)|gamma(?:f|l)?)|w(?:scanf|c(?:s(?:s(?:tr|pn)|nc(?:py|at|mp)|c(?:spn|hr|oll|py|at|mp)|to(?:imax|d|u(?:l(?:l)?|max)|k|f|l(?:d|l)?|mbs)|pbrk|ftime|len|r(?:chr|tombs)|xfrm)|to(?:b|mb)|rtomb)|printf|mem(?:set|c(?:hr|py|mp)|move))|a(?:s(?:sert|ctime|in(?:h(?:f|l)?|f|l)?)|cos(?:h(?:f|l)?|f|l)?|t(?:o(?:i|f|l(?:l)?)|exit|an(?:h(?:f|l)?|2(?:f|l)?|f|l)?)|b(?:s|ort))|g(?:et(?:s|c(?:har)?|env|wc(?:har)?)|mtime)|r(?:int(?:f|l)?|ound(?:f|l)?|e(?:name|alloc|wind|m(?:ove|quo(?:f|l)?|ainder(?:f|l)?))|a(?:nd|ise))|b(?:search|towc)|m(?:odf(?:f|l)?|em(?:set|c(?:hr|py|mp)|move)|ktime|alloc|b(?:s(?:init|towcs|rtowcs)|towc|len|r(?:towc|len))))\\b",e=function(){var r="break|case|continue|default|do|else|for|goto|if|_Pragma|return|switch|while|catch|operator|try|throw|using",o="asm|__asm__|auto|bool|_Bool|char|_Complex|double|enum|float|_Imaginary|int|long|short|signed|struct|typedef|union|unsigned|void|class|wchar_t|template|char16_t|char32_t",s="const|extern|register|restrict|static|volatile|inline|private|protected|public|friend|explicit|virtual|export|mutable|typename|constexpr|new|delete|alignas|alignof|decltype|noexcept|thread_local",l="and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eq|const_cast|dynamic_cast|reinterpret_cast|static_cast|sizeof|namespace",n="NULL|true|false|TRUE|FALSE|nullptr",c=this.$keywords=this.createKeywordMapper({"keyword.control":r,"storage.type":o,"storage.modifier":s,"keyword.operator":l,"variable.language":"this","constant.language":n},"identifier"),f="[a-zA-Z\\$_\xA1-\uFFFF][a-zA-Z\\d\\$_\xA1-\uFFFF]*\\b",m=/\\(?:['"?\\abfnrtv]|[0-7]{1,3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}U[a-fA-F\d]{8}|.)/.source,u="%"+/(\d+\$)?/.source+/[#0\- +']*/.source+/[,;:_]?/.source+/((-?\d+)|\*(-?\d+\$)?)?/.source+/(\.((-?\d+)|\*(-?\d+\$)?)?)?/.source+/(hh|h|ll|l|j|t|z|q|L|vh|vl|v|hv|hl)?/.source+/(\[[^"\]]+\]|[diouxXDOUeEfFgGaACcSspn%])/.source;this.$rules={start:[{token:"comment",regex:"//$",next:"start"},{token:"comment",regex:"//",next:"singleLineComment"},g.getStartRule("doc-start"),{token:"comment",regex:"\\/\\*",next:"comment"},{token:"string",regex:"'(?:"+m+"|.)?'"},{token:"string.start",regex:'"',stateName:"qqstring",next:[{token:"string",regex:/\\\s*$/,next:"qqstring"},{token:"constant.language.escape",regex:m},{token:"constant.language.escape",regex:u},{token:"string.end",regex:'"|$',next:"start"},{defaultToken:"string"}]},{token:"string.start",regex:'R"\\(',stateName:"rawString",next:[{token:"string.end",regex:'\\)"',next:"start"},{defaultToken:"string"}]},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"},{token:"keyword",regex:"#\\s*(?:include|import|pragma|line|define|undef)\\b",next:"directive"},{token:"keyword",regex:"#\\s*(?:endif|if|ifdef|else|elif|ifndef)\\b"},{token:"support.function.C99.c",regex:a},{token:c,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*"},{token:"keyword.operator",regex:/--|\+\+|<<=|>>=|>>>=|<>|&&|\|\||\?:|[*%\/+\-&\^|~!<>=]=?/},{token:"punctuation.operator",regex:"\\?|\\:|\\,|\\;|\\."},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],singleLineComment:[{token:"comment",regex:/\\$/,next:"singleLineComment"},{token:"comment",regex:/$/,next:"start"},{defaultToken:"comment"}],directive:[{token:"constant.other.multiline",regex:/\\/},{token:"constant.other.multiline",regex:/.*\\/},{token:"constant.other",regex:"\\s*<.+?>",next:"start"},{token:"constant.other",regex:'\\s*["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]',next:"start"},{token:"constant.other",regex:"\\s*['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']",next:"start"},{token:"constant.other",regex:/[^\\\/]+/,next:"start"}]},this.embedRules(g,"doc-",[g.getEndRule("start")]),this.normalizeRules()};h.inherits(e,i),d.c_cppHighlightRules=e}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(t,d,p){"use strict";var h=t("../range").Range,g=function(){};(function(){this.checkOutdent=function(i,a){return/^\s+$/.test(i)?/^\s*\}/.test(a):!1},this.autoOutdent=function(i,a){var e=i.getLine(a),r=e.match(/^(\s*\})/);if(!r)return 0;var o=r[1].length,s=i.findMatchingBracket({row:a,column:o});if(!s||s.row==a)return 0;var l=this.$getIndent(i.getLine(s.row));i.replace(new h(a,0,a,o-1),l)},this.$getIndent=function(i){return i.match(/^\s*/)[0]}}).call(g.prototype),d.MatchingBraceOutdent=g}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(t,d,p){"use strict";var h=t("../../lib/oop"),g=t("../../range").Range,i=t("./fold_mode").FoldMode,a=d.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};h.inherits(a,i),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,r,o){var s=e.getLine(o);if(this.singleLineBlockCommentRe.test(s)&&!this.startRegionRe.test(s)&&!this.tripleStarBlockCommentRe.test(s))return"";var l=this._getFoldWidgetBase(e,r,o);return!l&&this.startRegionRe.test(s)?"start":l},this.getFoldWidgetRange=function(e,r,o,s){var l=e.getLine(o);if(this.startRegionRe.test(l))return this.getCommentRegionBlock(e,l,o);var n=l.match(this.foldingStartMarker);if(n){var c=n.index;if(n[1])return this.openingBracketBlock(e,n[1],o,c);var f=e.getCommentFoldRange(o,c+n[0].length,1);return f&&!f.isMultiLine()&&(s?f=this.getSectionRange(e,o):r!="all"&&(f=null)),f}if(r!=="markbegin"){var n=l.match(this.foldingStopMarker);if(n){var c=n.index+n[0].length;return n[1]?this.closingBracketBlock(e,n[1],o,c):e.getCommentFoldRange(o,c,-1)}}},this.getSectionRange=function(e,r){var o=e.getLine(r),s=o.search(/\S/),l=r,n=o.length;r=r+1;for(var c=r,f=e.getLength();++r<f;){o=e.getLine(r);var m=o.search(/\S/);if(m!==-1){if(s>m)break;var u=this.getFoldWidgetRange(e,"all",r);if(u){if(u.start.row<=l)break;if(u.isMultiLine())r=u.end.row;else if(s==m)break}c=r}}return new g(l,n,c,e.getLine(c).length)},this.getCommentRegionBlock=function(e,r,o){for(var s=r.search(/\s*$/),l=e.getLength(),n=o,c=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,f=1;++o<l;){r=e.getLine(o);var m=c.exec(r);if(!!m&&(m[1]?f--:f++,!f))break}var u=o;if(u>n)return new g(n,s,u,r.length)}}.call(a.prototype)}),ace.define("ace/mode/c_cpp",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/c_cpp_highlight_rules","ace/mode/matching_brace_outdent","ace/range","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],function(t,d,p){"use strict";var h=t("../lib/oop"),g=t("./text").Mode,i=t("./c_cpp_highlight_rules").c_cppHighlightRules,a=t("./matching_brace_outdent").MatchingBraceOutdent,e=t("../range").Range,r=t("./behaviour/cstyle").CstyleBehaviour,o=t("./folding/cstyle").FoldMode,s=function(){this.HighlightRules=i,this.$outdent=new a,this.$behaviour=new r,this.foldingRules=new o};h.inherits(s,g),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(l,n,c){var f=this.$getIndent(n),m=this.getTokenizer().getLineTokens(n,l),u=m.tokens,k=m.state;if(u.length&&u[u.length-1].type=="comment")return f;if(l=="start"){var x=n.match(/^.*[\{\(\[]\s*$/);x&&(f+=c)}else if(l=="doc-start"){if(k=="start")return"";var x=n.match(/^\s*(\/?)\*/);x&&(x[1]&&(f+=" "),f+="* ")}return f},this.checkOutdent=function(l,n,c){return this.$outdent.checkOutdent(n,c)},this.autoOutdent=function(l,n,c){this.$outdent.autoOutdent(n,c)},this.$id="ace/mode/c_cpp",this.snippetFileId="ace/snippets/c_cpp"}.call(s.prototype),d.Mode=s}),ace.define("ace/mode/nix_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(t,d,p){"use strict";var h=t("../lib/oop"),g=t("./text_highlight_rules").TextHighlightRules,i=function(){var a="true|false",e="with|import|if|else|then|inherit",r="let|in|rec",o=this.createKeywordMapper({"constant.language.nix":a,"keyword.control.nix":e,"keyword.declaration.nix":r},"identifier");this.$rules={start:[{token:"comment",regex:/#.*$/},{token:"comment",regex:/\/\*/,next:"comment"},{token:"constant",regex:"<[^>]+>"},{regex:"(==|!=|<=?|>=?)",token:["keyword.operator.comparison.nix"]},{regex:"((?:[+*/%-]|\\~)=)",token:["keyword.operator.assignment.arithmetic.nix"]},{regex:"=",token:"keyword.operator.assignment.nix"},{token:"string",regex:"''",next:"qqdoc"},{token:"string",regex:"'",next:"qstring"},{token:"string",regex:'"',push:"qqstring"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:o,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{regex:"}",token:function(s,l,n){return n[1]&&n[1].charAt(0)=="q"?"constant.language.escape":"text"},next:"pop"}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],qqdoc:[{token:"constant.language.escape",regex:/\$\{/,push:"start"},{token:"string",regex:"''",next:"pop"},{defaultToken:"string"}],qqstring:[{token:"constant.language.escape",regex:/\$\{/,push:"start"},{token:"string",regex:'"',next:"pop"},{defaultToken:"string"}],qstring:[{token:"constant.language.escape",regex:/\$\{/,push:"start"},{token:"string",regex:"'",next:"pop"},{defaultToken:"string"}]},this.normalizeRules()};h.inherits(i,g),d.NixHighlightRules=i}),ace.define("ace/mode/nix",["require","exports","module","ace/lib/oop","ace/mode/c_cpp","ace/mode/nix_highlight_rules","ace/mode/folding/cstyle"],function(t,d,p){"use strict";var h=t("../lib/oop"),g=t("./c_cpp").Mode,i=t("./nix_highlight_rules").NixHighlightRules,a=t("./folding/cstyle").FoldMode,e=function(){g.call(this),this.HighlightRules=i,this.foldingRules=new a,this.$behaviour=this.$defaultBehaviour};h.inherits(e,g),function(){this.lineCommentStart="#",this.blockComment={start:"/*",end:"*/"},this.$id="ace/mode/nix"}.call(e.prototype),d.Mode=e}),function(){ace.require(["ace/mode/nix"],function(t){typeof module=="object"&&typeof exports=="object"&&module&&(module.exports=t)})}();