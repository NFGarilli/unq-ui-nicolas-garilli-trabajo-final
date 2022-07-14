import "../App.css";
import { useNavigate } from "react-router-dom";
import { start } from "../Helper";
import Title from "./Title";
import GenericButton from "./GenericButton";

const MainMenu = () => {
  const navigate = useNavigate();
  const goToGame = () => navigate("/Game");
  const goToGuide = () => navigate("/Guide");
  const goToAbout = () => navigate("/About");

  return (
    <div className="center">
    <Title text="Piedra, Papel, Tijera, Lagarto o Spock" />
        <div className="mainMenu-btn-container">
          <GenericButton handleFunction={() => {goToGame(); start()}} text="JUGAR!" className="btn" />
          <GenericButton handleFunction={() => {goToGuide(); start()}} text="GUIA" className="btn" />
          <GenericButton handleFunction={() => {goToAbout(); start()}} text="ABOUT" className="btn" />
        </div>
      </div>
  );
};

export default MainMenu;
