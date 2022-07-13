import "../App.css";
import { useNavigate } from "react-router-dom";

const MainMenu = () => {
  const navigate = useNavigate();
  const goToGame = () => navigate("/Game");
  const goToGuide = () => navigate("/Guide");

  return (
    <div className="center">
      <h1>Nicolas Garilli Piedra, Papel, Tijera, Lagarto o Spock</h1>
      <div>
        <div className="mainMenu-btn-container">
          <button className="btn" onClick={goToGame}>
            {" "}
            JUGAR!{" "}
          </button>
          <button className="btn" onClick={goToGuide}>
            {" "}
            GUIA{" "}
          </button>
          <button className="btn"> ABOUT</button>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
