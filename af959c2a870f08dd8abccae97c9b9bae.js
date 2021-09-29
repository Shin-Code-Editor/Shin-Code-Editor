ace.define("ace/snippets/lua",["require","exports","module"],function(n,e,i){"use strict";e.snippetText=`snippet #!
	#!/usr/bin/env lua
	$1
snippet local
	local \${1:x} = \${2:1}
snippet fun
	function \${1:fname}(\${2:...})
		\${3:-- body}
	end
snippet for
	for \${1:i}=\${2:1},\${3:10} do
		\${4:print(i)}
	end
snippet forp
	for \${1:i},\${2:v} in pairs(\${3:table_name}) do
	   \${4:-- body}
	end
snippet fori
	for \${1:i},\${2:v} in ipairs(\${3:table_name}) do
	   \${4:-- body}
	end
`,e.scope="lua"}),function(){ace.require(["ace/snippets/lua"],function(n){typeof module=="object"&&typeof exports=="object"&&module&&(module.exports=n)})}();
