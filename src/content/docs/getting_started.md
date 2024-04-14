---
title: Getting Started
description: Getting started with iframe-resizer
prev: Licenses
next: API
---

The _iframe-resizer_ project is distrobuted via seporate packages for the parent and child pages. This guide takes you through setting up the parent and then child page.

## Parent Page Setup

In this section we detail how to setup the parent page using the Vanilla JavaScipt version of _iframe-resizer_. The [framework](../frameworks/overview) section of this guide details how to use _iframe-resizer_ with a range of popular frameworks and libraries.

### Install

Install this package with the following command.

```bash
npm install @iframe-resizer/parent --save
```

### Usage

This library provided the function `iframeResize()` which accepts a config object and one or more iframes. Iframes can be passed via either CSS selector or reference. All these values are optional and if no iframe is provided, then it will bind _iframe-resizer_ to all iframes currently contained on the page.

```js
const iframes = iframeResize( [{options}], [css selector] || [iframe] );
```

Once the setup has run, an array of the iframes that have had _iframe-resizer_ bound to them.

### Typical setup

The normal configuration is to have the iFrame resize when the browser window changes size or the content of the iFrame changes. To set this up you need to configure one of the dimensions of the iFrame to a percentage and tell the library to only update the other dimension. Normally you would set the width to 100% and have the height scale to fit the content.

```html
<iframe id="myIframe" src="http://anotherdomain.com/iframe.html"></iframe>
<script src="node_modules/@iframe-resizer/parent/index.umd.js"></script>
<script>
  iframeResize();
</script>
```

## Child Page Setup

The child page needs to load it's own JavaScript package, to enable communication with the parent page.

### Install

Install this package with the following command.

```bash
npm install @iframe-resizer/child --save
```

### Usage

This package just needs to be included on every page that you load into the iframe. It will queitly listern for a message from the parent page. When this is received it will then automatically initialise itself.

```html
<script src="node_modules/@iframe-resizer/child/index.umd.js"></script>
```

## Troubleshooting

If you have problems, check the [troubleshooting](../troubleshooting) section.

<!--
### Example

To see this working take a look at this [example](https://davidjbradshaw.github.io/iframe-resizer/example/) and watch the [console](https://developer.mozilla.org/en-US/docs/Tools/Web_Console).
-->
