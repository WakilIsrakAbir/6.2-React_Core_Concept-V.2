import { useState } from "react"

export default function Batsman() {
    const [runs, setRuns] = useState(0);

    const [sixes, setSixes] = useState(0);
    const [single, setSingle] = useState(0);
    const [four, setFour] = useState(0);

    const handleSingle = () => {
        const updateRuns = runs + 1;
        const updateSingle = single + 1;
        setSingle(updateSingle);
        setRuns(updateRuns);
    }
    const handleFour = () => {
      const updateRuns = runs + 4;
      const upadteFour = four + 1;
      setFour(upadteFour);
      setRuns(updateRuns);
    };
    const handleSix = () => {
      const updateRuns = runs + 6;
      const updatedSixes = sixes + 1;
      setSixes(updatedSixes);
      setRuns(updateRuns);
    };
    return(
        <div>
            <h3>Player: Bangla Batsman</h3>
            <p>Six: {sixes} </p>
            <p>Four {four} </p>
            <p>Single: {single} </p>
            {
                runs >= 50 && <p>Your Score: 50</p>
            }
            <h1>Score: {runs} </h1>
            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}