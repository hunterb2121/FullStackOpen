import { useState } from 'react'

const Button = props => <button onClick={props.handleClick}>{props.text}</button>;

const Display = props => <p>{props.text}</p>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];
   
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({
    0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0
  });

  const increaseVote = () => {
    const newVotes = {...votes};

    newVotes[selected]++;
    setVotes(newVotes);
  };

  const findHighest = () => {
    let highest = 0;
    for (const vote in votes) {
      if (votes[vote] > votes[highest]) {
        highest = vote;
      }
    }
    return highest;
  };

  const randomSelection = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  return (
    <div>
      <h2>Current Anecdote</h2>
      <Display text={anecdotes[selected]} />
      <Display text={`Votes: ${votes[selected]}`} />
      <Button handleClick={increaseVote} text="Vote" />
      <Button handleClick={randomSelection} text="Next Anecdote" />
      <h2>Anecdote of the Day</h2>
      <Display text={anecdotes[findHighest()]} />
    </div>
  );
};

export default App;
