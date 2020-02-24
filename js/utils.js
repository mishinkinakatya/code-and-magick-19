'use strict';

(function () {
  window.util = {
    wizardsDescription: {
      names: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
      surnames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
      coats: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
      eyes: ['black', 'red', 'blue', 'yellow', 'green'],
      fireballs: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],
    },

    setupWindow: {
      setup: document.querySelector('.setup'),
      setupOpen: document.querySelector('.setup-open'),
      setupClose: document.querySelector('.setup-close'),
      setupSubmit: document.querySelector('.setup-submit'),
      userName: document.querySelector('.setup-user-name'),
      wizardCoat: document.querySelector('.wizard-coat'),
      wizardCoatColor: document.querySelector('input[name = "coat-color"]'),
      wizardEyes: document.querySelector('.wizard-eyes'),
      wizardEyesColor: document.querySelector('input[name = "eyes-color"]'),
      fireball: document.querySelector('.setup-fireball-wrap'),
      fireballColor: document.querySelector('input[name = "fireball-color"]'),
      dialog: document.querySelector('.upload'),
    },

    generateRandomNumbers: function (arrayLength) {
      return Math.floor(Math.random() * Math.floor(arrayLength - 1));
    },

    colorize: function (description, element, elementInput) {
      element.addEventListener('click', function () {
        var color = description[window.util.generateRandomNumbers(description.length)];
        if (element.tagName.toLowerCase() === 'div') {
          element.style.background = color;
        } else {
          element.style.fill = color;
        }
        elementInput.value = color;
      });
    },
  };

})();
