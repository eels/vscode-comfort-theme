import colors from '../colors.js';

export default {
  "tokenColors": [
    {
      "name": "unison punctuation",
      "scope": [
        "punctuation.definition.ability.begin.unison",
        "punctuation.definition.ability.end.unison",
        "punctuation.definition.delayed.unison",
        "punctuation.definition.hash.unison",
        "punctuation.definition.list.begin.unison",
        "punctuation.definition.list.end.unison",
        "punctuation.operator.assignment.as.unison",
        "punctuation.separator.delimiter.unison",
        "punctuation.separator.pipe.unison"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "haskell variable generic-type",
      "scope": [
        "variable.other.generic-type.haskell"
      ],
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "haskell storage type",
      "scope": [
        "storage.type.haskell"
      ],
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "name": "support.variable.magic.python",
      "scope": [
        "support.variable.magic.python"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "punctuation.separator.parameters.python",
      "scope": [
        "punctuation.parenthesis.begin.python",
        "punctuation.parenthesis.end.python",
        "punctuation.separator.element.python",
        "punctuation.separator.period.python"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "variable.parameter.function.language.special.self.python",
      "scope": [
        "variable.parameter.function.language.special.self.python"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "storage.modifier.lifetime.rust",
      "scope": [
        "storage.modifier.lifetime.rust"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "support.function.std.rust",
      "scope": [
        "support.function.std.rust"
      ],
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "entity.name.lifetime.rust",
      "scope": [
        "entity.name.lifetime.rust"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "variable.language.rust",
      "scope": [
        "variable.language.rust"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "support.constant.edge",
      "scope": [
        "support.constant.edge"
      ],
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "regexp constant character-class",
      "scope": [
        "constant.other.character-class.regexp"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "regexp operator.quantifier",
      "scope": [
        "keyword.operator.quantifier.regexp"
      ],
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "name": "punctuation.definition",
      "scope": [
        "punctuation.definition.string.begin",
        "punctuation.definition.string.end"
      ],
      "settings": {
        "foreground": colors.green
      }
    },
    {
      "name": "text",
      "scope": [
        "variable.parameter.function"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "comment markup link",
      "scope": [
        "comment markup.link"
      ],
      "settings": {
        "foreground": colors.comment
      }
    },
    {
      "name": "markup diff",
      "scope": [
        "markup.changed.diff"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "diff",
      "scope": [
        "meta.diff.header.from-file",
        "meta.diff.header.to-file",
        "punctuation.definition.from-file.diff",
        "punctuation.definition.to-file.diff"
      ],
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "inserted.diff",
      "scope": [
        "markup.inserted.diff"
      ],
      "settings": {
        "foreground": colors.green
      }
    },
    {
      "name": "deleted.diff",
      "scope": [
        "markup.deleted.diff"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "c++ function",
      "scope": [
        "meta.function.c",
        "meta.function.cpp"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "c++ block",
      "scope": [
        "punctuation.section.block.begin.bracket.curly.c",
        "punctuation.section.block.begin.bracket.curly.cpp",
        "punctuation.section.block.end.bracket.curly.c",
        "punctuation.section.block.end.bracket.curly.cpp",
        "punctuation.section.parameters.begin.bracket.round.c",
        "punctuation.section.parameters.end.bracket.round.c",
        "punctuation.section.parens.begin.bracket.round.c",
        "punctuation.section.parens.end.bracket.round.c",
        "punctuation.terminator.statement.c"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "js/ts punctuation separator key-value",
      "scope": [
        "punctuation.separator.key-value"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "js/ts import keyword",
      "scope": [
        "keyword.operator.expression.import"
      ],
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "math js/ts",
      "scope": [
        "support.constant.math"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "math property js/ts",
      "scope": [
        "support.constant.property.math"
      ],
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "name": "js/ts variable.other.constant",
      "scope": [
        "variable.other.constant"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "js/ts variable.other.property",
      "scope": [
        "variable.other.property"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "java type",
      "scope": [
        "storage.type.annotation.java",
        "storage.type.object.array.java"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "java source",
      "scope": [
        "source.java"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "java modifier.import",
      "scope": [
        "meta.method-call.java",
        "meta.method.body.java",
        "meta.method.identifier.java",
        "punctuation.bracket.angle.java",
        "punctuation.definition.annotation.java",
        "punctuation.definition.method-parameters.begin.java",
        "punctuation.definition.method-parameters.end.java",
        "punctuation.section.block.begin.java",
        "punctuation.section.block.end.java",
        "punctuation.section.class.begin.bracket.curly.java",
        "punctuation.section.class.begin.java",
        "punctuation.section.class.end.bracket.curly.java",
        "punctuation.section.class.end.java",
        "punctuation.section.inner-class.begin.java",
        "punctuation.section.inner-class.end.java",
        "punctuation.section.method.begin.bracket.curly.java",
        "punctuation.section.method.begin.java",
        "punctuation.section.method.end.bracket.curly.java",
        "punctuation.section.method.end.java",
        "punctuation.separator.period.java",
        "punctuation.terminator.java"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "java modifier.import",
      "scope": [
        "meta.method.java"
      ],
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "java modifier.import",
      "scope": [
        "storage.modifier.import.java",
        "storage.type.generic.java",
        "storage.type.java"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "java instanceof",
      "scope": [
        "keyword.operator.instanceof.java"
      ],
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "java variable.name",
      "scope": [
        "meta.definition.variable.name.java"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "operator logical",
      "scope": [
        "keyword.operator.logical"
      ],
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "operator bitwise",
      "scope": [
        "keyword.operator.bitwise"
      ],
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "operator channel",
      "scope": [
        "keyword.operator.channel"
      ],
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "support.constant.property-value.scss",
      "scope": [
        "support.constant.property-value.css",
        "support.constant.property-value.scss"
      ],
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "name": "css/scss/less operators",
      "scope": [
        "keyword.operator.css",
        "keyword.operator.less",
        "keyword.operator.scss"
      ],
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "css color standard name",
      "scope": [
        "support.constant.color.w3c-standard-color-name.css",
        "support.constant.color.w3c-standard-color-name.scss"
      ],
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "name": "css comma",
      "scope": [
        "punctuation.separator.list.comma.css"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "css attribute-name.id",
      "scope": [
        "support.constant.color.w3c-standard-color-name.css"
      ],
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "name": "css property-name",
      "scope": [
        "support.type.vendored.property-name.css"
      ],
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "js/ts module",
      "scope": [
        "support.module.node",
        "support.module.node",
        "support.type.object.module"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "entity.name.type.module",
      "scope": [
        "entity.name.type.module"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "js variable readwrite",
      "scope": [
        "meta.object-literal.key",
        "support.variable.object.node",
        "support.variable.object.process",
        "support.variable.property",
        "variable.other.readwrite"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "js/ts json",
      "scope": [
        "support.constant.json"
      ],
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "name": "js/ts keyword",
      "scope": [
        "keyword.operator.expression.instanceof",
        "keyword.operator.expression.keyof",
        "keyword.operator.new",
        "keyword.operator.optional",
        "keyword.operator.ternary"
      ],
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "js/ts console",
      "scope": [
        "support.type.object.console"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "js/ts support.variable.property.process",
      "scope": [
        "support.variable.property.process"
      ],
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "name": "js console function",
      "scope": [
        "entity.name.function",
        "support.function.console"
      ],
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "keyword.operator.misc.rust",
      "scope": [
        "keyword.operator.misc.rust"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "keyword.operator.sigil.rust",
      "scope": [
        "keyword.operator.sigil.rust"
      ],
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "operator",
      "scope": [
        "keyword.operator.delete"
      ],
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "js dom",
      "scope": [
        "support.type.object.dom"
      ],
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "js dom variable",
      "scope": [
        "support.variable.dom",
        "support.variable.property.dom"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "keyword.operator",
      "scope": [
        "keyword.operator.arithmetic",
        "keyword.operator.comparison",
        "keyword.operator.decrement",
        "keyword.operator.increment",
        "keyword.operator.relational"
      ],
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "c operator assignment",
      "scope": [
        "keyword.operator.assignment.c",
        "keyword.operator.assignment.cpp",
        "keyword.operator.bitwise.shift.c",
        "keyword.operator.bitwise.shift.cpp",
        "keyword.operator.c",
        "keyword.operator.comparison.c",
        "keyword.operator.comparison.cpp",
        "keyword.operator.cpp",
        "keyword.operator.decrement.c",
        "keyword.operator.decrement.cpp",
        "keyword.operator.increment.c",
        "keyword.operator.increment.cpp"
      ],
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "punctuation",
      "scope": [
        "punctuation.separator.delimiter"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "other punctuation .c",
      "scope": [
        "punctuation.separator.c",
        "punctuation.separator.cpp"
      ],
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "c type posix-reserved",
      "scope": [
        "support.type.posix-reserved.c",
        "support.type.posix-reserved.cpp"
      ],
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "keyword.operator.sizeof.c",
      "scope": [
        "keyword.operator.sizeof.c",
        "keyword.operator.sizeof.cpp"
      ],
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "python parameter",
      "scope": [
        "variable.parameter.function.language.python"
      ],
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "name": "python type",
      "scope": [
        "support.type.python"
      ],
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "python logical",
      "scope": [
        "keyword.operator.logical.python"
      ],
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "pycs",
      "scope": [
        "variable.parameter.function.python"
      ],
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "name": "python block",
      "scope": [
        "punctuation.definition.arguments.begin.python",
        "punctuation.definition.arguments.end.python",
        "punctuation.definition.list.begin.python",
        "punctuation.definition.list.end.python",
        "punctuation.separator.arguments.python"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "python function-call.generic",
      "scope": [
        "meta.function-call.generic.python"
      ],
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "python placeholder reset to normal string",
      "scope": [
        "constant.character.format.placeholder.other.python"
      ],
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "name": "operators",
      "scope": [
        "keyword.operator"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "compound assignment operators",
      "scope": [
        "keyword.operator.assignment.compound"
      ],
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "compound assignment operators js/ts",
      "scope": [
        "keyword.operator.assignment.compound.js",
        "keyword.operator.assignment.compound.ts"
      ],
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "keywords",
      "scope": [
        "keyword"
      ],
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "namespaces",
      "scope": [
        "entity.name.namespace"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "variables",
      "scope": [
        "variable"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "variables",
      "scope": [
        "variable.c"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "language variables",
      "scope": [
        "variable.language"
      ],
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "language variables this",
      "scope": [
        "variable.language.this"
      ],
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "java variables",
      "scope": [
        "token.variable.parameter.java"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "java imports",
      "scope": [
        "import.storage.java"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "packages",
      "scope": [
        "token.package.keyword"
      ],
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "packages",
      "scope": [
        "token.package"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "functions",
      "scope": [
        "entity.name.function",
        "meta.require",
        "support.function.any-method",
        "variable.function"
      ],
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "classes",
      "scope": [
        "entity.name.type.namespace"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "classes",
      "scope": [
        "entity.name.type.class",
        "support.class"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "class name",
      "scope": [
        "entity.name.class.identifier.namespace.type"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "class name",
      "scope": [
        "entity.name.class",
        "variable.other.class.js",
        "variable.other.class.ts"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "class name php",
      "scope": [
        "variable.other.class.php"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "type name",
      "scope": [
        "entity.name.type"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "keyword control",
      "scope": [
        "keyword.control"
      ],
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "control elements",
      "scope": [
        "control.elements",
        "keyword.operator.less"
      ],
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "name": "methods",
      "scope": [
        "keyword.other.special-method"
      ],
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "storage",
      "scope": [
        "storage"
      ],
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "storage js ts",
      "scope": [
        "token.storage"
      ],
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "source js keyword operator delete,source js keyword operator in,source js keyword operator of,source js keyword operator instanceof,source js keyword operator new,source js keyword operator typeof,source js keyword operator void",
      "scope": [
        "keyword.operator.expression.delete",
        "keyword.operator.expression.in",
        "keyword.operator.expression.instanceof",
        "keyword.operator.expression.of",
        "keyword.operator.expression.typeof",
        "keyword.operator.expression.void",
        "keyword.operator.new"
      ],
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "java storage",
      "scope": [
        "token.storage.type.java"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "support",
      "scope": [
        "support.function"
      ],
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "support type",
      "scope": [
        "support.type.property-name"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "support type",
      "scope": [
        "support.constant.property-value"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "support type",
      "scope": [
        "support.constant.font-name"
      ],
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "name": "meta tag",
      "scope": [
        "meta.tag"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "strings",
      "scope": [
        "string"
      ],
      "settings": {
        "foreground": colors.green
      }
    },
    {
      "name": "inherited class",
      "scope": [
        "entity.other.inherited-class"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "constant other symbol",
      "scope": [
        "constant.other.symbol"
      ],
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "integers",
      "scope": [
        "constant.numeric"
      ],
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "name": "constants",
      "scope": [
        "constant"
      ],
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "name": "constants",
      "scope": [
        "punctuation.definition.constant"
      ],
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "name": "tags",
      "scope": [
        "entity.name.tag"
      ],
      "settings": {
        "foreground": colors.red
      }
    },
    {
      "name": "attributes",
      "scope": [
        "entity.other.attribute-name"
      ],
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "name": "attribute ids",
      "scope": [
        "entity.other.attribute-name.id"
      ],
      "settings": {
        "fontStyle": "normal",
        "foreground": colors.blue
      }
    },
    {
      "name": "attribute class",
      "scope": [
        "entity.other.attribute-name.class.css"
      ],
      "settings": {
        "fontStyle": "normal",
        "foreground": colors.orange
      }
    },
    {
      "name": "selector",
      "scope": [
        "meta.selector"
      ],
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "headings",
      "scope": [
        "markup.heading"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "headings",
      "scope": [
        "entity.name.section",
        "markup.heading punctuation.definition.heading"
      ],
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "units",
      "scope": [
        "keyword.other.unit"
      ],
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "name": "bold",
      "scope": [
        "markup.bold",
        "todo.bold"
      ],
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "name": "bold",
      "scope": [
        "punctuation.definition.bold"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "markup italic",
      "scope": [
        "markup.italic",
        "punctuation.definition.italic",
        "todo.emphasis"
      ],
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "emphasis md",
      "scope": [
        "emphasis md"
      ],
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "[vscode-custom] markdown headings",
      "scope": [
        "entity.name.section.markdown"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "[vscode-custom] markdown heading punctuation definition",
      "scope": [
        "punctuation.definition.heading.markdown"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "punctuation.definition.list.begin.markdown",
      "scope": [
        "punctuation.definition.list.begin.markdown"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "[vscode-custom] markdown heading setext",
      "scope": [
        "markup.heading.setext"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "[vscode-custom] markdown punctuation definition bold",
      "scope": [
        "punctuation.definition.bold.markdown"
      ],
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "name": "[vscode-custom] markdown inline raw",
      "scope": [
        "markup.inline.raw.markdown"
      ],
      "settings": {
        "foreground": colors.green
      }
    },
    {
      "name": "[vscode-custom] markdown inline raw",
      "scope": [
        "markup.inline.raw.string.markdown"
      ],
      "settings": {
        "foreground": colors.green
      }
    },
    {
      "name": "[vscode-custom] markdown list punctuation definition",
      "scope": [
        "punctuation.definition.list.markdown"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "[vscode-custom] markdown punctuation definition string",
      "scope": [
        "punctuation.definition.metadata.markdown",
        "punctuation.definition.string.begin.markdown",
        "punctuation.definition.string.end.markdown"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "beginning.punctuation.definition.list.markdown",
      "scope": [
        "beginning.punctuation.definition.list.markdown"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "[vscode-custom] markdown punctuation definition link",
      "scope": [
        "punctuation.definition.metadata.markdown"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "[vscode-custom] markdown underline link/image",
      "scope": [
        "markup.underline.link.image.markdown",
        "markup.underline.link.markdown"
      ],
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "[vscode-custom] markdown link title/description",
      "scope": [
        "string.other.link.description.markdown",
        "string.other.link.title.markdown"
      ],
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "regular expressions",
      "scope": [
        "string.regexp"
      ],
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "escape characters",
      "scope": [
        "constant.character.escape"
      ],
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "embedded",
      "scope": [
        "punctuation.section.embedded",
        "variable.interpolation"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "embedded",
      "scope": [
        "punctuation.section.embedded.begin",
        "punctuation.section.embedded.end"
      ],
      "settings": {
        "foreground": colors.red
      }
    },
    {
      "name": "illegal",
      "scope": [
        "invalid.illegal"
      ],
      "settings": {
        "foreground": colors.undefined
      }
    },
    {
      "name": "illegal",
      "scope": [
        "invalid.illegal.bad-ampersand.html"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "broken",
      "scope": [
        "invalid.broken"
      ],
      "settings": {
        "foreground": colors.undefined
      }
    },
    {
      "name": "deprecated",
      "scope": [
        "invalid.deprecated"
      ],
      "settings": {
        "foreground": colors.undefined
      }
    },
    {
      "name": "unimplemented",
      "scope": [
        "invalid.unimplemented"
      ],
      "settings": {
        "foreground": colors.undefined
      }
    },
    {
      "name": "source json meta structure dictionary json > string quoted json",
      "scope": [
        "source.json meta.structure.dictionary.json > string.quoted.json"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "source json meta structure dictionary json > string quoted json > punctuation string",
      "scope": [
        "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "source json meta structure dictionary json > value json > string quoted json,source json meta structure array json > value json > string quoted json,source json meta structure dictionary json > value json > string quoted json > punctuation,source json meta structure array json > value json > string quoted json > punctuation",
      "scope": [
        "source.json meta.structure.array.json > value.json > string.quoted.json",
        "source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",
        "source.json meta.structure.dictionary.json > value.json > string.quoted.json",
        "source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation"
      ],
      "settings": {
        "foreground": colors.green
      }
    },
    {
      "name": "source json meta structure dictionary json > constant language json,source json meta structure array json > constant language json",
      "scope": [
        "source.json meta.structure.array.json > constant.language.json",
        "source.json meta.structure.dictionary.json > constant.language.json"
      ],
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "[vscode-custom] json property name",
      "scope": [
        "support.type.property-name.json"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "[vscode-custom] json punctuation for property name",
      "scope": [
        "support.type.property-name.json punctuation"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "laravel blade tag",
      "scope": [
        "text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade"
      ],
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "laravel blade @",
      "scope": [
        "text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade"
      ],
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "use statement for other classes",
      "scope": [
        "entity.other.alias.php",
        "meta.interface.php",
        "support.other.namespace.php",
        "support.other.namespace.use-as.php",
        "support.other.namespace.use.php"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "error suppression",
      "scope": [
        "keyword.operator.error-control.php"
      ],
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "php instanceof",
      "scope": [
        "keyword.operator.type.php"
      ],
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "style double quoted array index normal begin",
      "scope": [
        "punctuation.section.array.begin.php"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "style double quoted array index normal end",
      "scope": [
        "punctuation.section.array.end.php"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "php illegal.non-null-typehinted",
      "scope": [
        "invalid.illegal.non-null-typehinted.php"
      ],
      "settings": {
        "foreground": colors.undefined
      }
    },
    {
      "name": "php types",
      "scope": [
        "keyword.other.array.phpdoc.php",
        "keyword.other.type.php",
        "meta.other.type.phpdoc.php",
        "storage.type.php"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "php call-function",
      "scope": [
        "meta.function-call.object.php",
        "meta.function-call.php",
        "meta.function-call.static.php"
      ],
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "php function-resets",
      "scope": [
        "punctuation.definition.arguments.begin.bracket.round.php",
        "punctuation.definition.arguments.end.bracket.round.php",
        "punctuation.definition.array.begin.bracket.round.php",
        "punctuation.definition.array.end.bracket.round.php",
        "punctuation.definition.begin.bracket.curly.php",
        "punctuation.definition.begin.bracket.round.php",
        "punctuation.definition.end.bracket.curly.php",
        "punctuation.definition.end.bracket.round.php",
        "punctuation.definition.parameters.begin.bracket.round.php",
        "punctuation.definition.parameters.end.bracket.round.php",
        "punctuation.definition.section.switch-block.begin.bracket.curly.php",
        "punctuation.definition.section.switch-block.end.bracket.curly.php",
        "punctuation.definition.section.switch-block.end.bracket.curly.php",
        "punctuation.definition.section.switch-block.start.bracket.curly.php",
        "punctuation.definition.storage-type.begin.bracket.round.php",
        "punctuation.definition.storage-type.end.bracket.round.php",
        "punctuation.section.scope.begin.php",
        "punctuation.section.scope.end.php",
        "punctuation.separator.delimiter.php",
        "punctuation.terminator.expression.php"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "support php constants",
      "scope": [
        "support.constant.core.rust"
      ],
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "name": "support php constants",
      "scope": [
        "support.constant.core.php",
        "support.constant.ext.php",
        "support.constant.parser-token.php",
        "support.constant.std.php"
      ],
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "name": "php goto",
      "scope": [
        "entity.name.goto-label.php",
        "support.other.php"
      ],
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "php logical/bitwise operator",
      "scope": [
        "keyword.operator.arithmetic.php",
        "keyword.operator.bitwise.php",
        "keyword.operator.logical.php"
      ],
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "php regexp operator",
      "scope": [
        "keyword.operator.regexp.php"
      ],
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "php comparison",
      "scope": [
        "keyword.operator.comparison.php"
      ],
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "php heredoc/nowdoc",
      "scope": [
        "keyword.operator.heredoc.php",
        "keyword.operator.nowdoc.php"
      ],
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "python function decorator @",
      "scope": [
        "meta.function.decorator.python"
      ],
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "python function support",
      "scope": [
        "meta.function.decorator.identifier.python",
        "support.token.decorator.python"
      ],
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "parameter function js/ts",
      "scope": [
        "function.parameter"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "brace function",
      "scope": [
        "function.brace"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "parameter function ruby cs",
      "scope": [
        "function.parameter.cs",
        "function.parameter.ruby"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "constant.language.symbol.ruby",
      "scope": [
        "constant.language.symbol.ruby"
      ],
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "rgb-value",
      "scope": [
        "rgb-value"
      ],
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "rgb value",
      "scope": [
        "inline-color-decoration rgb-value"
      ],
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "name": "rgb value less",
      "scope": [
        "less rgb-value"
      ],
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "name": "sass selector",
      "scope": [
        "selector.sass"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "ts primitive/builtin types",
      "scope": [
        "support.type.builtin.ts",
        "support.type.builtin.tsx",
        "support.type.primitive.ts",
        "support.type.primitive.tsx"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "block scope",
      "scope": [
        "block.scope.begin",
        "block.scope.end"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "cs storage type",
      "scope": [
        "storage.type.cs"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "cs local variable",
      "scope": [
        "entity.name.variable.local.cs"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "scope": [
        "token.info-token"
      ],
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "scope": [
        "token.warn-token"
      ],
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "scope": [
        "token.error-token"
      ],
      "settings": {
        "foreground": colors.undefined
      }
    },
    {
      "scope": [
        "token.debug-token"
      ],
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "string interpolation",
      "scope": [
        "punctuation.definition.template-expression.begin",
        "punctuation.definition.template-expression.end",
        "punctuation.section.embedded"
      ],
      "settings": {
        "foreground": colors.red
      }
    },
    {
      "name": "reset javascript string interpolation expression",
      "scope": [
        "meta.template.expression"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "import module js",
      "scope": [
        "keyword.operator.module"
      ],
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "js flowtype",
      "scope": [
        "support.type.type.flowtype"
      ],
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "js flow",
      "scope": [
        "support.type.primitive"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "js class prop",
      "scope": [
        "meta.property.object"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "js func parameter",
      "scope": [
        "variable.parameter.function.js"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "js template literals begin",
      "scope": [
        "keyword.other.template.begin"
      ],
      "settings": {
        "foreground": colors.green
      }
    },
    {
      "name": "js template literals end",
      "scope": [
        "keyword.other.template.end"
      ],
      "settings": {
        "foreground": colors.green
      }
    },
    {
      "name": "js template literals variable braces begin",
      "scope": [
        "keyword.other.substitution.begin"
      ],
      "settings": {
        "foreground": colors.green
      }
    },
    {
      "name": "js template literals variable braces end",
      "scope": [
        "keyword.other.substitution.end"
      ],
      "settings": {
        "foreground": colors.green
      }
    },
    {
      "name": "js operator.assignment",
      "scope": [
        "keyword.operator.assignment"
      ],
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "go operator",
      "scope": [
        "keyword.operator.assignment.go"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "go operator",
      "scope": [
        "keyword.operator.address.go",
        "keyword.operator.arithmetic.go"
      ],
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "go package name",
      "scope": [
        "entity.name.package.go"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "elm prelude",
      "scope": [
        "support.type.prelude.elm"
      ],
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "elm constant",
      "scope": [
        "support.constant.elm"
      ],
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "name": "template literal",
      "scope": [
        "punctuation.quasi.element"
      ],
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "html/pug (jade) escaped characters and entities",
      "scope": [
        "constant.character.entity"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",
      "scope": [
        "entity.other.attribute-name.pseudo-class",
        "entity.other.attribute-name.pseudo-element"
      ],
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "clojure globals",
      "scope": [
        "entity.global.clojure"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "clojure symbols",
      "scope": [
        "meta.symbol.clojure"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "clojure constants",
      "scope": [
        "constant.keyword.clojure"
      ],
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "coffeescript function argument",
      "scope": [
        "meta.arguments.coffee",
        "variable.parameter.function.coffee"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "ini default text",
      "scope": [
        "source.ini"
      ],
      "settings": {
        "foreground": colors.green
      }
    },
    {
      "name": "makefile prerequisities",
      "scope": [
        "meta.scope.prerequisites.makefile"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "makefile text colour",
      "scope": [
        "source.makefile"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "groovy import names",
      "scope": [
        "storage.modifier.import.groovy"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "groovy methods",
      "scope": [
        "meta.method.groovy"
      ],
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "groovy variables",
      "scope": [
        "meta.definition.variable.name.groovy"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "groovy inheritance",
      "scope": [
        "meta.definition.class.inherited.classes.groovy"
      ],
      "settings": {
        "foreground": colors.green
      }
    },
    {
      "name": "hlsl semantic",
      "scope": [
        "support.variable.semantic.hlsl"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "hlsl types",
      "scope": [
        "support.type.fx.hlsl",
        "support.type.object.hlsl",
        "support.type.object.hlsl",
        "support.type.object.rw.hlsl",
        "support.type.sampler.hlsl",
        "support.type.texture.hlsl"
      ],
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "sql variables",
      "scope": [
        "text.bracketed",
        "text.variable"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "types",
      "scope": [
        "support.type.swift",
        "support.type.vb.asp"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "heading 1, keyword",
      "scope": [
        "entity.name.function.xi"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "heading 2, callable",
      "scope": [
        "entity.name.class.xi"
      ],
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "heading 3, property",
      "scope": [
        "constant.character.character-class.regexp.xi"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "heading 4, type, class, interface",
      "scope": [
        "constant.regexp.xi"
      ],
      "settings": {
        "foreground": colors.magenta
      }
    },
    {
      "name": "heading 5, enums, preprocessor, constant, decorator",
      "scope": [
        "keyword.control.xi"
      ],
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "heading 6, number",
      "scope": [
        "invalid.xi"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "string",
      "scope": [
        "beginning.punctuation.definition.quote.markdown.xi"
      ],
      "settings": {
        "foreground": colors.green
      }
    },
    {
      "name": "comments",
      "scope": [
        "beginning.punctuation.definition.list.markdown.xi"
      ],
      "settings": {
        "foreground": colors.comment
      }
    },
    {
      "name": "link",
      "scope": [
        "constant.character.xi"
      ],
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "accent",
      "scope": [
        "accent.xi"
      ],
      "settings": {
        "foreground": colors.blue
      }
    },
    {
      "name": "wikiword",
      "scope": [
        "wikiword.xi"
      ],
      "settings": {
        "foreground": colors.orange
      }
    },
    {
      "name": "language operators like '+', '-' etc",
      "scope": [
        "constant.other.color.rgb-value.xi"
      ],
      "settings": {
        "foreground": colors.undefined
      }
    },
    {
      "name": "elements to dim",
      "scope": [
        "punctuation.definition.tag.xi"
      ],
      "settings": {
        "foreground": colors.comment
      }
    },
    {
      "name": "c++/c#",
      "scope": [
        "entity.name.label.cs",
        "entity.name.scope-resolution.function.call",
        "entity.name.scope-resolution.function.definition"
      ],
      "settings": {
        "foreground": colors.yellow
      }
    },
    {
      "name": "markdown underscore-style headers",
      "scope": [
        "entity.name.label.cs",
        "markup.heading.setext.1.markdown",
        "markup.heading.setext.2.markdown"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "meta.brace.square",
      "scope": [
        "meta.brace.square"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "name": "comments",
      "scope": [
        "comment",
        "punctuation.definition.comment"
      ],
      "settings": {
        "foreground": colors.comment
      }
    },
    {
      "name": "[vscode-custom] markdown quote",
      "scope": [
        "markup.quote.markdown"
      ],
      "settings": {
        "foreground": colors.comment
      }
    },
    {
      "name": "punctuation.definition.block.sequence.item.yaml",
      "scope": [
        "punctuation.definition.block.sequence.item.yaml"
      ],
      "settings": {
        "foreground": colors.foregroundCode
      }
    },
    {
      "scope": [
        "constant.language.symbol.elixir"
      ],
      "settings": {
        "foreground": colors.cyan
      }
    },
    {
      "name": "comment",
      "scope": [
        "comment",
        "comment.block.documentation",
        "comment.line.double-slash"
      ],
      "settings": {
        "fontStyle": "italic"
      }
    },
    {
      "name": "markup.italic.markdown",
      "scope": [
        "markup.italic.markdown"
      ],
      "settings": {
        "fontStyle": "italic"
      }
    }
  ]
}
