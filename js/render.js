'use strict';
(function () {
  var WIZARDS_COUNT = 4;

  // шаблон для добавления волшебника
  var wizardTemplate = document.querySelector('#similar-wizard-template').content;

  // содержимое шаблона
  var newWizard = wizardTemplate.querySelector('.setup-similar-item');

  // функция создания DOM-элемента на основе JS-объекта
  var renderNewWizard = function (wizard) {
    var wizardItem = newWizard.cloneNode(true);
    wizardItem.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardItem.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardItem.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardItem;
  };

  var similarListElement = window.util.setupWindow.setup.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();


  window.render = function (data) {
    var takeNumber = data.length > WIZARDS_COUNT ? WIZARDS_COUNT : data.length;
    similarListElement.innerHTML = '';
    for (var j = 0; j < takeNumber; j++) {
      fragment.appendChild(renderNewWizard(data[j]));
      similarListElement.appendChild(fragment);
    }
    // отображение склонированного окна настроек
    window.util.setupWindow.setup.querySelector('.setup-similar').classList.remove('hidden');
  };

})();
