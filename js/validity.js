'use strict';
// проверка на валидность поля username
(function () {
  window.util.setupWindow.userName.addEventListener('invalid', function () {
    if (window.util.setupWindow.userName.validity.tooShort) {
      window.util.setupWindow.userName.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (window.util.setupWindow.userName.validity.tooLong) {
      window.util.setupWindow.userName.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (window.util.setupWindow.userName.validity.valueMissing) {
      window.util.setupWindow.userName.setCustomValidity('Обязательное поле');
    } else {
      window.util.setupWindow.userName.setCustomValidity('');
    }
  });
})();
