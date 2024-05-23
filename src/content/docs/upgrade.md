---
title: Upgrading to Version 5
description: Upgrading to iframe-resizer 5
---

Version 5 of _iframe-resizer_ drops support for legacy browsers and changes the way content resize events are detected. These changes greatly improves detection of content changes and _iframe-resizer_ can now detect a number of events, such as user `<textarea>` resizing and CSS animation that previous versions struggled with.

These changes, along with further code optimizations, have lead to a large improvement in the performance of this library and it is now possible to have _iframe-resizer_ both detect and keep up with CSS animations that causes the iframe to resize on every animation frame.

## New Packages

The main change has been to split the single npm package that contained both the parent and child JavaScript files into two separate packages, called `@iframe-resizer/parent` and `@iframe-resizer/child`. The jQuery plugin has also be split out into `@iframe-resizer/jquery` and the React version renamed to `@iframe-resizer/react`.

These new packages are designed to be drop in replacements for the previous version and in most situations will work without further code changes. Where the API has changed, the deprecated feature will trigger a waring in the browser console with advise on how to update your code.

## API Changes

Over the last decade _iframe-resizer_ has had a gradual increase in the number of available configuration options. With _iframe-resizer 5_ the aim has been to reduce and clarify these options in order to reduce complexity of using this library. The library will now auto detect a number of settings and also log advisory warnings to the console where it thinks you should make changes to the config.

### Auto detection of the best content size calculation method

The previous versions of _iframe-resizer_ offered the choice of a wide range of ways to calculate the size of the content in the iframe and it was left to the developer to determine which was the most appropriate by setting the `heightCalculationMethod` or `widthCalculationMethod` options.

With _iframe-resizer 5_, these options have been deprecated and _iframe-resizer_ will now inspect the the page layout to automatically determine which is the best page size calculation method every time the iframe is resized. If it is determined that the best calculation method is `taggedElement` and the page has no tags, an advisory warning will be logged in the console to suggest adding these.

The name of the tag attributes have now been consolidated from `data-iframe-height` and `data-iframe-width`, to the single tag `data-iframe-size`.

Use of the old calculation options or the old tag names will trigger a deprecation warning in the console with advice on how to update your config.

### New <span class="option">direction</span> option replaces <span class="option">sizeHeight</span> / <span class="option">sizeWidth</span> and <span class="option">autoResize</span>

This library has always supported resizing in both directions, but changing the direction confusingly required the setting of multiple different options in the config. This has now been consolidated into the new single `direction` option, which can have the following values: `vertical`, `horizontal` or `none`.

Use of the old values will trigger a deprecation warning.

### New <span class="option">offset</span> option

This new option allow you to adjust the value returned by the iframe for the dimension you are resizing, it can have either a positive or negative value.

### New <span class="option">getParentProperties()</span> method replaces <span class="option">getPageInfo()</span>

The `getPageInfo()` method as been deprecated in favor of the new `getParentProperties()` method. Since it was first added to _iframe-resizer_ **getParentProperties** has been extended and extended and become a mishmash of properties from the 
parent page DOM.

The new **getParentProperties** method now groups values into three objects that contain information about the containing iframe tag, the parent document object, and the parent viewport.

```js
  // iframe.getBoundingRect()
  iframe: {
    width
    height
    top
    right
    bottom
    left
  },

  // from document.documentElement
  document: {
    scrollWidth
    scrollHeight
  },

  // window.visualViewport
  viewport: {
    width
    height
    offsetLeft
    offsetTop
    pageLeft
    pageTop
    scale
  }
}
```

Use of the old method will trigger a deprecation warning in the console.

### The <span class="option">onInit()</span> method has been renamed to <span class="option">onReady()</span>

The `onInit()` method in the Parent Page API has been deprecated in favour of `onReady()`. This brings the parent page and iframe names for this event inline with each other. 

Use of `onInit()` will trigger a deprecation warning in the console.

### The <span class="option">size()</span> method has been renamed to <span class="option">resize()</span>

The `size()` method in the Child Page API has been deprecated in favour of `resize()`. This brings the child page name in line with the Parent Page API. 

Use of `size()` will trigger a deprecation warning in the console.

### Fixed bug where height/width were returned as strings

The `onResized()`, `onMouseEnter()` and `onMouseLeave()` events were returning `height`/`width` as a strings, this has now been fixed to return numbers.

### The <span class="option">minHeight</span>, <span class="option">minWidth</span>, <span class="option">maxHeight</span> and <span class="option">minWidth</span> options have been removed

These settings are no longer required, as all target browsers now support setting these on the iframe via CSS.

## Other Improvements

In addition to the above API changes, _iframe-resizer 5_ includes the following other enhancements.

### Direct communication for same domain iframes

_Iframe-resizer_ now detects when the iframe is on the same domain as the parent page, and will then pass messages directly via the browser DOM. This provides an additional performance improvement over always using `postMessage()`, which is now only used for cross-domain iframes.

### Improved content resize detection

Dropping support for legacy browsers, has allowed version 5 to use the latest browser APIs to detect content changes, this greatly improves both performance and event detection, whilst also eliminating the issue of one changing being picked up by multiple different browser events.

### Visibility checking

The visibility of both the iframe and the parent page are now observed, using the 
[Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API). 
This allows resizing to be disabled while the iframe is not visible to the user.

### Ensures CSS sizing of iframe html and body tags set to auto

The most common reason for Iframe Resizer to have difficulty resizing, or going into an endless loop of resizing, is the `<html>` and/or `<body>` elements having a size set on them by CSS. Iframe Resizer now inspects these elements and ensures that the height and width is set to `auto`.

### TypeScript Types

TypeScript Types are now included in the NPM modules for the Parent, Child and React packages.
