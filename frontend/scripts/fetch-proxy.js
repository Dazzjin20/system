(function () {
  const originalFetch = window.fetch.bind(window);
  const LOCAL_PREFIX = 'http://localhost:3000/api';

  window.fetch = function (input, init) {
    try {
      let url = typeof input === 'string' ? input : input.url;
      if (typeof url === 'string' && url.startsWith(LOCAL_PREFIX)) {
        const replacementBase = window.API_BASE_URL || LOCAL_PREFIX;
        const newUrl = replacementBase + url.slice(LOCAL_PREFIX.length);
        if (typeof input === 'string') {
          input = newUrl;
        } else {
          input = new Request(newUrl, input);
        }
      }
    } catch (err) {
      // no-op
    }
    return originalFetch(input, init);
  };
})();
