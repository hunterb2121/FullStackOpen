import { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>;

const Display = ({value}) => <span>{value}</span>;

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increase = (whatIncreasing) => {
    console.log(`Increasing: ${whatIncreasing}`);
    if (whatIncreasing == "g") {
      setGood(good + 1);
    } else if (whatIncreasing == "n") {
      setNeutral(neutral + 1);
    } else if (whatIncreasing == "b") {
      setBad(bad + 1);
    }
  };

  const total = [good, neutral, bad].reduce((acc, currValue) => acc + currValue, 0);

  const averageFeedback = () => total !== 0 ? ((good * 1) + (neutral * 0) + (bad * -1)) / total : 0;

  const positiveFeedback = () => total !== 0 ? (good / total * 100) : 0;

  return (
    <div>
      <h1>Give Feedback</h1>

      <Button handleClick={() => {increase("g")}} text="Good" />
      <Button handleClick={() => {increase("n")}} text="Neutral" />
      <Button handleClick={() => {increase("b")}} text="Bad" />

      <h2>Statistics</h2>
      <p>Good: <Display value={good} /></p>
      <p>Neutral: <Display value={neutral} /></p>
      <p>Bad: <Display value={bad} /></p>
      <p>Total: <Display value={total} /></p>
      <p>Average: <Display value={averageFeedback()} /></p>
      <p>Positive: <Display value={positiveFeedback()} />%</p>
    </div>
  );
};

export default App;
