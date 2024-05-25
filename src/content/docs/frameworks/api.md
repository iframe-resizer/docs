---
title: Framework API
description: Creating your own framework component interface
---

The `@iframe-resizer/core` package provides a [High Order Function](https://eloquentjavascript.net/05_higher_order.html), that allows you to configure _iframe-resizer_ and then connect a single [HTMLIFrameElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement).

```js
const resizer = connectResizer(options)(HTMLIFrameElement);
```

The return `resizer` object contains the [Parent Page API methods](/api/parent#methods). This provides methods to disconnect _iframe-resizer_ from the iframe, to enable it to be safely removed from the page.

## Example component

The following is a simplified version of the jQuery plugin. This example first uses `connectResizer()` to create the function `connectWithOptions()`, that we can then use with jQuery's `each()` method after first filtering the array passed by jQuery to ensure it only contains iframes. Finally the `end()` method reverts the filter and passes the original element array back to jQuery.

<!-- prettier-ignore-start -->
```js
import connectResizer from "@iframe-resizer/parent-core";

window.jQuery.fn.iframeResize = function (options) {
  const connectWithOptions = connectResizer(options);

  return this
    .filter("iframe")
    .each(connectWithOptions)
    .end();
};
```
<!-- prettier-ignore-end -->

The actual `@iframe-resizer/jquery` plugin provides a few more [safety checks](https://github.com/davidjbradshaw/iframe-resizer/blob/master/packages/jquery/plugin.js) to help inexperienced users get up and running.

## Removing an iframe from the page

When removing an iframe you MUST first call _iframe-resizer's_ [disconnect()](/api/parent#disconnect) method. This prevents issues if the iframe is then later re-added to the page with the same ID.

## Virtual DOMs

For frameworks, such as React, that make use of a Virtual DOM. Their are a couple of considerations.

When you add an iframe to a Virtual DOM, you need to ensure that `connectResizer()()` is only called on the first render of the iframe.

Before having a Virtual DOM remove an iframe from the page, _iframe-resizer_ needs to be first disconnect from the iframe. The Parent Page API provides a [disconnect()](/api/parent#disconnect) method to unbind _iframe-resizer_ from the iframe element.

The following example of this is a simplified part of the `@iframe-resizer/react` component.

```js
useEffect(() => {
  // Connect iframe-resizer to iframe
  const resizer = connectResizer(props)(iframe);

  // Return function to be called before iframe is removed
  return () => resizer.disconnect();

  // The empty array tells React to only run this function
  // on the first render of the component.
}, []);
```

The full [React component](https://github.com/davidjbradshaw/iframe-resizer/blob/master/packages/react/index.jsx) further demonstrates integration with the [Parent Page API](/api/parent).

## connectResizer vs iframeResize

The `connectResizer()()` function is used internally by `iframeResize()`, the main difference is that the later allows you to pass in any valid CSS Selector, an [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement), or simply not specify anything and it will hunt for iframes on the page, where as `connectResize()()` requires a single `HTMLIFrameElement`.

The return type for `connectResizer()()` is a `resizer` object containing the [Parent Page API methods](/api/parent#methods), whereas `iframeResizer()` returns an array of the iframes it has found on your behalf.
