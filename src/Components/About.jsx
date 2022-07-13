import "../App.css";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const goToHome = () => navigate("/");
  const audio = new Audio("/click.mp3");
  const start = () => {
    audio.play();
  };

  return (
    <div className="center">
      <h1>Piedra, Papel, Tijera, Lagarto o Spock</h1>
      <div className="subtitle">
        <h2> Trabajo Final Integrador TFI » 1°C 2022 </h2>
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
        <button
          className="btn"
          onClick={() => {
            goToHome();
            start();
          }}
        >
          {" "}
          Volver al inicio{" "}
        </button>
      </div>
    </div>
  );
};

export default About;
