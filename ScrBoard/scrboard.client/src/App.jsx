import { useRef, useState } from "react";
import "./App.css";
import { sortScores } from "./utils/scoreUtils";

function App() {
    const [playerName, setPlayerName] = useState("");
    const [status, setStatus] = useState("idle");
    const [message, setMessage] = useState("Press Start when you are ready.");
    const [reactionTime, setReactionTime] = useState(null);
    const [scores, setScores] = useState([]);

    const startTime = useRef(0);
    const timer = useRef(null);

    function startTest() {
        if (playerName.trim() === "") {
            setMessage("Enter your name first.");
            return;
        }

        clearTimeout(timer.current);

        setStatus("waiting");
        setReactionTime(null);
        setMessage("Wait for green...");

        timer.current = setTimeout(() => {
            startTime.current = Date.now();
            setStatus("ready");
            setMessage("Click now!");
        }, 2000);
    }

    function clickTestArea() {
        if (status === "idle") {
            setMessage("Press Start first.");
            return;
        }

        if (status === "waiting") {
            clearTimeout(timer.current);
            setStatus("idle");
            setMessage("Too soon! Press Start to try again.");
            return;
        }

        if (status === "ready") {
            const result = Date.now() - startTime.current;

            setReactionTime(result);
            setStatus("finished");
            setMessage(`Your reaction time was ${result} milliseconds.`);
            return;
        }

        if (status === "finished") {
            setMessage("Add your score or press Reset to try again.");
            return;
        }

        if (status === "submitted") {
            setMessage("Press Reset to restart.");
        }
    }

    function addScore() {
        if (reactionTime === null) {
            setMessage("Complete the test before adding a score.");
            return;
        }

        const newScore = {
            id: Date.now(),
            name: playerName.trim(),
            time: reactionTime,
        };

        const updatedScores = [...scores, newScore];

        setScores(sortScores(updatedScores));

        setStatus("submitted");
        setMessage("Score added. Press Reset to restart.");
    }

    function resetTest() {
        clearTimeout(timer.current);

        setStatus("idle");
        setReactionTime(null);
        setMessage("Press Start when you are ready.");
    }


    return (
        <div className="app">
            <h1>Reaction Scoreboard</h1>

            <p>Test your reaction speed.</p>

            <div className="controls">
                <label>
                    Player Name:
                    <input
                        type="text"
                        value={playerName}
                        onChange={(event) => setPlayerName(event.target.value)}
                    />
                </label>
            </div>

            

            <button
                className={`test-area ${status}`}
                type="button"
                onClick={clickTestArea}
            >
                {message}
            </button>

            <div className="buttons">
                <button
                    type="button"
                    onClick={startTest}
                    disabled={status === "waiting" || status === "ready"}
                >
                    Start
                </button>

                <button type="button" onClick={resetTest}>
                    Reset
                </button>

                <button type="button" onClick={addScore}>
                    Add Score
                </button>
            </div>

            <h2>Scoreboard</h2>

            {scores.length === 0 ? (
                <p>No scores have been added.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Player</th>
                            <th>Time</th>
                        </tr>
                    </thead>

                    <tbody>
                        {scores.map((score, index) => (
                            <tr key={score.id}>
                                <td>{index + 1}</td>
                                <td>{score.name}</td>
                                <td>{score.time} ms</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default App;