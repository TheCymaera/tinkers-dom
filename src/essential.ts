/**
 * Create template element from an HTML string.
 */
export function templateFromHTML(html: string) {
	const template = document.createElement("template");
	template.innerHTML = html;
	return template;
}

/**
 * Create elements from an HTML string.
 */
export function elementsFromHTML(html: string) {
	const div = document.createElement("div");
	div.innerHTML = html;
	return Array.from(div.children);
}

/**
 * Create element from an HTML string.
 */
export function elementFromHTML(html: string) {
	return elementsFromHTML(html)[0];
}

/**
 * Create document fragment from an HTML string.
 */
export function fragmentFromHTML(html: string) {
	// I'm not using templates as web-components will not
	// initialize until they are connected to a document root.
	return fragmentFromNodes(...elementsFromHTML(html));
}

/**
 * Create style element from a CSS string.
 */
export function styleFromCSS(css: string) {
	const style = document.createElement("style");
	style.innerHTML = css;
	return style;
}

/**
 * Create document fragment from a list of nodes.
 */
export function fragmentFromNodes(...nodes: Node[]) {
	const fragment = new DocumentFragment();
	fragment.append(...nodes);
	return fragment;
}

/**
 * Remove all children of a node.
 */
export function removeNodeChildren(parent: ParentNode) {
	while (parent.lastElementChild) parent.lastElementChild.remove();
}

/**
 * Replace all children of a node.
 */
export function replaceNodeChildren(parent: ParentNode, ...children: Node[]) {
	removeNodeChildren(parent);
	parent.append(...children);
}

/**
 * Insert node at index.
 */
export function insertNodeAtIndex(parent: Node & ParentNode, child: Node, index: number) {
	parent.insertBefore(child, parent.children[index]!);
}

/**
 * Get elements by class name, then remove said class.
 */
export function getElementsByClassAndRemoveClass(element: Element, className: string) {
	const out = Array.from(element.getElementsByClassName(className));
	for (const element of out) element.classList.remove(className);
	return out;
}

/**
 * Escape HTML string.
 */
export function escapeHTML(string: string) {
	return string.replace(/&/g, "&amp;")
	.replace(/"/g, "&quot;")
	.replace(/</g, "&lt;")
	.replace(/>/g, "&gt;");
}
