import { useState } from "react";

function NumberGuessingGame() {
  // Random number between 1 and 100
  const [randomNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");


  const checkGuess = () => {
    const userGuess = Number(guess);

    if (!userGuess || userGuess < 1 || userGuess > 100) {
      setMessage("Please enter a number between 1 and 100");
      return;
    }

    if (userGuess > randomNumber) {
      setMessage("Too High ❌");
    } else if (userGuess < randomNumber) {
      setMessage("Too Low ⬇️");
    } else {
      setMessage("Correct! 🎉");
    }
  };
const styles = {
  container: {
    maxWidth: "400px",
    margin: "60px auto",
    padding: "20px",
    textAlign: "center",
    borderRadius: "8px",
    background: "#f5f5f5",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    fontSize: "16px",
  },
  button: {
    padding: "10px 16px",
    cursor: "pointer",
    fontSize: "16px",
  },
  message: {
    marginTop: "15px",
    fontWeight: "bold",
    fontSize: "18px",
  },
};

  return (
    <div style={styles.container}>
      <h2>Number Guessing Game</h2>
      <p>Guess a number between 1 and 100</p>

      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess"
        style={styles.input}
      />

      <button onClick={checkGuess} style={styles.button}>
        Check
      </button>

      <p style={styles.message}>{message}</p>
    </div>
  );
}

export default NumberGuessingGame;
