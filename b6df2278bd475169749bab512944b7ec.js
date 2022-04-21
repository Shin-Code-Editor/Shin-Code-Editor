ace.define("ace/mode/folding/coffee",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],function(a,d,m){"use strict";var x=a("../../lib/oop"),f=a("./fold_mode").FoldMode,u=a("../../range").Range,l=d.FoldMode=function(){};x.inherits(l,f),function(){this.getFoldWidgetRange=function(t,h,e){var o=this.indentationBlock(t,e);if(o)return o;var n=/\S/,r=t.getLine(e),i=r.search(n);if(!(i==-1||r[i]!="#")){for(var g=r.length,s=t.getLength(),p=e,c=e;++e<s;){r=t.getLine(e);var v=r.search(n);if(v!=-1){if(r[v]!="#")break;c=e}}if(c>p){var k=t.getLine(c).length;return new u(p,g,c,k)}}},this.getFoldWidget=function(t,h,e){var o=t.getLine(e),n=o.search(/\S/),r=t.getLine(e+1),i=t.getLine(e-1),g=i.search(/\S/),s=r.search(/\S/);if(n==-1)return t.foldWidgets[e-1]=g!=-1&&g<s?"start":"","";if(g==-1){if(n==s&&o[n]=="#"&&r[n]=="#")return t.foldWidgets[e-1]="",t.foldWidgets[e+1]="","start"}else if(g==n&&o[n]=="#"&&i[n]=="#"&&t.getLine(e-2).search(/\S/)==-1)return t.foldWidgets[e-1]="start",t.foldWidgets[e+1]="","";return g!=-1&&g<n?t.foldWidgets[e-1]="start":t.foldWidgets[e-1]="",n<s?"start":""}}.call(l.prototype)}),ace.define("ace/mode/snippets",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/text_highlight_rules","ace/mode/folding/coffee"],function(a,d,m){"use strict";var x=a("../lib/oop"),f=a("./text").Mode,u=a("./text_highlight_rules").TextHighlightRules,l=function(){var o="SELECTION|CURRENT_WORD|SELECTED_TEXT|CURRENT_LINE|LINE_INDEX|LINE_NUMBER|SOFT_TABS|TAB_SIZE|FILENAME|FILEPATH|FULLNAME";this.$rules={start:[{token:"constant.language.escape",regex:/\\[\$}`\\]/},{token:"keyword",regex:"\\$(?:TM_)?(?:"+o+")\\b"},{token:"variable",regex:"\\$\\w+"},{onMatch:function(n,r,i){return i[1]?i[1]++:i.unshift(r,1),this.tokenName},tokenName:"markup.list",regex:"\\${",next:"varDecl"},{onMatch:function(n,r,i){return i[1]?(i[1]--,i[1]||i.splice(0,2),this.tokenName):"text"},tokenName:"markup.list",regex:"}"},{token:"doc.comment",regex:/^\${2}-{5,}$/}],varDecl:[{regex:/\d+\b/,token:"constant.numeric"},{token:"keyword",regex:"(?:TM_)?(?:"+o+")\\b"},{token:"variable",regex:"\\w+"},{regex:/:/,token:"punctuation.operator",next:"start"},{regex:/\//,token:"string.regex",next:"regexp"},{regex:"",next:"start"}],regexp:[{regex:/\\./,token:"escape"},{regex:/\[/,token:"regex.start",next:"charClass"},{regex:"/",token:"string.regex",next:"format"},{token:"string.regex",regex:"."}],charClass:[{regex:"\\.",token:"escape"},{regex:"\\]",token:"regex.end",next:"regexp"},{token:"string.regex",regex:"."}],format:[{regex:/\\[ulULE]/,token:"keyword"},{regex:/\$\d+/,token:"variable"},{regex:"/[gim]*:?",token:"string.regex",next:"start"},{token:"string",regex:"."}]}};x.inherits(l,u),d.SnippetHighlightRules=l;var t=function(){this.$rules={start:[{token:"text",regex:"^\\t",next:"sn-start"},{token:"invalid",regex:/^ \s*/},{token:"comment",regex:/^#.*/},{token:"constant.language.escape",regex:"^regex ",next:"regex"},{token:"constant.language.escape",regex:"^(trigger|endTrigger|name|snippet|guard|endGuard|tabTrigger|key)\\b"}],regex:[{token:"text",regex:"\\."},{token:"keyword",regex:"/"},{token:"empty",regex:"$",next:"start"}]},this.embedRules(l,"sn-",[{token:"text",regex:"^\\t",next:"sn-start"},{onMatch:function(o,n,r){return r.splice(r.length),this.tokenName},tokenName:"text",regex:"^(?!	)",next:"start"}])};x.inherits(t,u),d.SnippetGroupHighlightRules=t;var h=a("./folding/coffee").FoldMode,e=function(){this.HighlightRules=t,this.foldingRules=new h,this.$behaviour=this.$defaultBehaviour};x.inherits(e,f),function(){this.$indentWithTabs=!0,this.lineCommentStart="#",this.$id="ace/mode/snippets",this.snippetFileId="ace/snippets/snippets"}.call(e.prototype),d.Mode=e}),function(){ace.require(["ace/mode/snippets"],function(a){typeof module=="object"&&typeof exports=="object"&&module&&(module.exports=a)})}();