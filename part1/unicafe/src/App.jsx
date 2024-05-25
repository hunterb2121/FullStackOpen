import { useState } from 'react'

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>;

const Display = (props) => <span>{props.value}</span>;

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  const { g, n, b } = props;

  const total = [g, n, b].reduce((acc, currValue) => acc + currValue, 0);

  const averageFeedback = () => total !== 0 ? (((g * 1) + (n * 0) + (b * -1)) / total).toFixed(2) : 0;
  const positiveFeedback = () => total !== 0 ? (g / total * 100).toFixed(2) : 0;

  if (total !== 0) {
    return (
      <table>
        <tbody>
          <StatisticLine text="Good" value={g} />
          <StatisticLine text="Neutral" value={n} />
          <StatisticLine text="Bad" value={b} />
          <StatisticLine text="Total" value={total} />
          <StatisticLine text="Average" value={averageFeedback()} />
          <StatisticLine text="Positive" value={`${positiveFeedback()}%`} />
        </tbody>
      </table>
    );
  } else {
    return (
      <div>
        <p>No Feedback Given</p>
      </div>
    );
  }
};

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

      <Statistics g={good} b={bad} n={neutral} />
    </div>
  );
};

export default App;
