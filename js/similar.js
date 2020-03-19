'use strict';
(function () {
  var coatColor;
  var eyesColor;
  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    return rank;
  };

  var nameComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    window.render(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = nameComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  window.wizard.coatChangeHandler = window.debounce(function (color) {
    coatColor = color;
    updateWizards();
  });

  window.wizard.eyesChangeHandler = window.debounce(function (color) {
    eyesColor = color;
    updateWizards();
  });

  // функция, которая срабатывает при загрузке данных с сервера
  var loadHandler = function (data) {
    wizards = data;
    window.render(wizards);
    updateWizards();
  };

  window.backend.load(loadHandler, window.util.errorHandler);

})();
