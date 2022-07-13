export default function ShowWinner({ winner = 0 }) {
  const text = {
    "-1": "Ganaste Campeón!",
    0: "Empate!",
    1: "Seguí participando...",
  };

  return <h2>{text[winner]}</h2>;
}
