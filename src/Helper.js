

  const audio = new Audio("/click.mp3");
  const start = () => {
    audio.play();
  };

  const win = new Audio("/win.mp3");
  const youWin = () => {
    win.play();
  };

  const loose = new Audio("/loose.mp3");
  const youLoose = () => {
    loose.play();
  };


export { start, youWin, youLoose };
