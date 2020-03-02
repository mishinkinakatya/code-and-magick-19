'use strict';
(function () {
  // var WIZARDS_COUNT = 4;

  // отображение склонированного окна настроек
  window.util.setupWindow.setup.querySelector('.setup-similar').classList.remove('hidden');

  // шаблон для добавления волшебника
  var wizardTemplate = document.querySelector('#similar-wizard-template').content;

  // содержимое шаблона
  var newWizard = wizardTemplate.querySelector('.setup-similar-item');

  // заполнение массива из персонажей
  // var wizards = [];
  // var generateWizards = function (count) {
  //   for (var i = 0; i < count; i++) {
  //     wizards.push({
  //       name: window.util.wizardsDescription.names[window.util.generateRandomNumbers(window.util.wizardsDescription.names.length)] + ' ' + window.util.wizardsDescription.surnames[window.util.generateRandomNumbers(window.util.wizardsDescription.names.length)],
  //       coatColor: window.util.wizardsDescription.coats[window.util.generateRandomNumbers(window.util.wizardsDescription.coats.length)],
  //       eyesColor: window.util.wizardsDescription.eyes[window.util.generateRandomNumbers(window.util.wizardsDescription.eyes.length)]
  //     });
  //   }
  // };

  // generateWizards(WIZARDS_COUNT);

  // функция создания DOM-элемента на основе JS-объекта
  window.wizard = {
    renderNewWizard: function (wizard) {
      var wizardItem = newWizard.cloneNode(true);
      wizardItem.querySelector('.setup-similar-label').textContent = wizard.name;
      wizardItem.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
      wizardItem.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
      return wizardItem;
    },
  };

  // изменение цвета глаз, плаща и фаербола
  window.util.colorize(window.util.wizardsDescription.coats, window.util.setupWindow.wizardCoat, window.util.setupWindow.wizardCoatColor);
  window.util.colorize(window.util.wizardsDescription.eyes, window.util.setupWindow.wizardEyes, window.util.setupWindow.wizardEyesColor);
  window.util.colorize(window.util.wizardsDescription.fireballs, window.util.setupWindow.fireball, window.util.setupWindow.fireballColor);
})();
