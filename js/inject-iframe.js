(function () {
  var
    injectIframe = function (url) {
      var
        iframe = document.createElement('iframe');

      iframe.setAttribute('height', '100%');
      iframe.setAttribute('width', document.documentElement.clientWidth);
      iframe.setAttribute('frameborder', 0);

      document.body.style.overflow = 'hidden';
      document.body.appendChild(iframe);
      iframe.contentWindow.location.href = url;

      window.addEventListener('resize', function() {
        iframe.setAttribute('width', document.documentElement.clientWidth);
      }, false);
    };

  window.injectIframe = injectIframe;
}());