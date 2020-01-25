'use strict';

var mainColor = '#000';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_HEIGHT = 20;

var COLUMN_MAX_HEIGHT = 150;
var COLUMN_WIDTH = 40;
var SPACE_BETWEEN_COLUMNS = 50;
var COLOR_PILE_YOU = 'rgba(255, 0, 0, 1)';

var shift = COLUMN_WIDTH + SPACE_BETWEEN_COLUMNS;
var pileX = CLOUD_X + SPACE_BETWEEN_COLUMNS;
var pileY = CLOUD_Y + CLOUD_HEIGHT - BAR_HEIGHT - GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var pileHeight = function (playersTimes, player) {
  var maxTime = Math.max.apply(null, playersTimes);
  return (player * COLUMN_MAX_HEIGHT) / maxTime;
};

var renderPile = function (ctx, playersTimes, playersNames) {
  for (var i = 0; i <= playersTimes.length - 1; i++) {
    ctx.fillStyle = mainColor;
    ctx.fillText(Math.round(playersTimes[i]), pileX + i * shift, pileY - pileHeight(playersTimes, playersTimes[i]) - GAP);
    if (playersNames[i] === 'Вы') {
      ctx.fillStyle = COLOR_PILE_YOU;
    } else {
      ctx.fillStyle = 'hsl(240, ' + Math.floor(Math.random() * 100) + '%, 50%)';
    }
    ctx.fillRect(pileX + i * shift, pileY - pileHeight(playersTimes, playersTimes[i]), COLUMN_WIDTH, pileHeight(playersTimes, playersTimes[i]));
    ctx.fillStyle = mainColor;
    ctx.fillText(playersNames[i], pileX + i * shift, pileY + BAR_HEIGHT);
  }
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = mainColor;
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + 2 * GAP, CLOUD_Y + BAR_HEIGHT + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + 2 * GAP, CLOUD_Y + 2 * BAR_HEIGHT + GAP);
  renderPile(ctx, times, names);
};
