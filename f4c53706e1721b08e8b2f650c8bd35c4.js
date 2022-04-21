ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,a,l){"use strict";var n=e("../lib/oop"),o=e("./text_highlight_rules").TextHighlightRules,i=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},i.getTagRule(),{defaultToken:"comment.doc",caseInsensitive:!0}]}};n.inherits(i,o),i.getTagRule=function(t){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},i.getStartRule=function(t){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:t}},i.getEndRule=function(t){return{token:"comment.doc",regex:"\\*\\/",next:t}},a.DocCommentHighlightRules=i}),ace.define("ace/mode/edifact_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(e,a,l){"use strict";var n=e("../lib/oop"),o=e("./doc_comment_highlight_rules").DocCommentHighlightRules,i=e("./text_highlight_rules").TextHighlightRules,t=function(){var r="UNH",c="ADR|AGR|AJT|ALC|ALI|APP|APR|ARD|ARR|ASI|ATT|AUT|BAS|BGM|BII|BUS|CAV|CCD|CCI|CDI|CDS|CDV|CED|CIN|CLA|CLI|CMP|CNI|CNT|COD|COM|COT|CPI|CPS|CPT|CST|CTA|CUX|DAM|DFN|DGS|DII|DIM|DLI|DLM|DMS|DOC|DRD|DSG|DSI|DTM|EDT|EFI|ELM|ELU|ELV|EMP|EQA|EQD|EQN|ERC|ERP|EVE|FCA|FII|FNS|FNT|FOR|FSQ|FTX|GDS|GEI|GID|GIN|GIR|GOR|GPO|GRU|HAN|HYN|ICD|IDE|IFD|IHC|IMD|IND|INP|INV|IRQ|LAN|LIN|LOC|MEA|MEM|MKS|MOA|MSG|MTD|NAD|NAT|PAC|PAI|PAS|PCC|PCD|PCI|PDI|PER|PGI|PIA|PNA|POC|PRC|PRI|PRV|PSD|PTY|PYT|QRS|QTY|QUA|QVR|RCS|REL|RFF|RJL|RNG|ROD|RSL|RTE|SAL|SCC|SCD|SEG|SEL|SEQ|SFI|SGP|SGU|SPR|SPS|STA|STC|STG|STS|TAX|TCC|TDT|TEM|TMD|TMP|TOD|TPL|TRU|TSR|UNB|UNZ|UNT|UGH|UGT|UNS|VLI",r="UNH",g="null|Infinity|NaN|undefined",s="",u="BY|SE|ON|INV|JP|UNOA",h=this.createKeywordMapper({"variable.language":"this",keyword:u,"entity.name.segment":c,"entity.name.header":r,"constant.language":g,"support.function":s},"identifier");this.$rules={start:[{token:"punctuation.operator",regex:"\\+.\\+"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:h,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"\\+"},{token:"punctuation.operator",regex:"\\:|'"},{token:"identifier",regex:"\\:D\\:"}]},this.embedRules(o,"doc-",[o.getEndRule("start")])};t.metaData={fileTypes:["edi"],keyEquivalent:"^~E",name:"Edifact",scopeName:"source.edifact"},n.inherits(t,i),a.EdifactHighlightRules=t}),ace.define("ace/mode/edifact",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/edifact_highlight_rules"],function(e,a,l){"use strict";var n=e("../lib/oop"),o=e("./text").Mode,i=e("./edifact_highlight_rules").EdifactHighlightRules,t=function(){this.HighlightRules=i};n.inherits(t,o),function(){this.$id="ace/mode/edifact",this.snippetFileId="ace/snippets/edifact"}.call(t.prototype),a.Mode=t}),function(){ace.require(["ace/mode/edifact"],function(e){typeof module=="object"&&typeof exports=="object"&&module&&(module.exports=e)})}();