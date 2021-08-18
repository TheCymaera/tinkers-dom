# Tinker's DOM

## Introduction
Tinker's DOM is a JavaScript/TypeScript library for DOM manipulation.

## Installation
Install via NPM.
```console
npm install tinkers-dom
```

## Example Usage
### Create
```typescript
import * as tDom from "tinkers-dom";

// create node via HTML
const html = `<div>Example</div>`;
const element = tDom.elementFromHTML(html);
const elements = tDom.elementsFromHTML(html.repeat(3));
const template = tDom.templateFromHTML(html);
const fragment = tDom.fragmentFromHTML(html);

// create stylesheet via CSS
const css = `div { color: red; }`;
const style = tDom.styleFromCSS(css);

// create document fragment from multiple elements
const fragment = tDom.fragmentFromNodes(element1, element2, element3);
```

### Manipulate
```typescript
// get elements by class and remove class.
const elements = tDom.getElementsByClassAndRemoveClass(document.body, "js-hook");

// move elements
tDom.removeNodeChildren(container);
tDom.replaceNodeChildren(container, child1, child2, child3);
tDom.insertNodeAtIndex(container, child, index);
```

### Miscellaneous
```typescript
// escape HTML
const text = `Hello World >.<`;
const html =  "<div>" + tDom.escapeHTML(text) + "</div>";

// load CSS
const cssLoader = new tDom.CSSLoader;
cssLoader.loadStyles(styleElement);
cssLoader.loadStyles(cssString);
cssLoader.loadLink(`./main.css`);
```

## License
Licensed under MIT.<br/>
<br/>
All files can be used for commercial or non-commercial purposes. Do not resell. Attribution is appreciated but not due.