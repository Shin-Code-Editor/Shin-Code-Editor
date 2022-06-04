ace.define("ace/mode/cirru_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(r,d,x){"use strict";var g=r("../lib/oop"),u=r("./text_highlight_rules").TextHighlightRules,a=function(){this.$rules={start:[{token:"constant.numeric",regex:/[\d\.]+/},{token:"comment.line.double-dash",regex:/--/,next:"comment"},{token:"storage.modifier",regex:/\(/},{token:"storage.modifier",regex:/,/,next:"line"},{token:"support.function",regex:/[^\(\)"\s{}\[\]]+/,next:"line"},{token:"string.quoted.double",regex:/"/,next:"string"},{token:"storage.modifier",regex:/\)/}],comment:[{token:"comment.line.double-dash",regex:/ +[^\n]+/,next:"start"}],string:[{token:"string.quoted.double",regex:/"/,next:"line"},{token:"constant.character.escape",regex:/\\/,next:"escape"},{token:"string.quoted.double",regex:/[^\\"]+/}],escape:[{token:"constant.character.escape",regex:/./,next:"string"}],line:[{token:"constant.numeric",regex:/[\d\.]+/},{token:"markup.raw",regex:/^\s*/,next:"start"},{token:"storage.modifier",regex:/\$/,next:"start"},{token:"variable.parameter",regex:/[^\(\)"\s{}\[\]]+/},{token:"storage.modifier",regex:/\(/,next:"start"},{token:"storage.modifier",regex:/\)/},{token:"markup.raw",regex:/^ */,next:"start"},{token:"string.quoted.double",regex:/"/,next:"string"}]}};g.inherits(a,u),d.CirruHighlightRules=a}),ace.define("ace/mode/folding/coffee",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],function(r,d,x){"use strict";var g=r("../../lib/oop"),u=r("./fold_mode").FoldMode,a=r("../../range").Range,h=d.FoldMode=function(){};g.inherits(h,u),function(){this.getFoldWidgetRange=function(e,p,t){var l=this.indentationBlock(e,t);if(l)return l;var o=/\S/,i=e.getLine(t),c=i.search(o);if(!(c==-1||i[c]!="#")){for(var n=i.length,f=e.getLength(),m=t,s=t;++t<f;){i=e.getLine(t);var v=i.search(o);if(v!=-1){if(i[v]!="#")break;s=t}}if(s>m){var k=e.getLine(s).length;return new a(m,n,s,k)}}},this.getFoldWidget=function(e,p,t){var l=e.getLine(t),o=l.search(/\S/),i=e.getLine(t+1),c=e.getLine(t-1),n=c.search(/\S/),f=i.search(/\S/);if(o==-1)return e.foldWidgets[t-1]=n!=-1&&n<f?"start":"","";if(n==-1){if(o==f&&l[o]=="#"&&i[o]=="#")return e.foldWidgets[t-1]="",e.foldWidgets[t+1]="","start"}else if(n==o&&l[o]=="#"&&c[o]=="#"&&e.getLine(t-2).search(/\S/)==-1)return e.foldWidgets[t-1]="start",e.foldWidgets[t+1]="","";return n!=-1&&n<o?e.foldWidgets[t-1]="start":e.foldWidgets[t-1]="",o<f?"start":""}}.call(h.prototype)}),ace.define("ace/mode/cirru",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/cirru_highlight_rules","ace/mode/folding/coffee"],function(r,d,x){"use strict";var g=r("../lib/oop"),u=r("./text").Mode,a=r("./cirru_highlight_rules").CirruHighlightRules,h=r("./folding/coffee").FoldMode,e=function(){this.HighlightRules=a,this.foldingRules=new h,this.$behaviour=this.$defaultBehaviour};g.inherits(e,u),function(){this.lineCommentStart="--",this.$id="ace/mode/cirru"}.call(e.prototype),d.Mode=e}),function(){ace.require(["ace/mode/cirru"],function(r){typeof module=="object"&&typeof exports=="object"&&module&&(module.exports=r)})}();