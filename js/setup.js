'use strict';

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coats = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyes = ['black', 'red', 'blue', 'yellow', 'green'];

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

// массив из персонажей
var wizards = [
  {
    name: names[generateRandomNumbers(names.length)] + ' ' + surnames[generateRandomNumbers(names.length)],
    coatColor: coats[generateRandomNumbers(coats.length)],
    eyesColor: eyes[generateRandomNumbers(eyes.length)]
  },
  {
    name: names[generateRandomNumbers(names.length)] + ' ' + surnames[generateRandomNumbers(names.length)],
    coatColor: coats[generateRandomNumbers(coats.length)],
    eyesColor: eyes[generateRandomNumbers(eyes.length)]
  },
  {
    name: names[generateRandomNumbers(names.length)] + ' ' + surnames[generateRandomNumbers(names.length)],
    coatColor: coats[generateRandomNumbers(coats.length)],
    eyesColor: eyes[generateRandomNumbers(eyes.length)]
  },
  {
    name: names[generateRandomNumbers(names.length)] + ' ' + surnames[generateRandomNumbers(names.length)],
    coatColor: coats[generateRandomNumbers(coats.length)],
    eyesColor: eyes[generateRandomNumbers(eyes.length)]
  },
];

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
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderNewWizard(wizards[i]));
}

// добавление содержимого fragment в блок с персонажами
similarListElement.appendChild(fragment);

// отображение склонированного окна настроек
userDialog.querySelector('.setup-similar').classList.remove('hidden');
