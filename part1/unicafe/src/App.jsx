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
    </div>
  );
};

export default App;
