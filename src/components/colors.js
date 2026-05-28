/* eslint-disable sort-keys-fix/sort-keys-fix */

import colors from '../colors.js';
import darken from '../utilities/darken.js';
import translucify from '../utilities/translucify.js';

export default {
  colors: {
    // -- Base Colors --
    // ------------------------------
    'contrastActiveBorder': null,
    'contrastBorder': null,
    'descriptionForeground': colors.foreground,
    'disabledForeground': translucify(colors.foreground, 0.5),
    'errorForeground': colors.foreground,
    'focusBorder': translucify(colors.white, 0),
    'foreground': colors.foreground,
    'icon.foreground': colors.foreground,
    'selection.background': colors.backgroundDark,
    'widget.shadow': colors.backgroundDark,

    // Action Bar
    // ------------------------------
    'actionBar.toggledBackground': colors.selectionDark,

    // Activity Bar
    // ------------------------------
    'activityBar.activeBorder': colors.selectionLight,
    'activityBar.activeBackground': colors.backgroundDark,
    'activityBar.activeFocusBorder': colors.selection,
    'activityBar.background': colors.backgroundDark,
    'activityBar.border': colors.backgroundDark,
    'activityBar.dropBorder': colors.backgroundDark,
    'activityBar.foreground': colors.white,
    'activityBar.inactiveForeground': translucify(colors.foreground, 0.5),
    'activityBarBadge.background': colors.selectionLight,
    'activityBarBadge.foreground': colors.white,
    'activityBarTop.activeBackground': colors.backgroundDark,
    'activityBarTop.activeBorder': colors.selectionLight,
    'activityBarTop.background': colors.backgroundDark,
    'activityBarTop.dropBorder': colors.backgroundDark,
    'activityBarTop.foreground': colors.white,
    'activityBarTop.inactiveForeground': translucify(colors.foreground, 0.5),
    'activityErrorBadge.background': colors.red,
    'activityErrorBadge.foreground': colors.white,
    'activityWarningBadge.background': colors.yellow,
    'activityWarningBadge.foreground': colors.white,

    // Badge
    // ------------------------------
    'badge.background': colors.selectionLight,
    'badge.foreground': colors.white,

    // Banner
    // ------------------------------
    'banner.background': colors.backgroundLight,
    'banner.foreground': colors.foreground,
    'banner.iconForeground': colors.foreground,

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
    'button.border': null,
    'button.foreground': colors.foreground,
    'button.hoverBackground': translucify(colors.selection, 0.5),
    'button.secondaryBackground': colors.selection,
    'button.secondaryBorder': null,
    'button.secondaryForeground': colors.foreground,
    'button.secondaryHoverBackground': translucify(colors.selection, 0.5),
    'button.separator': colors.backgroundDarker,

    // Charts
    // ------------------------------
    'chart.axis': translucify(colors.comment, 0.6),
    'chart.guide': translucify(colors.comment, 0.3),
    'chart.line': colors.comment,
    'charts.blue': colors.blue,
    'charts.foreground': colors.foreground,
    'charts.green': colors.green,
    'charts.lines': colors.comment,
    'charts.orange': colors.orange,
    'charts.purple': colors.magenta,
    'charts.red': colors.red,
    'charts.yellow': colors.yellow,

    // Chat
    // ------------------------------
    'agentSessionReadIndicator.foreground': colors.foreground,
    'agentSessionSelectedBadge.border': colors.selectionLight,
    'agentSessionSelectedUnfocusedBadge.border': colors.selection,
    'agentStatusIndicator.background': colors.selection,
    'aiCustomizationManagement.sashBorder': colors.selection,
    'chat.avatarBackground': colors.selectionLight,
    'chat.avatarForeground': colors.white,
    'chat.checkpointSeparator': colors.selection,
    'chat.editedFileForeground': colors.cyan,
    'chat.linesAddedForeground': colors.green,
    'chat.linesRemovedForeground': colors.red,
    'chat.requestBackground': colors.backgroundLight,
    'chat.requestBorder': colors.selection,
    'chat.requestBubbleBackground': colors.backgroundLight,
    'chat.requestBubbleHoverBackground': colors.background,
    'chat.requestCodeBorder': colors.selection,
    'chat.slashCommandBackground': translucify(colors.cyan, 0.15),
    'chat.slashCommandForeground': colors.cyan,
    'chat.thinkingShimmer': null,
    'chatManagement.sashBorder': colors.selection,

    // Checkbox
    // ------------------------------
    'checkbox.background': colors.selection,
    'checkbox.border': null,
    'checkbox.foreground': colors.foreground,
    'checkbox.disabled.background': colors.selectionDark,
    'checkbox.disabled.foreground': translucify(colors.foreground, 0.5),
    'checkbox.selectBackground': colors.selection,
    'checkbox.selectBorder': colors.selectionLight,

    // Command Center
    // ------------------------------
    'commandCenter.activeBackground': colors.backgroundDark,
    'commandCenter.activeBorder': colors.selection,
    'commandCenter.activeForeground': colors.foreground,
    'commandCenter.background': colors.backgroundDarker,
    'commandCenter.border': colors.backgroundDarker,
    'commandCenter.debuggingBackground': colors.backgroundDarker,
    'commandCenter.foreground': colors.foreground,
    'commandCenter.inactiveBorder': colors.backgroundDarker,
    'commandCenter.inactiveForeground': translucify(colors.foreground, 0.5),

    // Comments
    // ------------------------------
    'commentsView.resolvedIcon': colors.green,
    'commentsView.unresolvedIcon': colors.blue,

    // Debug
    // ------------------------------
    'debugConsole.errorForeground': colors.red,
    'debugConsole.infoForeground': colors.blue,
    'debugConsole.sourceForeground': colors.foreground,
    'debugConsole.warningForeground': colors.yellow,
    'debugConsoleInputIcon.foreground': colors.foreground,
    'debugIcon.breakpointCurrentStackframeForeground': colors.yellow,
    'debugIcon.breakpointDisabledForeground': colors.blue,
    'debugIcon.breakpointForeground': colors.red,
    'debugIcon.breakpointStackframeForeground': colors.green,
    'debugIcon.breakpointUnverifiedForeground': colors.blue,
    'debugIcon.continueForeground': colors.green,
    'debugIcon.disconnectForeground': colors.red,
    'debugIcon.pauseForeground': colors.yellow,
    'debugIcon.restartForeground': colors.orange,
    'debugIcon.startForeground': colors.green,
    'debugIcon.stepBackForeground': colors.cyan,
    'debugIcon.stepIntoForeground': colors.cyan,
    'debugIcon.stepOutForeground': colors.cyan,
    'debugIcon.stepOverForeground': colors.cyan,
    'debugIcon.stopForeground': colors.red,
    'debugExceptionWidget.background': colors.background,
    'debugExceptionWidget.border': colors.selection,
    'debugToolBar.background': colors.background,
    'debugToolBar.border': colors.selection,
    'debugTokenExpression.boolean': colors.orange,
    'debugTokenExpression.error': colors.red,
    'debugTokenExpression.name': colors.foreground,
    'debugTokenExpression.number': colors.orange,
    'debugTokenExpression.string': colors.green,
    'debugTokenExpression.type': colors.cyan,
    'debugTokenExpression.value': colors.foreground,
    'debugView.exceptionLabelBackground': colors.red,
    'debugView.exceptionLabelForeground': colors.white,
    'debugView.stateLabelBackground': colors.selection,
    'debugView.stateLabelForeground': colors.foreground,
    'debugView.valueChangedHighlight': translucify(colors.yellow, 0.2),

    // Diff Editor
    // ------------------------------
    'diffEditor.border': null,
    'diffEditor.diagonalFill': null,
    'diffEditor.insertedTextBackground': translucify(colors.green, 0.3),
    'diffEditor.insertedTextBorder': null,
    'diffEditor.insertedLineBackground': translucify(colors.green, 0.15),
    'diffEditor.move.border': translucify(colors.blue, 0.4),
    'diffEditor.moveActive.border': translucify(colors.blue, 0.6),
    'diffEditor.removedTextBackground': translucify(colors.red, 0.3),
    'diffEditor.removedTextBorder': null,
    'diffEditor.removedLineBackground': translucify(colors.red, 0.15),
    'diffEditor.unchangedCodeBackground': null,
    'diffEditor.unchangedRegionBackground': colors.backgroundDark,
    'diffEditor.unchangedRegionForeground': colors.foreground,
    'diffEditor.unchangedRegionShadow': translucify(colors.background, 0),
    'diffEditorGutter.insertedLineBackground': translucify(colors.green, 0.4),
    'diffEditorGutter.removedLineBackground': translucify(colors.red, 0.4),
    'diffEditorOverview.insertedForeground': translucify(colors.green, 0.6),
    'diffEditorOverview.removedForeground': translucify(colors.red, 0.6),

    // Dropdown
    // ------------------------------
    'dropdown.background': colors.backgroundLight,
    'dropdown.border': null,
    'dropdown.foreground': colors.foreground,
    'dropdown.listBackground': colors.backgroundLight,

    // Editor
    // ------------------------------
    'editor.background': colors.background,
    'editor.compositionBorder': colors.selection,
    'editor.findMatchBackground': colors.selectionLight,
    'editor.findMatchBorder': null,
    'editor.findMatchForeground': colors.foreground,
    'editor.findMatchHighlightBackground': colors.selectionDark,
    'editor.findMatchHighlightBorder': null,
    'editor.findMatchHighlightForeground': colors.foreground,
    'editor.findRangeHighlightBackground': colors.selectionDark,
    'editor.findRangeHighlightBorder': null,
    'editor.focusedStackFrameHighlightBackground': translucify(colors.cyan, 0.15),
    'editor.foldBackground': translucify(colors.backgroundDark, 0.7),
    'editor.foldPlaceholderForeground': translucify(colors.comment, 0.7),
    'editor.foreground': colors.foreground,
    'editor.hoverHighlightBackground': colors.selection,
    'editor.inactiveLineHighlightBackground': colors.backgroundDark,
    'editor.inactiveSelectionBackground': colors.selection,
    'editor.inlineValuesBackground': colors.backgroundDark,
    'editor.inlineValuesForeground': translucify(colors.comment, 0.8),
    'editor.lineHighlightBackground': colors.backgroundDark,
    'editor.lineHighlightBorder': null,
    'editor.linkedEditingBackground': translucify(colors.green, 0.12),
    'editor.placeholder.foreground': translucify(colors.comment, 0.6),
    'editor.rangeHighlightBackground': colors.selection,
    'editor.rangeHighlightBorder': colors.selectionLight,
    'editor.selectionBackground': colors.selection,
    'editor.selectionForeground': null,
    'editor.selectionHighlightBackground': colors.selectionDark,
    'editor.selectionHighlightBorder': null,
    'editor.snippetFinalTabstopHighlightBackground': translucify(colors.selectionLight, 0.5),
    'editor.snippetFinalTabstopHighlightBorder': colors.selectionLight,
    'editor.snippetTabstopHighlightBackground': translucify(colors.selection, 0.5),
    'editor.snippetTabstopHighlightBorder': colors.selection,
    'editor.stackFrameHighlightBackground': translucify(colors.blue, 0.15),
    'editor.symbolHighlightBackground': translucify(colors.selectionLight, 0.4),
    'editor.symbolHighlightBorder': colors.selectionLight,
    'editor.tokenColorCustomizations': null,
    'editor.wordHighlightBackground': colors.selectionDark,
    'editor.wordHighlightBorder': null,
    'editor.wordHighlightStrongBackground': colors.selectionDark,
    'editor.wordHighlightStrongBorder': null,
    'editor.wordHighlightTextBackground': colors.selectionDark,
    'editor.wordHighlightTextBorder': null,
    'editorCodeLens.foreground': colors.blue,
    'editorLink.activeForeground': null,
    'editorRuler.foreground': colors.selection,
    'editorWhitespace.foreground': null,

    // Editor Action List
    // ------------------------------
    'editorActionList.background': colors.backgroundDark,
    'editorActionList.focusBackground': colors.selectionDark,
    'editorActionList.focusForeground': colors.foreground,
    'editorActionList.foreground': colors.foreground,

    // Editor Bracket Highlight
    // ------------------------------
    'editorBracketHighlight.foreground1': colors.magenta,
    'editorBracketHighlight.foreground2': colors.blue,
    'editorBracketHighlight.foreground3': colors.cyan,
    'editorBracketHighlight.foreground4': colors.green,
    'editorBracketHighlight.foreground5': colors.orange,
    'editorBracketHighlight.foreground6': colors.yellow,
    'editorBracketHighlight.unexpectedBracket.foreground': colors.red,

    // Editor Bracket Pair Guide
    // ------------------------------
    'editorBracketPairGuide.activeBackground1': translucify(colors.magenta, 0.45),
    'editorBracketPairGuide.activeBackground2': translucify(colors.blue, 0.45),
    'editorBracketPairGuide.activeBackground3': translucify(colors.cyan, 0.45),
    'editorBracketPairGuide.activeBackground4': translucify(colors.green, 0.45),
    'editorBracketPairGuide.activeBackground5': translucify(colors.orange, 0.45),
    'editorBracketPairGuide.activeBackground6': translucify(colors.yellow, 0.45),
    'editorBracketPairGuide.background1': translucify(colors.magenta, 0.25),
    'editorBracketPairGuide.background2': translucify(colors.blue, 0.25),
    'editorBracketPairGuide.background3': translucify(colors.cyan, 0.25),
    'editorBracketPairGuide.background4': translucify(colors.green, 0.25),
    'editorBracketPairGuide.background5': translucify(colors.orange, 0.25),
    'editorBracketPairGuide.background6': translucify(colors.yellow, 0.25),

    // Editor Bracket Match
    // ------------------------------
    'editorBracketMatch.background': colors.selection,
    'editorBracketMatch.border': translucify(colors.selectionLight, 0.5),
    'editorBracketMatch.foreground': colors.foreground,

    // Editor Comments Widget
    // ------------------------------
    'editorCommentsWidget.rangeActiveBackground': translucify(colors.blue, 0.2),
    'editorCommentsWidget.rangeBackground': translucify(colors.blue, 0.1),
    'editorCommentsWidget.replyInputBackground': colors.backgroundLight,
    'editorCommentsWidget.resolvedBorder': colors.green,
    'editorCommentsWidget.unresolvedBorder': colors.orange,

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

    // Editor Ghost Text
    // ------------------------------
    'editorGhostText.background': null,
    'editorGhostText.border': null,
    'editorGhostText.foreground': translucify(colors.comment, 0.6),

    // Editor Group
    // ------------------------------
    'editorGroup.border': null,
    'editorGroup.dropBackground': translucify(colors.selection, 0.5),
    'editorGroup.dropIntoPromptBackground': translucify(colors.selection, 0.7),
    'editorGroup.dropIntoPromptBorder': colors.selection,
    'editorGroup.dropIntoPromptForeground': colors.foreground,
    'editorGroup.emptyBackground': null,
    'editorGroup.focusedEmptyBorder': null,
    'editorGroupHeader.border': null,
    'editorGroupHeader.noTabsBackground': null,
    'editorGroupHeader.tabsBackground': colors.backgroundDark,
    'editorGroupHeader.tabsBorder': null,

    // Editor Gutter
    // ------------------------------
    'editorGutter.addedBackground': colors.green,
    'editorGutter.addedSecondaryBackground': translucify(colors.green, 0.5),
    'editorGutter.background': null,
    'editorGutter.commentDraftGlyphForeground': colors.orange,
    'editorGutter.commentGlyphForeground': colors.blue,
    'editorGutter.commentRangeForeground': null,
    'editorGutter.commentUnresolvedGlyphForeground': colors.orange,
    'editorGutter.deletedBackground': colors.red,
    'editorGutter.deletedSecondaryBackground': translucify(colors.red, 0.5),
    'editorGutter.foldingControlForeground': null,
    'editorGutter.itemBackground': null,
    'editorGutter.itemGlyphForeground': colors.foreground,
    'editorGutter.modifiedBackground': colors.yellow,
    'editorGutter.modifiedSecondaryBackground': translucify(colors.yellow, 0.5),

    // Editor Hint
    // ------------------------------
    'editorHint.border': null,
    'editorHint.foreground': colors.cyan,

    // Editor Indentation Guides
    // ------------------------------
    'editorIndentGuide.activeBackground': colors.selection,
    'editorIndentGuide.activeBackground1': null,
    'editorIndentGuide.activeBackground2': null,
    'editorIndentGuide.activeBackground3': null,
    'editorIndentGuide.activeBackground4': null,
    'editorIndentGuide.activeBackground5': null,
    'editorIndentGuide.activeBackground6': null,
    'editorIndentGuide.background': colors.selection,
    'editorIndentGuide.background1': null,
    'editorIndentGuide.background2': null,
    'editorIndentGuide.background3': null,
    'editorIndentGuide.background4': null,
    'editorIndentGuide.background5': null,
    'editorIndentGuide.background6': null,

    // Editor Info
    // ------------------------------
    'editorInfo.background': null,
    'editorInfo.border': null,
    'editorInfo.foreground': colors.blue,

    // Editor Inlay Hints
    // ------------------------------
    'editorInlayHint.background': translucify(colors.backgroundLight, 0.6),
    'editorInlayHint.foreground': translucify(colors.foreground, 0.7),
    'editorInlayHint.parameterBackground': translucify(colors.backgroundLight, 0.6),
    'editorInlayHint.parameterForeground': translucify(colors.cyan, 0.75),
    'editorInlayHint.typeBackground': translucify(colors.backgroundLight, 0.6),
    'editorInlayHint.typeForeground': translucify(colors.blue, 0.75),

    // Editor LightBulb
    // ------------------------------
    'editorLightBulb.foreground': colors.yellow,
    'editorLightBulbAi.foreground': colors.yellow,
    'editorLightBulbAutoFix.foreground': colors.blue,

    // Editor Line Numbers
    // ------------------------------
    'editorLineNumber.activeForeground': colors.foreground,
    'editorLineNumber.dimmedForeground': translucify(colors.comment, 0.35),
    'editorLineNumber.foreground': translucify(colors.comment, 0.6),

    // Editor Marker
    // ------------------------------
    'editorMarkerNavigation.background': colors.background,
    'editorMarkerNavigationError.background': colors.red,
    'editorMarkerNavigationError.headerBackground': colors.red,
    'editorMarkerNavigationInfo.background': colors.blue,
    'editorMarkerNavigationInfo.headerBackground': colors.blue,
    'editorMarkerNavigationWarning.background': colors.yellow,
    'editorMarkerNavigationWarning.headerBackground': colors.yellow,

    // Editor Multi Cursor
    // ------------------------------
    'editorMultiCursor.primary.background': null,
    'editorMultiCursor.primary.foreground': colors.foreground,
    'editorMultiCursor.secondary.background': null,
    'editorMultiCursor.secondary.foreground': colors.foreground,

    // Editor Overview Ruler
    // ------------------------------
    'editorOverviewRuler.addedForeground': colors.green,
    'editorOverviewRuler.background': colors.background,
    'editorOverviewRuler.border': colors.background,
    'editorOverviewRuler.bracketMatchForeground': colors.foreground,
    'editorOverviewRuler.commentDraftForeground': colors.orange,
    'editorOverviewRuler.commentForeground': colors.comment,
    'editorOverviewRuler.commentUnresolvedForeground': colors.orange,
    'editorOverviewRuler.commonContentForeground': colors.backgroundLight,
    'editorOverviewRuler.currentContentForeground': colors.mergeCurrent,
    'editorOverviewRuler.deletedForeground': colors.red,
    'editorOverviewRuler.errorForeground': colors.red,
    'editorOverviewRuler.findMatchForeground': colors.selectionLight,
    'editorOverviewRuler.incomingContentForeground': colors.mergeIncoming,
    'editorOverviewRuler.infoForeground': colors.blue,
    'editorOverviewRuler.inlineChatInserted': colors.green,
    'editorOverviewRuler.inlineChatRemoved': colors.red,
    'editorOverviewRuler.modifiedForeground': colors.yellow,
    'editorOverviewRuler.rangeHighlightForeground': colors.selectionLight,
    'editorOverviewRuler.selectionHighlightForeground': colors.foreground,
    'editorOverviewRuler.warningForeground': colors.yellow,
    'editorOverviewRuler.wordHighlightForeground': colors.selectionLight,
    'editorOverviewRuler.wordHighlightStrongForeground': colors.selectionLight,
    'editorOverviewRuler.wordHighlightTextForeground': colors.selectionLight,

    // Editor Pane
    // ------------------------------
    'editorPane.background': colors.background,

    // Editor Sticky Scroll
    // ------------------------------
    'editorStickyScroll.background': colors.backgroundDark,
    'editorStickyScroll.border': colors.selectionDark,
    'editorStickyScroll.shadow': translucify(colors.background, 0),
    'editorStickyScrollGutter.background': colors.backgroundDark,
    'editorStickyScrollHover.background': colors.backgroundLight,

    // Editor Unicode Highlight
    // ------------------------------
    'editorUnicodeHighlight.background': translucify(colors.yellow, 0.1),
    'editorUnicodeHighlight.border': colors.yellow,

    // Editor Unnecessary Code
    // ------------------------------
    'editorUnnecessaryCode.border': null,
    'editorUnnecessaryCode.opacity': null,

    // Editor Widgets
    // ------------------------------
    'editorWidget.background': colors.background,
    'editorWidget.border': colors.selection,
    'editorWidget.foreground': colors.foreground,
    'editorWidget.resizeBorder': colors.selection,
    'editorHoverWidget.background': colors.backgroundDark,
    'editorHoverWidget.border': colors.selection,
    'editorHoverWidget.foreground': colors.foreground,
    'editorHoverWidget.highlightForeground': colors.blue,
    'editorHoverWidget.statusBarBackground': colors.backgroundDarker,
    'editorSuggestWidget.background': colors.backgroundDark,
    'editorSuggestWidget.border': null,
    'editorSuggestWidget.focusHighlightForeground': colors.blue,
    'editorSuggestWidget.foreground': colors.foreground,
    'editorSuggestWidget.highlightForeground': colors.blue,
    'editorSuggestWidget.selectedBackground': colors.selection,
    'editorSuggestWidget.selectedForeground': colors.foreground,
    'editorSuggestWidget.selectedIconForeground': colors.foreground,
    'editorSuggestWidgetStatus.foreground': translucify(colors.comment, 0.7),

    // Extensions
    // ------------------------------
    'extensionBadge.remoteBackground': colors.selectionLight,
    'extensionBadge.remoteForeground': colors.white,
    'extensionButton.background': colors.selection,
    'extensionButton.border': null,
    'extensionButton.foreground': colors.foreground,
    'extensionButton.hoverBackground': translucify(colors.selection, 0.5),
    'extensionButton.prominentBackground': colors.selection,
    'extensionButton.prominentForeground': colors.foreground,
    'extensionButton.prominentHoverBackground': translucify(colors.selection, 0.5),
    'extensionButton.separator': colors.backgroundDarker,
    'extensionIcon.preReleaseForeground': colors.yellow,
    'extensionIcon.privateForeground': colors.orange,
    'extensionIcon.sponsorForeground': colors.magenta,
    'extensionIcon.starForeground': colors.orange,
    'extensionIcon.verifiedForeground': colors.blue,

    // Gauge
    // ------------------------------
    'gauge.background': colors.backgroundLight,
    'gauge.border': colors.selection,
    'gauge.errorBackground': colors.red,
    'gauge.errorForeground': colors.white,
    'gauge.foreground': colors.foreground,
    'gauge.warningBackground': colors.yellow,
    'gauge.warningForeground': colors.white,

    // Git Decoration
    // ------------------------------
    'git.blame.editorDecorationForeground': translucify(colors.comment, 0.6),
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

    // Inline Chat
    // ------------------------------
    'inlineChat.background': colors.backgroundDark,
    'inlineChat.border': colors.selection,
    'inlineChat.foreground': colors.foreground,
    'inlineChat.shadow': translucify(colors.background, 0),
    'inlineChatDiff.inserted': colors.green,
    'inlineChatDiff.removed': colors.red,
    'inlineChatInput.background': colors.background,
    'inlineChatInput.border': colors.selection,
    'inlineChatInput.focusBorder': colors.selectionLight,
    'inlineChatInput.placeholderForeground': translucify(colors.foreground, 0.5),

    // Inline Edit
    // ------------------------------
    'inlineEdit.gutterIndicator.background': null,
    'inlineEdit.gutterIndicator.primaryBackground': colors.backgroundLight,
    'inlineEdit.gutterIndicator.primaryBorder': colors.selection,
    'inlineEdit.gutterIndicator.primaryForeground': colors.foreground,
    'inlineEdit.gutterIndicator.secondaryBackground': colors.backgroundLight,
    'inlineEdit.gutterIndicator.secondaryBorder': colors.selection,
    'inlineEdit.gutterIndicator.secondaryForeground': colors.foregroundAlt,
    'inlineEdit.gutterIndicator.successfulBackground': colors.backgroundLight,
    'inlineEdit.gutterIndicator.successfulBorder': colors.green,
    'inlineEdit.gutterIndicator.successfulForeground': colors.green,
    'inlineEdit.modifiedBackground': null,
    'inlineEdit.modifiedBorder': colors.blue,
    'inlineEdit.modifiedChangedLineBackground': null,
    'inlineEdit.modifiedChangedTextBackground': null,
    'inlineEdit.originalBackground': null,
    'inlineEdit.originalBorder': colors.selection,
    'inlineEdit.originalChangedLineBackground': null,
    'inlineEdit.originalChangedTextBackground': null,
    'inlineEdit.tabWillAcceptModifiedBorder': colors.blue,
    'inlineEdit.tabWillAcceptOriginalBorder': colors.selection,

    // Inputs
    // ------------------------------
    'input.background': colors.backgroundLight,
    'input.border': null,
    'input.foreground': colors.foreground,
    'input.placeholderForeground': translucify(colors.foreground, 0.5),
    'inputOption.activeBackground': colors.selection,
    'inputOption.activeBorder': colors.foreground,
    'inputOption.activeForeground': colors.foreground,
    'inputOption.hoverBackground': colors.selectionDark,
    'inputValidation.errorBackground': darken(colors.red),
    'inputValidation.errorBorder': darken(colors.red),
    'inputValidation.errorForeground': colors.white,
    'inputValidation.infoBackground': colors.backgroundDark,
    'inputValidation.infoBorder': translucify(colors.blue, 0.4),
    'inputValidation.infoForeground': colors.foreground,
    'inputValidation.warningBackground': colors.backgroundDark,
    'inputValidation.warningBorder': translucify(colors.yellow, 0.4),
    'inputValidation.warningForeground': colors.foreground,

    // Interactive
    // ------------------------------
    'interactive.activeCodeBorder': colors.selectionLight,
    'interactive.inactiveCodeBorder': colors.selection,

    // Keybinding Label
    // ------------------------------
    'keybindingLabel.background': colors.selectionDark,
    'keybindingLabel.border': colors.selection,
    'keybindingLabel.bottomBorder': colors.selection,
    'keybindingLabel.foreground': colors.foreground,
    'keybindingTable.headerBackground': colors.backgroundDarker,
    'keybindingTable.rowsBackground': colors.background,

    // List
    // ------------------------------
    'list.activeSelectionBackground': colors.selectionDark,
    'list.activeSelectionForeground': colors.foreground,
    'list.activeSelectionIconForeground': colors.foreground,
    'list.deemphasizedForeground': translucify(colors.comment, 0.7),
    'list.dropBackground': translucify(colors.selectionDark, 0.5),
    'list.dropBetweenBackground': translucify(colors.selectionDark, 0.7),
    'list.errorForeground': translucify(colors.red, 0.9),
    'list.filterMatchBackground': translucify(colors.selectionLight, 0.3),
    'list.filterMatchBorder': colors.selectionLight,
    'list.focusAndSelectionOutline': null,
    'list.focusBackground': colors.selectionDark,
    'list.focusForeground': colors.foreground,
    'list.focusHighlightForeground': colors.blue,
    'list.focusOutline': null,
    'list.highlightForeground': colors.blue,
    'list.hoverBackground': translucify(colors.selectionDark, 0.5),
    'list.hoverForeground': colors.foreground,
    'list.inactiveFocusBackground': translucify(colors.selectionDark, 0.5),
    'list.inactiveFocusOutline': null,
    'list.inactiveSelectionBackground': colors.selectionDark,
    'list.inactiveSelectionForeground': colors.foreground,
    'list.inactiveSelectionIconForeground': colors.foreground,
    'list.invalidItemForeground': colors.red,
    'list.warningForeground': translucify(colors.yellow, 0.9),

    // List Filter Widget
    // ------------------------------
    'listFilterWidget.background': colors.backgroundDark,
    'listFilterWidget.noMatchesOutline': colors.red,
    'listFilterWidget.outline': colors.selectionLight,
    'listFilterWidget.shadow': translucify(colors.background, 0),

    // Markdown Alert
    // ------------------------------
    'markdownAlert.caution.foreground': colors.orange,
    'markdownAlert.important.foreground': colors.red,
    'markdownAlert.note.foreground': colors.blue,
    'markdownAlert.tip.foreground': colors.green,
    'markdownAlert.warning.foreground': colors.yellow,

    // MCP
    // ------------------------------
    'mcpIcon.starForeground': colors.orange,

    // Menu
    // ------------------------------
    'menu.background': colors.background,
    'menu.border': colors.selection,
    'menu.foreground': colors.foreground,
    'menu.selectionBackground': colors.selectionDark,
    'menu.selectionBorder': colors.selection,
    'menu.selectionForeground': colors.foreground,
    'menu.separatorBackground': colors.selection,
    'menubar.selectionBackground': colors.selectionDark,
    'menubar.selectionBorder': colors.selection,
    'menubar.selectionForeground': colors.foreground,

    // Merge
    // ------------------------------
    'merge.border': null,
    'merge.commonContentBackground': colors.backgroundDark,
    'merge.commonHeaderBackground': colors.backgroundLight,
    'merge.currentContentBackground': colors.mergeCurrentDark,
    'merge.currentHeaderBackground': colors.mergeCurrent,
    'merge.incomingContentBackground': colors.mergeIncomingDark,
    'merge.incomingHeaderBackground': colors.mergeIncoming,

    // Merge Editor
    // ------------------------------
    'mergeEditor.change.background': translucify(colors.mergeIncoming, 0.3),
    'mergeEditor.change.word.background': translucify(colors.mergeIncoming, 0.5),
    'mergeEditor.changeBase.background': translucify(colors.mergeCurrent, 0.3),
    'mergeEditor.changeBase.word.background': translucify(colors.mergeCurrent, 0.5),
    'mergeEditor.conflict.handled.minimapOverViewRuler': translucify(colors.blue, 0.5),
    'mergeEditor.conflict.handledFocused.border': colors.blue,
    'mergeEditor.conflict.handledUnfocused.border': translucify(colors.blue, 0.4),
    'mergeEditor.conflict.input1.background': translucify(colors.mergeCurrent, 0.2),
    'mergeEditor.conflict.input2.background': translucify(colors.mergeIncoming, 0.2),
    'mergeEditor.conflict.unhandled.minimapOverViewRuler': translucify(colors.red, 0.5),
    'mergeEditor.conflict.unhandledFocused.border': colors.red,
    'mergeEditor.conflict.unhandledUnfocused.border': translucify(colors.red, 0.4),
    'mergeEditor.conflictingLines.background': translucify(colors.red, 0.1),

    // Minimap
    // ------------------------------
    'minimap.background': colors.background,
    'minimap.chatEditHighlight': colors.green,
    'minimap.errorHighlight': colors.red,
    'minimap.findMatchHighlight': colors.selection,
    'minimap.foregroundOpacity': null,
    'minimap.infoHighlight': colors.blue,
    'minimap.selectionHighlight': colors.selection,
    'minimap.selectionOccurrenceHighlight': colors.selectionLight,
    'minimap.warningHighlight': colors.yellow,
    'editorMinimap.inlineChatInserted': colors.green,
    'minimapGutter.addedBackground': colors.green,
    'minimapGutter.deletedBackground': colors.red,
    'minimapGutter.modifiedBackground': colors.yellow,
    'minimapSlider.activeBackground': null,
    'minimapSlider.background': null,
    'minimapSlider.hoverBackground': null,

    // Multi Diff Editor
    // ------------------------------
    'multiDiffEditor.background': colors.backgroundDark,
    'multiDiffEditor.border': colors.selection,
    'multiDiffEditor.headerBackground': colors.backgroundDarker,

    // Notebook
    // ------------------------------
    'notebook.cellBorderColor': colors.selection,
    'notebook.cellEditorBackground': colors.background,
    'notebook.cellHoverBackground': colors.backgroundDark,
    'notebook.cellInsertionIndicator': colors.selectionLight,
    'notebook.cellStatusBarItemHoverBackground': translucify(colors.selection, 0.3),
    'notebook.cellToolbarSeparator': colors.selection,
    'notebook.editorBackground': colors.background,
    'notebook.focusedCellBackground': colors.backgroundDark,
    'notebook.focusedCellBorder': colors.selection,
    'notebook.focusedEditorBorder': colors.selectionLight,
    'notebook.inactiveFocusedCellBorder': colors.selection,
    'notebook.inactiveSelectedCellBorder': colors.selectionDark,
    'notebook.outputContainerBackgroundColor': colors.backgroundDark,
    'notebook.outputContainerBorderColor': colors.selection,
    'notebook.selectedCellBackground': colors.backgroundDark,
    'notebook.selectedCellBorder': colors.selection,
    'notebook.symbolHighlightBackground': translucify(colors.selectionLight, 0.3),
    'notebookEditorOverviewRuler.runningCellForeground': colors.green,
    'notebookScrollbarSlider.activeBackground': colors.selection,
    'notebookScrollbarSlider.background': translucify(colors.selectionDark, 0.75),
    'notebookScrollbarSlider.hoverBackground': colors.selection,
    'notebookStatusErrorIcon.foreground': colors.red,
    'notebookStatusRunningIcon.foreground': colors.cyan,
    'notebookStatusSuccessIcon.foreground': colors.green,

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

    // Output View
    // ------------------------------
    'outputView.background': colors.background,
    'outputViewStickyScroll.background': colors.backgroundDark,

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
    'panelStickyScroll.background': colors.backgroundDark,
    'panelStickyScroll.border': colors.selectionDark,
    'panelStickyScroll.shadow': translucify(colors.background, 0),
    'panelTitle.activeBorder': colors.selectionLight,
    'panelTitle.activeForeground': colors.white,
    'panelTitle.border': colors.selection,
    'panelTitle.inactiveForeground': translucify(colors.comment, 0.9),
    'panelTitleBadge.background': colors.selectionLight,
    'panelTitleBadge.foreground': colors.white,

    // Peek View
    // ------------------------------
    'peekView.border': colors.selection,
    'peekViewEditor.background': colors.background,
    'peekViewEditor.matchHighlightBackground': colors.selection,
    'peekViewEditor.matchHighlightBorder': null,
    'peekViewEditorGutter.background': colors.background,
    'peekViewEditorStickyScroll.background': colors.backgroundDark,
    'peekViewEditorStickyScrollGutter.background': colors.backgroundDark,
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
    'quickInputList.focusBackground': colors.selectionDark,
    'quickInputList.focusForeground': colors.foreground,
    'quickInputList.focusIconForeground': colors.foreground,
    'quickInputTitle.background': null,

    // Ports
    // ------------------------------
    'ports.iconRunningProcessForeground': colors.cyan,

    // Problems
    // ------------------------------
    'problemsErrorIcon.foreground': colors.red,
    'problemsInfoIcon.foreground': colors.blue,
    'problemsWarningIcon.foreground': colors.yellow,

    // Profiles
    // ------------------------------
    'profiles.sashBorder': colors.selection,

    // Progress Bar
    // ------------------------------
    'progressBar.background': colors.blue,

    // Radio
    // ------------------------------
    'radio.activeBackground': colors.selectionLight,
    'radio.activeBorder': colors.selectionLight,
    'radio.activeForeground': colors.foreground,
    'radio.inactiveBackground': colors.selection,
    'radio.inactiveBorder': null,
    'radio.inactiveForeground': colors.foreground,
    'radio.inactiveHoverBackground': colors.selectionDark,

    // Sash
    // ------------------------------
    'sash.hoverBorder': colors.selectionLight,

    // SCM Graph
    // ------------------------------
    'scmGraph.foreground1': colors.cyan,
    'scmGraph.foreground2': colors.blue,
    'scmGraph.foreground3': colors.green,
    'scmGraph.foreground4': colors.yellow,
    'scmGraph.foreground5': colors.orange,
    'scmGraph.historyItemBaseRefColor': colors.blue,
    'scmGraph.historyItemHoverAdditionsForeground': colors.green,
    'scmGraph.historyItemHoverDefaultLabelBackground': colors.backgroundLight,
    'scmGraph.historyItemHoverDefaultLabelForeground': colors.foreground,
    'scmGraph.historyItemHoverDeletionsForeground': colors.red,
    'scmGraph.historyItemHoverLabelForeground': colors.foreground,
    'scmGraph.historyItemRefColor': colors.cyan,
    'scmGraph.historyItemRemoteRefColor': colors.magenta,

    // Scrollbar
    // ------------------------------
    'scrollbar.background': translucify(colors.backgroundDarker, 0.5),
    'scrollbar.shadow': translucify(colors.background, 0),
    'scrollbarSlider.activeBackground': colors.selection,
    'scrollbarSlider.background': translucify(colors.selectionDark, 0.75),
    'scrollbarSlider.hoverBackground': colors.selection,

    // Search / Search Editor
    // ------------------------------
    'search.resultsInfoForeground': translucify(colors.comment, 0.7),
    'searchEditor.findMatchBackground': translucify(colors.selectionLight, 0.5),
    'searchEditor.findMatchBorder': colors.selectionLight,
    'searchEditor.textInputBorder': colors.selection,

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
    'settings.focusedRowBorder': colors.selectionLight,
    'settings.headerBorder': colors.selectionDark,
    'settings.headerForeground': colors.foreground,
    'settings.modifiedItemIndicator': colors.selection,
    'settings.numberInputBackground': colors.selection,
    'settings.numberInputBorder': null,
    'settings.numberInputForeground': colors.foreground,
    'settings.rowHoverBackground': translucify(colors.selectionDark, 0.4),
    'settings.sashBorder': colors.selection,
    'settings.settingsHeaderHoverForeground': colors.foreground,
    'settings.textInputBackground': colors.selection,
    'settings.textInputBorder': null,
    'settings.textInputForeground': colors.foreground,

    // Sidebar
    // ------------------------------
    'sideBar.background': colors.backgroundDark,
    'sideBar.border': null,
    'sideBar.dropBackground': colors.backgroundDark,
    'sideBar.foreground': colors.foregroundAlt,
    'sideBarActivityBarTop.border': colors.backgroundDark,
    'sideBarSectionHeader.background': colors.backgroundDark,
    'sideBarSectionHeader.border': null,
    'sideBarSectionHeader.foreground': colors.foreground,
    'sideBarStickyScroll.background': colors.backgroundDark,
    'sideBarStickyScroll.border': colors.selectionDark,
    'sideBarStickyScroll.shadow': translucify(colors.background, 0),
    'sideBarTitle.background': colors.backgroundDark,
    'sideBarTitle.border': colors.backgroundDark,
    'sideBarTitle.foreground': colors.foreground,

    // Side By Side Editor
    // ------------------------------
    'sideBySideEditor.horizontalBorder': colors.selection,
    'sideBySideEditor.verticalBorder': colors.selection,

    // Simple Find Widget
    // ------------------------------
    'simpleFindWidget.sashBorder': colors.selection,

    // Status Bar
    // ------------------------------
    'statusBar.background': colors.backgroundDarker,
    'statusBar.border': null,
    'statusBar.debuggingBackground': colors.backgroundDarker,
    'statusBar.debuggingBorder': null,
    'statusBar.debuggingForeground': null,
    'statusBar.focusBorder': colors.selectionLight,
    'statusBar.foreground': translucify(colors.foreground, 0.5),
    'statusBar.noFolderBackground': colors.backgroundDarker,
    'statusBar.noFolderBorder': null,
    'statusBar.noFolderForeground': translucify(colors.foreground, 0.5),
    'statusBarItem.activeBackground': colors.backgroundDarker,
    'statusBarItem.compactHoverBackground': colors.backgroundDark,
    'statusBarItem.errorBackground': colors.backgroundDarker,
    'statusBarItem.errorForeground': colors.red,
    'statusBarItem.errorHoverBackground': colors.backgroundDark,
    'statusBarItem.errorHoverForeground': colors.red,
    'statusBarItem.focusBorder': colors.selectionLight,
    'statusBarItem.hoverBackground': colors.backgroundDarker,
    'statusBarItem.hoverForeground': translucify(colors.foreground, 0.7),
    'statusBarItem.offlineBackground': colors.backgroundDarker,
    'statusBarItem.offlineForeground': translucify(colors.foreground, 0.5),
    'statusBarItem.offlineHoverBackground': colors.backgroundDark,
    'statusBarItem.offlineHoverForeground': translucify(colors.foreground, 0.7),
    'statusBarItem.prominentBackground': colors.backgroundDarker,
    'statusBarItem.prominentForeground': translucify(colors.foreground, 0.5),
    'statusBarItem.prominentHoverBackground': colors.backgroundDarker,
    'statusBarItem.prominentHoverForeground': translucify(colors.foreground, 0.7),
    'statusBarItem.remoteBackground': colors.backgroundDark,
    'statusBarItem.remoteForeground': translucify(colors.foreground, 0.5),
    'statusBarItem.remoteHoverBackground': colors.backgroundDark,
    'statusBarItem.remoteHoverForeground': translucify(colors.foreground, 0.7),
    'statusBarItem.warningBackground': colors.yellow,
    'statusBarItem.warningForeground': colors.white,
    'statusBarItem.warningHoverBackground': colors.backgroundDark,
    'statusBarItem.warningHoverForeground': colors.yellow,

    // Symbol Icons
    // ------------------------------
    'symbolIcon.arrayForeground': colors.orange,
    'symbolIcon.booleanForeground': colors.orange,
    'symbolIcon.classForeground': colors.yellow,
    'symbolIcon.colorForeground': colors.cyan,
    'symbolIcon.constantForeground': colors.orange,
    'symbolIcon.constructorForeground': colors.blue,
    'symbolIcon.enumeratorForeground': colors.blue,
    'symbolIcon.enumeratorMemberForeground': colors.blue,
    'symbolIcon.eventForeground': colors.yellow,
    'symbolIcon.fieldForeground': colors.foreground,
    'symbolIcon.fileForeground': colors.foreground,
    'symbolIcon.folderForeground': colors.foreground,
    'symbolIcon.functionForeground': colors.blue,
    'symbolIcon.interfaceForeground': colors.yellow,
    'symbolIcon.keyForeground': colors.foreground,
    'symbolIcon.keywordForeground': colors.magenta,
    'symbolIcon.methodForeground': colors.blue,
    'symbolIcon.moduleForeground': colors.yellow,
    'symbolIcon.namespaceForeground': colors.yellow,
    'symbolIcon.nullForeground': colors.foreground,
    'symbolIcon.numberForeground': colors.orange,
    'symbolIcon.objectForeground': colors.foreground,
    'symbolIcon.operatorForeground': colors.cyan,
    'symbolIcon.packageForeground': colors.yellow,
    'symbolIcon.propertyForeground': colors.foreground,
    'symbolIcon.referenceForeground': colors.blue,
    'symbolIcon.snippetForeground': colors.foreground,
    'symbolIcon.stringForeground': colors.green,
    'symbolIcon.structForeground': colors.yellow,
    'symbolIcon.textForeground': colors.foreground,
    'symbolIcon.typeParameterForeground': colors.orange,
    'symbolIcon.unitForeground': colors.orange,
    'symbolIcon.variableForeground': colors.foreground,

    // Tabs
    // ------------------------------
    'tab.activeBackground': colors.background,
    'tab.activeBorder': colors.background,
    'tab.activeBorderTop': null,
    'tab.activeForeground': colors.foreground,
    'tab.activeModifiedBorder': null,
    'tab.border': colors.background,
    'tab.dragAndDropBorder': colors.selectionLight,
    'tab.hoverBackground': null,
    'tab.hoverBorder': null,
    'tab.hoverForeground': colors.foreground,
    'tab.inactiveBackground': colors.backgroundLight,
    'tab.inactiveForeground': translucify(colors.foreground, 0.75),
    'tab.inactiveModifiedBorder': null,
    'tab.lastPinnedBorder': colors.backgroundDarker,
    'tab.selectedBackground': colors.background,
    'tab.selectedBorderTop': colors.selectionLight,
    'tab.selectedForeground': colors.foreground,
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
    'terminal.dropBackground': translucify(colors.selection, 0.5),
    'terminal.findMatchBackground': translucify(colors.selectionLight, 0.5),
    'terminal.findMatchBorder': colors.selectionLight,
    'terminal.findMatchHighlightBackground': translucify(colors.selection, 0.5),
    'terminal.findMatchHighlightBorder': null,
    'terminal.foreground': colors.foreground,
    'terminal.hoverHighlightBackground': translucify(colors.selection, 0.3),
    'terminal.inactiveSelectionBackground': translucify(colors.selection, 0.5),
    'terminal.initialHintForeground': translucify(colors.comment, 0.6),
    'terminal.selectionBackground': colors.selectionLight,
    'terminal.selectionForeground': null,
    'terminal.tab.activeBorder': colors.selectionLight,
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
    'terminal.ansiBrightWhite': colors.brightWhite,
    'terminal.ansiBrightYellow': colors.brightYellow,

    // Terminal Command Decoration
    // ------------------------------
    'terminalCommandDecoration.defaultBackground': colors.selection,
    'terminalCommandDecoration.errorBackground': colors.red,
    'terminalCommandDecoration.successBackground': colors.green,
    'terminalCommandGuide.foreground': translucify(colors.comment, 0.5),

    // Terminal Overview Ruler
    // ------------------------------
    'terminalOverviewRuler.border': colors.background,
    'terminalOverviewRuler.cursorForeground': colors.foreground,
    'terminalOverviewRuler.findMatchForeground': colors.selectionLight,

    // Terminal Sticky Scroll
    // ------------------------------
    'terminalStickyScroll.background': colors.backgroundDark,
    'terminalStickyScroll.border': colors.selectionDark,
    'terminalStickyScrollHover.background': colors.backgroundLight,

    // Terminal Symbol Icon
    // ------------------------------
    'terminalSymbolIcon.aliasForeground': colors.cyan,
    'terminalSymbolIcon.argumentForeground': colors.cyan,
    'terminalSymbolIcon.branchForeground': colors.blue,
    'terminalSymbolIcon.commitForeground': colors.blue,
    'terminalSymbolIcon.fileForeground': colors.foreground,
    'terminalSymbolIcon.flagForeground': colors.magenta,
    'terminalSymbolIcon.folderForeground': colors.foreground,
    'terminalSymbolIcon.inlineSuggestionForeground': translucify(colors.comment, 0.7),
    'terminalSymbolIcon.methodForeground': colors.blue,
    'terminalSymbolIcon.optionForeground': colors.cyan,
    'terminalSymbolIcon.optionValueForeground': colors.foreground,
    'terminalSymbolIcon.pullRequestDoneForeground': colors.green,
    'terminalSymbolIcon.pullRequestForeground': colors.blue,
    'terminalSymbolIcon.remoteForeground': colors.magenta,
    'terminalSymbolIcon.stashForeground': colors.orange,
    'terminalSymbolIcon.symbolText': colors.foreground,
    'terminalSymbolIcon.symbolicLinkFileForeground': colors.cyan,
    'terminalSymbolIcon.symbolicLinkFolderForeground': colors.cyan,
    'terminalSymbolIcon.tagForeground': colors.orange,

    // Testing
    // ------------------------------
    'testing.coverCountBadgeBackground': colors.selectionLight,
    'testing.coverCountBadgeForeground': colors.white,
    'testing.coveredBackground': translucify(colors.green, 0.15),
    'testing.coveredBorder': translucify(colors.green, 0.4),
    'testing.coveredGutterBackground': colors.green,
    'testing.iconErrored': colors.red,
    'testing.iconErrored.retired': translucify(colors.red, 0.5),
    'testing.iconFailed': colors.red,
    'testing.iconFailed.retired': translucify(colors.red, 0.5),
    'testing.iconPassed': colors.green,
    'testing.iconPassed.retired': translucify(colors.green, 0.5),
    'testing.iconQueued': colors.cyan,
    'testing.iconQueued.retired': translucify(colors.cyan, 0.5),
    'testing.iconSkipped': colors.comment,
    'testing.iconSkipped.retired': translucify(colors.comment, 0.5),
    'testing.iconUnset': translucify(colors.comment, 0.6),
    'testing.iconUnset.retired': translucify(colors.comment, 0.3),
    'testing.message.error.badgeBackground': colors.red,
    'testing.message.error.badgeBorder': colors.red,
    'testing.message.error.badgeForeground': colors.white,
    'testing.message.error.lineBackground': translucify(colors.red, 0.1),
    'testing.message.info.decorationForeground': colors.blue,
    'testing.message.info.lineBackground': translucify(colors.blue, 0.1),
    'testing.messagePeekBorder': colors.selection,
    'testing.messagePeekHeaderBackground': colors.backgroundDark,
    'testing.peekBorder': colors.selection,
    'testing.peekHeaderBackground': colors.backgroundDark,
    'testing.runAction': colors.blue,
    'testing.uncoveredBackground': translucify(colors.red, 0.1),
    'testing.uncoveredBorder': translucify(colors.red, 0.3),
    'testing.uncoveredBranchBackground': translucify(colors.red, 0.2),
    'testing.uncoveredGutterBackground': colors.red,

    // Text
    // ------------------------------
    'textBlockQuote.background': translucify(colors.backgroundLight, 0.5),
    'textBlockQuote.border': colors.selectionLight,
    'textCodeBlock.background': colors.backgroundDark,
    'textLink.activeForeground': colors.blue,
    'textLink.foreground': colors.blue,
    'textPreformat.background': colors.backgroundDark,
    'textPreformat.border': colors.selection,
    'textPreformat.foreground': colors.foregroundAlt,
    'textSeparator.foreground': colors.selection,

    // Title Bar
    // ------------------------------
    'titleBar.activeBackground': colors.backgroundDarker,
    'titleBar.activeForeground': colors.foreground,
    'titleBar.border': colors.backgroundDarker,
    'titleBar.inactiveBackground': colors.backgroundDarker,
    'titleBar.inactiveForeground': colors.foreground,

    // Toolbar
    // ------------------------------
    'toolbar.activeBackground': translucify(colors.selection, 0.5),
    'toolbar.hoverBackground': translucify(colors.selection, 0.3),
    'toolbar.hoverOutline': null,

    // Tree
    // ------------------------------
    'tree.indentGuidesStroke': colors.selection,
    'tree.inactiveIndentGuidesStroke': translucify(colors.selection, 0.5),
    'tree.tableColumnsBorder': colors.selection,
    'tree.tableOddRowsBackground': translucify(colors.background, 0.5),

    // Welcome Page
    // ------------------------------
    'walkThrough.embeddedEditorBackground': colors.backgroundDark,
    'walkthrough.stepTitle.foreground': colors.foreground,
    'welcomePage.background': colors.background,
    'welcomePage.progress.background': colors.selection,
    'welcomePage.progress.foreground': colors.blue,
    'welcomePage.tileBackground': colors.backgroundDark,
    'welcomePage.tileBorder': colors.selection,
    'welcomePage.tileHoverBackground': colors.backgroundLight,

    // Widget
    // ------------------------------
    'widget.border': colors.selection,

    // Window
    // ------------------------------
    'window.activeBorder': null,
    'window.inactiveBorder': null,
  },
};
