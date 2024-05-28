const last = (arr) => arr[arr.length - 1]

const trackLinkExt =  (el) => (target) =>
  el.addEventListener('click', () => 
    window.fathom?.trackEvent(`${target} from ${document.title.split(' | ')[0].replace('IFRAME-RESIZER', 'Homepage')}`)
  )

if (document.title.includes('404')) {
  window.fathom?.trackEvent(
    `404 ${location.pathname} | ${document.referrer || "Direct"}`
  )
}

document.querySelectorAll('a').forEach((a) => {
  const { href } = a
  const trackLink = trackLinkExt(a)

  if (
    href.includes("iframe-resizer.com") ||
    href.includes("localhost") ||
    href.includes("lemon")
  ) return
  else a.target = "_blank"

  switch (true) {
    case href.includes("zip"):
      return trackLink("Download");
    
    case href.includes("github.com"):
      return trackLink("GitHub");

    case href.includes("mozilla.org"):
      return trackLink(`Mozilla ${last(href.split("/"))}`);

    case href.includes("viewerjs.org"):
      return trackLink("PDF/ODF Viewer");

    case href.includes("mail"):
      return trackLink("Contact");

    case href.includes("gnu.org"):
      return trackLink("GPL v3");

    case href.includes("http"):
      return trackLink(`External Link: ${href}`);

    default:
      return;
  }
})
