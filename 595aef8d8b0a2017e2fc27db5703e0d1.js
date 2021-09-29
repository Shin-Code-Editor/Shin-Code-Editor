ace.define("ace/mode/folding/coffee",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],(function(e,t,i){"use strict";var o=e("../../lib/oop"),r=e("./fold_mode").FoldMode,n=e("../../range").Range,a=t.FoldMode=function(){};o.inherits(a,r),function(){this.getFoldWidgetRange=function(e,t,i){var o=this.indentationBlock(e,i);if(o)return o;var r=/\S/,a=e.getLine(i),l=a.search(r);if(-1!=l&&"#"==a[l]){var s=a.length,d=e.getLength(),g=i,c=i;while(++i<d){a=e.getLine(i);var h=a.search(r);if(-1!=h){if("#"!=a[h])break;c=i}}if(c>g){var u=e.getLine(c).length;return new n(g,s,c,u)}}},this.getFoldWidget=function(e,t,i){var o=e.getLine(i),r=o.search(/\S/),n=e.getLine(i+1),a=e.getLine(i-1),l=a.search(/\S/),s=n.search(/\S/);if(-1==r)return e.foldWidgets[i-1]=-1!=l&&l<s?"start":"","";if(-1==l){if(r==s&&"#"==o[r]&&"#"==n[r])return e.foldWidgets[i-1]="",e.foldWidgets[i+1]="","start"}else if(l==r&&"#"==o[r]&&"#"==a[r]&&-1==e.getLine(i-2).search(/\S/))return e.foldWidgets[i-1]="start",e.foldWidgets[i+1]="","";return e.foldWidgets[i-1]=-1!=l&&l<r?"start":"",r<s?"start":""}}.call(a.prototype)})),ace.define("ace/mode/space_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,i){"use strict";var o=e("../lib/oop"),r=e("./text_highlight_rules").TextHighlightRules,n=function(){this.$rules={start:[{token:"empty_line",regex:/ */,next:"key"},{token:"empty_line",regex:/$/,next:"key"}],key:[{token:"variable",regex:/\S+/},{token:"empty_line",regex:/$/,next:"start"},{token:"keyword.operator",regex:/ /,next:"value"}],value:[{token:"keyword.operator",regex:/$/,next:"start"},{token:"string",regex:/[^$]/}]}};o.inherits(n,r),t.SpaceHighlightRules=n})),ace.define("ace/mode/space",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/folding/coffee","ace/mode/space_highlight_rules"],(function(e,t,i){"use strict";var o=e("../lib/oop"),r=e("./text").Mode,n=e("./folding/coffee").FoldMode,a=e("./space_highlight_rules").SpaceHighlightRules,l=function(){this.HighlightRules=a,this.foldingRules=new n,this.$behaviour=this.$defaultBehaviour};o.inherits(l,r),function(){this.$id="ace/mode/space"}.call(l.prototype),t.Mode=l})),function(){ace.require(["ace/mode/space"],(function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)}))}();