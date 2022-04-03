

function jsonp({ url, params, onData }) {
  const script = document.createElement('script');
  script.src = `${url}/${JSON.stringify({ callback: 'callback', ...params })}`
  window['callback'] = onData;
  document.body.appendChild(script)
}

jsonp({
  url: 'localhost:8000',
  params: {
    id: 1
  },
  onData(data) {
    console.log('data', data)
  }
})