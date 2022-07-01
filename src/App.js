import './App.css';

function App() {
  return (
    <div className='center'>
      <h1>Nicolas Garilli RPS</h1>
      <div>
        <div className='container'>
          <div className='player'>
            <div className='score'> Player 1: 0</div>
              <div></div>
            </div>
            <div className='player'>
            <div className='score'> Player 2: 0</div>
              <div></div>
            </div>
          </div>
          <div>
            <button className="rnd-btn">Rock</button>
            <button className="rnd-btn">Paper</button>
            <button className="rnd-btn">Scissors</button>
          </div>
          <h2>Player 1 Wins</h2>
        </div>
      </div>
   
  );
}

export default App;
