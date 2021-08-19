/**
 * Create template element from an HTML string.
 */
export declare function templateFromHTML(html: string): HTMLTemplateElement;
/**
 * Create elements from an HTML string.
 */
export declare function elementsFromHTML(html: string): HTMLElement[];
/**
 * Create element from an HTML string.
 */
export declare function elementFromHTML(html: string): HTMLElement;
/**
 * Create document fragment from an HTML string.
 */
export declare function fragmentFromHTML(html: string): DocumentFragment;
/**
 * Create style element from a CSS string.
 */
export declare function styleFromCSS(css: string): HTMLStyleElement;
/**
 * Create document fragment from a list of nodes.
 */
export declare function fragmentFromNodes(...nodes: Node[]): DocumentFragment;
/**
 * Remove all children of a node.
 */
export declare function removeNodeChildren(parent: ParentNode): void;
/**
 * Replace all children of a node.
 */
export declare function replaceNodeChildren(parent: ParentNode, ...children: Node[]): void;
/**
 * Insert node at index.
 */
export declare function insertNodeAtIndex(parent: Node & ParentNode, child: Node, index: number): void;
/**
 * Get elements by class name, then remove said class.
 */
export declare function getElementsByClassAndRemoveClass(element: Element, className: string): Element[];
/**
 * Escape HTML string.
 */
export declare function escapeHTML(string: string): string;
