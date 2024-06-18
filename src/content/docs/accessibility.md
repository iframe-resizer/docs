---
title: Accessibility 
description: Accessibility in iframe-resizer
---

Modern browsers have very good accessibility support for iframes. As developers we can further aid
users navigating with assistive technology, such as a screen reader, by using the
[title attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title) on an
`<iframe>` to label its contained content.

Having a `title` attribute saves the user having to navigate into the iframe to determine what it
contents. This context shift can be confusing and time-consuming, especially for pages with multiple
`<iframe>` elements and embeds containing interactive content like video or audio.

### Automated Title Attribute

Where iframes are missing the `title` attribute, _iframe-resizer_ will automatically set it with the
text contained within the `<title>` element in the `<iframe>`. This ensures that the value is always up
to date and correctly reflects the page that is currently displayed within.
