const track = (includes, log) =>
  item.addEventListener(includes, () => {
    fathom?.trackEvent(`$log} from ${document.title}`);
  });

if (document.title === "404") {
  fathom?.trackEvent(`404: ${document.referrer || "Direct"}`)
}

document.querySelectorAll("a").forEach((item) => {
  if (item.href.includes("http")) {
    item.target = "_blank"
  }

  switch (true) {
    case item.href.includes("github.com"):
      return track("click", `GitHub from ${document.title}`)

    case item.href.includes("mozilla.org"):
      return track("click", `Mozilla from ${document.title}`)

    case item.href.includes("viewerjs.org"):
      return track("click", "PDF/ODF")

    case item.href.includes("mail"):
      return track("click", `Contact email from ${document.title}`)

    case item.href.includes("http"):
      return track("click", `External Link: ${item.href} from ${document.title}`)
    
    default:
      return
  }
})
