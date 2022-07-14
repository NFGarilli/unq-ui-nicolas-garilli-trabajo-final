import "../App.css";
import { useNavigate } from "react-router-dom";
import { start } from "../Helper";
import GenericButton from "./GenericButton";
import Title from "./Title";

const About = () => {
  const navigate = useNavigate();
  const goToHome = () => navigate("/");


  return (
    <div className="center">
      <Title text="Piedra, Papel, Tijera, Lagarto o Spock"/>
      <div className="subtitle">
        <Title text="Trabajo Final Integrador (TFI) » 1°C 2022" />
      </div>
      <div className="guide-container">
        <div className="text-container">
          <p>
            {" "}
            Este proyecto fue realizado bajo el marco de la materia Interfaces
            de Usuario de la Universidad Nacional De Quilmes como proyecto final
            integrador. <br />
            Realizado por el alumno: Nicolás Francisco Garilli.
          </p>
          <div className="logo-unq">
            <img
              src="/unq.png"
              alt="guide-rps"
              width="650px"
              height="220px"
            ></img>
          </div>
        </div>
      </div>
      <div className="guide-btn-container">
      <GenericButton handleFunction={() => {goToHome(); start()}} text="Volver al inicio" className="btn" />
      </div>
    </div>
  );
};

export default About;
