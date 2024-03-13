---
title: Framework API
description: Creating your own framework component interface
---

The `@iframe-resizer/core` package provides a [High Order Function](https://eloquentjavascript.net/05_higher_order.html), that allows you to configure _iframe-resizer_ and then connect a single [HTMLIFrameElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement).

```js
connectResizer(options)(HTMLIFrameElement);
```

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

The actual `@iframe-resizer/jquery` plugin provides a few more [safety checks](https://github.com/davidjbradshaw/iframe-resizer/blob/master/packages/jquery/plugin.js) to help inexperinced users get up and running.

## connectResizer()() vs iframeResize()

The `connectResizer()()` function is used internally by `iframeResize()`, the main difference is that the later allows you to pass in any valid CSS Selector, an [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement), or simply not specify anything and it will hunt for iframes on the page, where as `connectResize()()` will only accept an HTMLIFrameElement.

The return type for `connectResizer()()` is void, where as `iframeResizer()` returns a nodeList of the iframes it has found on your behalf.
