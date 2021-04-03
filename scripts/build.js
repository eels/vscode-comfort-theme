import ComponentColors from '../src/components/colors.js';
import ComponentMeta from '../src/components/meta.js';
import ComponentSemantics from '../src/components/semantics.js';
import ComponentTokens from '../src/components/tokens.js';
import ComponentTokensItalics from '../src/components/tokens.italics.js';
import ThemeBaseMeta from '../src/variants/base.js';
import ThemeItalicsMeta from '../src/variants/italics.js';
import fs from 'fs';
import path from 'path';

const themes = [
  {
    meta: ThemeBaseMeta,
    name: 'base',
    tokenExtras: []
  },
  {
    meta: ThemeItalicsMeta,
    name: 'italics',
    tokenExtras: [
      ComponentTokensItalics
    ]
  }
];

const THEME_DIR = path.join(process.cwd(), 'themes');

!fs.existsSync(THEME_DIR) && fs.mkdirSync(THEME_DIR);

for (const key of Object.keys(ComponentColors.colors)) {
  if (!ComponentColors.colors[key]) {
    delete ComponentColors.colors[key];
  }
}

themes.map((variant) => build(variant));

function build(variant) {
  ComponentTokens.tokenColors = [
    ...ComponentTokens.tokenColors,
    ...variant.tokenExtras.flatMap((tokens) => tokens.tokenColors)
  ];

  const ConstructedMeta = Object.assign({}, ComponentMeta, variant.meta);
  const theme = Object.assign({}, ConstructedMeta, ComponentColors, ComponentSemantics, ComponentTokens);
  const jsontheme = JSON.stringify(theme, null, 2);

  fs.writeFileSync(path.join(THEME_DIR, `comfort.${variant.name}.vscode-color-theme.json`), jsontheme);
}
