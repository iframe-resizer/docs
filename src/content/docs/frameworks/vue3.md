---
title: Vue 3
description: Vue3 (with Typescript)
---

A Vue component is on our short term roadmap, in the meantime here is an example of how to use _iframe-resizer_ with Vue.

Create the following Vue directive (EG `utils/directives/iframeResize.ts`)

```ts
import { Directive, DirectiveBinding } from "vue";
import connectResizer from "@iframe-resizer/core";

interface ResizableHTMLElement extends HTMLElement {
  iframeResizer?: {
    moveToAnchor: (string) => void;
    resize: (x: number, y: number) => void;
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

You will then need to install the [@iframe-resizer/child](/getting_started/#child-page-setup) package on the page in the iframe.

Once everything is setup, keep an eye on the [browser console](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools),
as _iframe-resizer_ will warn about any potential issues it detects and provide advice
on how to fix them. For more details on using _iframe-resizer_ see the
[Performance](/performance/) and [Trouble Shooting](/troubleshooting/) sections
of this guide.
