import { extname as _extname, basename, relative } from "path";
import { fileExtensions } from "@/assets/extensions/material-icon-theme/dist/material-icons";

const fileExtensionsPlainText = {
  htm: "html",
  xhtml: "html",
  html_vm: "html",
  html: "html",
  asp: "html",
  jade: "pug",
  pug: "pug",
  md: "markdown",
  markdown: "markdown",
  rst: "markdown",
  blink: "blink",
  css: "css",
  scss: "sass",
  sass: "sass",
  less: "less",
  json: "json",
  tsbuildinfo: "json",
  json5: "json",
  jsonl: "json",
  ndjson: "json",
  jinja: "jinja",
  jinja2: "jinja",
  j2: "jinja",
  "jinja-html": "jinja",
  proto: "proto",
  "sublime-project": "sublime",
  "sublime-workspace": "sublime",
  tw: "twine",
  twee: "twine",
  yaml: "yaml",
  "YAML-tmLanguage": "yaml",
  yml: "yaml",
  xml: "xml",
  plist: "xml",
  xsd: "xml",
  dtd: "xml",
  xsl: "xml",
  xslt: "xml",
  resx: "xml",
  iml: "xml",
  xquery: "xml",
  tmLanguage: "xml",
  manifest: "xml",
  project: "xml",
  esx: "javascript",
  mjs: "javascript",
  js: "javascript",
  jsx: "react",
  tsx: "react_ts",
  "routing.ts": "routing",
  "routing.tsx": "routing",
  "routing.js": "routing",
  "routing.jsx": "routing",
  "routes.ts": "routing",
  "routes.tsx": "routing",
  "routes.js": "routing",
  "routes.jsx": "routing",
  ini: "settings",
  dlc: "settings",
  dll: "settings",
  config: "settings",
  conf: "settings",
  properties: "settings",
  prop: "settings",
  settings: "settings",
  option: "settings",
  props: "settings",
  toml: "settings",
  prefs: "settings",
  "sln.dotsettings": "settings",
  "sln.dotsettings.user": "settings",
  cfg: "settings",
  "d.ts": "typescript-def",
  marko: "markojs",
  astro: "astro",
  pdf: "pdf",
  xlsx: "table",
  xls: "table",
  csv: "table",
  tsv: "table",
  vscodeignore: "vscode",
  vsixmanifest: "vscode",
  vsix: "vscode",
  "code-workplace": "vscode",
  csproj: "visualstudio",
  ruleset: "visualstudio",
  sln: "visualstudio",
  suo: "visualstudio",
  vb: "visualstudio",
  vbs: "visualstudio",
  vcxitems: "visualstudio",
  "vcxitems.filters": "visualstudio",
  vcxproj: "visualstudio",
  "vcxproj.filters": "visualstudio",
  pdb: "database",
  sql: "database",
  pks: "database",
  pkb: "database",
  accdb: "database",
  mdb: "database",
  sqlite: "database",
  sqlite3: "database",
  pgsql: "database",
  postgres: "database",
  psql: "database",
  db: "database",
  db3: "database",
  kql: "kusto",
  cs: "csharp",
  csx: "csharp",
  qs: "qsharp",
  vala: "vala",
  zig: "zig",
  java: "java",
  jar: "java",
  jsp: "java",
  c: "c",
  m: "c",
  i: "c",
  mi: "c",
  h: "h",
  cc: "cpp",
  cpp: "cpp",
  cxx: "cpp",
  "c++": "cpp",
  cp: "cpp",
  mm: "cpp",
  mii: "cpp",
  ii: "cpp",
  hh: "hpp",
  hpp: "hpp",
  hxx: "hpp",
  "h++": "hpp",
  hp: "hpp",
  tcc: "hpp",
  inl: "hpp",
  go: "go",
  py: "python",
  pyc: "python-misc",
  whl: "python-misc",
  url: "url",
  sh: "console",
  ksh: "console",
  csh: "console",
  tcsh: "console",
  zsh: "console",
  bash: "console",
  bat: "console",
  cmd: "console",
  awk: "console",
  fish: "console",
  exp: "console",
  ps1: "powershell",
  psm1: "powershell",
  psd1: "powershell",
  ps1xml: "powershell",
  psc1: "powershell",
  pssc: "powershell",
  gradle: "gradle",
  doc: "word",
  docx: "word",
  rtf: "word",
  cer: "certificate",
  cert: "certificate",
  crt: "certificate",
  pub: "key",
  key: "key",
  pem: "key",
  asc: "key",
  gpg: "key",
  passwd: "key",
  woff: "font",
  woff2: "font",
  ttf: "font",
  eot: "font",
  suit: "font",
  otf: "font",
  bmap: "font",
  fnt: "font",
  odttf: "font",
  ttc: "font",
  font: "font",
  fonts: "font",
  sui: "font",
  ntf: "font",
  mrf: "font",
  lib: "lib",
  bib: "lib",
  rb: "ruby",
  erb: "ruby",
  fs: "fsharp",
  fsx: "fsharp",
  fsi: "fsharp",
  fsproj: "fsharp",
  swift: "swift",
  ino: "arduino",
  dockerignore: "docker",
  dockerfile: "docker",
  tex: "tex",
  sty: "tex",
  dtx: "tex",
  ltx: "tex",
  vdi: "virtual",
  vbox: "virtual",
  "vbox-prev": "virtual",
  ics: "email",
  coffee: "coffee",
  cson: "coffee",
  iced: "coffee",
  txt: "document",
  graphql: "graphql",
  gql: "graphql",
  rs: "rust",
  raml: "raml",
  xaml: "xaml",
  hs: "haskell",
  kt: "kotlin",
  kts: "kotlin",
  patch: "git",
  lua: "lua",
  clj: "clojure",
  cljs: "clojure",
  cljc: "clojure",
  groovy: "groovy",
  r: "r",
  rmd: "r",
  dart: "dart",
  as: "actionscript",
  mxml: "mxml",
  ahk: "autohotkey",
  swf: "flash",
  swc: "swc",
  cmake: "cmake",
  asm: "assembly",
  a51: "assembly",
  inc: "assembly",
  nasm: "assembly",
  s: "assembly",
  ms: "assembly",
  agc: "assembly",
  ags: "assembly",
  aea: "assembly",
  argus: "assembly",
  mitigus: "assembly",
  binsource: "assembly",
  vue: "vue",
  ml: "ocaml",
  mli: "ocaml",
  cmx: "ocaml",
  "js.map": "javascript-map",
  "mjs.map": "javascript-map",
  "cjs.map": "javascript-map",
  "css.map": "css-map",
  lock: "lock",
  hbs: "handlebars",
  mustache: "handlebars",
  pm: "perl",
  raku: "perl",
  hx: "haxe",
  "spec.ts": "test-ts",
  "e2e-spec.ts": "test-ts",
  "test.ts": "test-ts",
  "ts.snap": "test-ts",
  "spec.tsx": "test-jsx",
  "test.tsx": "test-jsx",
  "tsx.snap": "test-jsx",
  "spec.jsx": "test-jsx",
  "test.jsx": "test-jsx",
  "jsx.snap": "test-jsx",
  "spec.js": "test-js",
  "e2e-spec.js": "test-js",
  "test.js": "test-js",
  "js.snap": "test-js",
  "module.ts": "angular",
  "module.js": "angular",
  "ng-template": "angular",
  "component.ts": "angular-component",
  "component.js": "angular-component",
  "guard.ts": "angular-guard",
  "guard.js": "angular-guard",
  "service.ts": "angular-service",
  "service.js": "angular-service",
  "pipe.ts": "angular-pipe",
  "pipe.js": "angular-pipe",
  "filter.js": "angular-pipe",
  "directive.ts": "angular-directive",
  "directive.js": "angular-directive",
  "resolver.ts": "angular-resolver",
  "resolver.js": "angular-resolver",
  pp: "puppet",
  ex: "elixir",
  exs: "elixir",
  eex: "elixir",
  leex: "elixir",
  ls: "livescript",
  erl: "erlang",
  twig: "twig",
  jl: "julia",
  elm: "elm",
  pure: "purescript",
  purs: "purescript",
  tpl: "smarty",
  styl: "stylus",
  re: "reason",
  rei: "reason",
  cmj: "bucklescript",
  merlin: "merlin",
  v: "verilog",
  vhd: "verilog",
  sv: "verilog",
  svh: "verilog",
  nb: "mathematica",
  wl: "wolframlanguage",
  wls: "wolframlanguage",
  njk: "nunjucks",
  nunjucks: "nunjucks",
  robot: "robot",
  sol: "solidity",
  au3: "autoit",
  haml: "haml",
  yang: "yang",
  mjml: "mjml",
  tf: "terraform",
  "tf.json": "terraform",
  tfvars: "terraform",
  tfstate: "terraform",
  "blade.php": "laravel",
  "inky.php": "laravel",
  applescript: "applescript",
  ipa: "applescript",
  cake: "cake",
  feature: "cucumber",
  nim: "nim",
  nimble: "nim",
  apib: "apiblueprint",
  apiblueprint: "apiblueprint",
  riot: "riot",
  tag: "riot",
  vfl: "vfl",
  kl: "kl",
  pcss: "postcss",
  sss: "postcss",
  todo: "todo",
  cfml: "coldfusion",
  cfc: "coldfusion",
  lucee: "coldfusion",
  cfm: "coldfusion",
  cabal: "cabal",
  nix: "nix",
  slim: "slim",
  http: "http",
  rest: "http",
  rql: "restql",
  restql: "restql",
  kv: "kivy",
  graphcool: "graphcool",
  sbt: "sbt",
  apk: "android",
  smali: "android",
  dex: "android",
  env: "tune",
  "gitlab-ci.yml": "gitlab",
  jenkinsfile: "jenkins",
  jenkins: "jenkins",
  cr: "crystal",
  ecr: "crystal",
  "drone.yml": "drone",
  cu: "cuda",
  cuh: "cuda",
  log: "log",
  def: "dotjs",
  dot: "dotjs",
  jst: "dotjs",
  ejs: "ejs",
  ".wakatime-project": "wakatime",
  pde: "processing",
  "stories.js": "storybook",
  "stories.jsx": "storybook",
  "story.js": "storybook",
  "story.jsx": "storybook",
  "stories.ts": "storybook",
  "stories.tsx": "storybook",
  "story.ts": "storybook",
  "story.tsx": "storybook",
  wpy: "wepy",
  hcl: "hcl",
  san: "san",
  djt: "django",
  red: "red",
  fxp: "foxpro",
  prg: "foxpro",
  pot: "i18n",
  po: "i18n",
  mo: "i18n",
  wat: "webassembly",
  wasm: "webassembly",
  ipynb: "jupyter",
  d: "d",
  mdx: "mdx",
  bal: "ballerina",
  balx: "ballerina",
  rkt: "racket",
  bzl: "bazel",
  bazel: "bazel",
  mint: "mint",
  vm: "velocity",
  fhtml: "velocity",
  vtl: "velocity",
  gd: "godot",
  godot: "godot-assets",
  tres: "godot-assets",
  tscn: "godot-assets",
  "azure-pipelines.yml": "azure-pipelines",
  "azure-pipelines.yaml": "azure-pipelines",
  azcli: "azure",
  vagrantfile: "vagrant",
  prisma: "prisma",
  cshtml: "razor",
  vbhtml: "razor",
  abc: "abc",
  ad: "asciidoc",
  adoc: "asciidoc",
  asciidoc: "asciidoc",
  edge: "edge",
  ss: "scheme",
  scm: "scheme",
  lisp: "lisp",
  lsp: "lisp",
  cl: "lisp",
  fast: "lisp",
  stl: "3d",
  obj: "3d",
  ac: "3d",
  blend: "3d",
  mesh: "3d",
  mqo: "3d",
  pmd: "3d",
  pmx: "3d",
  skp: "3d",
  vac: "3d",
  vdp: "3d",
  vox: "3d",
  svg: "svg",
  svelte: "svelte",
  vimrc: "vim",
  gvimrc: "vim",
  exrc: "vim",
  vim: "vim",
  viminfo: "vim",
  moon: "moonscript",
  prw: "advpl_prw",
  prx: "advpl_prw",
  ptm: "advpl_ptm",
  tlpp: "advpl_tlpp",
  ch: "advpl_include",
  iso: "disc",
  f: "fortran",
  f77: "fortran",
  f90: "fortran",
  f95: "fortran",
  f03: "fortran",
  f08: "fortran",
  tcl: "tcl",
  liquid: "liquid",
  p: "prolog",
  pro: "prolog",
  pl: "prolog",
  coco: "coconut",
  sketch: "sketch",
  pwn: "pawn",
  amx: "pawn",
  "4th": "forth",
  fth: "forth",
  frt: "forth",
  iuml: "uml",
  pu: "uml",
  puml: "uml",
  plantuml: "uml",
  wsd: "uml",
  wrap: "meson",
  dhall: "dhall",
  dhallb: "dhall",
  sml: "sml",
  mlton: "sml",
  mlb: "sml",
  sig: "sml",
  fun: "sml",
  cm: "sml",
  lex: "sml",
  use: "sml",
  grm: "sml",
  opam: "opam",
  imba: "imba",
  drawio: "drawio",
  dio: "drawio",
  pas: "pascal",
  unity: "shaderlab",
  sas: "sas",
  sas7bdat: "sas",
  sashdat: "sas",
  astore: "sas",
  ast: "sas",
  sast: "sas",
  nupkg: "nuget",
  command: "command",
  dsc: "denizenscript",
  "code-search": "search",
  mcfunction: "minecraft",
  res: "rescript",
  resi: "rescript",
  b: "brainfuck",
  bf: "brainfuck",
  bicep: "bicep",
  cob: "cobol",
  cbl: "cobol",
  gr: "grain",
  lol: "lolcode",
  idr: "idris",
  ibc: "idris",
  pipeline: "pipeline",
  rego: "opa",
  windi: "windicss",
  scala: "scala",
  sc: "scala",
  ly: "lilypond",
  pgn: "chess",
  fen: "chess",
  gmi: "gemini",
  gemini: "gemini",
};

