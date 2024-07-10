export default function createGame() {
  const stateGame = {
    players: {},
    screen: {},
  };

  // const observers = [];

  function getScreen(window) {
    stateGame.screen = {
      width: window.innerWidth * 0.7,
      height: window.innerHeight,
    };
  }

  // function notifyAll(command) {
  //   for (const observerFunction of observers) {
  //     observerFunction(command);
  //   }
  // }

  function setState(newState) {
    Object.assign(stateGame, newState);
  }

  function addPlayer(id) {
    // const randomX = Math.random() * stateGame.screen.width;
    // const randomY = Math.random() * stateGame.screen.height;

    stateGame.players[id] = {
      x: 100,
      y: 100,
    };

    // notifyAll({
    //   type: "add-player",
    //   playerId: id,
    //   // playerX: playerX,
    //   // playerY: playerY,
    // });

    // console.log(stateGame.players);
  }

  function removePlayer(id) {
    delete stateGame.players[id];
  }

  return { stateGame, addPlayer, setState, removePlayer, getScreen };
}
