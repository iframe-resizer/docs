---
title: Performance
desciption: Performance optimising iframe-resizer
---

On most pages _ifrane-resizer_ is able to detect changes in the iframe, recalculate
the page size and adjust the iframe in sub nanosecond time. This page details a couple
of situations that can impact performace and how to mitigate them.

### Overflowing the body element

By default _iframe-resizer_ uses the size of the `<body/>` element to calculate the size
of the iframe's content. However, if their is content outside of the body, then
_iframe-resizer_ has to fall back to checking the position of every element on the page.

In some cases, such as anchoring content to the base of the iframe, this can prevent block
the iframe from downsizing, as the content is now bound to the size of the window, rather
than the document.

To address the issues raised by content overflow, you have two options.

1.  Adjust CSS and page design to keep all elements inside of the body element.

2.  Explicity designate which page element should be used to track the page size, by adding
    a `data-iframe-size` attribute. This attribute can be added to multiple elements and the
    one that returns the highest value will be used each time the page size is calculated.
    This attribute should be used sparingly, as the more of them on the page, the great the
    amount of work required to calcute the page size.<br><br/>When explictly seeting the
    element for page size calculation it may be useful to also set either the [offsetHeight]() / [offsetWidth]() option as well.

If _iframe-resizer_ detects content overflow, it will log a warning to the browser console.

### Cross Domain

When opperating cross domain, _iframe-resizer_ has to fall back to using the
[PostMessage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)
to communicate between the parent and child pages. This adds a little overhead over
using the browser DOM to pass message between the two pages.

In most cases this slight delay is not an issue, however, you may wish the proxy the
iframe onto the same domain as the parent page if you have animation in the iframe that
effects it's size.
