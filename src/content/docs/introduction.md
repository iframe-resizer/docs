---
title: Introduction
description: Keep same and cross-domain iframes sized to their content
next: Licenses
---

The _iframe-resizer_ library aims to take away the pain points of using iframes.

In addition to keeping you iframe sized to the content, _iframe-resizer_ also provides the missing browser API features, that allows you to securely interate with the parent page.

- Scroll the page, relative to the iframe or parent page's position
- Get details of the position of the iframe, the scoll position and viewport of the parent page
- Fixes in page linking in the iframe and allows links to propgate to the parent page
- Adds `onMouseEnter` and `onMouseLeave` events to the iframe element
- Simplified message passing between the ifram and the parent page
- Automatic domain authentication

### Version 5

This version of _iframe-resizer_ has been extensively rewritten to use modern browser APIs, this has enabled signicantly better performance and greater accuracy in the detection the of content resizing.

This library is now able to detect events such as `:hover`, user resizing of elements, such as `<textarea>` and CSS animation that in the past caused problems. Indeed it will now be able to not only detect CSS animation events that cause the content to resize, but keep up with the animation and reszie the iframe in real time.

With this release, the opertunity has been taken to refresh and simplify the API, if you are coming from a prevous version then their is an [Upgrade Guide](upgrade) to explain the changes.
