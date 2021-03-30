import colors from '../colors.js';

export default {
  "semanticTokenColors": {
    "method.defaultLibrary:javascript": colors.blue,
    "method.defaultLibrary:typescript": colors.blue,
    "parameter:javascript": colors.white,
    "parameter:typescript": colors.white,
    "parameter.declaration:javascript": colors.cyan,
    "parameter.declaration:typescript": colors.cyan,
    "variable.defaultLibrary:javascript": colors.yellow,
    "variable.defaultLibrary:typescript": colors.yellow,
    "variable:javascript": colors.white,
    "variable:typescript": colors.white
  },
  "tokenColors": [
    {
      "name": "Comment",
      "scope": "comment",
      "settings": {
        "foreground": colors.comment
      }
    },
    {
      "name": "String",
      "scope": "string",
      "settings": {
        "foreground": colors.green
      }
    },
    {
      "name": "String Quoted",
      "scope": [
        "punctuation.definition.string.begin",
        "punctuation.definition.string.end",
        "string.quoted"
      ],
      "settings": {
        "foreground": colors.green
      }
    },
    {
      "name": "String Unquoted",
      "scope": "string.unquoted",
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "Support Constant Math",
      "scope": "support.constant.math",
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "Number",
      "scope": [
        "constant.numeric",
        "constant.character.numeric"
      ],
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "name": "Undefined & NULL",
      "scope": [
        "constant.language.null",
        "constant.language.undefined"
      ],
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "name": "Built-in constant",
      "scope": [
        "constant.language",
        "punctuation.definition.constant",
        "variable.other.constant"
      ],
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "User-defined constant",
      "scope": [
        "constant.character",
        "constant.other"
      ],
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "Constant Character Escape",
      "scope": "constant.character.escape",
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "name": "RegExp String",
      "scope": [
        "string.regexp",
        "string.regexp keyword.other"
      ],
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "Comma in functions",
      "scope": "meta.function punctuation.separator.comma",
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "Variable",
      "scope": "variable",
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "Keyword",
      "scope": [
        "punctuation.accessor",
        "keyword"
      ],
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "Storage",
      "scope": [
        "storage",
        "storage.type",
        "meta.var.expr storage.type",
        "storage.type.property.js",
        "storage.type.property.ts",
        "storage.type.property.tsx",
        "meta.class meta.method.declaration meta.var.expr storage.type.js"
      ],
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "Class name",
      "scope": [
        "entity.name.class",
        "meta.class entity.name.type.class"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "Inherited class",
      "scope": "entity.other.inherited-class",
      "settings": {
        "foreground": colors.green
      }
    },
    {
      "name": "Function name",
      "scope": "entity.name.function",
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "Function Parameters",
      "scope": "variable.parameter",
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "Meta Tag",
      "scope": [
        "punctuation.definition.tag",
        "meta.tag"
      ],
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "HTML Tag names",
      "scope": [
        "entity.name.tag support.class.component",
        "meta.tag.other.html",
        "meta.tag.other.js",
        "meta.tag.other.tsx",
        "entity.name.tag.tsx",
        "entity.name.tag.js",
        "entity.name.tag",
        "meta.tag.js",
        "meta.tag.tsx",
        "meta.tag.html"
      ],
      "settings": {
        "foreground": colors.red
      }
    },
    {
      "name": "Tag attribute",
      "scope": "entity.other.attribute-name",
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "Entity Name Tag Custom",
      "scope": "entity.name.tag.custom",
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "Library (function & constant)",
      "scope": [
        "support.function",
        "support.constant"
      ],
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "Support Constant Property Value meta",
      "scope": "support.constant.meta.property-value",
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "Library class\/type",
      "scope": [
        "support.type",
        "support.class"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "Support Variable DOM",
      "scope": "support.variable.dom",
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "Invalid",
      "scope": "invalid",
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "Invalid deprecated",
      "scope": "invalid.deprecated",
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "Keyword Operator",
      "scope": "keyword.operator",
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "Keyword Operator Relational",
      "scope": "keyword.operator.relational",
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "Keyword Operator Assignment",
      "scope": "keyword.operator.assignment",
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "Double-Slashed Comment",
      "scope": "comment.line.double-slash",
      "settings": {
        "foreground": colors.comment
      }
    },
    {
      "name": "Object",
      "scope": "object",
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "Meta Brace",
      "scope": "meta.brace",
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "Meta Delimiter Period",
      "scope": "meta.delimiter.period",
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "Punctuation Definition String",
      "scope": "punctuation.definition.string",
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "Boolean",
      "scope": "constant.language.boolean",
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "name": "Object Comma",
      "scope": "object.comma",
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "Variable Parameter Function",
      "scope": "variable.parameter.function",
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "Support Type Property Name & entity name tags",
      "scope": [
        "support.type.vendored.property-name",
        "support.constant.vendored.property-value",
        "support.type.property-name",
        "meta.property-list entity.name.tag"
      ],
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "Entity Name tag reference in stylesheets",
      "scope": "meta.property-list entity.name.tag.reference",
      "settings": {
        "foreground": colors.red
      }
    },
    {
      "name": "Constant Other Color RGB Value Punctuation Definition Constant",
      "scope": "constant.other.color.rgb-value punctuation.definition.constant",
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "name": "Constant Other Color",
      "scope": "constant.other.color",
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "Keyword Other Unit",
      "scope": "keyword.other.unit",
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "name": "Meta Selector",
      "scope": "meta.selector",
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "Entity Other Attribute Name Id",
      "scope": "entity.other.attribute-name.id",
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "Meta Property Name",
      "scope": "meta.property-name",
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "Doctypes",
      "scope": [
        "entity.name.tag.doctype",
        "meta.tag.sgml.doctype"
      ],
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "Punctuation Definition Parameters",
      "scope": "punctuation.definition.parameters",
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "Keyword Control Operator",
      "scope": "keyword.control.operator",
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "Keyword Operator Logical",
      "scope": "keyword.operator.logical",
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "Variable Instances",
      "scope": [
        "variable.instance",
        "variable.other.instance",
        "variable.reaedwrite.instance",
        "variable.other.readwrite.instance"
      ],
      "settings": {
        "foreground": colors.red
      }
    },
    {
      "name": "Variable Property Other",
      "scope": [
        "variable.other.property",
        "variable.other.object.property"
      ],
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "Entity Name Function",
      "scope": "entity.name.function",
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "Keyword Operator Comparison",
      "scope": "keyword.operator.comparison",
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "Support Constant, `new` keyword, Special Method Keyword",
      "scope": [
        "support.constant",
        "keyword.other.special-method",
        "keyword.other.new"
      ],
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "Support Function",
      "scope": "support.function",
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "Invalid Broken",
      "scope": "invalid.broken",
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "Invalid Unimplemented",
      "scope": "invalid.unimplemented",
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "Invalid Illegal",
      "scope": "invalid.illegal",
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "Language Variable",
      "scope": "variable.language",
      "settings": {
        "foreground": colors.red
      }
    },
    {
      "name": "Support Variable Property",
      "scope": "support.variable.property",
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "Variable Function",
      "scope": "variable.function",
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "Variable Interpolation",
      "scope": "variable.interpolation",
      "settings": {
        "foreground": colors.red
      }
    },
    {
      "name": "Meta Function Call",
      "scope": "meta.function-call",
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "Punctuation Section Embedded",
      "scope": "punctuation.section.embedded",
      "settings": {
        "foreground": colors.red
      }
    },
    {
      "name": "Punctuation Tweaks",
      "scope": [
        "punctuation.terminator.expression",
        "punctuation.definition.arguments",
        "punctuation.definition.array",
        "punctuation.section.array",
        "meta.array"
      ],
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "More Punctuation Tweaks",
      "scope": [
        "punctuation.definition.list.begin",
        "punctuation.definition.list.end",
        "punctuation.separator.arguments",
        "punctuation.definition.list"
      ],
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "Template Strings",
      "scope": "string.template meta.template.expression",
      "settings": {
        "foreground": colors.red
      }
    },
    {
      "name": "Backtics(``) in Template Strings",
      "scope": "string.template punctuation.definition.string",
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "Italics",
      "scope": "italic",
      "settings": {
        "foreground": colors.magenta,
        "fontStyle": "italic"
      }
    },
    {
      "name": "Bold",
      "scope": "bold",
      "settings": {
        "foreground": colors.yellow,
        "fontStyle": "bold"
      }
    },
    {
      "name": "Quote",
      "scope": "quote",
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "Raw Code",
      "scope": "raw",
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "CoffeScript Variable Assignment",
      "scope": "variable.assignment.coffee",
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "CoffeScript Parameter Function",
      "scope": "variable.parameter.function.coffee",
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "CoffeeScript Assignments",
      "scope": "variable.assignment.coffee",
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "C# Readwrite Variables",
      "scope": "variable.other.readwrite.cs",
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "C# Classes & Storage types",
      "scope": [
        "entity.name.type.class.cs",
        "storage.type.cs"
      ],
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "C# Namespaces",
      "scope": "entity.name.type.namespace.cs",
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "Tag names in Stylesheets",
      "scope": [
        "entity.name.tag.css",
        "entity.name.tag.less",
        "entity.name.tag.custom.css"
      ],
      "settings": {
        "foreground": colors.red
      }
    },
    {
      "name": "Wildcard(*) selector in Stylesheets",
      "scope": [
        "entity.name.tag.wildcard.css",
        "entity.name.tag.wildcard.less",
        "entity.name.tag.wildcard.scss",
        "entity.name.tag.wildcard.sass"
      ],
      "settings": {
        "foreground": colors.red
      }
    },
    {
      "name": "(C|SC|SA|LE)SS property value unit",
      "scope": [
        "keyword.other.unit.css",
        "constant.length.units.css",
        "keyword.other.unit.less",
        "constant.length.units.less",
        "keyword.other.unit.scss",
        "constant.length.units.scss",
        "keyword.other.unit.sass",
        "constant.length.units.sass"
      ],
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "Attribute Name for CSS",
      "scope": "meta.attribute-selector.css entity.other.attribute-name.attribute",
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "name": "punctuations in styled components",
      "scope": [
        "source.js source.css meta.property-list",
        "source.js source.css punctuation.section",
        "source.js source.css punctuation.terminator.rule",
        "source.js source.css punctuation.definition.entity.end.bracket",
        "source.js source.css punctuation.definition.entity.begin.bracket",
        "source.js source.css punctuation.separator.key-value",
        "source.js source.css punctuation.definition.attribute-selector",
        "source.js source.css meta.property-list",
        "source.js source.css meta.property-list punctuation.separator.comma",
        "source.ts source.css punctuation.section",
        "source.ts source.css punctuation.terminator.rule",
        "source.ts source.css punctuation.definition.entity.end.bracket",
        "source.ts source.css punctuation.definition.entity.begin.bracket",
        "source.ts source.css punctuation.separator.key-value",
        "source.ts source.css punctuation.definition.attribute-selector",
        "source.ts source.css meta.property-list",
        "source.ts source.css meta.property-list punctuation.separator.comma"
      ],
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "(C|SC|SA|LE)SS property name",
      "scope": [
        "support.constant.property-value.css",
        "support.type.property-name.css",
        "support.type.vendored.property-name.css"
      ],
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "(C|SC|SA|LE)SS numeric value",
      "scope": [
        "constant.numeric.css"
      ],
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "name": "Elixir Classes",
      "scope": [
        "source.elixir support.type.elixir",
        "source.elixir meta.module.elixir entity.name.class.elixir"
      ],
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "Elixir Functions",
      "scope": "source.elixir entity.name.function",
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "Elixir Constants",
      "scope": [
        "source.elixir constant.other.symbol.elixir",
        "source.elixir constant.other.keywords.elixir"
      ],
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "Elixir String Punctuations",
      "scope": "source.elixir punctuation.definition.string",
      "settings": {
        "foreground": colors.green
      }
    },
    {
      "name": "Elixir",
      "scope": [
        "source.elixir variable.other.readwrite.module.elixir",
        "source.elixir variable.other.readwrite.module.elixir punctuation.definition.variable.elixir"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "Elixir Binary Punctuations",
      "scope": "source.elixir .punctuation.binary.elixir",
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "Go Function Calls",
      "scope": "source.go meta.function-call.go",
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "GraphQL Variables",
      "scope": "variable.qraphql",
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "ID Attribute Name in HTML",
      "scope": "entity.other.attribute-name.id.html",
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "HTML Punctuation Definition Tag",
      "scope": "punctuation.definition.tag.html",
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "HTML Doctype",
      "scope": "meta.tag.sgml.doctype.html",
      "settings": {
        "foreground": colors.magenta,
      }
    },
    {
      "name": "JavaScript Classes",
      "scope": "meta.class entity.name.type.class.js",
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "JavaScript Method Declaration e.g. `constructor`",
      "scope": "meta.method.declaration storage.type.js",
      "settings": {
        "foreground": colors.blue,
        "fontStyle": "normal"
      }
    },
    {
      "name": "JavaScript Terminator",
      "scope": "terminator.js",
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "JavaScript Meta Punctuation Definition",
      "scope": "meta.js punctuation.definition.js",
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "Entity Names in Code Documentations",
      "scope": [
        "entity.name.type.instance.jsdoc",
        "entity.name.type.instance.phpdoc"
      ],
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "Other Variables in Code Documentations",
      "scope": [
        "variable.other.jsdoc",
        "variable.other.phpdoc"
      ],
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "JavaScript module imports and exports",
      "scope": [
        "variable.other.meta.import.js",
        "meta.import.js variable.other",
        "variable.other.meta.export.js",
        "meta.export.js variable.other"
      ],
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "JavaScript Variable Parameter Function",
      "scope": "variable.parameter.function.js",
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "JavaScript Variable Other ReadWrite",
      "scope": "variable.other.readwrite.js",
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "Text nested in React tags",
      "scope": [
        "meta.jsx.children",
        "meta.jsx.children.js",
        "meta.jsx.children.tsx"
      ],
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "JavaScript[React] Variable Other Object",
      "scope": [
        "variable.other.object.js",
        "variable.other.object.jsx",
        "meta.object-literal.key.js",
        "meta.object-literal.key.jsx",
        "variable.object.property.js",
        "variable.object.property.jsx"
      ],
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "JavaScript Variables",
      "scope": [
        "variable.js",
        "variable.other.js"
      ],
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "JavaScript Entity Name Type",
      "scope": [
        "entity.name.type.js",
        "entity.name.type.module.js"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "JavaScript Support Classes",
      "scope": "support.class.js",
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "JSON Property Names",
      "scope": "support.type.property-name.json",
      "settings": {
        "foreground": colors.green,
        "fontStyle": "normal"
      }
    },
    {
      "name": "JSON Support Constants",
      "scope": "support.constant.json",
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "JSON Property values (string)",
      "scope": "meta.structure.dictionary.value.json string.quoted.double",
      "settings": {
        "foreground": colors.cyan,
        "fontStyle": "normal"
      }
    },
    {
      "name": "Strings in JSON values",
      "scope": "string.quoted.double.json punctuation.definition.string.json",
      "settings": {
        "foreground": colors.cyan,
        "fontStyle": "normal"
      }
    },
    {
      "name": "Specific JSON Property values like null",
      "scope": "meta.structure.dictionary.json meta.structure.dictionary.value constant.language",
      "settings": {
        "foreground": colors.red
      }
    },
    {
      "name": "Ruby Variables",
      "scope": "variable.other.ruby",
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "Ruby Hashkeys",
      "scope": "constant.language.symbol.hashkey.ruby",
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "LESS Tag names",
      "scope": "entity.name.tag.less",
      "settings": {
        "foreground": colors.red
      }
    },
    {
      "name": "Attribute Name for LESS",
      "scope": "meta.attribute-selector.less entity.other.attribute-name.attribute",
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "name": "Markup Headings",
      "scope": "markup.heading",
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "Markup Italics",
      "scope": "markup.italic",
      "settings": {
        "foreground": colors.magenta,
        "fontStyle": "italic"
      }
    },
    {
      "name": "Markup Bold",
      "scope": "markup.bold",
      "settings": {
        "foreground": colors.yellow,
        "fontStyle": "bold"
      }
    },
    {
      "name": "Markup Quote + others",
      "scope": "markup.quote",
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "Markup Raw Code + others",
      "scope": "markup.inline.raw",
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "Markup Links",
      "scope": [
        "markup.underline.link",
        "markup.underline.link.image"
      ],
      "settings": {
        "foreground": colors.pink
      }
    },
    {
      "name": "Markup Attributes",
      "scope": [
        "markup.meta.attribute-list"
      ],
      "settings": {
        "foreground": colors.green
      }
    },
    {
      "name": "Markup Admonitions",
      "scope": "markup.admonition",
      "settings": {
        "fontStyle": "bold"
      }
    },
    {
      "name": "Markup Lists",
      "scope": "markup.list.bullet",
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "Markdown Link Title and Description",
      "scope": [
        "string.other.link.title.markdown",
        "string.other.link.description.markdown"
      ],
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "Markdown Punctuation",
      "scope": [
        "punctuation.definition.string.markdown",
        "punctuation.definition.string.begin.markdown",
        "punctuation.definition.string.end.markdown",
        "meta.link.inline.markdown punctuation.definition.string"
      ],
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "Markdown MetaData Punctuation",
      "scope": [
        "punctuation.definition.metadata.markdown"
      ],
      "settings": {
        "foreground": colors.red
      }
    },
    {
      "name": "Markdown List Punctuation",
      "scope": [
        "beginning.punctuation.definition.list.markdown"
      ],
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "Asciidoc Function",
      "scope": "entity.name.function.asciidoc",
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "name": "PHP Variables",
      "scope": "variable.other.php",
      "settings": {
        "foreground": colors.red
      }
    },
    {
      "name": "PHP Constant",
      "scope": "constant.other.php",
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "Support Classes in PHP",
      "scope": "support.class.php",
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "New Keyword in PHP",
      "scope": "keyword.other.new.php",
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "Language Constants in PHP",
      "scope": "constant.language.php",
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "name": "Punctuations in PHP function calls",
      "scope": "meta.function-call.php punctuation",
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "Punctuation Variable Definitions",
      "scope": "punctuation.definition.variable.php",
      "settings": {
        "foreground": colors.red
      }
    },
    {
      "name": "PHP Global Variables",
      "scope": "variable.other.global.php",
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "Declaration Punctuation in PHP Global Variables",
      "scope": [
        "variable.other.global.php",
        "variable.other.global.safer.php",
        "variable.other.global.php punctuation.definition.variable"
      ],
      "settings": {
        "foreground": colors.red
      }
    },
    {
      "name": "Language Constants in Python",
      "scope": "constant.language.python",
      "settings": {
        "foreground": colors.red
      }
    },
    {
      "name": "Python Function Parameter and Arguments",
      "scope": [
        "variable.parameter.function.python",
        "meta.function-call.arguments.python"
      ],
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "Python Function Call",
      "scope": [
        "meta.function-call.python",
        "meta.function-call.generic.python"
      ],
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "Punctuations in Python",
      "scope": "punctuation.python",
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "Decorator Functions in Python",
      "scope": "entity.name.function.decorator.python",
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "Python Language Variable",
      "scope": "source.python variable.language.special",
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "SCSS Variable",
      "scope": [
        "variable.scss",
        "variable.sass",
        "variable.parameter.url.scss",
        "variable.parameter.url.sass"
      ],
      "settings": {
        "foreground": colors.red
      }
    },
    {
      "name": "Variables in SASS At-Rules",
      "scope": [
        "source.css.scss meta.at-rule variable",
        "source.css.sass meta.at-rule variable"
      ],
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "Variables in SASS At-Rules",
      "scope": [
        "source.css.scss meta.at-rule variable",
        "source.css.sass meta.at-rule variable"
      ],
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "Attribute Name for SASS",
      "scope": [
        "meta.attribute-selector.scss entity.other.attribute-name.attribute",
        "meta.attribute-selector.sass entity.other.attribute-name.attribute"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "Attribute Value for CSS and CSS-like Languages",
      "scope": [
        "meta.attribute-selector.css",
        "meta.attribute-selector.less",
        "meta.attribute-selector.sass",
        "meta.attribute-selector.scss",
      ],
      "settings": {
        "foreground": colors.green
      }
    },
    {
      "name": "Attribute Value for CSS and CSS-like Languages",
      "scope": [
        "punctuation.definition.attribute-selector.begin.bracket.square",
        "punctuation.definition.attribute-selector.end.bracket.square"
      ],
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "Tag names in SASS",
      "scope": [
        "entity.name.tag.scss",
        "entity.name.tag.sass"
      ],
      "settings": {
        "foreground": colors.red
      }
    },
    {
      "name": "TypeScript[React] Variables and Object Properties",
      "scope": [
        "variable.other.readwrite.alias.ts",
        "variable.other.readwrite.alias.tsx",
        "variable.other.readwrite.ts",
        "variable.other.readwrite.tsx",
        "variable.other.object.ts",
        "variable.other.object.tsx",
        "variable.object.property.ts",
        "variable.object.property.tsx",
        "variable.other.ts",
        "variable.other.tsx",
        "variable.tsx",
        "variable.ts"
      ],
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "TypeScript[React] Entity Name Types",
      "scope": [
        "entity.name.type.ts",
        "entity.name.type.tsx"
      ],
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "TypeScript[React] Node Classes",
      "scope": [
        "support.class.node.ts",
        "support.class.node.tsx"
      ],
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "TypeScript[React] Entity Name Types as Parameters",
      "scope": [
        "meta.type.parameters.ts entity.name.type",
        "meta.type.parameters.tsx entity.name.type"
      ],
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "TypeScript[React] Import\/Export Punctuations",
      "scope": [
        "meta.import.ts punctuation.definition.block",
        "meta.import.tsx punctuation.definition.block",
        "meta.export.ts punctuation.definition.block",
        "meta.export.tsx punctuation.definition.block"
      ],
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "TypeScript[React] Punctuation Decorators",
      "scope": [
        "meta.decorator punctuation.decorator.ts",
        "meta.decorator punctuation.decorator.tsx"
      ],
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "TypeScript[React] Punctuation Decorators",
      "scope": "meta.tag.js meta.jsx.children.tsx",
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "YAML Entity Name Tags",
      "scope": "entity.name.tag.yaml",
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "handlebars variables",
      "scope": "variable.parameter.handlebars",
      "settings": {
        "foreground": colors.white
      }
    },
    {
      "name": "handlebars parameters",
      "scope": "entity.other.attribute-name.handlebars variable.parameter.handlebars",
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "handlebars enitity attribute names",
      "scope": "entity.other.attribute-name.handlebars",
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "handlebars enitity attribute values",
      "scope": "entity.other.attribute-value.handlebars variable.parameter.handlebars",
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "normalize font style of certain components",
      "scope": [
        "meta.tag.js meta.embedded.expression.js punctuation.section.embedded.begin.js",
        "meta.tag.js meta.embedded.expression.js punctuation.section.embedded.end.js",
        "meta.property-list.css meta.property-value.css variable.other.less",
        "punctuation.section.embedded.begin.js.jsx",
        "punctuation.section.embedded.end.js.jsx",
        "meta.property-list.scss variable.scss",
        "meta.property-list.sass variable.sass",
        "keyword.operator.logical",
        "keyword.operator.arithmetic",
        "keyword.operator.bitwise",
        "keyword.operator.increment",
        "keyword.operator.ternary",
        "keyword.operator.comparison",
        "keyword.operator.assignment",
        "keyword.operator.operator",
        "keyword.operator.or.regexp",
        "keyword.operator.expression.in",
        "keyword.operator.type",
        "punctuation.section.embedded.js",
        "punctuation.definintion.string",
        "punctuation"
      ],
      "settings": {
        "fontStyle": "normal"
      }
    }
  ]
}
