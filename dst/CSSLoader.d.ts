export declare class CSSLoader {
    readonly element: HTMLElement;
    constructor(container?: HTMLElement);
    loadStyles(css: string | HTMLElement): void;
    loadLink(url: string): void;
}
