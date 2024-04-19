---
title: Vue 3
description: Vue3 (with Typescript)
---

Create the following Vue directive (EG `utils/directives/iframeResize.ts`)

```ts
import { Directive, DirectiveBinding } from "vue";
import connectResizer from "@iframe-resizer/core";

interface ResizableHTMLElement extends HTMLElement {
  iframeResizer?: {
    close: () => void;
    disconnect: () => void;
    moveToAnchor: (string) => void;
    resize: () => void;
    sendMessage: (string) => void;
  };
}

const iframeResizer: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const options = binding.value || {};
    const connectWithOptions = connectResizer(options);
    el.addEventListener("load", () => connectWithOptions(el));
  },
  unmounted(el: HTMLElement) {
    const resizableEl = el as ResizableHTMLElement;
    resizableEl?.iframeResizer.disconnect();
  },
};

export default resize;
```

Register the directive

```ts
const app = createApp(App)
...
app.directive('iframeResizer', connectResizer)
...
app.mount('#app')

```

and then include it on your page as follows.

```html
<iframe
  v-iframeResizer
  width="100%"
  src="myiframe.html"
  frameborder="0"
></iframe>
```

## Child page

You will then need to install the [@iframe-rsizer/child](../../getting_started/#child-page-setup) package on the page in the iframe.
