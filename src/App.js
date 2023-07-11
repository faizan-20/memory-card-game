import { useState } from "react";
import Cards from "./components/Cards";

function App() {

  const [scoreBoard, setScoreBoard] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const increaseScore = () => {
    setScoreBoard(scoreBoard+1);
  }

  const resetScore = () => {
    setScoreBoard(0);
  }

  const checkBestScore = (v) => {
    if (bestScore < v) {
      setBestScore(v);
    }
  }

  return (
    <div className="App">
      <div id="header">
        Test Your Memory
      </div>
      <div id="desc">Don't click on the same card twice</div>
      <div id="scoreBoard">
        <div id="currentScore">
          Score: {scoreBoard}
        </div>
        <div id="bestScore">
          Best Score: {bestScore}
        </div>
      </div>
      <Cards 
        increaseScore={increaseScore}
        resetScore={resetScore}
        checkBestScore={checkBestScore}
      />
    </div>
  );
}

export default App;
