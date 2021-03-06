/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React from 'react';

interface ToolbarSlot {
    currentPage: number;
    numPages: number;
    toggleSidebarButton: React.ReactNode;
    searchPopover: React.ReactNode;
    previousPageButton: React.ReactNode;
    nextPageButton: React.ReactNode;
    currentPageInput: React.ReactNode;
    zoomOutButton: React.ReactNode;
    zoomPopover: React.ReactNode;
    zoomInButton: React.ReactNode;
    fullScreenButton: React.ReactNode;
    downloadButton: React.ReactNode;
    openFileButton: React.ReactNode;
    printButton: React.ReactNode;
    goToFirstPageButton: React.ReactNode;
    goToLastPageButton: React.ReactNode;
    rotateClockwiseButton: React.ReactNode;
    rotateCounterclockwiseButton: React.ReactNode;
    textSelectionButton: React.ReactNode;
    handToolButton: React.ReactNode;
    verticalScrollingButton: React.ReactNode;
    horizontalScrollingButton: React.ReactNode;
    wrappedScrollingButton: React.ReactNode;
    documentPropertiesButton: React.ReactNode;
    moreActionsPopover: React.ReactNode;
}

type RenderToolbarSlotType = (toolbarSlot: ToolbarSlot) => React.ReactElement;
type RenderToolbarType = (renderToolbar: RenderToolbarSlot) => React.ReactElement;

export default ToolbarSlot;
export type RenderToolbarSlot = RenderToolbarSlotType;
export type RenderToolbar = RenderToolbarType;
