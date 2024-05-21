document.querySelectorAll('a').forEach((item) => {
  if (item.href.includes("github.com")) {
    item.addEventListener("click", (event) => {
      fathom?.trackEvent("GitHub");
    });
  }

  if (item.href.includes("viewerjs.org")) {
    item.addEventListener("click", (event) => {
      fathom?.trackEvent("PDF/ODF");
    });
  }

  if (item.href.includes("mail")) {
    item.addEventListener("click", (event) => {
      fathom?.trackEvent("Email Contact");
    });
  }
})