export function extname(path) {
  return _extname(path).replace(/^\./g, "");
}

export function b64toBlob(b64Data, contentType = "", sliceSize = 512) {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: contentType });
  return blob;
}

export function isPlainText(path) {
  return !extname(path) || extname(path) in fileExtensionsPlainText;
}

export function getType(path) {
  return fileExtensions[extname(path)] || "bin";
}

export function isBase64(str) {
  try {
    return btoa(atob(str)) === str;
  } catch (err) {
    return false;
  }
}

export function rawText(str) {
  if (isBase64(str)) {
    return atob(str);
  }

  return str;
}

export function alwayBase64(str) {
  // eslint-disable-next-line no-extra-boolean-cast
  if (!!str) {
    if (isBase64(str)) {
      return str;
    }

    return btoa(str);
  } else {
    return str;
  }
}

export function arrayBufferToBase64(buffer) {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

export function base64ToArrayBuffer(base64) {
  const binary_string = atob(base64);
  const len = binary_string.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes.buffer;
}

export function filename(path) {
  return basename(path, _extname(path));
}

export function random(value) {
  return Math.round(Math.random() * value);
}

export function removedPathProject(path) {
  if (path.includes("projects")) {
    return relative("projects", path).replace(/^\.\.\//, "");
  }

  return path;
}
