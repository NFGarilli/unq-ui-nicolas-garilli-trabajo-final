import "./App.css";
import Player from "./Components/Player";
import ActionButton from "./Components/ActionButton";
import { useState } from "react";
import ShowWinner from "./Components/ShowWinner";
import { useNavigate } from "react-router-dom";

const actions = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["paper", "spock"],
  spock: ["scissors", "rock"],
};

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

function randomAction() {
  const keys = Object.keys(actions);
  const index = Math.floor(Math.random() * keys.length);
  return keys[index];
}

function calculateWinner(action1, action2) {
  if (action1 === action2) {
    return 0;
  } else if (actions[action1].includes(action2)) {
    return -1;
  } else if (actions[action2].includes(action1)) {
    return 1;
  }
  return null;
}

function Game() {
  const goToHome = () => navigate("/");
  const navigate = useNavigate();
  const [playerAction, setPlayerAction] = useState("");
  const [cpuAction, setCpuAction] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);
  const [winner, setWinner] = useState(0);

  const resetGame = () => {
    setPlayerScore(0);
    setCpuScore(0);
    setPlayerAction(null);
    setCpuAction(null);
    setWinner(null);
  };

  
  

  const onActionSelected = (selectedAction) => {
   
    const newCpuAction = randomAction();

    setPlayerAction(selectedAction);
    setCpuAction(newCpuAction);

    const newWinner = calculateWinner(selectedAction, newCpuAction);
    setWinner(newWinner);
    if (newWinner === -1) {
      setPlayerScore(playerScore + 1);
      youWin();   

    } else if (newWinner === 1) {
      setCpuScore(cpuScore + 1);
      youLoose();
    }
  };

  return (
    <div className="center">
      <h1>Piedra, Papel, Tijera, Lagarto o Spock</h1>
      <div className="game-container">
        <div className="container">
          <Player name="Jugador" score={playerScore} action={playerAction} />
          <Player name="Rival" score={cpuScore} action={cpuAction} />
        </div>
        <div className="action-button-container">
          <ActionButton action="rock" onActionSelected={onActionSelected} />
          <ActionButton action="paper" onActionSelected={onActionSelected} />
          <ActionButton action="scissors" onActionSelected={onActionSelected} />
          <ActionButton action="lizard" onActionSelected={onActionSelected} />
          <ActionButton action="spock" onActionSelected={onActionSelected} />
        </div>
        <div className="winner-container">
          <ShowWinner winner={winner} />
        </div>
        <div className="btn-game-container">
          <button className="btn-game" onClick={() => { resetGame(); start()}}>
            Resetear juego
          </button>
          <button className="btn-game" onClick={() => { goToHome(); start()}}>
            {" "}
            Ir al Inicio{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Game;
