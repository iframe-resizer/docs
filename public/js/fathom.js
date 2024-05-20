document.querySelectorAll('a').forEach((item) => {
  if (item.href.includes('github.com')) {
    item.addEventListener('click', (event) => {
      fathom.trackEvent('GitHub');
    })
  }
})

