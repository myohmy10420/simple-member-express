(function() {

    (function() {

      function getCsrfToken() {
        return new Promise(function(resolve, reject) {
          var req = new XMLHttpRequest();
          req.open('GET', document.location);
          req.send(null);

          req.onreadystatechange = function() {
            if ((4 === this.readyState) && (200 === this.status)) {
              var headers = req.getAllResponseHeaders();
              var matches = headers.match(/X\-Csrf\-Token: (.+)/);
              var csrfToken = matches[1];
              resolve(csrfToken);
            }
          }
        });
      }

      document.addEventListener('DOMContentLoaded', function() {
        getCsrfToken()
          .then(function(csrfToken) {
            document.getElementById('csrfToken').value = csrfToken;
          });
      }, false);
    })();

})();
