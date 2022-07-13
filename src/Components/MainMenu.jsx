import "../App.css";
import { useNavigate } from "react-router-dom";

const MainMenu = () => {
  const navigate = useNavigate();
  const goToGame = () => navigate("/Game");
  const goToGuide = () => navigate("/Guide");
  const goToAbout = () => navigate("/About");
  const audio = new Audio("/click.mp3");
  const start = () => {
    audio.play();
  };

  return (
    <div className="center">
      <h1>Piedra, Papel, Tijera, Lagarto o Spock</h1>
      <div>
        <div className="mainMenu-btn-container">
          <button
            className="btn"
            onClick={() => {
              goToGame();
              start();
            }}
          >
            {" "}
            JUGAR!{" "}
          </button>
          <button
            className="btn"
            onClick={() => {
              goToGuide();
              start();
            }}
          >
            {" "}
            GUIA{" "}
          </button>
          <button
            className="btn"
            onClick={() => {
              goToAbout();
              start();
            }}
          >
            {" "}
            ABOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
