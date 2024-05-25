const last = (arr) => arr[arr.length - 1];

const trackLinkExt =  (el) => (target) =>
  el.addEventListener('click', () => 
    console.log(`Tracking: ${target} from ${document.title.split(' | ')[0].replace('IFRAME-RESIZER', 'Homepage')}`) ||
    window.fathom?.trackEvent(`${target} from ${document.title.split(' | ')[0].replace('IFRAME-RESIZER', 'Homepage')}`)
  )

if (document.title === '404') {
  window.fathom?.trackEvent(`404: ${document.referrer || 'Direct'}`)
}

document.querySelectorAll('a').forEach((a) => {
  const { href } = a
  const trackLink = trackLinkExt(a)

  if (
    !href.includes("iframe-resizer.com") &&
    !href.includes("localhost") &&
    !href.includes("lemon")
  ) {
    a.target = "_blank"
  }

  switch (true) {
    case href.includes('github.com'):
      return trackLink('GitHub')

    case href.includes('mozilla.org'):
      return trackLink(`Mozilla ${last(href.split('/'))}`)

    case href.includes('viewerjs.org'):
      return trackLink('PDF/ODF Viewer')

    case href.includes('mail'):
      return trackLink('Contact')

    case href.includes('http'):
      return trackLink(`External Link: ${href}`)
    
    default:
      return
  }
})
