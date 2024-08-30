import { Component, inject } from "@angular/core"
import { DOCUMENT } from "@angular/common"
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser"

import {
  IframeResizerDirective,
  iframeResizerElement,
} from "iframe-resizer-directive"

@Component({
  selector: "app-parent",
  standalone: true,
  imports: [IframeResizerDirective],
  templateUrl: "./parent.page.html",
  styleUrl: "./parent.page.css",
})
export class ParentPage {
  sanitizer = inject(DomSanitizer)
  doc = inject(DOCUMENT)

  // @ViewChild(IframeResizerDirective) ifrd:IframeResizerDirective|undefined;

  src: SafeResourceUrl =
    this.sanitizer.bypassSecurityTrustResourceUrl("/child")

  visible = true;

  constructor() {}

  onReady(resizer: iframeResizerElement) {
    console.log("ParentPage.onReady: ", resizer)
  }

  onMessage($event: { iframe: iframeResizerElement; message: string }) {
    console.log("ParentPage.onMessage: ", $event)
    $event.iframe.iFrameResizer.sendMessage("Reply back")
  }

  onMouseEnter($event: {
    iframe: iframeResizerElement;
    height: number;
    width: number;
    type: string;
  }) {
    console.log("ParentPage.onMouseEnter: ", $event)
  }

  onMouseLeave($event: {
    iframe: iframeResizerElement;
    height: number;
    width: number;
    type: string;
  }) {
    console.log("ParentPage.onMouseLeave: ", $event)
  }

  onResized($event: {
    iframe: iframeResizerElement;
    height: number;
    width: number;
    type: string;
  }) {
    console.log("ParentPage.onResized: ", $event)
  }

  onScroll($event: {
    iframe: iframeResizerElement;
    top: number;
    left: number;
  }) {
    console.log("ParentPage.onScroll: ", $event)
  }

  // parent methods
  resize() {
    let iframe = this.doc.getElementById("theIframe") as iframeResizerElement;
    iframe?.iFrameResizer.resize()
  }

  moveToAnchor(anchor: string) {
    let iframe = this.doc.getElementById("theIframe") as iframeResizerElement;
    iframe?.iFrameResizer.moveToAnchor(anchor)
  }

  sendMessage(message: string, targetOrigin?: string) {
    let iframe = this.doc.getElementById("theIframe") as iframeResizerElement;
    iframe.iFrameResizer.sendMessage(message)
  }
}
