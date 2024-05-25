const trackLinkOut = (item) => (includes, log) =>
  item.addEventListener(includes, () => {
    fathom?.trackEvent(log);
  })

if (document.title === "404") {
  fathom?.trackEvent(`404: ${document.referrer || "Direct"}`)
}

document.querySelectorAll("a").forEach((item) => {
  const trackLink = trackLinkOut(item)
  
  if (item.href.includes("http")) {
    item.target = "_blank"
  }

  switch (true) {
    case item.href.includes("github.com"):
      return trackLink("click", `GitHub from ${document.title}`)

    case item.href.includes("mozilla.org"):
      return trackLink("click", `Mozilla from ${document.title}`)

    case item.href.includes("viewerjs.org"):
      return trackLink("click", `PDF/ODF Viewer from ${document.title}`)

    case item.href.includes("mail"):
      return trackLink("click", `Contact email from ${document.title}`)

    case item.href.includes("http"):
      return trackLink("click", `External Link: ${item.href} from ${document.title}`)
    
    default:
      return
  }
})
