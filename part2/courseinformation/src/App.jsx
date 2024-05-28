const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ sum }) => <p>Number of exercises {sum.reduce((acc, currVal) => acc + currVal, 0)}</p>

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>;

const Content = ({ parts }) => {
  return (
    <>
      {parts.map(part => <Part part={part} />)}
    </>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total sum={course.parts.map(part => part.exercises)} />
    </div>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack Application Development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      },
    ]
  };

  return (
    <Course course={course} />
  );
};

export default App;
