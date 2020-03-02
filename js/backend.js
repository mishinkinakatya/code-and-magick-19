'use strict';
(function () {
  var URL_FORM = 'https://js.dump.academy/code-and-magick';
  var URL_DATA = 'https://js.dump.academy/code-and-magick/data';
  var TIMEOUT_IN_MS = 10000;
  var StatusCode = {
    OK: 200
  };

  window.backend = {
    load: function (onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.timeout = TIMEOUT_IN_MS;
      xhr.addEventListener('load', function () {
        if (xhr.status === StatusCode.OK) {
          onLoad(xhr.response);
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      });

      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });

      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });

      xhr.open('GET', URL_DATA);
      xhr.send();

    },

    save: function (data, onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.timeout = TIMEOUT_IN_MS;

      xhr.addEventListener('load', function () {
        onLoad(xhr.response);
      });

      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });

      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });

      xhr.open('POST', URL_FORM);
      xhr.send(data);
    },
  };
})();
