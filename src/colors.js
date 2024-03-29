import * as palette from './palette.js';
import lighten from './utilities/lighten.js';

// BASE COLORS
// ------------------------------

const COLORS = {
  black: palette.comment,
  blue: palette.blue,
  cyan: palette.cyan,
  green: palette.green,
  magenta: palette.magenta,
  orange: palette.orange,
  red: palette.red,
  white: palette.foreground,
  yellow: palette.yellow,
};

// BRIGHT VARIANT COLORS
// ------------------------------

const BRIGHTCOLORS = {
  brightBlack: lighten(COLORS.black),
  brightBlue: lighten(COLORS.blue),
  brightCyan: lighten(COLORS.cyan),
  brightGreen: lighten(COLORS.green),
  brightMagenta: lighten(COLORS.magenta),
  brightOrange: lighten(COLORS.orange),
  brightRed: lighten(COLORS.red),
  brightWhite: lighten(COLORS.white),
  brightYellow: lighten(COLORS.yellow),
};

// BASE COLORS
// ------------------------------

const BASECOLORS = {
  background: palette.background,
  backgroundDark: palette.backgroundDark,
  backgroundDarker: palette.backgroundDarker,
  backgroundLight: palette.backgroundLight,
  backgroundLighter: palette.backgroundLighter,
  comment: palette.comment,
  foreground: palette.foreground,
  foregroundAlt: palette.foregroundAlt,
  selection: palette.selection,
  selectionDark: palette.selectionDark,
  selectionLight: palette.selectionLight,
};

// SPECIAL COLORS
// ------------------------------

const SPECIALCOLORS = {
  mergeCurrent: palette.mergeCurrent,
  mergeCurrentDark: palette.mergeCurrentDark,
  mergeIncoming: palette.mergeIncoming,
  mergeIncomingDark: palette.mergeIncomingDark,
};

export default Object.assign({}, BASECOLORS, BRIGHTCOLORS, COLORS, SPECIALCOLORS);
