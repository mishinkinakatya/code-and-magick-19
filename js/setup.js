'use strict';

var WIZARDS_COUNT = 4;
var ESC_KEY = 'Escape';

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coats = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyes = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballs = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

// окно настроек
var userDialog = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');
var userName = userDialog.querySelector('.setup-user-name');
var wizardCoat = document.querySelector('.wizard-coat');
var wizardCoatColor = document.querySelector('input[name = "coat-color"]');
var wizardEyes = document.querySelector('.wizard-eyes');
var wizardEyesColor = document.querySelector('input[name = "eyes-color"]');
var fireball = document.querySelector('.setup-fireball-wrap');
var fireballColor = document.querySelector('input[name = "fireball-color"]');

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

// обработчик события: изменение цвета плаща
var wizardCoatHandler = function () {
  var color = coats[generateRandomNumbers(coats.length)];
  wizardCoat.style.fill = color;
  wizardCoatColor.value = color;
};

// обработчик события: изменение цвета глаз
var wizardEyesHandler = function () {
  var color = eyes[generateRandomNumbers(eyes.length)];
  wizardEyes.style.fill = color;
  wizardEyesColor.value = color;
};

// обработчик события: изменение цвета фаербола
var fireballHandler = function () {
  var color = fireballs[generateRandomNumbers(fireballs.length)];
  fireball.style.background = color;
  fireballColor.value = color;
};

wizardCoat.addEventListener('click', wizardCoatHandler);

wizardEyes.addEventListener('click', wizardEyesHandler);

fireball.addEventListener('click', fireballHandler);

// обработчик события - нажатие на Esc
var popupEscPressHandler = function (evt) {
  if ((evt.key === ESC_KEY) && (document.activeElement !== userName)) {
    closePopup();
  }
};

// функция открытия окна настроек
var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', popupEscPressHandler);
};

// функция закрытия окна настроек
var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', popupEscPressHandler);
};

// обработчик на клике по аватарке
setupOpen.addEventListener('click', function () {
  openPopup();
}
);

// обработчик закрытия окна по кнопке Esc
document.addEventListener('keydown', function () {
  popupEscPressHandler();
});

// обработчик по нажатию по аватарке клавишей Enter
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

// обработчик закрытия окна при клике на крестик
setupClose.addEventListener('click', function () {
  closePopup();
});

// обработчик при нажатии Enter на крестик
setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

// проверка на валидность поля username
userName.addEventListener('invalid', function () {
  if (userName.validity.tooShort) {
    userName.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userName.validity.tooLong) {
    userName.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userName.validity.valueMissing) {
    userName.setCustomValidity('Обязательное поле');
  } else {
    userName.setCustomValidity('');
  }
});
