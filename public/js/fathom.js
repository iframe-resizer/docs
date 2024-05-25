const last = (arr) => arr[arr.length - 1];

const trackLink =  (target) =>
  addEventListener('click', () => {
    fathom?.trackEvent(`${target} from ${document.title.split(' | ')[0].replace('IFRAME-RESIZER', 'Homepage')}`);
  });

if (document.title === '404') {
  fathom?.trackEvent(`404: ${document.referrer || 'Direct'}`)
}

document.querySelectorAll('a').forEach((a) => {
  const { href } = a

  if (
    false === href.includes("iframe-resizer.com") &&
    false === href.includes("localhost") &&
    false === href.includes("lemon")
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
