/** @type {HTMLCanvasElement} */

export default function renderGame(
  screen,
  game,
  currentPlayerId,
  requestAnimationFrame,
) {
  game.getScreen(window);
  const canvas = document.getElementById(screen);
  const ctx = canvas.getContext("2d");

  const windowWidth = game.stateGame.screen.width;
  const windowHeight = game.stateGame.screen.height;

  canvas.width = windowWidth;
  canvas.height = windowHeight;
  canvas.style.background = "white";

  // console.log(game.stateGame.players);

  for (const playerId in game.stateGame.players) {
    const player = game.stateGame.players[playerId];
    ctx.fillStyle = "red";
    ctx.fillRect(player.x, player.y, 50, 50);
  }

  const currentPlayer = game.stateGame.players[currentPlayerId];

  if (currentPlayer) {
    ctx.fillStyle = "#F0DB4F";
    ctx.fillRect(200, 200, 50, 50);
  }

  requestAnimationFrame(() => {
    renderGame(screen, game, currentPlayerId, requestAnimationFrame);
  });
}

// const player = new Player(50, 50, 30, 3, ctx);
// player.loop();
