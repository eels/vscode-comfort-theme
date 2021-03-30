import alpha from '../utils/alpha.js';
import colors from '../colors.js';

export default {
  "colors": {
    // -- Base Colors --
    // ------------------------------
    "contrastActiveBorder": null,
    "contrastBorder": null,
    "descriptionForeground": colors.foreground,
    "errorForeground": colors.foreground,
    "focusBorder": colors.selectionAlt,
    "foreground": colors.foreground,
    "selection.background": colors.backgroundLight,
    "widget.shadow": colors.backgroundDark,

    // Activity Bar
    // ------------------------------
    "activityBar.activeBorder": colors.selection,
    "activityBar.activeBackground": colors.backgroundDark,
    "activityBar.activeFocusBorder": colors.selection,
    "activityBar.background": colors.backgroundDarker,
    "activityBar.border": colors.backgroundDarker,
    "activityBar.dropBorder": colors.backgroundDarker,
    "activityBar.foreground": colors.white,
    "activityBar.inactiveForeground": alpha(colors.foreground, 0.5),
    "activityBarBadge.background": colors.selection,
    "activityBarBadge.foreground": colors.white,

    // Badge
    // ------------------------------
    "badge.background": colors.selection,
    "badge.foreground": colors.white,

    // Breadcrumbs
    // ------------------------------
    "breadcrumb.activeSelectionForeground": colors.foreground,
    "breadcrumb.background": colors.background,
    "breadcrumb.focusForeground": colors.foreground,
    "breadcrumb.foreground": alpha(colors.comment, 0.6),
    "breadcrumbPicker.background": colors.background,

    // Buttons
    // ------------------------------
    "button.background": colors.selection,
    "button.foreground": colors.foreground,
    "button.hoverBackground": alpha(colors.selection, 0.5),

    // Debug Exception
    // ------------------------------
    "debugExceptionWidget.background": colors.background,
    "debugExceptionWidget.border": colors.selection,
    "debugToolBar.background": colors.background,

    // Diff Editor
    // ------------------------------
    "diffEditor.border": null,
    "diffEditor.diagonalFill": null,
    "diffEditor.insertedTextBackground": alpha(colors.green, 0.3),
    "diffEditor.insertedTextBorder": null,
    "diffEditor.removedTextBackground": alpha(colors.red, 0.3),
    "diffEditor.removedTextBorder": null,

    // Dropdown
    // ------------------------------
    "dropdown.background": colors.backgroundLight,
    "dropdown.border": null,
    "dropdown.foreground": colors.foreground,
    "dropdown.listBackground": colors.backgroundLight,

    // Editor
    // ------------------------------
    "editor.background": colors.background,
    "editor.findMatchBackground": colors.selection,
    "editor.findMatchBorder": null,
    "editor.findMatchHighlightBackground": colors.selectionAlt,
    "editor.findMatchHighlightBorder": null,
    "editor.findRangeHighlightBackground": colors.selectionAlt,
    "editor.findRangeHighlightBorder": null,
    "editor.foreground": colors.foreground,
    "editor.hoverHighlightBackground": colors.selection,
    "editor.inactiveSelectionBackground": colors.selection,
    "editor.lineHighlightBackground": colors.backgroundDark,
    "editor.lineHighlightBorder": null,
    "editor.rangeHighlightBackground": colors.selection,
    "editor.selectionBackground": colors.selection,
    "editor.selectionHighlightBackground": colors.selectionAlt,
    "editor.selectionHighlightBorder": null,
    "editor.wordHighlightBackground": colors.selectionAlt,
    "editor.wordHighlightBorder": null,
    "editor.wordHighlightStrongBackground": colors.selectionAlt,
    "editor.wordHighlightStrongBorder": null,
    "editorCodeLens.foreground": colors.yellow,
    "editorLink.activeForeground": null,
    "editorRuler.foreground": null,
    "editorWhitespace.foreground": null,

    // Editor Bracket Match
    // ------------------------------
    "editorBracketMatch.background": colors.selectionAlt,
    "editorBracketMatch.border": alpha(colors.background, 0),

    // Editor Cursor
    // ------------------------------
    "editorCursor.background": null,
    "editorCursor.foreground": colors.foreground,

    // Editor Error & Warnings
    // ------------------------------
    "editorError.background": null,
    "editorError.border": null,
    "editorError.foreground": colors.red,
    "editorWarning.background": null,
    "editorWarning.border": null,
    "editorWarning.foreground": colors.yellow,

    // Editor Group
    // ------------------------------
    "editorGroup.border": null,
    "editorGroup.dropBackground": alpha(colors.selection, 0.5),
    "editorGroupHeader.noTabsBackground": null,
    "editorGroupHeader.tabsBackground": colors.backgroundDark,
    "editorGroupHeader.tabsBorder": null,

    // Editor Gutter
    // ------------------------------
    "editorGutter.addedBackground": colors.green,
    "editorGutter.background": null,
    "editorGutter.commentRangeForeground": null,
    "editorGutter.deletedBackground": colors.red,
    "editorGutter.foldingControlForeground": null,
    "editorGutter.modifiedBackground": colors.yellow,

    // Editor Indentation Guides
    // ------------------------------
    "editorIndentGuide.background": colors.selection,
    "editorIndentGuide.activeBackground": colors.selection,

    // Editor LightBulb
    // ------------------------------
    "editorLightBulb.foreground": colors.yellow,
    "editorLightBulbAutoFix.foreground": colors.yellow,

    // Editor Line Numbers
    // ------------------------------
    "editorLineNumber.activeForeground": colors.foreground,
    "editorLineNumber.foreground": alpha(colors.comment, 0.6),

    // Editor Marker
    // ------------------------------
    "editorMarkerNavigation.background": colors.background,
    "editorMarkerNavigationError.background": colors.red,
    "editorMarkerNavigationWarning.background": colors.yellow,

    // Editor Widgets
    // ------------------------------
    "editorWidget.background": colors.background,
    "editorWidget.border": colors.selection,
    "editorWidget.foreground": colors.foreground,
    "editorWidget.resizeBorder": colors.selection,
    "editorHoverWidget.background": colors.backgroundDark,
    "editorHoverWidget.border": colors.selection,
    "editorHoverWidget.foreground": colors.foreground,
    "editorSuggestWidget.background": colors.backgroundDark,
    "editorSuggestWidget.border": null,
    "editorSuggestWidget.foreground": colors.foreground,
    "editorSuggestWidget.highlightForeground": colors.blue,
    "editorSuggestWidget.selectedBackground": colors.selection,

    // Extensions Button
    // ------------------------------
    "extensionButton.prominentBackground": colors.selection,
    "extensionButton.prominentForeground": colors.foreground,
    "extensionButton.prominentHoverBackground": alpha(colors.selection, 0.5),

    // Git Decoration
    // ------------------------------
    "gitDecoration.addedResourceForeground": colors.green,
    "gitDecoration.conflictingResourceForeground": colors.orange,
    "gitDecoration.deletedResourceForeground": colors.red,
    "gitDecoration.ignoredResourceForeground": alpha(colors.comment, 0.75),
    "gitDecoration.modifiedResourceForeground": colors.yellow,
    "gitDecoration.stageDeletedResourceForeground": colors.red,
    "gitDecoration.stageModifiedResourceForeground": colors.yellow,
    "gitDecoration.untrackedResourceForeground": colors.green,

    // Image Preview
    // ------------------------------
    "imagePreview.border": null,

    // Inputs
    // ------------------------------
    "input.background": colors.backgroundLight,
    "input.border": null,
    "input.foreground": colors.foreground,
    "input.placeholderForeground": alpha(colors.foreground, 0.5),
    "inputOption.activeBorder": colors.foreground,
    "inputValidation.errorBackground": colors.red,
    "inputValidation.errorBorder": colors.red,
    "inputValidation.errorForeground": colors.white,
    "inputValidation.infoBackground": colors.backgroundDark,
    "inputValidation.infoBorder": colors.backgroundDark,
    "inputValidation.infoForeground": colors.foreground,
    "inputValidation.warningBackground": colors.backgroundDark,
    "inputValidation.warningBorder": colors.backgroundDark,
    "inputValidation.warningForeground": colors.foreground,

    // List
    // ------------------------------
    "list.activeSelectionBackground": colors.selectionAlt,
    "list.activeSelectionForeground": colors.white,
    "list.dropBackground": alpha(colors.selectionAlt, 0.5),
    "list.errorForeground": colors.red,
    "list.focusBackground": colors.selectionAlt,
    "list.focusForeground": colors.white,
    "list.highlightForeground": colors.selectionAlt,
    "list.hoverBackground": alpha(colors.selectionAlt, 0.5),
    "list.hoverForeground": colors.foreground,
    "list.inactiveSelectionBackground": colors.selectionAlt,
    "list.inactiveSelectionForeground": colors.white,
    "list.warningForeground": colors.yellow,

    // Minimap
    // ------------------------------
    "minimap.background": colors.background,
    "minimap.errorHighlight": colors.red,
    "minimap.findMatchHighlight": colors.selection,
    "minimap.selectionHighlight": colors.selection,
    "minimap.warningHighlight": colors.yellow,
    "minimapGutter.addedBackground": colors.red,
    "minimapGutter.deletedBackground": colors.red,
    "minimapGutter.modifiedBackground": colors.yellow,
    "minimapSlider.activeBackground": null,
    "minimapSlider.background": null,
    "minimapSlider.hoverBackground": null,

    // Notifications
    // ------------------------------
    "notifications.background": colors.background,
    "notifications.border": colors.selection,
    "notifications.foreground": colors.foreground,
    "notificationCenter.border": null,
    "notificationCenterHeader.foreground": colors.foreground,
    "notificationCenterHeader.background": colors.backgroundDark,
    "notificationLink.foreground": colors.foreground,
    "notificationToast.border": colors.selection,

    // Notification Icons
    // ------------------------------
    "notificationsErrorIcon.foreground": colors.red,
    "notificationsInfoIcon.foreground": colors.blue,
    "notificationsWarningIcon.foreground": colors.yellow,

    // Panel
    // ------------------------------
    "panel.background": colors.background,
    "panel.border": colors.selectionAlt,
    "panel.dropBorder": colors.selection,
    "panelTitle.activeBorder": colors.selection,
    "panelTitle.activeForeground": colors.white,
    "panelTitle.inactiveForeground": alpha(colors.foreground, 0.5),

    // Peek View
    // ------------------------------
    "peekView.border": colors.selection,
    "peekViewEditor.background": colors.background,
    "peekViewEditor.matchHighlightBackground": colors.selection,
    "peekViewEditor.matchHighlightBorder": null,
    "peekViewEditorGutter.background": colors.background,
    "peekViewResult.background": colors.backgroundDark,
    "peekViewResult.fileForeground": colors.foreground,
    "peekViewResult.lineForeground": colors.foreground,
    "peekViewResult.matchHighlightBackground": colors.selection,
    "peekViewResult.selectionBackground": alpha(colors.selectionAlt, 0.5),
    "peekViewResult.selectionForeground": colors.foreground,
    "peekViewTitle.background": colors.backgroundDark,
    "peekViewTitleDescription.foreground": colors.foreground,
    "peekViewTitleLabel.foreground": colors.foreground,

    // Picker
    // ------------------------------
    "pickerGroup.border": colors.selection,
    "pickerGroup.foreground": colors.foreground,
    "quickInput.background": colors.backgroundDark,
    "quickInput.foreground": colors.foreground,
    "quickInputTitle.background": null,

    // Scrollbar
    // ------------------------------
    "scrollbar.shadow": alpha(colors.background, 0),
    "scrollbarSlider.activeBackground": colors.selection,
    "scrollbarSlider.background": alpha(colors.selectionAlt, 0.75),
    "scrollbarSlider.hoverBackground": colors.selection,

    // Sidebar
    // ------------------------------
    "sideBar.background": colors.backgroundDark,
    "sideBar.border": null,
    "sideBar.dropBackground": colors.backgroundDark,
    "sideBar.foreground": colors.foreground,
    "sideBarSectionHeader.background": colors.backgroundDarker,
    "sideBarSectionHeader.foreground": colors.foreground,
    "sideBarTitle.foreground": colors.foreground,

    // Status Bar
    // ------------------------------
    "statusBar.background": colors.backgroundDarker,
    "statusBar.border": null,
    "statusBar.debuggingBackground": colors.backgroundDarker,
    "statusBar.debuggingBorder": null,
    "statusBar.debuggingForeground": null,
    "statusBar.foreground": alpha(colors.foreground, 0.5),
    "statusBar.noFolderBackground": colors.backgroundDarker,
    "statusBar.noFolderBorder": null,
    "statusBar.noFolderForeground": alpha(colors.foreground, 0.5),
    "statusBarItem.activeBackground": colors.backgroundDarker,
    "statusBarItem.hoverBackground": colors.backgroundDarker,
    "statusBarItem.prominentBackground": colors.backgroundDarker,
    "statusBarItem.prominentHoverBackground": colors.backgroundDarker,

    // Tabs
    // ------------------------------
    "tab.activeBackground": colors.background,
    "tab.activeBorder": colors.background,
    "tab.activeForeground": colors.foreground,
    "tab.border": colors.background,
    "tab.inactiveBackground": colors.backgroundLight,
    "tab.inactiveForeground": alpha(colors.foreground, 0.5),
    "tab.unfocusedActiveBorder": null,
    "tab.unfocusedActiveForeground": null,
    "tab.unfocusedInactiveForeground": null,

    // Terminal
    // ------------------------------
    "terminal.ansiBlack": colors.black,
    "terminal.ansiBlue": colors.blue,
    "terminal.ansiCyan": colors.cyan,
    "terminal.ansiGreen": colors.green,
    "terminal.ansiMagenta": colors.magenta,
    "terminal.ansiRed": colors.red,
    "terminal.ansiWhite": colors.white,
    "terminal.ansiYellow": colors.yellow,

    // Terminal Bright
    // ------------------------------
    "terminal.ansiBrightBlack": colors.brightBlack,
    "terminal.ansiBrightBlue": colors.brightBlue,
    "terminal.ansiBrightCyan": colors.brightCyan,
    "terminal.ansiBrightGreen": colors.brightGreen,
    "terminal.ansiBrightMagenta": colors.brightMagenta,
    "terminal.ansiBrightRed": colors.brightRed,
    "terminal.ansiBrightWhite": colors.BrightWhite,
    "terminal.ansiBrightYellow": colors.BrightYellow,

    // Title Bar
    // ------------------------------
    "titleBar.activeBackground": colors.backgroundDarker,
    "titleBar.activeForeground": colors.foreground,
    "titleBar.border": colors.backgroundDarker,
    "titleBar.inactiveBackground": colors.backgroundDarker,
    "titleBar.inactiveForeground": colors.foreground,

    // Welcome Page
    // ------------------------------
    "walkThrough.embeddedEditorBackground": colors.backgroundDark,
    "welcomePage.background": colors.background,
    "welcomePage.buttonBackground": colors.backgroundDark,
    "welcomePage.buttonHoverBackground": colors.backgroundDarker,

    // Window
    // ------------------------------
    "window.activeBorder": null,
    "window.inactiveBorder": null
  }
}
