import ThemeColors from '../src/modules/colors.js';
import ThemeMeta from '../src/modules/meta.js';
import ThemeTokens from '../src/modules/tokens.js';
import fs from 'fs';
import path from 'path';

const THEME_DIR = path.join(process.cwd(), 'themes');

!fs.existsSync(THEME_DIR) && fs.mkdirSync(THEME_DIR);

for (const key of Object.keys(ThemeColors.colors)) {
  if (!ThemeColors.colors[key]) {
    delete ThemeColors.colors[key];
  }
}

const theme = Object.assign({}, ThemeMeta, ThemeColors, ThemeTokens);
const jsontheme = JSON.stringify(theme, null, 2);

fs.writeFileSync(path.join(THEME_DIR, 'comfort.json'), jsontheme);
