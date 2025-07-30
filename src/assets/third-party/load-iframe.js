; (function () {
  // Options for iframe-resizer
  const options = {
    log: 'collapsed',
    waitForLoad: true,
  }

  // URL of the site where the iframe content is hosted
  const site = 'https://your-domain.com';

  // iframe configuration
  const width = '100%'
  const height = '100vh'
  const content = 'iframe-content.html'

  // Path to the iframe-resizer parent script
  const parentScript = 'node_modules/@iframe-resizer/parent/index.umd.min.js'

  // Create the iframe
  const iframe = document.createElement('iframe')
  iframe.src = `${site}/${content}`
  iframe.style.width = width
  iframe.style.height = height

  // Load iframe-resizer parent script
  const script = document.createElement('script')
  script.src = `${site}/${parentScript}`
  script.async = true
  script.fetchPriority = 'high'
  script.onload = () => iframeResize(options, iframe)
  script.onerror = function () {
    console.error('Failed to load iframe-resizer library.')
  }

  // Insert iframe and script files after this script
  document.currentScript.after(iframe, script)
})()
