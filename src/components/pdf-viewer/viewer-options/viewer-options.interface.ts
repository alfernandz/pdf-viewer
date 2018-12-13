export interface ViewerOptions {
    cursorToolOnLoad?: number;
    defaultUrl?: string;
    defaultZoomValue?: string;
    disableHistory?: boolean;
    disablePageLabels?: boolean;
    disablePageMode?: boolean;
    enablePrintAutoRotate?: boolean;
    enableWebGL?: boolean;
    eventBusDispatchToDOM?: boolean;
    externalLinkRel?: string;
    externalLinkTarget?: number;
    imageResourcesPath?: string;
    maxCanvasPixels?: number;
    pdfBugEnabled?: boolean;
    renderer?: 'canvas' | 'svg';
    renderInteractiveForms?: boolean;
    showPreviousViewOnLoad?: boolean;
    sidebarViewOnLoad?: number;
    scrollModeOnLoad?: number;
    spreadModeOnLoad?: number;
    textLayerMode?: number;
    useOnlyCssZoom?: boolean;
    cMapPacked?: boolean;
    cMapUrl?: string;
    disableAutoFetch?: boolean;
    disableCreateObjectURL?: boolean;
    disableFontFace?: boolean;
    disableRange?: boolean;
    disableStream?: boolean;
    isEvalSupported?: boolean;
    maxImageSize?: number;
    pdfBug?: boolean;
    postMessageTransfers?: boolean;
    verbosity?: boolean;
    workerPort?: Worker;
    workerSrc?: string;
}