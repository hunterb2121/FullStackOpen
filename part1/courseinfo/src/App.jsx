const Header = props => {
  console.log(props.course.name);
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  );
};

const Part = props => {
  return (
    <div>
      <p>{props.name} {props.exercise}</p>
    </div>
  );
};

const Content = props => {
  const name1 = props.course.parts[0].name;
  const name2 = props.course.parts[1].name;
  const name3 = props.course.parts[2].name;

  const exercises1 = props.course.parts[0].exercises;
  const exercises2 = props.course.parts[1].exercises;
  const exercises3 = props.course.parts[2].exercises; 
  
  return (
    <div>
      <Part name={name1} exercise={exercises1} />
      <Part name={name2} exercise={exercises2} />
      <Part name={name3} exercise={exercises3} />
    </div>
  );
};

const Total = props => {
  const exercises1 = props.course.parts[0].exercises;
  const exercises2 = props.course.parts[1].exercises;
  const exercises3 = props.course.parts[2].exercises;
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
  const course = {
    name: 'Half Stack application development',
    parts: [
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
    ]
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
