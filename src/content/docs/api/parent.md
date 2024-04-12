---
title: Parent Page API
description: Parent page api for iframe-resizer
next: Child Page API
prev: Getting Started
---

The Parent API is for use on the page containing the `<iframe>` tag. It is split into three sections. [Options](#options) contains settings that can be passed when calling iframe-resizer. [Events](#events) are trigged by updates to the iframe, or messages from the iframe. [Methods](#methods) allow you to interact with iframe-resizer after the initial resizing.

## Options

The following options can be passed to iframe-resizer on the parent page.

### bodyBackground

    default: null
    type:    string

Override the body background style in the iFrame.

### bodyMargin

    default: null
    type:    string || number

Override the default body margin style in the iFrame. A string can be any valid value for the CSS margin attribute, for example '8px 3em'. A number value is converted into px.

### bodyPadding

    default: null
    type:    string || number

Override the default body padding style in the iFrame. A string can be any valid value for the CSS margin attribute, for example '8px 3em'. A number value is converted into px.

### checkOrigin

    default: true
    type:    boolean || array

When set to true, only allow incoming messages from the domain listed in the `src` property of the iFrame tag. If your iFrame navigates between different domains, ports or protocols; then you will need to provide an array of URLs or disable this option.

### direction

    default: 'horizontal'
    values: 'horizontal' || 'vertical' || 'none'

Set the direction in which you want the iframe to automaticaly scale to the content size.

### inPageLinks

    default: false
    type:    boolean

When enabled in page linking inside the iFrame and from the iFrame to the parent page will be enabled.

### offsetHeight

    default: 0
    type:    integer

Modify the computed height of the iframe. This is useful if the page in the iframe returns a height value that is consitantly slightly different to how you want the iframe to be sized.

### offsetWidth

    default: 0
    type:    integer

Modify the computed width of the iframe. This is useful if the page in the iframe returns a width value that is consitantly slightly different to how you want the iframe to be sized.

<sup>\*</sup> This value can also be set on a per page basis in the iframe.

### scrolling

    default: false
    type:    boolean | 'omit'

Enable scroll bars in iFrame.

- **true** applies `scrolling="yes"`
- **false** applies `scrolling="no"`
- **'omit'** applies no `scrolling` attribute to the iFrame

### tolerance

    default: 0
    type:    integer

Set the number of pixels the iFrame content size has to change by, before triggering a resize of the iFrame.

### warningTimeout

    default: 5000
    type:    integer

Set the number of milliseconds after which a warning is logged if the iFrame has not responded. Set to `0` to supress warning messages of this type.

## Events

The following callback events can be passed to iframe-resizer on the parent page, as part of the [options](options.md) object.

### onClose

```js
onClose: (iframeID) => boolean;
```

Called before iFrame is closed via `parentIFrame.close()` or `iframe.iFrameResizer.close()` methods. Returning `false` will prevent the iFrame from closing.

### onClosed

```js
onClosed: (iframeID) => undefined;
```

Called after iFrame is closed via `parentIFrame.close()` or `iframe.iFrameResizer.close()` methods.

### onMessage

```js
onMessage: ({ iframe, message }) => undefined;
```

Receive message posted from iFrame with the `parentIFrame.sendMessage()` method.

### onMouseEnter

```js
onMouseEnter: ({ iframe, height, width, type }) => undefined;
```

Function called after the mouse enters the iframe. Passes `messageData` object containing the **iFrame**, **screenX**, **screenY** and the **type** of event that triggered the callback.

### onMouseLeave

```js
onMouseLeave: ({ iframe, height, width, type }) => undefined;
```

Function called after the mouse leaves the iframe. Passes `messageData` object containing the **iFrame**, **screenX**, **screenY** and the **type** of event that triggered the callback.

### onReady

```js
onReady: (iframe) => undefined;
```

Called after initial setup.

### onResized

```js
onResized: ({ iframe, height, width, type }) => undefined;
```

Function called after iFrame resized. Passes `messageData` object containing the **iFrame**, **height**, **width** and the **type** of event that triggered the iFrame to resize.

### onScroll

```js
onScroll: ({ x, y }) => [true | false];
```

Called before the page is repositioned after a request from the iFrame, due to either an in page link, or a direct request from either [parentIFrame.scrollTo()](../iframed_page/methods.md#scrolltoxy) or [parentIFrame.scrollToOffset()](../iframed_page/methods.md#scrolltooffsetxy). If this function returns **false**, it will stop the library from repositioning the page, so that you can implement your own animated page scrolling instead.

## Methods

Once the iFrame has been initialized, an `iFrameResizer` object is bound to it. This has the following methods available.

### close()

Remove the iFrame from the page.

### moveToAnchor(anchor)

Move to anchor in iFrame.

### removeListeners()

Detach event listeners from iFrame. This is option allows Virtual DOMs to remove an iFrame tag. It should not normally be required.

### resize()

Tell the iFrame to resize itself.

### sendMessage(message, [targetOrigin])

Send data to the containing page, `message` can be any data type that can be serialized into JSON. The `targetOrigin` option is used to restrict where the message is sent to, in case your iFrame navigates away to another domain.
