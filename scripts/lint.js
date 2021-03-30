import ThemeColors from '../src/components/colors.js';
import fetch from 'node-fetch';

lint();

async function scrapeAvailableThemeData() {
  const THEME_REFERENCE_URL = 'https://code.visualstudio.com/api/references/theme-color';
  const data = await fetch(THEME_REFERENCE_URL).then((response) => response.text());
  const matches = data.match(new RegExp('<code>.+?</code>', 'g'));

  if (!matches) {
    throw new Error('Couldn\'t find any matches with <code>...</code>');
  }

  return [...matches].map((key) => key.replace('<code>', '').replace('</code>', ''));
}

async function filterAvailableThemeKeys() {
  let keys;

  keys = await scrapeAvailableThemeData();
  keys = keys.filter((key) => !/ /.test(key));
  keys = keys.filter((key) => !/#.../.test(key));
  keys = keys.filter((key) => !/&quot;/.test(key));
  keys = keys.filter((key) => 4 < key.length);

  return keys.sort();
}

async function lint() {
  const keys = await filterAvailableThemeKeys();

  for (const key of Object.keys(ThemeColors.colors)) {
    if (!keys.includes(key)) {
      console.log(`Unsupported key "${key}", possibly deprecated`);
    }
  }

  for (const key of keys) {
    if (!Object.keys(ThemeColors.colors).includes(key)) {
      console.warn(`Missing key "${key}" in theme`);
    }
  }
}
