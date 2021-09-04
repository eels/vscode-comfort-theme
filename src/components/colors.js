/* eslint-disable sort-keys-fix/sort-keys-fix */

import colors from '../colors.js';
import translucify from '../utilities/translucify.js';

export default {
  colors: {
    // -- Base Colors --
    // ------------------------------
    'contrastActiveBorder': null,
    'contrastBorder': null,
    'descriptionForeground': colors.foreground,
    'errorForeground': colors.foreground,
    'focusBorder': colors.selectionDark,
    'foreground': colors.foreground,
    'selection.background': colors.backgroundDark,
    'widget.shadow': colors.backgroundDark,

    // Activity Bar
    // ------------------------------
    'activityBar.activeBorder': colors.selectionLight,
    'activityBar.activeBackground': colors.backgroundDark,
    'activityBar.activeFocusBorder': colors.selection,
    'activityBar.background': colors.backgroundDarker,
    'activityBar.border': colors.backgroundDarker,
    'activityBar.dropBorder': colors.backgroundDarker,
    'activityBar.foreground': colors.white,
    'activityBar.inactiveForeground': translucify(colors.foreground, 0.5),
    'activityBarBadge.background': colors.selectionLight,
    'activityBarBadge.foreground': colors.white,

    // Badge
    // ------------------------------
    'badge.background': colors.selectionLight,
    'badge.foreground': colors.white,

    // Breadcrumbs
    // ------------------------------
    'breadcrumb.activeSelectionForeground': colors.foreground,
    'breadcrumb.background': colors.background,
    'breadcrumb.focusForeground': colors.foreground,
    'breadcrumb.foreground': translucify(colors.comment, 0.6),
    'breadcrumbPicker.background': colors.background,

    // Buttons
    // ------------------------------
    'button.background': colors.selection,
    'button.foreground': colors.foreground,
    'button.hoverBackground': translucify(colors.selection, 0.5),
    'button.secondaryBackground': colors.selection,
    'button.secondaryForeground': colors.foreground,
    'button.secondaryHoverBackground': translucify(colors.selection, 0.5),

    // Charts
    // ------------------------------
    'charts.blue': colors.blue,
    'charts.foreground': colors.foreground,
    'charts.green': colors.green,
    'charts.lines': colors.comment,
    'charts.orange': colors.orange,
    'charts.purple': colors.magenta,
    'charts.red': colors.red,
    'charts.yellow': colors.yellow,

    // Checkbox
    // ------------------------------
    'checkbox.background': colors.selection,
    'checkbox.border': null,
    'checkbox.foreground': colors.foreground,

    // Debug
    // ------------------------------
    'debugIcon.breakpointCurrentStackframeForeground': colors.yellow,
    'debugIcon.breakpointDisabledForeground': colors.blue,
    'debugIcon.breakpointForeground': colors.red,
    'debugIcon.breakpointStackframeForeground': colors.green,
    'debugIcon.breakpointUnverifiedForeground': colors.blue,
    'debugExceptionWidget.background': colors.background,
    'debugExceptionWidget.border': colors.selection,
    'debugToolBar.background': colors.background,

    // Diff Editor
    // ------------------------------
    'diffEditor.border': null,
    'diffEditor.diagonalFill': null,
    'diffEditor.insertedTextBackground': translucify(colors.green, 0.3),
    'diffEditor.insertedTextBorder': null,
    'diffEditor.removedTextBackground': translucify(colors.red, 0.3),
    'diffEditor.removedTextBorder': null,

    // Dropdown
    // ------------------------------
    'dropdown.background': colors.backgroundLight,
    'dropdown.border': null,
    'dropdown.foreground': colors.foreground,
    'dropdown.listBackground': colors.backgroundLight,

    // Editor
    // ------------------------------
    'editor.background': colors.background,
    'editor.findMatchBackground': colors.selection,
    'editor.findMatchBorder': null,
    'editor.findMatchHighlightBackground': colors.selectionDark,
    'editor.findMatchHighlightBorder': null,
    'editor.findRangeHighlightBackground': colors.selectionDark,
    'editor.findRangeHighlightBorder': null,
    'editor.foreground': colors.foreground,
    'editor.hoverHighlightBackground': colors.selection,
    'editor.inactiveSelectionBackground': colors.selection,
    'editor.lineHighlightBackground': colors.backgroundDark,
    'editor.lineHighlightBorder': null,
    'editor.rangeHighlightBackground': colors.selection,
    'editor.selectionBackground': colors.selection,
    'editor.selectionHighlightBackground': colors.selectionDark,
    'editor.selectionHighlightBorder': null,
    'editor.wordHighlightBackground': colors.selectionDark,
    'editor.wordHighlightBorder': null,
    'editor.wordHighlightStrongBackground': colors.selectionDark,
    'editor.wordHighlightStrongBorder': null,
    'editorCodeLens.foreground': colors.yellow,
    'editorLink.activeForeground': null,
    'editorRuler.foreground': colors.comment,
    'editorWhitespace.foreground': null,

    // Editor Bracket Match
    // ------------------------------
    'editorBracketMatch.background': colors.selectionDark,
    'editorBracketMatch.border': translucify(colors.background, 0),

    // Editor Cursor
    // ------------------------------
    'editorCursor.background': null,
    'editorCursor.foreground': colors.foreground,

    // Editor Error & Warnings
    // ------------------------------
    'editorError.background': null,
    'editorError.border': null,
    'editorError.foreground': colors.red,
    'editorWarning.background': null,
    'editorWarning.border': null,
    'editorWarning.foreground': colors.yellow,

    // Editor Group
    // ------------------------------
    'editorGroup.border': null,
    'editorGroup.dropBackground': translucify(colors.selection, 0.5),
    'editorGroupHeader.noTabsBackground': null,
    'editorGroupHeader.tabsBackground': colors.backgroundDark,
    'editorGroupHeader.tabsBorder': null,

    // Editor Gutter
    // ------------------------------
    'editorGutter.addedBackground': colors.green,
    'editorGutter.background': null,
    'editorGutter.commentRangeForeground': null,
    'editorGutter.deletedBackground': colors.red,
    'editorGutter.foldingControlForeground': null,
    'editorGutter.modifiedBackground': colors.yellow,

    // Editor Indentation Guides
    // ------------------------------
    'editorIndentGuide.background': colors.selection,
    'editorIndentGuide.activeBackground': colors.selection,

    // Editor LightBulb
    // ------------------------------
    'editorLightBulb.foreground': colors.yellow,
    'editorLightBulbAutoFix.foreground': colors.blue,

    // Editor Line Numbers
    // ------------------------------
    'editorLineNumber.activeForeground': colors.foreground,
    'editorLineNumber.foreground': translucify(colors.comment, 0.6),

    // Editor Marker
    // ------------------------------
    'editorMarkerNavigation.background': colors.background,
    'editorMarkerNavigationError.background': colors.red,
    'editorMarkerNavigationWarning.background': colors.yellow,

    // Editor Overview Ruler
    // ------------------------------
    'editorOverviewRuler.addedForeground': colors.green,
    'editorOverviewRuler.background': colors.background,
    'editorOverviewRuler.border': colors.selection,
    'editorOverviewRuler.bracketMatchForeground': colors.foregroundCode,
    'editorOverviewRuler.commonContentForeground': colors.backgroundLight,
    'editorOverviewRuler.currentContentForeground': colors.mergeCurrent,
    'editorOverviewRuler.deletedForeground': colors.red,
    'editorOverviewRuler.errorForeground': colors.red,
    'editorOverviewRuler.findMatchForeground': colors.selectionLight,
    'editorOverviewRuler.incomingContentForeground': colors.mergeIncoming,
    'editorOverviewRuler.infoForeground': colors.blue,
    'editorOverviewRuler.modifiedForeground': colors.yellow,
    'editorOverviewRuler.rangeHighlightForeground': colors.selectionLight,
    'editorOverviewRuler.selectionHighlightForeground': colors.red,
    'editorOverviewRuler.warningForeground': colors.yellow,
    'editorOverviewRuler.wordHighlightForeground': colors.selectionLight,
    'editorOverviewRuler.wordHighlightStrongForeground': colors.selectionLight,

    // Editor Widgets
    // ------------------------------
    'editorWidget.background': colors.background,
    'editorWidget.border': colors.selection,
    'editorWidget.foreground': colors.foreground,
    'editorWidget.resizeBorder': colors.selection,
    'editorHoverWidget.background': colors.backgroundDark,
    'editorHoverWidget.border': colors.selection,
    'editorHoverWidget.foreground': colors.foreground,
    'editorSuggestWidget.background': colors.backgroundDark,
    'editorSuggestWidget.border': null,
    'editorSuggestWidget.foreground': colors.foreground,
    'editorSuggestWidget.highlightForeground': colors.blue,
    'editorSuggestWidget.selectedBackground': colors.selection,

    // Extensions Button
    // ------------------------------
    'extensionButton.prominentBackground': colors.selection,
    'extensionButton.prominentForeground': colors.foreground,
    'extensionButton.prominentHoverBackground': translucify(colors.selection, 0.5),

    // Git Decoration
    // ------------------------------
    'gitDecoration.addedResourceForeground': translucify(colors.green, 0.9),
    'gitDecoration.conflictingResourceForeground': translucify(colors.orange, 0.85),
    'gitDecoration.deletedResourceForeground': translucify(colors.red, 0.85),
    'gitDecoration.ignoredResourceForeground': translucify(colors.comment, 0.85),
    'gitDecoration.modifiedResourceForeground': translucify(colors.yellow, 0.9),
    'gitDecoration.renamedResourceForeground': translucify(colors.green, 0.9),
    'gitDecoration.submoduleResourceForeground': null,
    'gitDecoration.stageDeletedResourceForeground': translucify(colors.red, 0.85),
    'gitDecoration.stageModifiedResourceForeground': translucify(colors.yellow, 0.9),
    'gitDecoration.untrackedResourceForeground': translucify(colors.green, 0.9),

    // Image Preview
    // ------------------------------
    'imagePreview.border': null,

    // Inputs
    // ------------------------------
    'input.background': colors.backgroundLight,
    'input.border': null,
    'input.foreground': colors.foreground,
    'input.placeholderForeground': translucify(colors.foreground, 0.5),
    'inputOption.activeBorder': colors.foreground,
    'inputValidation.errorBackground': colors.red,
    'inputValidation.errorBorder': colors.red,
    'inputValidation.errorForeground': colors.white,
    'inputValidation.infoBackground': colors.backgroundDark,
    'inputValidation.infoBorder': colors.backgroundDark,
    'inputValidation.infoForeground': colors.foreground,
    'inputValidation.warningBackground': colors.backgroundDark,
    'inputValidation.warningBorder': colors.backgroundDark,
    'inputValidation.warningForeground': colors.foreground,

    // List
    // ------------------------------
    'list.activeSelectionBackground': colors.selectionDark,
    'list.activeSelectionForeground': colors.foreground,
    'list.dropBackground': translucify(colors.selectionDark, 0.5),
    'list.errorForeground': translucify(colors.red, 0.9),
    'list.focusBackground': colors.selectionDark,
    'list.focusForeground': colors.foreground,
    'list.highlightForeground': colors.blue,
    'list.hoverBackground': translucify(colors.selectionDark, 0.5),
    'list.hoverForeground': colors.foreground,
    'list.inactiveSelectionBackground': colors.selectionDark,
    'list.inactiveSelectionForeground': colors.foreground,
    'list.warningForeground': translucify(colors.yellow, 0.9),

    // Merge
    // ------------------------------
    'merge.border': null,
    'merge.commonContentBackground': colors.backgroundDark,
    'merge.commonHeaderBackground': colors.backgroundLight,
    'merge.currentContentBackground': colors.mergeCurrentDark,
    'merge.currentHeaderBackground': colors.mergeCurrent,
    'merge.incomingContentBackground': colors.mergeIncomingDark,
    'merge.incomingHeaderBackground': colors.mergeIncoming,

    // Minimap
    // ------------------------------
    'minimap.background': colors.background,
    'minimap.errorHighlight': colors.red,
    'minimap.findMatchHighlight': colors.selection,
    'minimap.selectionHighlight': colors.selection,
    'minimap.warningHighlight': colors.yellow,
    'minimapGutter.addedBackground': colors.red,
    'minimapGutter.deletedBackground': colors.red,
    'minimapGutter.modifiedBackground': colors.yellow,
    'minimapSlider.activeBackground': null,
    'minimapSlider.background': null,
    'minimapSlider.hoverBackground': null,

    // Notifications
    // ------------------------------
    'notifications.background': colors.background,
    'notifications.border': colors.selection,
    'notifications.foreground': colors.foreground,
    'notificationCenter.border': null,
    'notificationCenterHeader.foreground': colors.foreground,
    'notificationCenterHeader.background': colors.backgroundDark,
    'notificationLink.foreground': colors.foreground,
    'notificationToast.border': colors.selection,

    // Notification Icons
    // ------------------------------
    'notificationsErrorIcon.foreground': colors.red,
    'notificationsInfoIcon.foreground': colors.blue,
    'notificationsWarningIcon.foreground': colors.yellow,

    // Panel
    // ------------------------------
    'panel.background': colors.background,
    'panel.border': colors.selectionDark,
    'panel.dropBorder': colors.selection,
    'panelInput.border': null,
    'panelSection.border': null,
    'panelSection.dropBackground': colors.selection,
    'panelSectionHeader.background': null,
    'panelSectionHeader.border': null,
    'panelSectionHeader.foreground': colors.foreground,
    'panelTitle.activeBorder': colors.selectionLight,
    'panelTitle.activeForeground': colors.white,
    'panelTitle.inactiveForeground': translucify(colors.comment, 0.9),

    // Peek View
    // ------------------------------
    'peekView.border': colors.selection,
    'peekViewEditor.background': colors.background,
    'peekViewEditor.matchHighlightBackground': colors.selection,
    'peekViewEditor.matchHighlightBorder': null,
    'peekViewEditorGutter.background': colors.background,
    'peekViewResult.background': colors.backgroundDark,
    'peekViewResult.fileForeground': colors.foreground,
    'peekViewResult.lineForeground': colors.foreground,
    'peekViewResult.matchHighlightBackground': colors.selection,
    'peekViewResult.selectionBackground': translucify(colors.selectionDark, 0.5),
    'peekViewResult.selectionForeground': colors.foreground,
    'peekViewTitle.background': colors.backgroundDark,
    'peekViewTitleDescription.foreground': colors.foreground,
    'peekViewTitleLabel.foreground': colors.foreground,

    // Picker
    // ------------------------------
    'pickerGroup.border': colors.selection,
    'pickerGroup.foreground': colors.foreground,
    'quickInput.background': colors.backgroundDark,
    'quickInput.foreground': colors.foreground,
    'quickInputTitle.background': null,

    // Problems
    // ------------------------------
    'problemsErrorIcon.foreground': colors.red,
    'problemsInfoIcon.foreground': colors.blue,
    'problemsWarningIcon.foreground': colors.yellow,

    // Scrollbar
    // ------------------------------
    'scrollbar.shadow': translucify(colors.background, 0),
    'scrollbarSlider.activeBackground': colors.selection,
    'scrollbarSlider.background': translucify(colors.selectionDark, 0.75),
    'scrollbarSlider.hoverBackground': colors.selection,

    // Settings
    // ------------------------------
    'settings.checkboxBackground': colors.selection,
    'settings.checkboxBorder': null,
    'settings.checkboxForeground': colors.foreground,
    'settings.dropdownBackground': colors.selection,
    'settings.dropdownBorder': null,
    'settings.dropdownForeground': colors.foreground,
    'settings.dropdownListBorder': null,
    'settings.focusedRowBackground': colors.backgroundDark,
    'settings.headerForeground': colors.foreground,
    'settings.modifiedItemIndicator': colors.selection,
    'settings.numberInputBackground': colors.selection,
    'settings.numberInputBorder': null,
    'settings.numberInputForeground': colors.foreground,
    'settings.textInputBackground': colors.selection,
    'settings.textInputBorder': null,
    'settings.textInputForeground': colors.foreground,

    // Sidebar
    // ------------------------------
    'sideBar.background': colors.backgroundDark,
    'sideBar.border': null,
    'sideBar.dropBackground': colors.backgroundDark,
    'sideBar.foreground': colors.foregroundAlt,
    'sideBarSectionHeader.background': colors.backgroundDarker,
    'sideBarSectionHeader.border': null,
    'sideBarSectionHeader.foreground': colors.foreground,
    'sideBarTitle.foreground': colors.foreground,

    // Status Bar
    // ------------------------------
    'statusBar.background': colors.backgroundDarker,
    'statusBar.border': null,
    'statusBar.debuggingBackground': colors.backgroundDarker,
    'statusBar.debuggingBorder': null,
    'statusBar.debuggingForeground': null,
    'statusBar.foreground': translucify(colors.foreground, 0.5),
    'statusBar.noFolderBackground': colors.backgroundDarker,
    'statusBar.noFolderBorder': null,
    'statusBar.noFolderForeground': translucify(colors.foreground, 0.5),
    'statusBarItem.activeBackground': colors.backgroundDarker,
    'statusBarItem.errorBackground': colors.backgroundDarker,
    'statusBarItem.errorForeground': colors.red,
    'statusBarItem.hoverBackground': colors.backgroundDarker,
    'statusBarItem.prominentBackground': colors.backgroundDarker,
    'statusBarItem.prominentForeground': translucify(colors.foreground, 0.5),
    'statusBarItem.prominentHoverBackground': colors.backgroundDarker,
    'statusBarItem.remoteBackground': colors.backgroundDark,
    'statusBarItem.remoteForeground': translucify(colors.foreground, 0.5),

    // Tabs
    // ------------------------------
    'tab.activeBackground': colors.background,
    'tab.activeBorder': colors.background,
    'tab.activeBorderTop': null,
    'tab.activeForeground': colors.foreground,
    'tab.activeModifiedBorder': null,
    'tab.border': colors.background,
    'tab.hoverBackground': null,
    'tab.hoverBorder': null,
    'tab.hoverForeground': colors.foreground,
    'tab.inactiveBackground': colors.backgroundLight,
    'tab.inactiveForeground': translucify(colors.foreground, 0.75),
    'tab.inactiveModifiedBorder': null,
    'tab.lastPinnedBorder': colors.backgroundDarker,
    'tab.unfocusedActiveBackground': null,
    'tab.unfocusedActiveBorder': null,
    'tab.unfocusedActiveBorderTop': null,
    'tab.unfocusedActiveForeground': null,
    'tab.unfocusedActiveModifiedBorder': null,
    'tab.unfocusedHoverBackground': null,
    'tab.unfocusedHoverBorder': null,
    'tab.unfocusedHoverForeground': null,
    'tab.unfocusedInactiveBackground': null,
    'tab.unfocusedInactiveForeground': null,
    'tab.unfocusedInactiveModifiedBorder': null,

    // Terminal
    // ------------------------------
    'terminal.ansiBlack': colors.black,
    'terminal.ansiBlue': colors.blue,
    'terminal.ansiCyan': colors.cyan,
    'terminal.ansiGreen': colors.green,
    'terminal.ansiMagenta': colors.magenta,
    'terminal.ansiRed': colors.red,
    'terminal.ansiWhite': colors.white,
    'terminal.ansiYellow': colors.yellow,
    'terminal.background': colors.background,
    'terminal.border': colors.selection,
    'terminal.foreground': colors.foreground,
    'terminal.selectionBackground': colors.selectionLight,
    'terminalCursor.background': colors.foreground,
    'terminalCursor.foreground': colors.foreground,

    // Terminal Bright
    // ------------------------------
    'terminal.ansiBrightBlack': colors.brightBlack,
    'terminal.ansiBrightBlue': colors.brightBlue,
    'terminal.ansiBrightCyan': colors.brightCyan,
    'terminal.ansiBrightGreen': colors.brightGreen,
    'terminal.ansiBrightMagenta': colors.brightMagenta,
    'terminal.ansiBrightRed': colors.brightRed,
    'terminal.ansiBrightWhite': colors.BrightWhite,
    'terminal.ansiBrightYellow': colors.BrightYellow,

    // Text
    // ------------------------------
    'textLink.activeForeground': colors.blue,
    'textLink.foreground': colors.blue,

    // Title Bar
    // ------------------------------
    'titleBar.activeBackground': colors.backgroundDarker,
    'titleBar.activeForeground': colors.foreground,
    'titleBar.border': colors.backgroundDarker,
    'titleBar.inactiveBackground': colors.backgroundDarker,
    'titleBar.inactiveForeground': colors.foreground,

    // Tree
    // ------------------------------
    'tree.indentGuidesStroke': colors.selection,

    // Welcome Page
    // ------------------------------
    'walkThrough.embeddedEditorBackground': colors.backgroundDark,
    'welcomePage.background': colors.background,
    'welcomePage.buttonBackground': colors.backgroundDark,
    'welcomePage.buttonHoverBackground': colors.backgroundDarker,

    // Window
    // ------------------------------
    'window.activeBorder': null,
    'window.inactiveBorder': null,
  },
};
