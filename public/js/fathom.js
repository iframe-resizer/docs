const last = (arr) => arr[arr.length - 1]

const getLocation = last(
  location.pathname.split('/').filter((x) => x !== '')
) || 'Homepage'

const trackLinkExt =  (el) => (target) =>
  el.addEventListener('click', () => 
    window.fathom?.trackEvent(`${target} from ${getLocation}`)
  )

if (document.title.includes('404')) {
  window.fathom?.trackEvent(
    `404 ${location.pathname} | ${document.referrer || "Direct"}`
  )
}

if (getLocation.toLowerCase() === 'complete')
  window.fathom?.trackEvent('Buy: Completed')

document.querySelectorAll('a').forEach((a) => {
  const { href } = a
  const trackLink = trackLinkExt(a)

  if (
    href.includes("iframe-resizer.com") ||
    href.includes("localhost") ||
    href.includes("127.0.0") ||
    href.includes("lemon")
  )
    return;
  else a.target = "_blank";

  switch (true) {
    case href.includes("zip"):
      return trackLink("Download");

    case href.includes("github.com"):
      return trackLink("GitHub");

    case href.includes("stackoverflow.com"):
      return trackLink("Stack Overflow");

    case href.includes("mozilla.org"):
      return trackLink(`Mozilla ${last(href.split("/"))}`);

    case href.includes("viewerjs.org"):
      return trackLink("PDF/ODF Viewer");

    case href.includes("mail"):
      return trackLink("Contact");

    case href.includes("gnu.org"):
      return trackLink("GPL v3");

    case href.includes("console"):
      return trackLink("Console");

    case href.includes("http"):
      return trackLink(`External Link: ${href}`);

    default:
      return;
  }
})
