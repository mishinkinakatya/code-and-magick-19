'use strict';
(function () {
  var WIZARDS_COUNT = 4;

  // отображение склонированного окна настроек
  window.util.setupWindow.setup.querySelector('.setup-similar').classList.remove('hidden');

  // блок с персонажами
  var similarListElement = window.util.setupWindow.setup.querySelector('.setup-similar-list');

  // шаблон для добавления волшебника
  var wizardTemplate = document.querySelector('#similar-wizard-template').content;

  // содержимое шаблона
  var newWizard = wizardTemplate.querySelector('.setup-similar-item');

  // заполнение массива из персонажей
  var wizards = [];
  var generateWizards = function (count) {
    for (var i = 0; i < count; i++) {
      wizards.push({
        name: window.util.wizardsDescription.names[window.util.generateRandomNumbers(window.util.wizardsDescription.names.length)] + ' ' + window.util.wizardsDescription.surnames[window.util.generateRandomNumbers(window.util.wizardsDescription.names.length)],
        coatColor: window.util.wizardsDescription.coats[window.util.generateRandomNumbers(window.util.wizardsDescription.coats.length)],
        eyesColor: window.util.wizardsDescription.eyes[window.util.generateRandomNumbers(window.util.wizardsDescription.eyes.length)]
      });
    }
  };

  generateWizards(WIZARDS_COUNT);

  // функция создания DOM-элемента на основе JS-объекта
  var renderNewWizard = function (wizard) {
    var wizardItem = newWizard.cloneNode(true);
    wizardItem.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardItem.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardItem.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardItem;
  };

  // заполнение блока DOM-элементами на основе массива JS-объектов
  var fragment = document.createDocumentFragment();

  // добавление каждого персонажа в fragment
  for (var j = 0; j < wizards.length; j++) {
    fragment.appendChild(renderNewWizard(wizards[j]));
  }

  // добавление содержимого fragment в блок с персонажами
  similarListElement.appendChild(fragment);

  // обработчик события: изменение цвета плаща
  var wizardCoatHandler = function () {
    var color = window.util.wizardsDescription.coats[window.util.generateRandomNumbers(window.util.wizardsDescription.coats.length)];
    window.util.setupWindow.wizardCoat.style.fill = color;
    window.util.setupWindow.wizardCoatColor.value = color;
  };

  // обработчик события: изменение цвета глаз
  var wizardEyesHandler = function () {
    var color = window.util.wizardsDescription.eyes[window.util.generateRandomNumbers(window.util.wizardsDescription.eyes.length)];
    window.util.setupWindow.wizardEyes.style.fill = color;
    window.util.setupWindow.wizardEyesColor.value = color;
  };

  // обработчик события: изменение цвета фаербола
  var fireballHandler = function () {
    var color = window.util.wizardsDescription.fireballs[window.util.generateRandomNumbers(window.util.wizardsDescription.fireballs.length)];
    window.util.setupWindow.fireball.style.background = color;
    window.util.setupWindow.fireballColor.value = color;
  };

  window.util.setupWindow.wizardCoat.addEventListener('click', wizardCoatHandler);

  window.util.setupWindow.wizardEyes.addEventListener('click', wizardEyesHandler);

  window.util.setupWindow.fireball.addEventListener('click', fireballHandler);
})();
