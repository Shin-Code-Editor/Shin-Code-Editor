ace.define("ace/mode/textile_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(i,u,l){"use strict";var h=i("../lib/oop"),r=i("./text_highlight_rules").TextHighlightRules,e=function(){this.$rules={start:[{token:function(t){return t.charAt(0)=="h"?"markup.heading."+t.charAt(1):"markup.heading"},regex:"h1|h2|h3|h4|h5|h6|bq|p|bc|pre",next:"blocktag"},{token:"keyword",regex:"[\\*]+|[#]+"},{token:"text",regex:".+"}],blocktag:[{token:"keyword",regex:"\\. ",next:"start"},{token:"keyword",regex:"\\(",next:"blocktagproperties"}],blocktagproperties:[{token:"keyword",regex:"\\)",next:"blocktag"},{token:"string",regex:"[a-zA-Z0-9\\-_]+"},{token:"keyword",regex:"#"}]}};h.inherits(e,r),u.TextileHighlightRules=e}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(i,u,l){"use strict";var h=i("../range").Range,r=function(){};(function(){this.checkOutdent=function(e,t){return/^\s+$/.test(e)?/^\s*\}/.test(t):!1},this.autoOutdent=function(e,t){var c=e.getLine(t),a=c.match(/^(\s*\})/);if(!a)return 0;var o=a[1].length,n=e.findMatchingBracket({row:t,column:o});if(!n||n.row==t)return 0;var s=this.$getIndent(e.getLine(n.row));e.replace(new h(t,0,t,o-1),s)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(r.prototype),u.MatchingBraceOutdent=r}),ace.define("ace/mode/textile",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/textile_highlight_rules","ace/mode/matching_brace_outdent"],function(i,u,l){"use strict";var h=i("../lib/oop"),r=i("./text").Mode,e=i("./textile_highlight_rules").TextileHighlightRules,t=i("./matching_brace_outdent").MatchingBraceOutdent,c=function(){this.HighlightRules=e,this.$outdent=new t,this.$behaviour=this.$defaultBehaviour};h.inherits(c,r),function(){this.type="text",this.getNextLineIndent=function(a,o,n){return a=="intag"?n:""},this.checkOutdent=function(a,o,n){return this.$outdent.checkOutdent(o,n)},this.autoOutdent=function(a,o,n){this.$outdent.autoOutdent(o,n)},this.$id="ace/mode/textile",this.snippetFileId="ace/snippets/textile"}.call(c.prototype),u.Mode=c}),function(){ace.require(["ace/mode/textile"],function(i){typeof module=="object"&&typeof exports=="object"&&module&&(module.exports=i)})}();