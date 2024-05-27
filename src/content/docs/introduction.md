---
title: Introduction
description: Keep same and cross-domain iframes sized to their content
next: Licenses
---

The _iframe-resizer_ library aims to take away the pain points with using iframes. It will resize your iframe to match the size of your content and then monitor the iframe to ensure that it is always the perfect size.

As browsers don't provide a single consistently reliable method to calculate content size, _iframe-resizer_ automatically inspects your page and selects the best value for your content every time it detects something changed.

Supports both internal (same-domain) and external (cross-domain) iframes via a simple JS file that is designed to be a zero impact guest on the sites hosting it.

Additionally _iframe-resizer_  provides a range of missing browser API features, that allows you to securely integrate your iframe content with the parent page.

- Scroll the page, relative to the iframe or parent page's position
- Get details of the position of the iframe, the scroll position and viewport of the parent page
- Fixes in page linking in the iframe and allows links to propagate to the parent page
- Adds `onMouseEnter` and `onMouseLeave` events to the iframe element
- Simplified message passing between the iframe and the parent page
- Automatic domain authentication

When combined with [viewer.js](https://viewerjs.org) it can even resize iframes containing PDF and ODF documents.

## Version 5

This version of _iframe-resizer_ has been extensively rewritten to use modern browser APIs, this has enabled significantly better performance and greater accuracy in the detection of content resizing events.

With this release, the opportunity has been taken to refresh and simplify the API, if you are coming from a previous version then their is an [Upgrade Guide](/upgrade) to explain the changes.
