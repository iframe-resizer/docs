---
title: Getting Started
description: Getting started with iframe-resizer
prev: Licenses
next: API
---

The _iframe-resizer_ project is distrobuted via seporate packages for the parent and child pages. This guide takes you through setting up the parent and then child page.

## Parent page setup

In this section we detail how to setup the parent page using the Vanilla JavaScipt version of iframe-resizer using. The framework section of this guide details how to use _iframe-resizer_ with a range of popular frameworks and libraries.

### Install

```bash
npm install @iframe-resizer/parent --save
```

### Usage

```js
const iframes = ( [{options}], [css selector] || [iframe] );
```

### Typical setup

The normal configuration is to have the iFrame resize when the browser window changes size or the content of the iFrame changes. To set this up you need to configure one of the dimensions of the iFrame to a percentage and tell the library to only update the other dimension. Normally you would set the width to 100% and have the height scale to fit the content.

```html
<iframe id="myIframe" src="http://anotherdomain.com/iframe.html"></iframe>
<script>
  iframeResize();
</script>
```

## Child Page

The child page needs to load it's own JavaScript package, to enable communication with the parent page.

### Install

```bash
npm install @iframe-resizer/child --save
```

### Usage

If you have problems, check the [troubleshooting](../troubleshooting) section.

<!--
### Example

To see this working take a look at this [example](https://davidjbradshaw.github.io/iframe-resizer/example/) and watch the [console](https://developer.mozilla.org/en-US/docs/Tools/Web_Console).
-->
