export default function ShowWinner({ winner}) {
  const text = {
    "-1": "Ganaste Campeón!",
    0: "Empate!",
    1: "Seguí participando...",
    2: "Juego no empezado..."
  };

  return <h2>{text[winner]}</h2>;
}
