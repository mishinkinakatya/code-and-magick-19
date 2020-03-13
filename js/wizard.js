'use strict';
(function () {
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALLS_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardCoatColor = document.querySelector('input[name = "coat-color"]');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardEyesColor = document.querySelector('input[name = "eyes-color"]');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var wizardFireballColor = document.querySelector('input[name = "fireball-color"]');

  var wizard = {
    coatChangeHandler: function () { },
    eyesChangeHandler: function () { },
  };

  var generateRandomElement = function (array) {
    var randomElementIndex = Math.floor(Math.random() * Math.floor(array.length));
    return array[randomElementIndex];
  };

  wizardCoat.addEventListener('click', function () {
    var color = generateRandomElement(COAT_COLORS);
    wizardCoat.style.fill = color;
    wizardCoatColor.value = color;
    wizard.coatChangeHandler(color);
  });

  wizardEyes.addEventListener('click', function () {
    var color = generateRandomElement(EYES_COLORS);
    wizardEyes.style.fill = color;
    wizardEyesColor.value = color;
    wizard.eyesChangeHandler(color);
  });

  wizardFireball.addEventListener('click', function () {
    var color = generateRandomElement(FIREBALLS_COLORS);
    wizardFireball.style.background = color;
    wizardFireballColor.value = color;
  });


  window.wizard = wizard;
})();
