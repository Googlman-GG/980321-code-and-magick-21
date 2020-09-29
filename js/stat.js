'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 20;
const FONT_GAP = 15;
const MAX_BAR_HEIGHT = 150;
const BAR_WIDTH = 40;
const BAR_GAP = 50;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = function (arr) {
  let maxElement = arr[0];

  arr.forEach(function (item) {
    if (item > maxElement) {
      maxElement = item;
    }
  });

  return maxElement;
};

const getRandomNumberFromRange = function (min, max) {
  return Math.ceil(Math.random() * (min - max) + max);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, (CLOUD_X + CLOUD_Y), (CLOUD_Y + CLOUD_Y), `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, `#fff`);

  ctx.fillStyle = `#000`;
  ctx.font = `16px PT Mono`;
  ctx.textBaseline = `hanging`;
  ctx.fillText(`Ура вы победили!`, 120, 30);
  ctx.fillText(`Список результатов:`, 120, 50);

  let maxTime = getMaxElement(times);

  players.forEach(function (item, i) {
    ctx.fillStyle = `#000`;
    ctx.fillText(item, CLOUD_X + GAP + ((BAR_WIDTH + BAR_GAP) * i), CLOUD_Y + CLOUD_HEIGHT - (GAP / 2) - FONT_GAP);

    ctx.fillStyle = item === `Вы` ? `rgba(255, 0, 0, 1)` : `hsl(240deg,` + getRandomNumberFromRange(10, 100) + `%, 50%)`;
    ctx.fillRect(CLOUD_X + GAP + ((BAR_WIDTH + BAR_GAP) * i), CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP - ((MAX_BAR_HEIGHT * times[i]) / maxTime), BAR_WIDTH, (MAX_BAR_HEIGHT * times[i]) / maxTime);

    ctx.fillStyle = `#000`;
    ctx.fillText(Math.ceil(times[i]), CLOUD_X + GAP + ((BAR_WIDTH + BAR_GAP) * i), CLOUD_Y + CLOUD_HEIGHT - (GAP * 2) - FONT_GAP - ((MAX_BAR_HEIGHT * times[i]) / maxTime));
  });
};
