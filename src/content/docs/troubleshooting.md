---
title: Troubleshooting
description: Fix common issues
---

The first steps to investigate any problem is to make sure you are using the latest version and then check the [JavaScript Console](https://developers.google.com/chrome-developer-tools/docs/console#opening_the_console). _iframe-resizer_ will output the details of any issues it detects and give advise on how to fix them.

Solutions for the most common problems are outlined in this section. If you need further help, then please ask questions on [StackOverflow](http://stackoverflow.com/questions/tagged/iframe-resizer) with the `iframe-resizer` tag.

Bug reports and pull requests are welcome on the [issue tracker](https://github.com/davidjbradshaw/iframe-resizer/issues). Please read the [contributing guidelines](https://github.com/davidjbradshaw/iframe-resizer/blob/master/CONTRIBUTING.md) before opening a ticket, as this will ensure a faster resolution.

### Multiple IFrames on one page

When the resizer does not work using multiple IFrames on one page, make sure that each frame has an unique id or no ids at all.

<!--
### IFrame not sizing correctly

If a larger element of content is removed from the normal document flow, through the use of absolute positioning, it can prevent the browser working out the correct size of the page. In such cases you can change the [heightCalculationMethod](./parent_page/options.md#heightcalculationmethod) to uses one of the other sizing methods.
-->

### IFrame not resizing

The most common cause of this is not placing the [@iframe-resizer/child](../../setup/#child-page-setup) package inside the iFramed page. If this does not fix the problem then check `x-Frame-Options` http header on the server 
that is sending the iframe content, as this can also block `postMessage` calls from _iframe-resizer_ to if set incorrectly.

<!--
Not having a valid [HTML document type](http://en.wikipedia.org/wiki/Document_type_declaration) in the iFrame can also sometimes prevent downsizing. At it's most simplest this can be the following.

```html
<!DOCTYPE html>
```
-->

### Localhost 127.0.0.1 and file:///

When an iframe is located on your local machine the browser adds extra security restrictions to cross-domain iframes. These will stop _iframe-resizer_ from functioning. If you need to test something locally, then it is best to use the external IP Address of the machine.

### IFrame not downsizing

The most likely cause of this problem is having set the height of an element to be 100% of the page somewhere in your CSS.

This can often be got around by adding a `data-iframe-size` attribute to the element that you want to define the bottom position of the page.

### Failed to execute 'postMessage' on 'DOMWindow'

This error occurs when the parent window tries to send a message to the iframe before it has loaded. This library makes multiple attempts to talk to the iFrame, so if everything is working then you can safely ignore this error message.

If you're still having problems, or you really want to not ignore the error, then you can try delaying the call to `iframeResize()` until after the `onLoad` event of the iframe has fired.


### iFrame has not responded within 5 seconds

This error happens when the iframe is slow to respond, or is blocked from responding to the request from the parent page.

If everything is working, then this message can be ignored, or if you prefer you can set a longer timeout. On the otherhand if you are not getting a response and the child package has been loaded in the iframe, then you need to check that iframe has not been sandboxed, either by setting optins on the `<iframe>` tag, or with the `x-Frame-Options` http header of the iframe.

### ParentIframe not found errors

The `parentIframe` object is created once the iframe has been initially resized. If you wish to use it during page load you will need call it from the [onReady()](../api/child#onready) startup event handler.

```html
<script>
  window.iFrameResizer = {
    onReady() {
      const myId = window.parentIframe.getId();
      console.log("The ID of the iFrame in the parent page is: " + myId);
    },
  };
</script>
<script src="node_modules/@iframe-resizer/child/index.umd.js"></script>
```

### Scrolling does not scroll to where I want it

The scrolling events in _iframe-resizer_ aim to mimic how they work by default in the parent page. If this
is not the behavior that you want, then you can use the [onScroll](api/parent#onscroll) event handler in
the Parent Page API to adjust how scrolling works to you own requirements.


### PDF and OpenDocument files

It is not possible to add the required JavaScript to PDF and ODF files. However, you can get around this limitation by using [ViewerJS](http://viewerjs.org/) to render these files inside a HTML page, that also contains the iFrame [@iframe-resizer/child](../../setup/#child-page-setup) package.

### Unexpected message received error

By default the origin of incoming messages is checked against the `src` attribute of the iFrame. If they don't match an error is thrown. This behaviour can be disabled by setting the [checkOrigin](../api/parent/#checkorigin) option to **false**.

```js
iframeResize({ checkOrigin: false });
```

### Width not resizing

By default only changes in height are detected, if you want to calculate the width instead then you need to set the [direction](../api/parent/#direction) option to **'horizontal'**.

```js
iframeResize({ direction: "horizontal" });
```
