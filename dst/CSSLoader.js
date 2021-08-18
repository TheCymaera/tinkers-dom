import { styleFromCSS } from "./essential.js";
export class CSSLoader {
    constructor(container = document.head) {
        this.element = container;
    }
    loadStyles(css) {
        this.element.appendChild(typeof css === "string" ? styleFromCSS(css) : css);
    }
    loadLink(url) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = url;
        this.element.appendChild(link);
    }
}
//# sourceMappingURL=CSSLoader.js.map