const Header = props => {
  console.log(props.course);
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Part = props => {
  console.log(props.part);
  console.log(props.part.exercises);

  return (
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
  );
};

const Content = props => {
  const name1 = props.parts[0].name;
  const name2 = props.parts[1].name;
  const name3 = props.parts[2].name;

  const exercises1 = props.parts[0].exercises;
  const exercises2 = props.parts[1].exercises;
  const exercises3 = props.parts[2].exercises; 
  
  return (
    <div>
      <Part part={name1} exercise={exercises1} />
      <Part part={name2} exercise={exercises2} />
      <Part part={name3} exercise={exercises3} />
    </div>
  );
};

const Total = props => {
  const exercises1 = props.parts[0].exercises;
  const exercises2 = props.parts[1].exercises;
  const exercises3 = props.parts[2].exercises;
  console.log(exercises1);
  console.log(exercises2);
  console.log(exercises3);

  return (
    <div>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
};

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
