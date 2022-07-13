import "../App.css";
import { useNavigate } from "react-router-dom";

const MainMenu = () => {
  const navigate = useNavigate();
  const goToHome = () => navigate("/");
  const audio = new Audio("/click.mp3")
    const start = () => {
    audio.play()
}

  return (
    <div className="center">
      <h1>Como jugar Piedra, Papel, Tijera, Lagarto o Spock</h1>
      <div className="guide-container">
        <div className="text-container">
          <p>
            {" "}
            Jugar a piedra, papel, tijera, lagarto o spock es muy facil. <br />
            El propio Sheldon lo explicaba así: <br />
            "Tijera corta a papel, papel tapa a piedra, piedra aplasta a
            lagarto,
            <br />
            lagarto envenena a Spock, Spock rompe a tijera, tijera decapita a
            lagarto, <br />
            lagarto devora a papel, papel desautoriza a Spock, <br />
            Spock vaporiza a piedra, y como siempre, piedra aplasta a tijera"{" "}
            <br />
            Bastante simple, ¿Verdad? <br />
            Si no te quedo claro, te dejo un video para que lo entiendas mejor.
          </p>
        </div>
        <div className="tutorial-container">
          <div className="iframe-video">
            <iframe
              width="320"
              height="497"
              src="https://www.youtube.com/embed/7IOsTX-y0D0"
              title="Rock Paper Scissors Lizard Spock"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="guide-rpsls">
            <img src="/guide-rpsls.png" alt="guide-rps"></img>
          </div>
        </div>

        <div className="guide-btn-container">
          <button className="btn" onClick={() => { goToHome(); start()}}>
            {" "}
            Volver al inicio{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
