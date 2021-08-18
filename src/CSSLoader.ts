import { styleFromCSS } from "./essential.js";

export class CSSLoader {
	readonly element: HTMLElement;
	constructor(container: HTMLElement = document.head) {
		this.element = container;
	}

	loadStyles(css: string|HTMLElement) {
		this.element.appendChild(typeof css === "string" ? styleFromCSS(css) : css);
	}
	
	loadLink(url: string) {
		const link = document.createElement("link");
		link.rel  = "stylesheet";
		link.type = "text/css";
		link.href = url;
		this.element.appendChild(link);
	}
}