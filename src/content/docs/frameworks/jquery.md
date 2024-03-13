---
title: iframe-resizer/jquery
description: Use with jQuery
---

## Install

Install this package with the following command.

```bash
npm install --save @iframe-resizer/jquery
```

You will also need to ensure that the `@iframe-resizer/child` package has been loaded into the iframe.

## Usage

Use jQuery to find the iframes on the page and then pass them to the `iframeResize()` method. The plugin will automatically filter out any non-iframe elements returned by jQuery.

```js
<script src="node_modules/jquery/jquery.js"></script>
<script src="node_modules/iframe-resizer/jquery/index.js"></script>
<script>
  $("iframe").iframeResize();
</script>
```

You can pass any of the standard Parent API [options](/api/parent#options) and [events](/api/parent#events) via this plugin.
