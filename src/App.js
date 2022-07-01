import './App.css';
import { FaHandPaper, FaHandRock, FaHandScissors } from 'react-icons/fa';
import Player from './Components/Player'
import ActionButton from './Components/ActionButton';


function App() {
  return (
    <div className='center'>
      <h1>Nicolas Garilli RPS</h1>
      <div>
        <div className='container'>
          <Player name = "Player" action="rock"/>
          <Player name = "Computer" action="rock"/>           
          </div>
          <div>
            <ActionButton action='rock'/>
            <ActionButton action='paper'/>
            <ActionButton action='scissors'/>
          </div>
          <h2>Player 1 Wins</h2>
        </div>
      </div>
   
  );
}

export default App;
