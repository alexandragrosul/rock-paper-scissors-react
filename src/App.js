import "./App.css";
import { useState } from "react";
import { Button, Container, Grid, Skeleton } from "@mui/material";

function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerChoice, setComputerChoice] = useState(null);
  const [computerScore, setComputerScore] = useState(0);
  const [gameResult, setGameResult] = useState(null);
  const game = (p1) => {
    const options = ["rock", "paper", "scissors"];
    const compChoice = options[Math.floor(Math.random() * options.length)];
    setComputerChoice(compChoice);
    setPlayerChoice(p1);
    if (p1 === compChoice) {
      setGameResult("Equal");
    } else if (
      (p1 === options[0] && compChoice === options[1]) ||
      (p1 === options[1] && compChoice === options[2]) ||
      (p1 === options[2] && compChoice === options[0])
    ) {
      setComputerScore(computerScore + 1);
      setGameResult("Computer Win!");
    } else {
      setPlayerScore(playerScore + 1);
      setGameResult("Player Win");
    }
  };
  return (
    <div className="App">
      <Container maxWidth="sm">
        <div className="gameStatus">
          <div>
            <h1>Player</h1>
            {playerChoice ? (
              <img src={playerChoice + ".png"} height="100" />
            ) : (
              <Skeleton variant="rectangular" width={100} height={100} />
            )}
            <h3>Score: {playerScore}</h3>
          </div>
          <div>
            <h1>Computer</h1>
            {computerChoice ? (
              <img src={computerChoice + ".png"} height="100" />
            ) : (
              <Skeleton variant="rectangular" width={100} height={100} />
            )}

            <h3>Score: {computerScore}</h3>
          </div>
        </div>
        <h1>{gameResult}</h1>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Button variant="contained" onClick={() => game("rock")}>
              Rock
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" onClick={() => game("paper")}>
              Paper
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" onClick={() => game("scissors")}>
              scissors
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
