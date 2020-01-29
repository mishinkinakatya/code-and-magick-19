'use strict';

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coats = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyes = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_COUNT = 4;

// окно настроек
var userDialog = document.querySelector('.setup');

userDialog.classList.remove('hidden');

// блок с персонажами
var similarListElement = userDialog.querySelector('.setup-similar-list');

// шаблон для добавления волшебника
var wizardTemplate = document.querySelector('#similar-wizard-template').content;

// содержимое шаблона
var newWizard = wizardTemplate.querySelector('.setup-similar-item');

//  генерация случайных чисел в зависимости от длины массива
var generateRandomNumbers = function (arrayLength) {
  return Math.floor(Math.random() * Math.floor(arrayLength - 1));
};

// заполнение массива из персонажей
var wizards = [];
var generateWizards = function (count) {
  for (var i = 0; i < count; i++) {
    wizards.push({
      name: names[generateRandomNumbers(names.length)] + ' ' + surnames[generateRandomNumbers(names.length)],
      coatColor: coats[generateRandomNumbers(coats.length)],
      eyesColor: eyes[generateRandomNumbers(eyes.length)]
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

// отображение склонированного окна настроек
userDialog.querySelector('.setup-similar').classList.remove('hidden');
