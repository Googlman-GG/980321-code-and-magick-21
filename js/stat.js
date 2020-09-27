'use strict';

const CLOUD_WIDTH = 500;
const CLOUD_HEIGHT = 200;
const CLOUD_X = 0;
const CLOUD_Y = 120;
const GAP = 20;
const FONT_GAP = 15;
const TEXT_WIDTH = 50;
const BAR_HEIGHT = 40;
const BAR_WIDTH = CLOUD_HEIGHT - GAP - TEXT_WIDTH - GAP;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(
      ctx,
      CLOUD_Y + GAP,
      CLOUD_X + GAP,
      `rgba(0, 0, 0, 0.3)`
  );
  renderCloud(
      ctx,
      CLOUD_Y,
      CLOUD_X,
      `#fff`
  );

  ctx.fillStyle = `#000`;
  times = [1,10 ,100, 200];
  const maxTime = getMaxElement(times);
  console.log(times);
  for (let i = 0; i < players.length; i++) {
    ctx.fillText(
        players[i],
        CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i,
        CLOUD_X + GAP
    );
    ctx.fillRect(
        CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * i,
        CLOUD_X + GAP + TEXT_WIDTH,
        BAR_HEIGHT,
        (BAR_WIDTH * times[i]) / maxTime
    );
  }
};
