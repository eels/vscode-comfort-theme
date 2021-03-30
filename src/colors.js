import color from 'color';
import * as palette from './palette.js';

// BASE COLORS
// ------------------------------

const COLORS = {
  black: palette.background,
  blue: palette.blue,
  cyan: palette.cyan,
  green: palette.green,
  magenta: palette.magenta,
  orange: palette.orange,
  pink: palette.pink,
  red: palette.red,
  white: palette.foreground,
  yellow: palette.yellow
};

// BRIGHT VARIANTS
// ------------------------------

const BRIGHTCOLORS = {
  brightBlack: color(COLORS.black).lighten(0.07).hex(),
  brightBlue: color(COLORS.blue).lighten(0.07).hex(),
  brightCyan: color(COLORS.cyan).lighten(0.07).hex(),
  brightGreen: color(COLORS.green).lighten(0.07).hex(),
  brightMagenta: color(COLORS.magenta).lighten(0.07).hex(),
  brightOrange: color(COLORS.orange).lighten(0.07).hex(),
  brightPink: color(COLORS.pink).lighten(0.07).hex(),
  brightRed: color(COLORS.red).lighten(0.07).hex(),
  brightWhite: color(COLORS.white).lighten(0.07).hex(),
  brightYellow: color(COLORS.yellow).lighten(0.07).hex()
};

// BASE COLORS
// ------------------------------

const BASECOLORS = {
  accent: BRIGHTCOLORS.brightRed,
  background: palette.background,
  backgroundDark: palette.backgroundDark,
  backgroundDarker: palette.backgroundDarker,
  backgroundLight: palette.backgroundLight,
  backgroundLighter: palette.backgroundLighter,
  comment: palette.comment,
  foreground: palette.foreground,
  selection: palette.selection,
  selectionAlt: palette.selectionAlt
};

export default Object.assign({}, BASECOLORS, BRIGHTCOLORS, COLORS);
