;  (function () {
  // URL of your site
  const yourSite = 'https://your-domain.com'

  // Options for iframe-resizer
  window.iframeResizer = {
    targetOrigin: yourSite,
  }

  // Path to the iframe-resizer child script
  const childScript = 'node_modules/@iframe-resizer/child/index.umd.min.js'

  // Load iframe-resizer child script
  const script = document.createElement('script')
  script.src = `${yourSite}/${childScript}`
  script.async = true
  script.fetchPriority = 'high'
  script.onerror = function () {
    console.error('Failed to load iframe-resizer library')
  }

  // Insert iframe-resizer child after this script
  document.currentScript.after(script)
})()
