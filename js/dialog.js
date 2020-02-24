'use strict';

// при повторном открытии/закрытии диалога, положение диалога должно сбрасываться на изначальное.
(function () {
  var dialog = window.util.setupWindow.setup.querySelector('.upload');

  dialog.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var mouseMoveHandler = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      window.util.setupWindow.setup.style.top = (window.util.setupWindow.setup.offsetTop - shift.y) + 'px';
      window.util.setupWindow.setup.style.left = (window.util.setupWindow.setup.offsetLeft - shift.x) + 'px';
    };

    var mouseUpHandler = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);

      if (dragged) {
        var ClickPreventDefaultHandler = function (clickEvt) {
          clickEvt.preventDefault();
          dialog.removeEventListener('click', ClickPreventDefaultHandler);
        };
        dialog.addEventListener('click', ClickPreventDefaultHandler);
      }
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  });
})();
